// Risikobank håndtering med modal

let risikobank = null;
let currentRiskIdForBank = null;

const CUSTOM_BANKS_KEY = 'ros_custom_banks';
const DEFAULT_BANK_FILES = [
    'generell.json',
    'sky.json',
    'onprem.json',
    'persondata.json',
    'ai-tjenester.json',
    'saas.json',
    'governance.json',
    'personell.json',
    'kontinuitet.json',
    'integrasjoner.json',
    'devops-cicd.json',
    'supply-chain.json',
    'iot-embedded.json',
    'fysisk-sikkerhet.json'
];

const BANK_NAME_OVERRIDES = {
    generell: 'General IT Service',
    sky: 'Cloud Service',
    skytjeneste: 'Cloud Service',
    onprem: 'On-premises Service',
    persondata: 'Personal Data',
    'ai-tjenester': 'AI Services',
    saas: 'SaaS',
    governance: 'Governance',
    personell: 'Personnel',
    kontinuitet: 'Continuity',
    integrasjoner: 'Integrations',
    'devops-cicd': 'DevOps and CI/CD',
    'supply-chain': 'Supply Chain',
    'iot-embedded': 'IoT and Embedded',
    'fysisk-sikkerhet': 'Physical Security'
};

const CATEGORY_NAME_OVERRIDES = {
    tilgangsstyring: 'Access Management',
    'sky-tilgang': 'Cloud Access Management',
    'sky-nettverk': 'Cloud Networking',
    'sky-data': 'Cloud Data',
    'sky-kostnad': 'Cloud Cost Management',
    'sky-compliance': 'Cloud Compliance',
    leverandorstyring: 'Vendor Management',
    'data-deling': 'Data Sharing',
    'integrasjoner-api': 'Integrations and APIs',
    'open-source': 'Open Source',
    'vendor-offboarding': 'Vendor Offboarding',
    'ledelse-styring': 'Leadership and Governance',
    'roller-ansvar': 'Roles and Responsibilities',
    'policy-compliance': 'Policies and Compliance',
    'audit-tilsyn': 'Audit and Oversight',
    'dokumentasjon-kunnskap': 'Documentation and Knowledge',
    'saas-multi-tenancy': 'SaaS Multi-tenancy',
    'saas-provider': 'SaaS Provider',
    'saas-consumer': 'SaaS Consumer',
    'saas-data-governance': 'SaaS Data Governance',
    'saas-integration': 'SaaS Integration',
    'saas-availability': 'SaaS Availability',
    'device-security': 'Device Security',
    firmware: 'Firmware',
    'ot-scada': 'OT and SCADA',
    'iot-backend': 'IoT Backend',
    'supply-chain-iot': 'IoT Supply Chain',
    'edge-computing': 'Edge Computing',
    'synkron-integrasjon': 'Synchronous Integration',
    'asynkron-meldingskoer': 'Asynchronous Message Queues',
    'data-pipelines': 'Data Pipelines',
    integrasjonsmonstre: 'Integration Anti-patterns',
    'resiliens-feilhandtering': 'Resilience and Error Handling',
    'middleware-platform': 'Middleware Platform',
    adgangskontroll: 'Access Control',
    nettverk: 'Network',
    applikasjon: 'Application',
    logging: 'Logging',
    overvaking: 'Monitoring',
    backup: 'Backup',
    'backup-restore': 'Backup and Restore',
    'lokal-server': 'Local Servers',
    'lokal-nettverk': 'Local Network',
    'lokal-fysisk': 'Local Physical Security',
    'lokal-drift': 'Local Operations',
    dokumenthåndtering: 'Document Management',
    'gdpr-grunnlag': 'GDPR Legal Basis',
    'gdpr-rettigheter': 'GDPR Rights',
    'gdpr-sikkerhet': 'GDPR Security',
    'gdpr-deling': 'GDPR Data Sharing',
    'llm-sikkerhet': 'LLM Security',
    'ml-model-sikkerhet': 'ML Model Security',
    'ai-data-privacy': 'AI Data Privacy',
    'ai-bias-fairness': 'AI Bias and Fairness',
    'ai-governance': 'AI Governance',
    'agentic-ai': 'Agentic AI',
    'fjernarbeid-byod': 'Remote Work and BYOD',
    'hr-livssyklus': 'HR Lifecycle',
    'awareness-trening': 'Awareness Training',
    'insider-threat': 'Insider Threat',
    'fysisk-personell': 'Physical Personnel Security',
    'bcp-planlegging': 'Business Continuity Planning',
    krisehandtering: 'Crisis Management',
    'incident-response': 'Incident Response',
    'testing-oving': 'Testing and Exercises',
    'remote-sites': 'Remote Sites',
    'leverandor-resiliens': 'Vendor Resilience',
    'container-security': 'Container Security',
    'dependency-management': 'Dependency Management',
    'pipeline-sikkerhet': 'Pipeline Security',
    'kildekode-sikkerhet': 'Source Code Security',
    'iac-config': 'Infrastructure as Code Configuration',
    deployment: 'Deployment',
    'teknisk-drift': 'Technical Operations',
    inngangsportaler: 'Entry Points',
    utstyrssikring: 'Equipment Security',
    miljokontroll: 'Environmental Controls',
    'menneskelig-faktor': 'Human Factors',
    organisatorisk: 'Organizational'
};

const ID_TOKEN_TRANSLATIONS = {
    generell: 'General',
    sky: 'Cloud',
    skytjeneste: 'Cloud Service',
    tilgang: 'Access',
    tilgangsstyring: 'Access Management',
    nettverk: 'Network',
    kostnad: 'Cost',
    persondata: 'Personal Data',
    personell: 'Personnel',
    kontinuitet: 'Continuity',
    integrasjoner: 'Integrations',
    fysisk: 'Physical',
    sikkerhet: 'Security',
    ledelse: 'Leadership',
    styring: 'Governance',
    roller: 'Roles',
    ansvar: 'Responsibilities',
    tilsyn: 'Oversight',
    dokumentasjon: 'Documentation',
    kunnskap: 'Knowledge',
    leverandor: 'Vendor',
    leverandorstyring: 'Vendor Management',
    deling: 'Sharing',
    synkron: 'Synchronous',
    asynkron: 'Asynchronous',
    meldingskoer: 'Message Queues',
    resiliens: 'Resilience',
    feilhandtering: 'Error Handling',
    lokal: 'Local',
    drift: 'Operations',
    applikasjon: 'Application',
    overvaking: 'Monitoring',
    dokumenthåndtering: 'Document Management',
    grunnlag: 'Legal Basis',
    rettigheter: 'Rights',
    trening: 'Training',
    fjernarbeid: 'Remote Work',
    menneskelig: 'Human',
    faktor: 'Factors',
    organisatorisk: 'Organizational',
    utstyrssikring: 'Equipment Security',
    miljokontroll: 'Environmental Controls',
    krisehandtering: 'Crisis Management',
    kildekode: 'Source Code',
    testing: 'Testing',
    oving: 'Exercises'
};

function toTitleCase(text) {
    return text
        .split(' ')
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function buildEnglishLabelFromId(id, overrides = {}) {
    if (!id) return '';
    if (overrides[id]) return overrides[id];

    const tokens = id.split('-').map((token) => ID_TOKEN_TRANSLATIONS[token] || token.toUpperCase());
    return toTitleCase(tokens.join(' '));
}

function normalizeDisplayName(value, id, overrides = {}) {
    const normalized = normalizeLocalizedText(value, id);
    const englishLabel = buildEnglishLabelFromId(id, overrides);

    if (!normalized.en || normalized.en === normalized.no) {
        normalized.en = englishLabel || normalized.en || normalized.no;
    }

    if (!normalized.no) {
        normalized.no = id;
    }

    return normalized;
}

function normalizeLocalizedText(value, fallback = '') {
    if (value && typeof value === 'object') {
        return {
            no: value.no || value.nb || value.nn || value.en || fallback,
            en: value.en || value.no || fallback
        };
    }

    return {
        no: value || fallback,
        en: value || fallback
    };
}

function normalizeBankRisk(bankRisk, index = 0) {
    const normalized = normalizeRisk(bankRisk, index);
    normalized.riskElement = normalizeLocalizedText(bankRisk.riskElement || bankRisk.risikoelement, normalized.riskElement);
    normalized.vulnerability = normalizeLocalizedText(bankRisk.vulnerability || bankRisk.saarbarhet, normalized.vulnerability);
    normalized.existingProtection = normalizeLocalizedText(bankRisk.existingProtection || bankRisk.eksisterendeBeskyttelse, normalized.existingProtection);
    normalized.existingControl = normalizeLocalizedText(bankRisk.existingControl || bankRisk.eksisterendeKontroll, normalized.existingControl);
    normalized.proposedMeasures = normalizeLocalizedText(bankRisk.proposedMeasures || bankRisk.foreslaatteTiltak, normalized.proposedMeasures);
    return normalized;
}

function normalizeBank(bank) {
    return {
        ...bank,
        name: normalizeDisplayName(bank.name || bank.navn, bank.id, BANK_NAME_OVERRIDES),
        description: normalizeLocalizedText(bank.description || bank.beskrivelse, ''),
        categories: (bank.categories || bank.kategorier || []).map((category) => ({
            ...category,
            name: normalizeDisplayName(category.name || category.navn, category.id, CATEGORY_NAME_OVERRIDES),
            risks: (category.risks || category.risikoer || []).map(normalizeBankRisk)
        }))
    };
}

function isExampleBank(bank) {
    return bank && bank.id === 'min-bank';
}

// Last risikobanken fra flere filer
async function loadRisikobank() {
    if (risikobank && Array.isArray(risikobank.banks) && risikobank.banks.length > 0) {
        return risikobank;
    }

    if (window.location.protocol === 'file:' && Array.isArray(window.EMBEDDED_RISK_BANKS)) {
        const banks = window.EMBEDDED_RISK_BANKS
            .filter((bank) => !isExampleBank(bank))
            .map(normalizeBank);
        try {
            const customBanks = getCustomBanks().map(normalizeBank);
            banks.push(...customBanks);
        } catch (customBankError) {
            console.error('Could not load custom banks:', customBankError);
        }
        risikobank = { banks };
        return risikobank;
    }

    try {
        let bankFiles = DEFAULT_BANK_FILES;

        try {
            const manifestResp = await fetch('data/risikobanker/manifest.json');
            if (manifestResp.ok) {
                const manifest = await manifestResp.json();
                if (Array.isArray(manifest.banker)) {
                    bankFiles = manifest.banker
                        .filter((bankDef) => bankDef.aktiv)
                        .map((bankDef) => bankDef.fil);
                }
            }
        } catch (manifestError) {
            console.warn('Could not load manifest, using default bank list:', manifestError);
        }

        const bankPromises = bankFiles.map(async (fileName) => {
                try {
                    const resp = await fetch(`data/risikobanker/${fileName}`);
                    if (!resp.ok) {
                        throw new Error(`HTTP ${resp.status}`);
                    }
                    return normalizeBank(await resp.json());
                } catch (err) {
                    console.error(`Could not load risk bank ${fileName}:`, err);
                    return null;
                }
            });

        const banks = (await Promise.all(bankPromises)).filter(b => b !== null && !isExampleBank(b));

        try {
            const customBanks = getCustomBanks().map(normalizeBank);
            banks.push(...customBanks);
        } catch (customBankError) {
            console.error('Could not load custom banks:', customBankError);
        }

        risikobank = { banks };
        return risikobank;
    } catch (error) {
        console.error('Kunne ikke laste risikobank:', error);

        if (Array.isArray(window.EMBEDDED_RISK_BANKS)) {
            const banks = window.EMBEDDED_RISK_BANKS
                .filter((bank) => !isExampleBank(bank))
                .map(normalizeBank);
            risikobank = { banks };
            return risikobank;
        }

        return { banks: [] };
    }
}

// Custom bank management
function getCustomBanks() {
    const stored = localStorage.getItem(CUSTOM_BANKS_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveCustomBank(bank) {
    const normalizedBank = normalizeBank(bank);
    const banks = getCustomBanks();

    // Sjekk om bank med samme ID finnes
    const existingIndex = banks.findIndex(b => b.id === normalizedBank.id);
    if (existingIndex >= 0) {
        banks[existingIndex] = normalizedBank;
    } else {
        banks.push(normalizedBank);
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
                if (!bank.id || !(bank.navn || bank.name) || !(bank.kategorier || bank.categories)) {
                    reject(new Error('Ugyldig bankstruktur. Må ha: id, navn/name, kategorier/categories'));
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
async function openRisikobankModal(riskId) {
    currentRiskIdForBank = riskId;
    const modal = document.getElementById('risikobankModal');
    modal.classList.add('active');

    if (!risikobank || !Array.isArray(risikobank.banks) || risikobank.banks.length === 0) {
        risikobank = null;
        await loadRisikobank();
    }

    // Render første bank som default
    if (risikobank && risikobank.banks.length > 0) {
        renderBankTabs();
        selectBank(risikobank.banks[0].id);
    } else {
        const list = document.getElementById('risikoListe');
        const bankSelector = document.getElementById('bankSelector');
        const categorySelector = document.getElementById('kategoriSelector');
        if (bankSelector) bankSelector.textContent = '';
        if (categorySelector) categorySelector.textContent = '';
        if (list) {
            list.textContent = t('noRiskBanksAvailable');
        }
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

    risikobank.banks.forEach((bank, index) => {
        const tab = document.createElement('button');
        tab.className = 'bank-tab';
        if (index === 0) tab.classList.add('active');
        tab.textContent = getLocalizedValue(bank.name);
        tab.onclick = () => selectBank(bank.id);
        container.appendChild(tab);
    });
}

// Velg bank
function selectBank(bankId) {
    // Oppdater aktiv tab
    document.querySelectorAll('.bank-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent === getLocalizedValue(risikobank.banks.find(b => b.id === bankId).name)) {
            tab.classList.add('active');
        }
    });

    const bank = risikobank.banks.find(b => b.id === bankId);
    if (!bank) return;

    // Render kategorier
    renderCategories(bank.categories);

    // Velg første kategori automatisk
    if (bank.categories.length > 0) {
        selectCategory(bank.categories[0].id, bank.categories);
    }
}

function renderCategories(categories) {
    const container = document.getElementById('kategoriSelector');
    container.textContent = '';

    categories.forEach((category, index) => {
        const chip = document.createElement('button');
        chip.className = 'kategori-chip';
        if (index === 0) chip.classList.add('active');
        chip.textContent = getLocalizedValue(category.name);
        chip.onclick = () => selectCategory(category.id, categories, chip);
        container.appendChild(chip);
    });
}

function selectCategory(categoryId, categories, selectedChip = null) {
    // Oppdater aktiv chip
    document.querySelectorAll('.kategori-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    if (selectedChip) {
        selectedChip.classList.add('active');
    }

    const category = categories.find((item) => item.id === categoryId);
    if (!category) return;

    // Render risikoer
    renderRiskCards(category.risks);
}

function renderRiskCards(risks) {
    const container = document.getElementById('risikoListe');
    container.textContent = '';

    if (risks.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-state-modal';
        empty.textContent = t('noRisksInCategory');
        container.appendChild(empty);
        return;
    }

    risks.forEach((risk) => {
        const card = createRiskCard(risk);
        container.appendChild(card);
    });
}

function createRiskCard(risk) {
    const card = document.createElement('div');
    card.className = 'risiko-card';

    const title = document.createElement('h4');
    title.textContent = getLocalizedValue(risk.riskElement);
    card.appendChild(title);

    const vulnerability = document.createElement('div');
    vulnerability.className = 'risiko-saarbarhet';
    vulnerability.textContent = getLocalizedValue(risk.vulnerability);
    card.appendChild(vulnerability);

    const meta = document.createElement('div');
    meta.className = 'risiko-meta';

    // KIT meta
    const kit = document.createElement('span');
    kit.className = 'risiko-meta-item';
    const kLabel = document.createElement('strong');
    kLabel.textContent = 'K:';
    kit.appendChild(kLabel);
    kit.appendChild(document.createTextNode(' ' + risk.K + ' '));
    const iLabel = document.createElement('strong');
    iLabel.textContent = 'I:';
    kit.appendChild(iLabel);
    kit.appendChild(document.createTextNode(' ' + risk.I + ' '));
    const tLabel = document.createElement('strong');
    tLabel.textContent = 'T:';
    kit.appendChild(tLabel);
    kit.appendChild(document.createTextNode(' ' + risk.T));
    meta.appendChild(kit);

    // Sannsynlighet meta
    const sann = document.createElement('span');
    sann.className = 'risiko-meta-item';
    const sannLabel = document.createElement('strong');
    sannLabel.textContent = `${t('probability')}:`;
    sann.appendChild(sannLabel);
    sann.appendChild(document.createTextNode(' ' + risk.probability));
    meta.appendChild(sann);

    // Risikonivå meta
    const rn = calculateRisikonivaa(calculateKonsekvens(risk.K, risk.I, risk.T), risk.probability);
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
        selectRiskFromBank(risk);
        closeRisikobankModal();
    };

    return card;
}

// Velg risiko fra bank og fyll ut
function selectRiskFromBank(bankRisk) {
    if (!currentRiskIdForBank) return;

    const risk = currentAnalysis.risks.find(r => r.id === currentRiskIdForBank);
    if (!risk) return;

    // Lagre ID for scrolling senere
    const riskId = risk.id;

    // Fyll ut alle felt fra risikobanken
    risk.riskElement = getLocalizedValue(bankRisk.riskElement);
    risk.vulnerability = getLocalizedValue(bankRisk.vulnerability);
    risk.existingProtection = getLocalizedValue(bankRisk.existingProtection);
    risk.existingControl = getLocalizedValue(bankRisk.existingControl);
    risk.K = bankRisk.K;
    risk.I = bankRisk.I;
    risk.T = bankRisk.T;
    risk.probability = bankRisk.probability;
    risk.proposedMeasures = getLocalizedValue(bankRisk.proposedMeasures);

    // Beregn konsekvens og risikonivå
    risk.consequence = calculateKonsekvens(risk.K, risk.I, risk.T);
    risk.riskLevel = calculateRisikonivaa(risk.consequence, risk.probability);

    // Oppdater analyse
    updateAnalysis(currentAnalysisId, { risks: currentAnalysis.risks });

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
        if (textareas[0]) textareas[0].value = risk.riskElement;
        if (textareas[1]) textareas[1].value = risk.vulnerability;
        if (textareas[2]) textareas[2].value = risk.existingProtection;
        if (textareas[3]) textareas[3].value = risk.existingControl;
        if (textareas[4]) textareas[4].value = risk.proposedMeasures;

        // Oppdater KIT dropdowns
        const selects = existingRow.querySelectorAll('select');
        if (selects[0]) selects[0].value = risk.K;
        if (selects[1]) selects[1].value = risk.I;
        if (selects[2]) selects[2].value = risk.T;
        if (selects[3]) selects[3].value = risk.probability;

        // Oppdater konsekvens og risikonivå celler
        const konsCell = existingRow.querySelector('td:nth-child(10)');
        const rnCell = existingRow.querySelector('td:nth-child(11)');
        if (konsCell) {
            konsCell.textContent = risk.consequence;
            konsCell.style.fontWeight = 'bold';
        }
        if (rnCell) {
            rnCell.textContent = risk.riskLevel;
            rnCell.style.color = getRiskColor(risk.riskLevel);
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
