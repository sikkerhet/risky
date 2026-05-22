// Tabell-håndtering for risikoer

const riskTableView = {
    showAboveAcceptanceOnly: false,
    sort: 'number',
    collapsedGroups: new Set()
};

const RISK_GROUP_DATALIST_ID = 'riskGroupOptions';
const UNGROUPED_RISK_GROUP_KEY = '__ungrouped__';

function getRiskGroupOptions() {
    if (!currentAnalysis || !Array.isArray(currentAnalysis.risks)) return [];

    return [...new Set(currentAnalysis.risks
        .map((risk) => (risk.riskGroup || '').trim())
        .filter(Boolean))]
        .sort((a, b) => a.localeCompare(b, getCurrentLanguage() === 'en' ? 'en' : 'no'));
}

function renderRiskGroupDatalist() {
    let datalist = document.getElementById(RISK_GROUP_DATALIST_ID);

    if (!datalist) {
        datalist = document.createElement('datalist');
        datalist.id = RISK_GROUP_DATALIST_ID;
        document.body.appendChild(datalist);
    }

    datalist.textContent = '';
    getRiskGroupOptions().forEach((group) => {
        const option = document.createElement('option');
        option.value = group;
        datalist.appendChild(option);
    });
}

function getRiskGroupKey(risk) {
    const group = (risk.riskGroup || '').trim();
    return group || UNGROUPED_RISK_GROUP_KEY;
}

function getRiskGroupLabelFromKey(groupKey) {
    return groupKey === UNGROUPED_RISK_GROUP_KEY ? t('riskGroupUngrouped') : groupKey;
}

function compareRiskGroups(a, b) {
    const aKey = getRiskGroupKey(a);
    const bKey = getRiskGroupKey(b);

    if (aKey === UNGROUPED_RISK_GROUP_KEY && bKey !== UNGROUPED_RISK_GROUP_KEY) return 1;
    if (bKey === UNGROUPED_RISK_GROUP_KEY && aKey !== UNGROUPED_RISK_GROUP_KEY) return -1;

    return getRiskGroupLabelFromKey(aKey).localeCompare(
        getRiskGroupLabelFromKey(bKey),
        getCurrentLanguage() === 'en' ? 'en' : 'no'
    );
}

function getRisksInCurrentSortOrder(risks = currentAnalysis?.risks || []) {
    const sortedRisks = [...risks];

    if (riskTableView.sort === 'group') {
        sortedRisks.sort((a, b) =>
            compareRiskGroups(a, b) ||
            (b.riskLevel || 0) - (a.riskLevel || 0) ||
            (a.number || 0) - (b.number || 0)
        );
    } else if (riskTableView.sort === 'risk-desc') {
        sortedRisks.sort((a, b) => (b.riskLevel || 0) - (a.riskLevel || 0) || (a.number || 0) - (b.number || 0));
    } else if (riskTableView.sort === 'risk-asc') {
        sortedRisks.sort((a, b) => (a.riskLevel || 0) - (b.riskLevel || 0) || (a.number || 0) - (b.number || 0));
    }

    return sortedRisks;
}

function getAnalysisInCurrentSortOrder(analysis = currentAnalysis) {
    if (!analysis) return analysis;

    return {
        ...analysis,
        metadata: { ...analysis.metadata },
        risks: getRisksInCurrentSortOrder(analysis.risks || [])
    };
}

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

    const acceptanceLevel = Number(currentAnalysis.metadata.acceptanceLevel || 0);
    let visibleRisks = [...currentAnalysis.risks];

    if (riskTableView.showAboveAcceptanceOnly) {
        visibleRisks = visibleRisks.filter((risk) => (risk.riskLevel || 0) > acceptanceLevel);
    }

    visibleRisks = getRisksInCurrentSortOrder(visibleRisks);

    updateRiskTableViewMeta(visibleRisks.length, currentAnalysis.risks.length);

    if (currentAnalysis.risks.length === 0 || visibleRisks.length === 0) {
        const emptyRow = document.createElement('tr');
        const emptyCell = document.createElement('td');
        emptyCell.colSpan = 14;
        emptyCell.textContent = currentAnalysis.risks.length === 0
            ? `${t('riskSectionTitle')}: 0`
            : t('noRisksMatchCurrentView');
        emptyCell.style.textAlign = 'center';
        emptyCell.style.padding = '20px';
        emptyRow.appendChild(emptyCell);
        tbody.appendChild(emptyRow);
        return;
    }

    if (riskTableView.sort === 'group') {
        renderGroupedRisksTable(tbody, visibleRisks);
        return;
    }

    const canReorder = !riskTableView.showAboveAcceptanceOnly && riskTableView.sort === 'number';

    visibleRisks.forEach((risk) => {
        const actualIndex = currentAnalysis.risks.findIndex((item) => item.id === risk.id);
        const row = createRiskRow(risk, actualIndex, canReorder);
        tbody.appendChild(row);
    });
}

function renderGroupedRisksTable(tbody, visibleRisks) {
    const groups = new Map();

    visibleRisks.forEach((risk) => {
        const groupKey = getRiskGroupKey(risk);
        if (!groups.has(groupKey)) {
            groups.set(groupKey, []);
        }
        groups.get(groupKey).push(risk);
    });

    groups.forEach((risks, groupKey) => {
        const isCollapsed = riskTableView.collapsedGroups.has(groupKey);
        tbody.appendChild(createRiskGroupHeaderRow(groupKey, risks, isCollapsed));

        if (isCollapsed) return;

        risks.forEach((risk) => {
            const actualIndex = currentAnalysis.risks.findIndex((item) => item.id === risk.id);
            const row = createRiskRow(risk, actualIndex, false);
            tbody.appendChild(row);
        });
    });
}

function createRiskGroupHeaderRow(groupKey, risks, isCollapsed) {
    const row = document.createElement('tr');
    row.className = 'risk-group-row';
    row.dataset.groupKey = groupKey;

    const cell = document.createElement('td');
    cell.colSpan = 14;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'risk-group-toggle';
    button.setAttribute('aria-expanded', String(!isCollapsed));
    button.addEventListener('click', () => toggleRiskGroup(groupKey));

    const icon = document.createElement('span');
    icon.className = 'risk-group-toggle-icon';
    icon.textContent = isCollapsed ? '>' : 'v';
    button.appendChild(icon);

    const label = document.createElement('span');
    label.className = 'risk-group-toggle-label';
    label.textContent = getRiskGroupLabelFromKey(groupKey);
    button.appendChild(label);

    const count = document.createElement('span');
    count.className = 'risk-group-toggle-count';
    count.textContent = formatTranslation('riskGroupCount', { count: risks.length });
    button.appendChild(count);

    cell.appendChild(button);
    row.appendChild(cell);
    return row;
}

function toggleRiskGroup(groupKey) {
    if (riskTableView.collapsedGroups.has(groupKey)) {
        riskTableView.collapsedGroups.delete(groupKey);
    } else {
        riskTableView.collapsedGroups.add(groupKey);
    }

    renderRisksTable();
}

function updateRiskTableViewMeta(visibleCount, totalCount) {
    const meta = document.getElementById('riskTableViewMeta');
    if (!meta) return;
    meta.textContent = formatTranslation('riskTableViewMeta', {
        visible: visibleCount,
        total: totalCount
    });
}

function createRiskRow(risk, index, canReorder = true) {
    const row = document.createElement('tr');
    row.id = `risk-row-${risk.id}`;
    row.dataset.riskId = risk.id;

    // Nr
    const nrCell = document.createElement('td');
    nrCell.textContent = risk.number;
    row.appendChild(nrCell);

    // Gruppe
    const groupCell = document.createElement('td');
    const groupInput = document.createElement('input');
    groupInput.type = 'text';
    groupInput.value = risk.riskGroup || '';
    groupInput.placeholder = t('riskGroupPlaceholder');
    groupInput.setAttribute('list', RISK_GROUP_DATALIST_ID);
    groupInput.addEventListener('blur', () => updateRisk(risk.id, 'riskGroup', groupInput.value.trim()));
    groupCell.appendChild(groupInput);
    row.appendChild(groupCell);

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

    const bankBtn = createIconButton(
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"></path></svg>',
        isEmpty ? t('selectFromBank') : t('fillFromBank')
    );
    bankBtn.style.background = isEmpty ? '#28a745' : '#2e5f8e';
    bankBtn.style.color = 'white';
    bankBtn.addEventListener('click', () => openRisikobankModal(risk.id));
    actionsCell.appendChild(bankBtn);

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

    if (canReorder && index > 0) {
        const upBtn = createIconButton(
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5"></path><path d="m5 12 7-7 7 7"></path></svg>',
            t('moveUp')
        );
        upBtn.addEventListener('click', () => moveRisk(index, index - 1));
        actionsCell.appendChild(upBtn);
    }

    if (canReorder && index < currentAnalysis.risks.length - 1) {
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
        if (field === 'riskGroup') {
            renderRiskGroupDatalist();
            if (riskTableView.sort === 'group') {
                renderRisksTable();
            }
        }
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
    renderRiskGroupDatalist();
    originalRenderRisksTable();
    // Delay for å sikre at DOM er oppdatert
    setTimeout(setupTextareaAutoResize, 0);
};
