// Eksporter alle formater i en ZIP-fil

async function exportAllFormats() {
    if (!currentAnalysis) {
        alert('Ingen analyse å eksportere');
        return;
    }

    try {
        // Vis laste-indikator
        const btn = document.getElementById('exportAllBtn');
        const originalText = btn.textContent;
        btn.textContent = '⏳ Genererer...';
        btn.disabled = true;

        // Opprett ZIP-fil
        const zip = new JSZip();

        // 1. Generer PDF blob
        const pdfBlob = await generatePDFBlob();
        zip.file(getPDFFilename(), pdfBlob);

        // 2. Generer Excel blob
        const excelBlob = generateExcelBlob();
        zip.file(getExcelFilename(), excelBlob);

        // 3. Generer JSON blob
        const jsonBlob = generateJSONBlob();
        zip.file(getJSONFilename(), jsonBlob);

        // Generer ZIP-fil
        const zipBlob = await zip.generateAsync({ type: 'blob' });

        // Last ned ZIP
        const tjeneste = (currentAnalysis.metadata.tjeneste || 'analyse').replace(/[^a-zA-Z0-9æøåÆØÅ_-]/g, '_');
        const dato = currentAnalysis.createdDate || 'ukjent';
        const zipFilename = `Risky_${tjeneste}_${dato}_komplett.zip`;

        const link = document.createElement('a');
        link.href = URL.createObjectURL(zipBlob);
        link.download = zipFilename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        // Tilbakestill knapp
        btn.textContent = originalText;
        btn.disabled = false;

    } catch (error) {
        console.error('Feil ved eksport av alle formater:', error);
        alert('Det oppsto en feil ved eksport. Se konsollen for detaljer.');

        // Tilbakestill knapp
        const btn = document.getElementById('exportAllBtn');
        btn.textContent = '📦 Eksporter alt (ZIP)';
        btn.disabled = false;
    }
}

// Hjelpefunksjoner for filnavn
function getPDFFilename() {
    const tjeneste = (currentAnalysis.metadata.tjeneste || 'analyse').replace(/[^a-zA-Z0-9æøåÆØÅ_-]/g, '_');
    const dato = currentAnalysis.createdDate || 'ukjent';
    return `Risky_${tjeneste}_${dato}.pdf`;
}

function getExcelFilename() {
    const tjeneste = (currentAnalysis.metadata.tjeneste || 'analyse').replace(/[^a-zA-Z0-9æøåÆØÅ_-]/g, '_');
    const dato = currentAnalysis.createdDate || 'ukjent';
    return `Risky_${tjeneste}_${dato}.xlsx`;
}

function getJSONFilename() {
    const tjeneste = (currentAnalysis.metadata.tjeneste || 'analyse').replace(/[^a-zA-Z0-9æøåÆØÅ_-]/g, '_');
    const dato = currentAnalysis.createdDate || 'ukjent';
    return `Risky_${tjeneste}_${dato}.json`;
}

// Generer JSON blob
function generateJSONBlob() {
    const jsonString = JSON.stringify(currentAnalysis, null, 2);
    return new Blob([jsonString], { type: 'application/json' });
}

// Generer Excel blob
function generateExcelBlob() {
    // Sikkerhetsfunksjon for å unngå feil med undefined/null verdier
    function safeText(value) {
        if (value === null || value === undefined) return '';
        return String(value);
    }

    const wb = XLSX.utils.book_new();

    // Metadata-ark
    const metadataData = [
        ['Risky - Risikoanalyse'],
        [''],
        ['Informasjon', 'Verdi'],
        ['Tjeneste/system', safeText(currentAnalysis.metadata.tjeneste)],
        ['Dato', safeText(currentAnalysis.metadata.dato)],
        ['Utført av', safeText(currentAnalysis.metadata.utfortAv)],
        ['Deltakere', safeText(currentAnalysis.metadata.deltakere)],
        ['Tjenesteeier', safeText(currentAnalysis.metadata.tjenesteeier)],
        ['Beskrivelse', safeText(currentAnalysis.metadata.beskrivelse)],
        [''],
        ['Opprettet', safeText(currentAnalysis.createdDate)],
        ['Sist endret', safeText(currentAnalysis.lastModified)]
    ];

    const wsMetadata = XLSX.utils.aoa_to_sheet(metadataData);
    if (!wsMetadata['!cols']) wsMetadata['!cols'] = [];
    wsMetadata['!cols'][0] = { wch: 20 };
    wsMetadata['!cols'][1] = { wch: 60 };
    XLSX.utils.book_append_sheet(wb, wsMetadata, 'Metadata');

    // Risikoer-ark
    const risksData = [
        ['Nr', 'Risikoelement', 'Sårbarhet/svakhet', 'Eksisterende beskyttelse', 'Eksisterende kontroll',
         'K', 'I', 'T', 'K*', 'S*', 'RN*', 'Foreslåtte tiltak']
    ];

    currentAnalysis.risikoer.forEach((risk, index) => {
        risksData.push([
            index + 1,
            safeText(risk.risikoelement),
            safeText(risk.saarbarhet),
            safeText(risk.eksisterendeBeskyttelse),
            safeText(risk.eksisterendeKontroll),
            safeText(risk.K),
            safeText(risk.I),
            safeText(risk.T),
            safeText(risk.konsekvens),
            safeText(risk.sannsynlighet),
            safeText(risk.risikonivaa),
            safeText(risk.foreslaatteTiltak)
        ]);
    });

    const wsRisks = XLSX.utils.aoa_to_sheet(risksData);
    if (!wsRisks['!cols']) wsRisks['!cols'] = [];
    wsRisks['!cols'][0] = { wch: 5 };
    wsRisks['!cols'][1] = { wch: 25 };
    wsRisks['!cols'][2] = { wch: 30 };
    wsRisks['!cols'][3] = { wch: 25 };
    wsRisks['!cols'][4] = { wch: 25 };
    wsRisks['!cols'][5] = { wch: 4 };
    wsRisks['!cols'][6] = { wch: 4 };
    wsRisks['!cols'][7] = { wch: 4 };
    wsRisks['!cols'][8] = { wch: 4 };
    wsRisks['!cols'][9] = { wch: 4 };
    wsRisks['!cols'][10] = { wch: 5 };
    wsRisks['!cols'][11] = { wch: 30 };

    XLSX.utils.book_append_sheet(wb, wsRisks, 'Risikoer');

    // Kommentarer-ark (hvis det finnes kommentarer)
    if (currentAnalysis.risikoer && currentAnalysis.risikoer.some(r => r.kommentarer && r.kommentarer.length > 0)) {
        try {
            const commentsData = [
                ['Tiltak og kommentarer'],
                [''],
                ['Risiko Nr', 'Risikoelement', 'Kommentar']
            ];

            let hasAnyVisibleComments = false;

            currentAnalysis.risikoer.forEach((risk, index) => {
                if (risk.kommentarer && risk.kommentarer.length > 0) {
                    const visibleComments = risk.kommentarer.filter(c => !c.resolved);
                    if (visibleComments.length > 0) {
                        hasAnyVisibleComments = true;
                        visibleComments.forEach(comment => {
                            const timestamp = comment.timestamp ? new Date(comment.timestamp).toLocaleString('no-NO') : '';
                            const commentText = `[${timestamp}] ${safeText(comment.text)}`;
                            commentsData.push([
                                index + 1,
                                safeText(risk.risikoelement),
                                commentText
                            ]);
                        });
                        commentsData.push(['---']);
                        commentsData.push(['']);
                    }
                }
            });

            if (hasAnyVisibleComments) {
                const wsComments = XLSX.utils.aoa_to_sheet(commentsData);
                if (!wsComments['!cols']) wsComments['!cols'] = [];
                wsComments['!cols'][0] = { wch: 20 };
                wsComments['!cols'][1] = { wch: 50 };
                wsComments['!cols'][2] = { wch: 60 };
                XLSX.utils.book_append_sheet(wb, wsComments, 'Tiltak og kommentarer');
            }
        } catch (e) {
            console.error('Error creating comments sheet:', e);
        }
    }

    // Returner blob
    const wbout = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
    return new Blob([wbout], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}

// Generer PDF blob
async function generatePDFBlob() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('landscape', 'mm', 'a4');

    function safeText(value) {
        if (value === null || value === undefined) return '';
        return String(value).replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
    }

    // Metadata
    doc.setFontSize(20);
    doc.text('Risky', 20, 20);

    doc.setFontSize(12);
    let yPos = 35;
    const metadata = currentAnalysis.metadata;

    if (metadata.tjeneste) {
        doc.text(`Tjeneste/system: ${safeText(metadata.tjeneste)}`, 20, yPos);
        yPos += 7;
    }
    if (metadata.dato) {
        doc.text(`Dato: ${safeText(metadata.dato)}`, 20, yPos);
        yPos += 7;
    }
    if (metadata.utfortAv) {
        doc.text(`Utført av: ${safeText(metadata.utfortAv)}`, 20, yPos);
        yPos += 7;
    }
    if (metadata.deltakere) {
        doc.text(`Deltakere: ${safeText(metadata.deltakere)}`, 20, yPos);
        yPos += 7;
    }
    if (metadata.tjenesteeier) {
        doc.text(`Tjenesteeier: ${safeText(metadata.tjenesteeier)}`, 20, yPos);
        yPos += 7;
    }
    if (metadata.beskrivelse) {
        const beskrivelse = safeText(metadata.beskrivelse);
        const splitBeskrivelse = doc.splitTextToSize(beskrivelse, 250);
        doc.text(`Beskrivelse: ${splitBeskrivelse[0]}`, 20, yPos);
        yPos += 7;
        for (let i = 1; i < splitBeskrivelse.length; i++) {
            doc.text(splitBeskrivelse[i], 20, yPos);
            yPos += 7;
        }
    }

    yPos += 5;

    // Risikotabell
    const tableData = currentAnalysis.risikoer.map((risk, index) => [
        (index + 1).toString(),
        safeText(risk.risikoelement),
        safeText(risk.saarbarhet),
        safeText(risk.eksisterendeBeskyttelse),
        safeText(risk.eksisterendeKontroll),
        safeText(risk.K),
        safeText(risk.I),
        safeText(risk.T),
        safeText(risk.konsekvens),
        safeText(risk.sannsynlighet),
        safeText(risk.risikonivaa),
        safeText(risk.foreslaatteTiltak)
    ]);

    doc.autoTable({
        startY: yPos,
        head: [['Nr', 'Risikoelement', 'Sårbarhet', 'Beskyttelse', 'Kontroll', 'K', 'I', 'T', 'K*', 'S*', 'RN*', 'Tiltak']],
        body: tableData,
        styles: { fontSize: 8, cellPadding: 2 },
        headStyles: { fillColor: [46, 95, 142], textColor: 255 },
        columnStyles: {
            0: { cellWidth: 10 },
            1: { cellWidth: 35 },
            2: { cellWidth: 35 },
            3: { cellWidth: 30 },
            4: { cellWidth: 30 },
            5: { cellWidth: 8 },
            6: { cellWidth: 8 },
            7: { cellWidth: 8 },
            8: { cellWidth: 10 },
            9: { cellWidth: 10 },
            10: { cellWidth: 10 },
            11: { cellWidth: 35 }
        },
        margin: { left: 10, right: 10 },
        rowPageBreak: 'avoid'
    });

    // Kommentarer (hvis de finnes)
    try {
        const risksWithComments = currentAnalysis.risikoer.filter(r =>
            r.kommentarer && r.kommentarer.some(c => !c.resolved)
        );

        if (risksWithComments.length > 0) {
            doc.addPage();
            doc.setFontSize(16);
            doc.text('Tiltak og kommentarer', 20, 20);

            let yPosition = 35;
            risksWithComments.forEach((risk, idx) => {
                const visibleComments = risk.kommentarer.filter(c => !c.resolved);
                if (visibleComments.length === 0) return;

                const riskIndex = currentAnalysis.risikoer.indexOf(risk) + 1;

                if (yPosition > 180) {
                    doc.addPage();
                    yPosition = 20;
                }

                doc.setFontSize(12);
                doc.setFont(undefined, 'bold');
                doc.text(`Risiko ${riskIndex}: ${safeText(risk.risikoelement)}`, 20, yPosition);
                yPosition += 7;

                doc.setFont(undefined, 'normal');
                doc.setFontSize(10);

                visibleComments.forEach(comment => {
                    if (yPosition > 185) {
                        doc.addPage();
                        yPosition = 20;
                    }

                    const timestamp = comment.timestamp ? new Date(comment.timestamp).toLocaleString('no-NO') : '';
                    const commentText = `• [${timestamp}] ${safeText(comment.text)}`;
                    const splitText = doc.splitTextToSize(commentText, 250);

                    splitText.forEach(line => {
                        if (yPosition > 185) {
                            doc.addPage();
                            yPosition = 20;
                        }
                        doc.text(line, 25, yPosition);
                        yPosition += 6;
                    });
                });

                yPosition += 5;
            });
        }
    } catch (e) {
        console.error('Error in comments section:', e);
    }

    // Sidetall
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.text(`Side ${i} av ${totalPages}`, 148, 200, { align: 'center' });
    }

    // Returner blob
    return doc.output('blob');
}
