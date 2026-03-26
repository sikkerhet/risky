// Tabell-håndtering for risikoer

function createIconButton(iconMarkup, label, className = 'btn-icon') {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.title = label;
    button.setAttribute('aria-label', label);
    button.innerHTML = `${iconMarkup}<span class="btn-icon-label">${label}</span>`;
    return button;
}

function renderRisksTable() {
    const tbody = document.getElementById('risksTableBody');
    if (!tbody || !currentAnalysis) return;

    tbody.textContent = '';

    if (currentAnalysis.risks.length === 0) {
        const emptyRow = document.createElement('tr');
        const emptyCell = document.createElement('td');
        emptyCell.colSpan = 13;
        emptyCell.textContent = `${t('riskSectionTitle')}: 0`;
        emptyCell.style.textAlign = 'center';
        emptyCell.style.padding = '20px';
        emptyRow.appendChild(emptyCell);
        tbody.appendChild(emptyRow);
        return;
    }

    currentAnalysis.risks.forEach((risk, index) => {
        const row = createRiskRow(risk, index);
        tbody.appendChild(row);
    });
}

function createRiskRow(risk, index) {
    const row = document.createElement('tr');
    row.dataset.riskId = risk.id;

    // Nr
    const nrCell = document.createElement('td');
    nrCell.textContent = risk.number;
    row.appendChild(nrCell);

    // Risikoelement
    const elementCell = document.createElement('td');
    const elementInput = document.createElement('textarea');
    elementInput.value = risk.riskElement || '';
    elementInput.placeholder = 'Beskriv risikoelement...';
    elementInput.addEventListener('blur', () => updateRisk(risk.id, 'riskElement', elementInput.value));
    elementCell.appendChild(elementInput);
    row.appendChild(elementCell);

    // Sårbarhet
    const saarbarhetCell = document.createElement('td');
    const saarbarhetInput = document.createElement('textarea');
    saarbarhetInput.value = risk.vulnerability || '';
    saarbarhetInput.placeholder = 'Beskriv sårbarhet...';
    saarbarhetInput.addEventListener('blur', () => updateRisk(risk.id, 'vulnerability', saarbarhetInput.value));
    saarbarhetCell.appendChild(saarbarhetInput);
    row.appendChild(saarbarhetCell);

    // Eksisterende beskyttelse
    const beskyttelseCell = document.createElement('td');
    const beskyttelseInput = document.createElement('textarea');
    beskyttelseInput.value = risk.existingProtection || '';
    beskyttelseInput.placeholder = 'Beskriv beskyttelse...';
    beskyttelseInput.addEventListener('blur', () => updateRisk(risk.id, 'existingProtection', beskyttelseInput.value));
    beskyttelseCell.appendChild(beskyttelseInput);
    row.appendChild(beskyttelseCell);

    // Eksisterende kontroll
    const kontrollCell = document.createElement('td');
    const kontrollInput = document.createElement('textarea');
    kontrollInput.value = risk.existingControl || '';
    kontrollInput.placeholder = 'Beskriv kontroll...';
    kontrollInput.addEventListener('blur', () => updateRisk(risk.id, 'existingControl', kontrollInput.value));
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
    konsekvensCel.textContent = risk.consequence || 0;
    row.appendChild(konsekvensCel);

    // Sannsynlighet
    const sannsynlighetCell = document.createElement('td');
    const sannsynlighetSelect = document.createElement('select');
    for (let i = 0; i <= 5; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (risk.probability === i) option.selected = true;
        sannsynlighetSelect.appendChild(option);
    }
    sannsynlighetSelect.addEventListener('change', () => {
        updateRisk(risk.id, 'probability', parseInt(sannsynlighetSelect.value));
        recalculateRisk(risk.id);
    });
    sannsynlighetCell.appendChild(sannsynlighetSelect);
    row.appendChild(sannsynlighetCell);

    // Risikonivå (read-only, beregnet)
    const risikoCell = document.createElement('td');
    risikoCell.className = 'calculated-field';
    risikoCell.textContent = risk.riskLevel || 0;
    risikoCell.style.backgroundColor = getRiskColor(risk.riskLevel);
    risikoCell.style.color = risk.riskLevel >= 13 ? '#fff' : '#000';
    risikoCell.style.fontWeight = 'bold';
    row.appendChild(risikoCell);

    // Foreslåtte tiltak
    const tiltakCell = document.createElement('td');
    const tiltakInput = document.createElement('textarea');
    tiltakInput.value = risk.proposedMeasures || '';
    tiltakInput.placeholder = 'Beskriv tiltak...';
    tiltakInput.addEventListener('blur', () => updateRisk(risk.id, 'proposedMeasures', tiltakInput.value));
    tiltakCell.appendChild(tiltakInput);
    row.appendChild(tiltakCell);

    // Handlinger
    const actionsCell = document.createElement('td');
    actionsCell.className = 'actions-cell';

    // Sjekk om risikoen er tom (ny risiko)
    const isEmpty = !risk.riskElement && !risk.vulnerability &&
                    risk.K === 0 && risk.I === 0 && risk.T === 0 &&
                    risk.probability === 0;

    // Vis risikobank-knapp kun for tomme risikoer
    if (isEmpty) {
        const bankBtn = createIconButton(
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path></svg>',
            t('selectFromBank')
        );
        bankBtn.style.background = '#28a745';
        bankBtn.style.color = 'white';
        bankBtn.addEventListener('click', () => openRisikobankModal(risk.id));
        actionsCell.appendChild(bankBtn);
    }

    // Kommentar-knapp
    const commentCount = getCommentCount(risk.id);
    const commentBtn = createIconButton(
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
        t('addComment'),
        'btn-icon btn-comment'
    );
    if (commentCount > 0) {
        commentBtn.classList.add('has-comments');
        commentBtn.setAttribute('data-count', commentCount);
    }
    commentBtn.addEventListener('click', () => openCommentModal(risk.id));
    actionsCell.appendChild(commentBtn);

    const deleteBtn = createIconButton(
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>',
        t('delete'),
        'btn-icon btn-danger'
    );
    deleteBtn.addEventListener('click', () => deleteRisk(risk.id));
    actionsCell.appendChild(deleteBtn);

    if (index > 0) {
        const upBtn = createIconButton(
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5"></path><path d="m5 12 7-7 7 7"></path></svg>',
            t('moveUp')
        );
        upBtn.addEventListener('click', () => moveRisk(index, index - 1));
        actionsCell.appendChild(upBtn);
    }

    if (index < currentAnalysis.risks.length - 1) {
        const downBtn = createIconButton(
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>',
            t('moveDown')
        );
        downBtn.addEventListener('click', () => moveRisk(index, index + 1));
        actionsCell.appendChild(downBtn);
    }

    row.appendChild(actionsCell);

    return row;
}

function updateRisk(riskId, field, value) {
    const riskIndex = currentAnalysis.risks.findIndex(r => r.id === riskId);
    if (riskIndex >= 0) {
        currentAnalysis.risks[riskIndex][field] = value;
        updateAnalysis(currentAnalysisId, { risks: currentAnalysis.risks });
        showSavedIndicator();
    }
}

function recalculateRisk(riskId) {
    const risk = currentAnalysis.risks.find(r => r.id === riskId);
    if (!risk) return;

    risk.consequence = calculateKonsekvens(risk.K, risk.I, risk.T);
    risk.riskLevel = calculateRisikonivaa(risk.consequence, risk.probability);
    updateAnalysis(currentAnalysisId, { risks: currentAnalysis.risks });
    renderRisksTable();
    renderHeatmap();
    renderStatistics();
    renderKITTable();
}

function deleteRisk(riskId) {
    if (!confirm(`${t('delete')}?`)) return;

    currentAnalysis.risks = currentAnalysis.risks.filter(r => r.id !== riskId);

    // Renumerer risikoer
    currentAnalysis.risks.forEach((risk, index) => risk.number = index + 1);

    updateAnalysis(currentAnalysisId, { risks: currentAnalysis.risks });
    renderRisksTable();
    renderHeatmap();
    renderStatistics();
    renderKITTable();
}

function moveRisk(fromIndex, toIndex) {
    const risks = currentAnalysis.risks;
    const [moved] = risks.splice(fromIndex, 1);
    risks.splice(toIndex, 0, moved);

    // Renumerer
    risks.forEach((risk, index) => risk.number = index + 1);

    updateAnalysis(currentAnalysisId, { risks: risks });
    renderRisksTable();
    renderHeatmap();
    renderStatistics();
}

function renderKITTable() {
    const tbody = document.getElementById('kitTableBody');
    if (!tbody || !currentAnalysis) return;

    tbody.textContent = '';

    const kit = calculateKIT(currentAnalysis.risks);

    const rows = [
        { label: t('kitConfidentialityOnly'), value: kit.K },
        { label: t('kitIntegrityOnly'), value: kit.I },
        { label: t('kitAvailabilityOnly'), value: kit.T },
        { label: 'K+I', value: kit.KI },
        { label: 'K+T', value: kit.KT },
        { label: 'I+T', value: kit.IT },
        { label: t('kitAllThree'), value: kit.KIT }
    ];

    rows.forEach(rowData => {
        const row = document.createElement('tr');

        const labelCell = document.createElement('td');
        labelCell.textContent = rowData.label;
        row.appendChild(labelCell);

        const valueCell = document.createElement('td');
        valueCell.textContent = `${rowData.value} ${t('risks')}`;
        row.appendChild(valueCell);

        tbody.appendChild(row);
    });

    // Total rad
    const totalRow = document.createElement('tr');
    totalRow.style.fontWeight = 'bold';
    totalRow.style.borderTop = '2px solid #333';

    const totalLabelCell = document.createElement('td');
    totalLabelCell.textContent = t('totalUppercase');
    totalRow.appendChild(totalLabelCell);

    const totalValueCell = document.createElement('td');
    totalValueCell.textContent = `${kit.total} ${t('risks')}`;
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
