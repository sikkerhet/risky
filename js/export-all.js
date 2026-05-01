// Eksporter alle formater i en ZIP-fil

async function exportAllFormats() {
    if (!currentAnalysis) {
        alert(t('noAnalysisToExport'));
        return;
    }

    try {
        // Vis laste-indikator
        const btn = document.getElementById('exportAllBtn');
        const originalText = btn.textContent;
        btn.textContent = t('exportAllGenerating');
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
        const serviceName = (currentAnalysis.metadata.service || 'analysis').replace(/[^a-zA-Z0-9æøåÆØÅ_-]/g, '_');
        const date = currentAnalysis.createdDate || 'unknown';
        const zipFilename = `Risky_${serviceName}_${date}_complete.zip`;

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
        alert(t('exportErrorGeneric'));

        // Tilbakestill knapp
        const btn = document.getElementById('exportAllBtn');
        btn.textContent = t('exportZip');
        btn.disabled = false;
    }
}

// Hjelpefunksjoner for filnavn
function getPDFFilename() {
    const serviceName = (currentAnalysis.metadata.service || 'analysis').replace(/[^a-zA-Z0-9æøåÆØÅ_-]/g, '_');
    const date = currentAnalysis.createdDate || 'unknown';
    return `Risky_${serviceName}_${date}.pdf`;
}

function getExcelFilename() {
    const serviceName = (currentAnalysis.metadata.service || 'analysis').replace(/[^a-zA-Z0-9æøåÆØÅ_-]/g, '_');
    const date = currentAnalysis.createdDate || 'unknown';
    return `Risky_${serviceName}_${date}.xlsx`;
}

function getJSONFilename() {
    const serviceName = (currentAnalysis.metadata.service || 'analysis').replace(/[^a-zA-Z0-9æøåÆØÅ_-]/g, '_');
    const date = currentAnalysis.createdDate || 'unknown';
    return `Risky_${serviceName}_${date}.json`;
}

// Generer JSON blob
function generateJSONBlob() {
    const jsonString = JSON.stringify(currentAnalysis, null, 2);
    return new Blob([jsonString], { type: 'application/json' });
}

// Generer Excel blob
function generateExcelBlob() {
    const wb = buildExcelWorkbook();

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

    if (metadata.service) {
        doc.text(`${t('serviceSystemLabel')}: ${safeText(metadata.service)}`, 20, yPos);
        yPos += 7;
    }
    if (metadata.date) {
        doc.text(`${t('dateLabel')}: ${safeText(metadata.date)}`, 20, yPos);
        yPos += 7;
    }
    if (metadata.performedBy) {
        doc.text(`${t('performedByLabel')}: ${safeText(metadata.performedBy)}`, 20, yPos);
        yPos += 7;
    }
    if (metadata.participants) {
        doc.text(`${t('participants')}: ${safeText(metadata.participants)}`, 20, yPos);
        yPos += 7;
    }
    if (metadata.serviceOwner) {
        doc.text(`${t('serviceOwnerPdfLabel')}: ${safeText(metadata.serviceOwner)}`, 20, yPos);
        yPos += 7;
    }
    if (metadata.description) {
        const description = safeText(metadata.description);
        const splitDescription = doc.splitTextToSize(description, 250);
        doc.text(`${t('description')}: ${splitDescription[0]}`, 20, yPos);
        yPos += 7;
        for (let i = 1; i < splitDescription.length; i++) {
            doc.text(splitDescription[i], 20, yPos);
            yPos += 7;
        }
    }

    yPos += 5;

    // Risikotabell
    const tableData = currentAnalysis.risks.map((risk, index) => [
        (index + 1).toString(),
        safeText(risk.riskElement),
        safeText(risk.vulnerability),
        safeText(risk.existingProtection),
        safeText(risk.existingControl),
        safeText(risk.K),
        safeText(risk.I),
        safeText(risk.T),
        safeText(risk.consequence),
        safeText(risk.probability),
        safeText(risk.riskLevel),
        safeText(risk.proposedMeasures)
    ]);

    doc.autoTable({
        startY: yPos,
        head: [[t('riskNumber'), t('riskElement'), t('vulnerabilityWeakness'), t('existingProtectionHeader'), t('existingControlHeader'), 'K', 'I', 'T', t('pdfConsequenceShort'), t('pdfProbabilityShort'), t('pdfRiskLevelShort'), t('proposedMeasures')]],
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
        const risksWithComments = currentAnalysis.risks.filter(r =>
            r.comments && r.comments.some(c => !c.resolved)
        );

        if (risksWithComments.length > 0) {
            doc.addPage();
            doc.setFontSize(16);
            doc.text(t('actionsAndCommentsDefaultTitle'), 20, 20);

            let yPosition = 35;
            risksWithComments.forEach((risk, idx) => {
                const visibleComments = risk.comments.filter(c => !c.resolved);
                if (visibleComments.length === 0) return;

                const riskIndex = currentAnalysis.risks.indexOf(risk) + 1;

                if (yPosition > 180) {
                    doc.addPage();
                    yPosition = 20;
                }

                doc.setFontSize(12);
                doc.setFont(undefined, 'bold');
                doc.text(`${t('riskSectionTitle')} ${riskIndex}: ${safeText(risk.riskElement)}`, 20, yPosition);
                yPosition += 7;

                doc.setFont(undefined, 'normal');
                doc.setFontSize(10);

                visibleComments.forEach(comment => {
                    if (yPosition > 185) {
                        doc.addPage();
                        yPosition = 20;
                    }

                    const timestamp = comment.timestamp ? new Date(comment.timestamp).toLocaleString(getCurrentLanguage() === 'en' ? 'en-GB' : 'no-NO') : '';
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
        doc.text(formatTranslation('pdfPageOf', { current: i, total: totalPages }), 148, 200, { align: 'center' });
    }

    // Returner blob
    return doc.output('blob');
}
