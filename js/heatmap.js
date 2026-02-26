// Heatmap rendering og interaksjon

function renderHeatmap() {
    const canvas = document.getElementById('heatmapCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Dimensjoner
    const margin = 80;
    const gridWidth = width - 2 * margin;
    const gridHeight = height - 2 * margin;
    const cellWidth = gridWidth / 5;
    const cellHeight = gridHeight / 5;

    // Tegn grid
    for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= 5; j++) {
            if (i === 0 || j === 0) continue; // Skip første rad/kolonne

            const x = margin + (i - 1) * cellWidth;
            const y = height - margin - j * cellHeight;

            const sannsynlighet = i;
            const konsekvens = j;
            const risikonivaa = sannsynlighet * konsekvens;

            // Fargelegg celle basert på risikonivå
            ctx.fillStyle = getRiskColor(risikonivaa);
            ctx.fillRect(x, y, cellWidth, cellHeight);

            // Tegn border
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 1;
            ctx.strokeRect(x, y, cellWidth, cellHeight);

            // Tegn risikonivå i celle
            ctx.fillStyle = '#000';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(risikonivaa.toString(), x + cellWidth / 2, y + 5);
        }
    }

    // Tegn akser
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // X-akse label (Sannsynlighet)
    ctx.fillText('Sannsynlighet', width / 2, height - 30);

    // Y-akse label (Konsekvens)
    ctx.save();
    ctx.translate(30, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Konsekvens', 0, 0);
    ctx.restore();

    // Tegn tall på akser
    ctx.font = '14px Arial';
    for (let i = 1; i <= 5; i++) {
        // X-akse tall
        const x = margin + (i - 0.5) * cellWidth;
        ctx.fillText(i.toString(), x, height - margin + 20);

        // Y-akse tall
        const y = height - margin - (i - 0.5) * cellHeight;
        ctx.textAlign = 'right';
        ctx.fillText(i.toString(), margin - 15, y);
        ctx.textAlign = 'center';
    }

    // Plasser risikoer på heatmap
    if (currentAnalysis && currentAnalysis.risikoer) {
        currentAnalysis.risikoer.forEach(risk => {
            if (risk.sannsynlighet > 0 && risk.konsekvens > 0) {
                const x = margin + (risk.sannsynlighet - 0.5) * cellWidth;
                const y = height - margin - (risk.konsekvens - 0.5) * cellHeight;

                // Tegn sirkel med risikonummer
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(x, y + 30, 15, 0, 2 * Math.PI);
                ctx.fill();
                ctx.strokeStyle = '#000';
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.fillStyle = '#000';
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(risk.nr.toString(), x, y + 30);
            }
        });
    }
}

// Klikk-håndtering for heatmap
function setupHeatmapClick() {
    const canvas = document.getElementById('heatmapCanvas');
    if (!canvas) return;

    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Beregn hvilken celle som ble klikket
        const margin = 80;
        const gridWidth = canvas.width - 2 * margin;
        const gridHeight = canvas.height - 2 * margin;
        const cellWidth = gridWidth / 5;
        const cellHeight = gridHeight / 5;

        // Sjekk om klikk er innenfor grid
        if (x >= margin && x <= canvas.width - margin &&
            y >= margin && y <= canvas.height - margin) {

            const sannsynlighet = Math.floor((x - margin) / cellWidth) + 1;
            const konsekvens = 5 - Math.floor((y - margin) / cellHeight);

            // Finn risikoer i denne cellen
            const risksInCell = currentAnalysis.risikoer.filter(r =>
                r.sannsynlighet === sannsynlighet && r.konsekvens === konsekvens
            );

            if (risksInCell.length === 1) {
                // Bare én risiko - scroll direkte
                scrollToRisk(risksInCell[0].id);
            } else if (risksInCell.length > 1) {
                // Flere risikoer - vis velger
                showRiskSelector(risksInCell, event.clientX, event.clientY);
            }
        }
    });

    canvas.style.cursor = 'pointer';
}

// Vis velger for overlappende risikoer
function showRiskSelector(risks, x, y) {
    // Fjern eksisterende velger
    const existing = document.getElementById('riskSelector');
    if (existing) existing.remove();

    const selector = document.createElement('div');
    selector.id = 'riskSelector';
    selector.className = 'risk-selector';
    selector.style.position = 'fixed';
    selector.style.left = x + 'px';
    selector.style.top = y + 'px';

    const title = document.createElement('div');
    title.className = 'risk-selector-title';
    title.textContent = `${risks.length} risikoer i denne cellen:`;
    selector.appendChild(title);

    risks.forEach(risk => {
        const item = document.createElement('div');
        item.className = 'risk-selector-item';
        item.textContent = `${risk.nr}. ${risk.risikoelement.substring(0, 50)}...`;
        item.onclick = () => {
            scrollToRisk(risk.id);
            selector.remove();
        };
        selector.appendChild(item);
    });

    document.body.appendChild(selector);

    // Lukk ved klikk utenfor
    setTimeout(() => {
        const closeHandler = (e) => {
            if (!selector.contains(e.target)) {
                selector.remove();
                document.removeEventListener('click', closeHandler);
            }
        };
        document.addEventListener('click', closeHandler);
    }, 100);
}

// Scroll til risiko i tabellen
function scrollToRisk(riskId) {
    const row = document.querySelector(`tr[data-risk-id="${riskId}"]`);
    if (row) {
        row.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Highlight rad
        row.style.backgroundColor = '#fff3cd';
        setTimeout(() => {
            row.style.backgroundColor = '';
        }, 2000);
    }
}
