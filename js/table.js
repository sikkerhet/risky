// Tabell-håndtering for risikoer

function renderRisksTable() {
    const tbody = document.getElementById('risksTableBody');
    if (!tbody || !currentAnalysis) return;

    tbody.textContent = '';

    if (currentAnalysis.risikoer.length === 0) {
        const emptyRow = document.createElement('tr');
        const emptyCell = document.createElement('td');
        emptyCell.colSpan = 13;
        emptyCell.textContent = 'Ingen risikoer lagt til ennå. Klikk "Legg til risiko" for å starte.';
        emptyCell.style.textAlign = 'center';
        emptyCell.style.padding = '20px';
        emptyRow.appendChild(emptyCell);
        tbody.appendChild(emptyRow);
        return;
    }

    currentAnalysis.risikoer.forEach((risk, index) => {
        const row = createRiskRow(risk, index);
        tbody.appendChild(row);
    });
}

function createRiskRow(risk, index) {
    const row = document.createElement('tr');
    row.dataset.riskId = risk.id;

    // Nr
    const nrCell = document.createElement('td');
    nrCell.textContent = risk.nr;
    row.appendChild(nrCell);

    // Risikoelement
    const elementCell = document.createElement('td');
    const elementInput = document.createElement('textarea');
    elementInput.value = risk.risikoelement || '';
    elementInput.placeholder = 'Beskriv risikoelement...';
    elementInput.addEventListener('blur', () => updateRisk(risk.id, 'risikoelement', elementInput.value));
    elementCell.appendChild(elementInput);
    row.appendChild(elementCell);

    // Sårbarhet
    const saarbarhetCell = document.createElement('td');
    const saarbarhetInput = document.createElement('textarea');
    saarbarhetInput.value = risk.saarbarhet || '';
    saarbarhetInput.placeholder = 'Beskriv sårbarhet...';
    saarbarhetInput.addEventListener('blur', () => updateRisk(risk.id, 'saarbarhet', saarbarhetInput.value));
    saarbarhetCell.appendChild(saarbarhetInput);
    row.appendChild(saarbarhetCell);

    // Eksisterende beskyttelse
    const beskyttelseCell = document.createElement('td');
    const beskyttelseInput = document.createElement('textarea');
    beskyttelseInput.value = risk.eksisterendeBeskyttelse || '';
    beskyttelseInput.placeholder = 'Beskriv beskyttelse...';
    beskyttelseInput.addEventListener('blur', () => updateRisk(risk.id, 'eksisterendeBeskyttelse', beskyttelseInput.value));
    beskyttelseCell.appendChild(beskyttelseInput);
    row.appendChild(beskyttelseCell);

    // Eksisterende kontroll
    const kontrollCell = document.createElement('td');
    const kontrollInput = document.createElement('textarea');
    kontrollInput.value = risk.eksisterendeKontroll || '';
    kontrollInput.placeholder = 'Beskriv kontroll...';
    kontrollInput.addEventListener('blur', () => updateRisk(risk.id, 'eksisterendeKontroll', kontrollInput.value));
    kontrollCell.appendChild(kontrollInput);
    row.appendChild(kontrollCell);

    // K, I, T dropdowns
    ['K', 'I', 'T'].forEach(field => {
        const cell = document.createElement('td');
        const select = document.createElement('select');
        for (let i = 0; i <= 5; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            if (risk[field] === i) option.selected = true;
            select.appendChild(option);
        }
        select.addEventListener('change', () => {
            updateRisk(risk.id, field, parseInt(select.value));
            recalculateRisk(risk.id);
        });
        cell.appendChild(select);
        row.appendChild(cell);
    });

    // Konsekvens (read-only, beregnet)
    const konsekvensCel = document.createElement('td');
    konsekvensCel.className = 'calculated-field';
    konsekvensCel.textContent = risk.konsekvens || 0;
    row.appendChild(konsekvensCel);

    // Sannsynlighet
    const sannsynlighetCell = document.createElement('td');
    const sannsynlighetSelect = document.createElement('select');
    for (let i = 0; i <= 5; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (risk.sannsynlighet === i) option.selected = true;
        sannsynlighetSelect.appendChild(option);
    }
    sannsynlighetSelect.addEventListener('change', () => {
        updateRisk(risk.id, 'sannsynlighet', parseInt(sannsynlighetSelect.value));
        recalculateRisk(risk.id);
    });
    sannsynlighetCell.appendChild(sannsynlighetSelect);
    row.appendChild(sannsynlighetCell);

    // Risikonivå (read-only, beregnet)
    const risikoCell = document.createElement('td');
    risikoCell.className = 'calculated-field';
    risikoCell.textContent = risk.risikonivaa || 0;
    risikoCell.style.backgroundColor = getRiskColor(risk.risikonivaa);
    risikoCell.style.color = risk.risikonivaa >= 13 ? '#fff' : '#000';
    risikoCell.style.fontWeight = 'bold';
    row.appendChild(risikoCell);

    // Foreslåtte tiltak
    const tiltakCell = document.createElement('td');
    const tiltakInput = document.createElement('textarea');
    tiltakInput.value = risk.foreslaatteTiltak || '';
    tiltakInput.placeholder = 'Beskriv tiltak...';
    tiltakInput.addEventListener('blur', () => updateRisk(risk.id, 'foreslaatteTiltak', tiltakInput.value));
    tiltakCell.appendChild(tiltakInput);
    row.appendChild(tiltakCell);

    // Handlinger
    const actionsCell = document.createElement('td');
    actionsCell.className = 'actions-cell';

    // Sjekk om risikoen er tom (ny risiko)
    const isEmpty = !risk.risikoelement && !risk.saarbarhet &&
                    risk.K === 0 && risk.I === 0 && risk.T === 0 &&
                    risk.sannsynlighet === 0;

    // Vis risikobank-knapp kun for tomme risikoer
    if (isEmpty) {
        const bankBtn = document.createElement('button');
        bankBtn.textContent = '📁';
        bankBtn.className = 'btn-icon';
        bankBtn.title = 'Velg fra risikobank';
        bankBtn.style.background = '#28a745';
        bankBtn.style.color = 'white';
        bankBtn.addEventListener('click', () => openRisikobankModal(risk.id));
        actionsCell.appendChild(bankBtn);
    }

    // Kommentar-knapp
    const commentBtn = document.createElement('button');
    const commentCount = getCommentCount(risk.id);
    commentBtn.textContent = '💬';
    commentBtn.className = 'btn-icon btn-comment';
    commentBtn.title = 'Legg til tiltak/kommentar';
    if (commentCount > 0) {
        commentBtn.classList.add('has-comments');
        commentBtn.setAttribute('data-count', commentCount);
    }
    commentBtn.addEventListener('click', () => openCommentModal(risk.id));
    actionsCell.appendChild(commentBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '×';
    deleteBtn.className = 'btn-icon btn-danger';
    deleteBtn.title = 'Slett';
    deleteBtn.addEventListener('click', () => deleteRisk(risk.id));
    actionsCell.appendChild(deleteBtn);

    if (index > 0) {
        const upBtn = document.createElement('button');
        upBtn.textContent = '↑';
        upBtn.className = 'btn-icon';
        upBtn.title = 'Flytt opp';
        upBtn.addEventListener('click', () => moveRisk(index, index - 1));
        actionsCell.appendChild(upBtn);
    }

    if (index < currentAnalysis.risikoer.length - 1) {
        const downBtn = document.createElement('button');
        downBtn.textContent = '↓';
        downBtn.className = 'btn-icon';
        downBtn.title = 'Flytt ned';
        downBtn.addEventListener('click', () => moveRisk(index, index + 1));
        actionsCell.appendChild(downBtn);
    }

    row.appendChild(actionsCell);

    return row;
}

function updateRisk(riskId, field, value) {
    const riskIndex = currentAnalysis.risikoer.findIndex(r => r.id === riskId);
    if (riskIndex >= 0) {
        currentAnalysis.risikoer[riskIndex][field] = value;
        updateAnalysis(currentAnalysisId, { risikoer: currentAnalysis.risikoer });
        showSavedIndicator();
    }
}

function recalculateRisk(riskId) {
    const risk = currentAnalysis.risikoer.find(r => r.id === riskId);
    if (!risk) return;

    risk.konsekvens = calculateKonsekvens(risk.K, risk.I, risk.T);
    risk.risikonivaa = calculateRisikonivaa(risk.konsekvens, risk.sannsynlighet);

    updateAnalysis(currentAnalysisId, { risikoer: currentAnalysis.risikoer });
    renderRisksTable();
    renderHeatmap();
    renderStatistics();
    renderKITTable();
}

function deleteRisk(riskId) {
    if (!confirm('Er du sikker på at du vil slette denne risikoen?')) return;

    currentAnalysis.risikoer = currentAnalysis.risikoer.filter(r => r.id !== riskId);

    // Renumerer risikoer
    currentAnalysis.risikoer.forEach((r, i) => r.nr = i + 1);

    updateAnalysis(currentAnalysisId, { risikoer: currentAnalysis.risikoer });
    renderRisksTable();
    renderHeatmap();
    renderStatistics();
    renderKITTable();
}

function moveRisk(fromIndex, toIndex) {
    const risks = currentAnalysis.risikoer;
    const [moved] = risks.splice(fromIndex, 1);
    risks.splice(toIndex, 0, moved);

    // Renumerer
    risks.forEach((r, i) => r.nr = i + 1);

    updateAnalysis(currentAnalysisId, { risikoer: risks });
    renderRisksTable();
    renderHeatmap();
    renderStatistics();
}

function renderKITTable() {
    const tbody = document.getElementById('kitTableBody');
    if (!tbody || !currentAnalysis) return;

    tbody.textContent = '';

    const kit = calculateKIT(currentAnalysis.risikoer);

    const rows = [
        { label: 'K (kun konfidensialitet)', value: kit.K },
        { label: 'I (kun integritet)', value: kit.I },
        { label: 'T (kun tilgjengelighet)', value: kit.T },
        { label: 'K+I', value: kit.KI },
        { label: 'K+T', value: kit.KT },
        { label: 'I+T', value: kit.IT },
        { label: 'K+I+T (alle tre)', value: kit.KIT }
    ];

    rows.forEach(rowData => {
        const row = document.createElement('tr');

        const labelCell = document.createElement('td');
        labelCell.textContent = rowData.label;
        row.appendChild(labelCell);

        const valueCell = document.createElement('td');
        valueCell.textContent = `${rowData.value} risikoer`;
        row.appendChild(valueCell);

        tbody.appendChild(row);
    });

    // Total rad
    const totalRow = document.createElement('tr');
    totalRow.style.fontWeight = 'bold';
    totalRow.style.borderTop = '2px solid #333';

    const totalLabelCell = document.createElement('td');
    totalLabelCell.textContent = 'TOTALT';
    totalRow.appendChild(totalLabelCell);

    const totalValueCell = document.createElement('td');
    totalValueCell.textContent = `${kit.total} risikoer`;
    totalRow.appendChild(totalValueCell);

    tbody.appendChild(totalRow);
}

// Auto-resize textarea basert på innhold
function autoResizeTextarea(textarea) {
    // Reset height for å få riktig scrollHeight
    textarea.style.height = 'auto';
    // Sett ny height basert på innhold
    const newHeight = Math.max(22, textarea.scrollHeight);
    textarea.style.height = newHeight + 'px';
}

// Setup auto-resize for alle textareas i tabellen
function setupTextareaAutoResize() {
    const textareas = document.querySelectorAll('.risks-table textarea');
    textareas.forEach(textarea => {
        // Resize ved input
        textarea.addEventListener('input', function() {
            autoResizeTextarea(this);
        });
        // Initial resize
        autoResizeTextarea(textarea);
    });
}

// Kall setupTextareaAutoResize når tabellen rendres
const originalRenderRisksTable = renderRisksTable;
renderRisksTable = function() {
    originalRenderRisksTable();
    // Delay for å sikre at DOM er oppdatert
    setTimeout(setupTextareaAutoResize, 0);
};
