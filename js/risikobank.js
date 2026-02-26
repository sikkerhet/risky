// Risikobank håndtering med modal

let risikobank = null;
let currentRiskIdForBank = null;

const CUSTOM_BANKS_KEY = 'ros_custom_banks';

// Last risikobanken fra flere filer
async function loadRisikobank() {
    if (risikobank) return risikobank;

    try {
        // Last manifest
        const manifestResp = await fetch('data/risikobanker/manifest.json');
        const manifest = await manifestResp.json();

        // Last alle aktive banker
        const bankerPromises = manifest.banker
            .filter(b => b.aktiv)
            .map(async (bankDef) => {
                try {
                    const resp = await fetch(`data/risikobanker/${bankDef.fil}`);
                    return await resp.json();
                } catch (err) {
                    console.error(`Kunne ikke laste ${bankDef.fil}:`, err);
                    return null;
                }
            });

        const banker = (await Promise.all(bankerPromises)).filter(b => b !== null);

        // Last custom banker fra localStorage
        const customBanks = getCustomBanks();
        banker.push(...customBanks);

        risikobank = { banker };
        return risikobank;
    } catch (error) {
        console.error('Kunne ikke laste risikobank:', error);
        return { banker: [] };
    }
}

// Custom bank management
function getCustomBanks() {
    const stored = localStorage.getItem(CUSTOM_BANKS_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveCustomBank(bank) {
    const banks = getCustomBanks();

    // Sjekk om bank med samme ID finnes
    const existingIndex = banks.findIndex(b => b.id === bank.id);
    if (existingIndex >= 0) {
        banks[existingIndex] = bank;
    } else {
        banks.push(bank);
    }

    localStorage.setItem(CUSTOM_BANKS_KEY, JSON.stringify(banks));

    // Reload risikobank
    risikobank = null;
    return loadRisikobank();
}

function deleteCustomBank(bankId) {
    const banks = getCustomBanks();
    const filtered = banks.filter(b => b.id !== bankId);
    localStorage.setItem(CUSTOM_BANKS_KEY, JSON.stringify(filtered));

    // Reload risikobank
    risikobank = null;
    return loadRisikobank();
}

// Last opp risikobank fra fil
async function uploadCustomBank(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = async (e) => {
            try {
                const bank = JSON.parse(e.target.result);

                // Valider struktur
                if (!bank.id || !bank.navn || !bank.kategorier) {
                    reject(new Error('Ugyldig bankstruktur. Må ha: id, navn, kategorier'));
                    return;
                }

                // Merk som custom
                bank.custom = true;

                await saveCustomBank(bank);
                resolve(bank);
            } catch (err) {
                reject(new Error('Kunne ikke parse JSON: ' + err.message));
            }
        };

        reader.onerror = () => reject(new Error('Kunne ikke lese fil'));
        reader.readAsText(file);
    });
}

// Åpne risikobank modal
function openRisikobankModal(riskId) {
    currentRiskIdForBank = riskId;
    const modal = document.getElementById('risikobankModal');
    modal.classList.add('active');

    // Render første bank som default
    if (risikobank && risikobank.banker.length > 0) {
        renderBankTabs();
        selectBank(risikobank.banker[0].id);
    }
}

// Lukk modal
function closeRisikobankModal() {
    const modal = document.getElementById('risikobankModal');
    modal.classList.remove('active');
    currentRiskIdForBank = null;
}

// Setup modal - kall denne ved page load
function setupRisikobankModal() {
    const modal = document.getElementById('risikobankModal');
    if (!modal) return;

    // Lukk ved klikk på overlay (men ikke inne i modal-content)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeRisikobankModal();
        }
    });

    // ESC-tast for å lukke
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeRisikobankModal();
        }
    });
}

// Render bank-tabs
function renderBankTabs() {
    const container = document.getElementById('bankSelector');
    container.textContent = '';

    risikobank.banker.forEach((bank, index) => {
        const tab = document.createElement('button');
        tab.className = 'bank-tab';
        if (index === 0) tab.classList.add('active');
        tab.textContent = bank.navn;
        tab.onclick = () => selectBank(bank.id);
        container.appendChild(tab);
    });
}

// Velg bank
function selectBank(bankId) {
    // Oppdater aktiv tab
    document.querySelectorAll('.bank-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent === risikobank.banker.find(b => b.id === bankId).navn) {
            tab.classList.add('active');
        }
    });

    const bank = risikobank.banker.find(b => b.id === bankId);
    if (!bank) return;

    // Render kategorier
    renderKategorier(bank.kategorier);

    // Velg første kategori automatisk
    if (bank.kategorier.length > 0) {
        selectKategori(bank.kategorier[0].id, bank.kategorier);
    }
}

// Render kategorier
function renderKategorier(kategorier) {
    const container = document.getElementById('kategoriSelector');
    container.textContent = '';

    kategorier.forEach((kat, index) => {
        const chip = document.createElement('button');
        chip.className = 'kategori-chip';
        if (index === 0) chip.classList.add('active');
        chip.textContent = kat.navn;
        chip.onclick = () => selectKategori(kat.id, kategorier);
        container.appendChild(chip);
    });
}

// Velg kategori
function selectKategori(kategoriId, kategorier) {
    // Oppdater aktiv chip
    document.querySelectorAll('.kategori-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    event.target.classList.add('active');

    const kategori = kategorier.find(k => k.id === kategoriId);
    if (!kategori) return;

    // Render risikoer
    renderRisikoer(kategori.risikoer);
}

// Render risikoer
function renderRisikoer(risikoer) {
    const container = document.getElementById('risikoListe');
    container.textContent = '';

    if (risikoer.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-state-modal';
        empty.textContent = 'Ingen risikoer i denne kategorien';
        container.appendChild(empty);
        return;
    }

    risikoer.forEach(risiko => {
        const card = createRisikoCard(risiko);
        container.appendChild(card);
    });
}

// Opprett risiko-kort
function createRisikoCard(risiko) {
    const card = document.createElement('div');
    card.className = 'risiko-card';

    const title = document.createElement('h4');
    title.textContent = risiko.risikoelement;
    card.appendChild(title);

    const saarbarhet = document.createElement('div');
    saarbarhet.className = 'risiko-saarbarhet';
    saarbarhet.textContent = risiko.saarbarhet;
    card.appendChild(saarbarhet);

    const meta = document.createElement('div');
    meta.className = 'risiko-meta';

    // KIT meta
    const kit = document.createElement('span');
    kit.className = 'risiko-meta-item';
    const kLabel = document.createElement('strong');
    kLabel.textContent = 'K:';
    kit.appendChild(kLabel);
    kit.appendChild(document.createTextNode(' ' + risiko.K + ' '));
    const iLabel = document.createElement('strong');
    iLabel.textContent = 'I:';
    kit.appendChild(iLabel);
    kit.appendChild(document.createTextNode(' ' + risiko.I + ' '));
    const tLabel = document.createElement('strong');
    tLabel.textContent = 'T:';
    kit.appendChild(tLabel);
    kit.appendChild(document.createTextNode(' ' + risiko.T));
    meta.appendChild(kit);

    // Sannsynlighet meta
    const sann = document.createElement('span');
    sann.className = 'risiko-meta-item';
    const sannLabel = document.createElement('strong');
    sannLabel.textContent = 'Sannsynlighet:';
    sann.appendChild(sannLabel);
    sann.appendChild(document.createTextNode(' ' + risiko.sannsynlighet));
    meta.appendChild(sann);

    // Risikonivå meta
    const rn = calculateRisikonivaa(calculateKonsekvens(risiko.K, risiko.I, risiko.T), risiko.sannsynlighet);
    const rnSpan = document.createElement('span');
    rnSpan.className = 'risiko-meta-item';
    const rnLabel = document.createElement('strong');
    rnLabel.textContent = 'RN:';
    rnSpan.appendChild(rnLabel);
    rnSpan.appendChild(document.createTextNode(' ' + rn));
    rnSpan.style.color = getRiskColor(rn);
    rnSpan.style.fontWeight = 'bold';
    meta.appendChild(rnSpan);

    card.appendChild(meta);

    // Klikk for å velge
    card.onclick = () => {
        selectRisikoFromBank(risiko);
        closeRisikobankModal();
    };

    return card;
}

// Velg risiko fra bank og fyll ut
function selectRisikoFromBank(bankRisiko) {
    if (!currentRiskIdForBank) return;

    const risk = currentAnalysis.risikoer.find(r => r.id === currentRiskIdForBank);
    if (!risk) return;

    // Lagre ID for scrolling senere
    const riskId = risk.id;

    // Fyll ut alle felt fra risikobanken
    risk.risikoelement = bankRisiko.risikoelement;
    risk.saarbarhet = bankRisiko.saarbarhet;
    risk.eksisterendeBeskyttelse = bankRisiko.eksisterendeBeskyttelse;
    risk.eksisterendeKontroll = bankRisiko.eksisterendeKontroll;
    risk.K = bankRisiko.K;
    risk.I = bankRisiko.I;
    risk.T = bankRisiko.T;
    risk.sannsynlighet = bankRisiko.sannsynlighet;
    risk.foreslaatteTiltak = bankRisiko.foreslaatteTiltak;

    // Beregn konsekvens og risikonivå
    risk.konsekvens = calculateKonsekvens(risk.K, risk.I, risk.T);
    risk.risikonivaa = calculateRisikonivaa(risk.konsekvens, risk.sannsynlighet);

    // Oppdater analyse
    updateAnalysis(currentAnalysisId, { risikoer: currentAnalysis.risikoer });

    // Blur active element to prevent browser from trying to keep it in view
    if (document.activeElement && document.activeElement !== document.body) {
        document.activeElement.blur();
    }

    // Scroll til ankeret på slutten før vi oppdaterer
    const anchor = document.getElementById('tableAnchor');
    if (anchor) {
        anchor.scrollIntoView({ behavior: 'instant', block: 'end' });
    }

    // Finn den eksisterende raden og oppdater den direkte (ikke re-render hele tabellen)
    const existingRow = document.querySelector(`tr[data-risk-id="${riskId}"]`);
    if (existingRow) {
        // Oppdater feltene direkte
        const textareas = existingRow.querySelectorAll('textarea');
        if (textareas[0]) textareas[0].value = risk.risikoelement;
        if (textareas[1]) textareas[1].value = risk.saarbarhet;
        if (textareas[2]) textareas[2].value = risk.eksisterendeBeskyttelse;
        if (textareas[3]) textareas[3].value = risk.eksisterendeKontroll;
        if (textareas[4]) textareas[4].value = risk.foreslaatteTiltak;

        // Oppdater KIT dropdowns
        const selects = existingRow.querySelectorAll('select');
        if (selects[0]) selects[0].value = risk.K;
        if (selects[1]) selects[1].value = risk.I;
        if (selects[2]) selects[2].value = risk.T;
        if (selects[3]) selects[3].value = risk.sannsynlighet;

        // Oppdater konsekvens og risikonivå celler
        const konsCell = existingRow.querySelector('td:nth-child(10)');
        const rnCell = existingRow.querySelector('td:nth-child(11)');
        if (konsCell) {
            konsCell.textContent = risk.konsekvens;
            konsCell.style.fontWeight = 'bold';
        }
        if (rnCell) {
            rnCell.textContent = risk.risikonivaa;
            rnCell.style.color = getRiskColor(risk.risikonivaa);
            rnCell.style.fontWeight = 'bold';
        }

        // Oppdater kun heatmap, statistikk og KIT (ikke hele tabellen)
        renderHeatmap();
        renderStatistics();
        renderKITTable();

        // Scroll til og highlight den oppdaterte risikoen
        existingRow.scrollIntoView({ behavior: 'instant', block: 'center' });

        // Highlight rad i et par sekunder
        existingRow.style.backgroundColor = '#e8f5e9';
        setTimeout(() => {
            existingRow.style.backgroundColor = '';
        }, 2000);
    } else {
        // Fallback: re-render alt hvis raden ikke finnes
        renderRisksTable();
        renderHeatmap();
        renderStatistics();
        renderKITTable();

        requestAnimationFrame(() => {
            const updatedRow = document.querySelector(`tr[data-risk-id="${riskId}"]`);
            if (updatedRow) {
                updatedRow.scrollIntoView({ behavior: 'instant', block: 'center' });
                updatedRow.style.backgroundColor = '#e8f5e9';
                setTimeout(() => {
                    updatedRow.style.backgroundColor = '';
                }, 2000);
            }
        });
    }
}

// Eksponér custom bank-funksjoner globalt for bruk i editor.html
if (typeof window !== 'undefined') {
    window.getCustomBanks = getCustomBanks;
    window.saveCustomBank = saveCustomBank;
    window.deleteCustomBank = deleteCustomBank;
    window.uploadCustomBank = uploadCustomBank;
}
