// Shared utilities for the ROS analysis tool

const STORAGE_KEY = 'ros_analyses';

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(char) {
        const random = Math.random() * 16 | 0;
        const value = char === 'x' ? random : (random & 0x3 | 0x8);
        return value.toString(16);
    });
}

function firstDefined(...values) {
    return values.find((value) => value !== undefined && value !== null);
}

function normalizeComment(comment = {}) {
    return {
        id: comment.id || generateUUID(),
        type: comment.type || 'kommentar',
        text: comment.text || comment.tekst || '',
        links: Array.isArray(comment.links) ? comment.links : [],
        created: comment.created || comment.opprettet || new Date().toISOString(),
        visible: comment.visible !== false
    };
}

function normalizeRisk(rawRisk = {}, index = 0) {
    const risk = {
        id: rawRisk.id || generateUUID(),
        number: firstDefined(rawRisk.number, rawRisk.nr, index + 1) || 0,
        riskElement: firstDefined(rawRisk.riskElement, rawRisk.risikoelement, ''),
        vulnerability: firstDefined(rawRisk.vulnerability, rawRisk.saarbarhet, ''),
        existingProtection: firstDefined(rawRisk.existingProtection, rawRisk.eksisterendeBeskyttelse, ''),
        existingControl: firstDefined(rawRisk.existingControl, rawRisk.eksisterendeKontroll, ''),
        K: Number(firstDefined(rawRisk.K, 0)),
        I: Number(firstDefined(rawRisk.I, 0)),
        T: Number(firstDefined(rawRisk.T, 0)),
        consequence: Number(firstDefined(rawRisk.consequence, rawRisk.konsekvens, 0)),
        probability: Number(firstDefined(rawRisk.probability, rawRisk.sannsynlighet, 0)),
        riskLevel: Number(firstDefined(rawRisk.riskLevel, rawRisk.risikonivaa, 0)),
        proposedMeasures: firstDefined(rawRisk.proposedMeasures, rawRisk.foreslaatteTiltak, ''),
        comments: Array.isArray(rawRisk.comments || rawRisk.kommentarer)
            ? (rawRisk.comments || rawRisk.kommentarer).map(normalizeComment)
            : []
    };

    if (!risk.consequence) {
        risk.consequence = calculateKonsekvens(risk.K, risk.I, risk.T);
    }

    if (!risk.riskLevel) {
        risk.riskLevel = calculateRisikonivaa(risk.consequence, risk.probability);
    }

    return risk;
}

function normalizeMetadata(rawMetadata = {}) {
    const metadata = {
        date: firstDefined(rawMetadata.date, rawMetadata.dato, ''),
        service: firstDefined(rawMetadata.service, rawMetadata.tjeneste, ''),
        performedBy: firstDefined(rawMetadata.performedBy, rawMetadata.utfortAv, ''),
        participants: firstDefined(rawMetadata.participants, rawMetadata.deltakere, ''),
        serviceOwner: firstDefined(rawMetadata.serviceOwner, rawMetadata.tjenesteeier, ''),
        description: firstDefined(rawMetadata.description, rawMetadata.beskrivelse, ''),
        reportTitle: rawMetadata.reportTitle || '',
        reportLogo: rawMetadata.reportLogo || '',
        commentsSectionTitle: rawMetadata.commentsSectionTitle || '',
        customTextTitle: rawMetadata.customTextTitle || '',
        customText: rawMetadata.customText || '',
        acceptanceLevel: Number(firstDefined(rawMetadata.acceptanceLevel, 12)),
        language: rawMetadata.language || getCurrentLanguage()
    };

    return { ...rawMetadata, ...metadata };
}

function normalizeAnalysis(rawAnalysis = {}) {
    const normalizedRisks = (rawAnalysis.risks || rawAnalysis.risikoer || []).map(normalizeRisk);
    const metadata = normalizeMetadata(rawAnalysis.metadata || {});

    return {
        ...rawAnalysis,
        id: rawAnalysis.id || generateUUID(),
        name: rawAnalysis.name || t('newAnalysisName'),
        createdDate: rawAnalysis.createdDate || new Date().toISOString().split('T')[0],
        lastModified: rawAnalysis.lastModified || new Date().toISOString(),
        metadata,
        risks: normalizedRisks
    };
}

function serializeAnalysis(analysis) {
    const normalized = normalizeAnalysis(analysis);
    return {
        ...normalized,
        metadata: normalizeMetadata(normalized.metadata),
        risks: normalized.risks.map((risk) => ({
            ...risk,
            comments: risk.comments.map(normalizeComment)
        }))
    };
}

async function loadJsonWithFallback(url, embeddedData = null) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Could not load ${url}`);
        }
        return await response.json();
    } catch (error) {
        if (embeddedData) {
            return JSON.parse(JSON.stringify(embeddedData));
        }
        throw error;
    }
}

async function getExampleAnalysisData() {
    const embeddedExample = window.EMBEDDED_EXAMPLE_ANALYSIS || null;
    const analysis = await loadJsonWithFallback('data/eksempel-analyse.json', embeddedExample);
    return normalizeAnalysis(analysis);
}

async function getBaselineAnalysesData() {
    const embeddedBaselines = Array.isArray(window.EMBEDDED_BASELINES) ? window.EMBEDDED_BASELINES : [];
    const baselineFiles = [
        'baseline-it-tjeneste.json',
        'baseline-identitet-tilgang.json',
        'baseline-sky.json',
        'baseline-kontinuitet-beredskap.json',
        'baseline-persondata.json',
        'baseline-saas.json',
        'baseline-ai-tjeneste.json',
        'baseline-integrasjoner.json',
        'baseline-devops-cicd.json',
        'baseline-webapp.json',
        'baseline-database.json',
        'baseline-mobile.json'
    ];

    const loadedBaselines = await Promise.all(
        baselineFiles.map(async (file, index) => {
            const embedded = embeddedBaselines[index] || null;
            try {
                const baseline = await loadJsonWithFallback(`data/baselines/${file}`, embedded);
                return normalizeAnalysis(baseline);
            } catch (error) {
                console.warn(`Could not load baseline ${file}:`, error);
                return null;
            }
        })
    );

    return loadedBaselines.filter(Boolean);
}

function getAnalyses() {
    const stored = localStorage.getItem(STORAGE_KEY);
    const analyses = stored ? JSON.parse(stored) : [];
    return analyses.map(normalizeAnalysis);
}

function saveAnalyses(analyses) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(analyses.map(serializeAnalysis)));
}

function getAnalysisById(id) {
    const analyses = getAnalyses();
    return analyses.find((analysis) => analysis.id === id);
}

function updateAnalysis(id, updates) {
    const analyses = getAnalyses();
    const index = analyses.findIndex((analysis) => analysis.id === id);
    if (index < 0) {
        return null;
    }

    const current = analyses[index];
    const nextMetadata = updates.metadata
        ? normalizeMetadata({ ...current.metadata, ...updates.metadata })
        : current.metadata;
    const nextRisks = updates.risks || current.risks;

    analyses[index] = normalizeAnalysis({
        ...current,
        ...updates,
        metadata: nextMetadata,
        risks: nextRisks,
        lastModified: new Date().toISOString()
    });

    saveAnalyses(analyses);
    return analyses[index];
}

function calculateKonsekvens(K, I, T) {
    return Math.max(K || 0, I || 0, T || 0);
}

function calculateRisikonivaa(konsekvens, sannsynlighet) {
    return konsekvens * sannsynlighet;
}

function getRiskColor(risikonivaa) {
    if (risikonivaa >= 19) return '#dc3545';
    if (risikonivaa >= 13) return '#fd7e14';
    if (risikonivaa >= 7) return '#ffc107';
    return '#28a745';
}

function getRiskLevel(risikonivaa) {
    if (risikonivaa >= 19) return t('critical');
    if (risikonivaa >= 13) return t('high');
    if (risikonivaa >= 7) return t('medium');
    return t('low');
}

function calculateKIT(risikoer) {
    const risks = risikoer || [];
    const kit = {
        K: 0,
        I: 0,
        T: 0,
        KI: 0,
        KT: 0,
        IT: 0,
        KIT: 0,
        total: risks.length
    };

    risks.forEach((risk) => {
        const hasK = risk.K > 0;
        const hasI = risk.I > 0;
        const hasT = risk.T > 0;

        if (hasK && hasI && hasT) kit.KIT++;
        else if (hasK && hasI) kit.KI++;
        else if (hasK && hasT) kit.KT++;
        else if (hasI && hasT) kit.IT++;
        else if (hasK) kit.K++;
        else if (hasI) kit.I++;
        else if (hasT) kit.T++;
    });

    return kit;
}

function formatNorwegianDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString(getCurrentLanguage() === 'en' ? 'en-GB' : 'no-NO');
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    return String(dateStr).split('T')[0];
}

function showSavedIndicator() {
    const indicator = document.getElementById('savedIndicator');
    if (!indicator) return;

    indicator.style.display = 'inline';
    setTimeout(() => {
        indicator.style.display = 'none';
    }, 2000);
}
