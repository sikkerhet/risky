// Felles funksjoner for ROS-analyse verktøyet

const STORAGE_KEY = 'ros_analyses';

// UUID generator
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// LocalStorage funksjoner
function getAnalyses() {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

function saveAnalyses(analyses) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(analyses));
}

function getAnalysisById(id) {
    const analyses = getAnalyses();
    return analyses.find(a => a.id === id);
}

function updateAnalysis(id, updates) {
    const analyses = getAnalyses();
    const index = analyses.findIndex(a => a.id === id);
    if (index >= 0) {
        analyses[index] = { ...analyses[index], ...updates, lastModified: new Date().toISOString() };
        saveAnalyses(analyses);
        return analyses[index];
    }
    return null;
}

// Beregningsfunksjoner
function calculateKonsekvens(K, I, T) {
    return Math.max(K || 0, I || 0, T || 0);
}

function calculateRisikonivaa(konsekvens, sannsynlighet) {
    return konsekvens * sannsynlighet;
}

function getRiskColor(risikonivaa) {
    if (risikonivaa >= 19) return '#dc3545'; // Rød - kritisk
    if (risikonivaa >= 13) return '#fd7e14'; // Oransje - høy
    if (risikonivaa >= 7) return '#ffc107';  // Gul - middels
    return '#28a745';                         // Grønn - lav
}

function getRiskLevel(risikonivaa) {
    if (risikonivaa >= 19) return 'Kritisk';
    if (risikonivaa >= 13) return 'Høy';
    if (risikonivaa >= 7) return 'Middels';
    return 'Lav';
}

// KIT-analyse beregninger
function calculateKIT(risikoer) {
    const kit = {
        K: 0,      // Kun K
        I: 0,      // Kun I
        T: 0,      // Kun T
        KI: 0,     // K og I
        KT: 0,     // K og T
        IT: 0,     // I og T
        KIT: 0,    // Alle tre
        total: risikoer.length
    };

    risikoer.forEach(r => {
        const hasK = r.K > 0;
        const hasI = r.I > 0;
        const hasT = r.T > 0;

        if (hasK && hasI && hasT) {
            kit.KIT++;
        } else if (hasK && hasI) {
            kit.KI++;
        } else if (hasK && hasT) {
            kit.KT++;
        } else if (hasI && hasT) {
            kit.IT++;
        } else if (hasK) {
            kit.K++;
        } else if (hasI) {
            kit.I++;
        } else if (hasT) {
            kit.T++;
        }
    });

    return kit;
}

// Dato formatting
function formatNorwegianDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('no-NO');
}

// Vis lagret-indikator
function showSavedIndicator() {
    const indicator = document.getElementById('savedIndicator');
    if (indicator) {
        indicator.style.display = 'inline';
        setTimeout(() => {
            indicator.style.display = 'none';
        }, 2000);
    }
}
