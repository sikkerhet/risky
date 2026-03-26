const HEATMAP_GRID_SIZE = 5;
const HEATMAP_MARGIN = 80;

function getHeatmapLayout(canvas) {
    const gridWidth = canvas.width - 2 * HEATMAP_MARGIN;
    const gridHeight = canvas.height - 2 * HEATMAP_MARGIN;

    return {
        margin: HEATMAP_MARGIN,
        gridWidth,
        gridHeight,
        cellWidth: gridWidth / HEATMAP_GRID_SIZE,
        cellHeight: gridHeight / HEATMAP_GRID_SIZE
    };
}

function drawHeatmapGrid(ctx, canvas, layout) {
    for (let probability = 1; probability <= HEATMAP_GRID_SIZE; probability++) {
        for (let consequence = 1; consequence <= HEATMAP_GRID_SIZE; consequence++) {
            const x = layout.margin + (probability - 1) * layout.cellWidth;
            const y = canvas.height - layout.margin - consequence * layout.cellHeight;
            const riskLevel = probability * consequence;

            ctx.fillStyle = getRiskColor(riskLevel);
            ctx.fillRect(x, y, layout.cellWidth, layout.cellHeight);

            ctx.strokeStyle = 'rgba(33, 37, 41, 0.28)';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, layout.cellWidth, layout.cellHeight);

            ctx.fillStyle = '#1f2933';
            ctx.font = '600 13px "Segoe UI", sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(String(riskLevel), x + layout.cellWidth / 2, y + 6);
        }
    }
}

function drawHeatmapAxes(ctx, canvas, layout) {
    ctx.fillStyle = '#1f2933';
    ctx.font = '600 15px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.fillText(t('probability'), canvas.width / 2, canvas.height - 28);

    ctx.save();
    ctx.translate(30, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(t('consequence'), 0, 0);
    ctx.restore();

    ctx.font = '500 13px "Segoe UI", sans-serif';
    for (let i = 1; i <= HEATMAP_GRID_SIZE; i++) {
        const x = layout.margin + (i - 0.5) * layout.cellWidth;
        const y = canvas.height - layout.margin - (i - 0.5) * layout.cellHeight;

        ctx.fillText(String(i), x, canvas.height - layout.margin + 18);
        ctx.textAlign = 'right';
        ctx.fillText(String(i), layout.margin - 14, y);
        ctx.textAlign = 'center';
    }
}

function groupRisksByHeatmapCell(risks) {
    return risks.reduce((groups, risk) => {
        if (risk.probability > 0 && risk.consequence > 0) {
            const key = `${risk.consequence}-${risk.probability}`;
            if (!groups[key]) {
                groups[key] = [];
            }
            groups[key].push(risk);
        }

        return groups;
    }, {});
}

function drawSingleRiskMarker(ctx, x, y, risk) {
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#1f2933';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#1f2933';
    ctx.font = '700 12px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(risk.number), x, y);
}

function drawMultiRiskMarker(ctx, x, y, risks) {
    const radius = Math.min(20 + risks.length * 2, 30);

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#1f2933';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.fillStyle = '#1f2933';
    ctx.font = '700 14px "Segoe UI", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(risks.length), x, y);

    ctx.font = '600 10px "Segoe UI", sans-serif';
    const angleStep = (Math.PI * 2) / risks.length;
    const labelRadius = radius + 14;

    risks.forEach((risk, index) => {
        const angle = index * angleStep - Math.PI / 2;
        const labelX = x + Math.cos(angle) * labelRadius;
        const labelY = y + Math.sin(angle) * labelRadius;

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(labelX, labelY, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#52606d';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = '#1f2933';
        ctx.fillText(String(risk.number), labelX, labelY);
    });
}

function drawRiskMarkers(ctx, canvas, layout) {
    if (!currentAnalysis || !currentAnalysis.risks) {
        return;
    }

    const groupedRisks = groupRisksByHeatmapCell(currentAnalysis.risks);

    Object.values(groupedRisks).forEach((risks) => {
        const firstRisk = risks[0];
        const x = layout.margin + (firstRisk.probability - 0.5) * layout.cellWidth;
        const y = canvas.height - layout.margin - (firstRisk.consequence - 0.5) * layout.cellHeight + 22;

        if (risks.length === 1) {
            drawSingleRiskMarker(ctx, x, y, firstRisk);
            return;
        }

        drawMultiRiskMarker(ctx, x, y, risks);
    });
}

function renderHeatmap() {
    const canvas = document.getElementById('heatmapCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const layout = getHeatmapLayout(canvas);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHeatmapGrid(ctx, canvas, layout);
    drawHeatmapAxes(ctx, canvas, layout);
    drawRiskMarkers(ctx, canvas, layout);
}

function setupHeatmapClick() {
    const canvas = document.getElementById('heatmapCanvas');
    if (!canvas || canvas.dataset.clickBound === 'true') return;

    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const layout = getHeatmapLayout(canvas);

        if (
            x < layout.margin ||
            x > canvas.width - layout.margin ||
            y < layout.margin ||
            y > canvas.height - layout.margin
        ) {
            return;
        }

        const probability = Math.floor((x - layout.margin) / layout.cellWidth) + 1;
        const consequence = HEATMAP_GRID_SIZE - Math.floor((y - layout.margin) / layout.cellHeight);
        const risksInCell = currentAnalysis.risks.filter((risk) =>
            risk.probability === probability && risk.consequence === consequence
        );

        if (risksInCell.length === 1) {
            scrollToRisk(risksInCell[0].id);
        } else if (risksInCell.length > 1) {
            showRiskSelector(risksInCell, event.clientX, event.clientY);
        }
    });

    canvas.style.cursor = 'pointer';
    canvas.dataset.clickBound = 'true';
}

function showRiskSelector(risks, x, y) {
    const existing = document.getElementById('riskSelector');
    if (existing) existing.remove();

    const selector = document.createElement('div');
    selector.id = 'riskSelector';
    selector.className = 'risk-selector';
    selector.style.position = 'fixed';
    selector.style.left = `${x}px`;
    selector.style.top = `${y}px`;

    const title = document.createElement('div');
    title.className = 'risk-selector-title';
    title.textContent = `${risks.length} ${t('risksInCell')}`;
    selector.appendChild(title);

    risks.forEach((risk) => {
        const item = document.createElement('div');
        item.className = 'risk-selector-item';
        item.textContent = `${risk.number}. ${risk.riskElement.substring(0, 50)}...`;
        item.onclick = () => {
            selector.remove();
            scrollToRisk(risk.id);
        };
        selector.appendChild(item);
    });

    document.body.appendChild(selector);

    setTimeout(() => {
        document.addEventListener('click', function closeSelector(event) {
            if (!selector.contains(event.target)) {
                selector.remove();
                document.removeEventListener('click', closeSelector);
            }
        });
    }, 0);
}
