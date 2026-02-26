// Risikobank håndtering med modal

let risikobank = null;
let currentRiskIdForBank = null;

// Last risikobanken
async function loadRisikobank() {
    if (risikobank) return risikobank;

    try {
        const response = await fetch('data/risikobank.json');
        risikobank = await response.json();
        return risikobank;
    } catch (error) {
        console.error('Kunne ikke laste risikobank:', error);
        return { banker: [] };
    }
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

    // Re-render
    renderRisksTable();
    renderHeatmap();
    renderKITTable();
}
