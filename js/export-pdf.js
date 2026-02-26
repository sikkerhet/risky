// PDF eksport med jsPDF

function exportToPDF() {
    if (!currentAnalysis) {
        alert('Ingen analyse å eksportere');
        return;
    }

    if (!window.jspdf) {
        alert('jsPDF-biblioteket er ikke lastet. Sjekk internettforbindelsen og last siden på nytt.');
        console.error('jsPDF library not found on window.jspdf');
        return;
    }

    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('l', 'mm', 'a4'); // Landscape for bedre tabellplass

        generatePDFContent(doc);
    } catch (error) {
        alert('Feil ved generering av PDF: ' + error.message);
        console.error('PDF export error:', error);
    }
}

function generatePDFContent(doc) {
    let yPos = 20;

    // Helper function to safely get text value
    const safeText = (value) => {
        if (value === null || value === undefined) return '';
        return String(value);
    };

    try {
        // Header
        doc.setFontSize(20);
        doc.setTextColor(0, 123, 255);
        doc.text('ROS-ANALYSE', 148, yPos, { align: 'center' });
        yPos += 10;

        doc.setFontSize(16);
        doc.text(safeText(currentAnalysis.name), 148, yPos, { align: 'center' });
        yPos += 15;
    } catch (e) {
        console.error('Error in header section:', e);
        throw new Error('Feil i header-seksjonen');
    }

    try {
        // Metadata
        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);

        const metadata = [
            ['Dato:', safeText(currentAnalysis.metadata.dato)],
            ['Tjeneste/system:', safeText(currentAnalysis.metadata.tjeneste)],
            ['Utført av:', safeText(currentAnalysis.metadata.utfortAv)],
            ['Deltakere:', safeText(currentAnalysis.metadata.deltakere)],
            ['Tjenesteeier:', safeText(currentAnalysis.metadata.tjenesteeier)],
            ['Beskrivelse:', safeText(currentAnalysis.metadata.beskrivelse)]
        ];

        metadata.forEach(([label, value]) => {
            doc.setFont(undefined, 'bold');
            doc.text(label, 20, yPos);
            doc.setFont(undefined, 'normal');
            doc.text(value, 60, yPos);
            yPos += 7;
        });

        yPos += 10;
    } catch (e) {
        console.error('Error in metadata section:', e);
        throw new Error('Feil i metadata-seksjonen');
    }

    try {
        // Heatmap
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text('RISIKO HEATMAP', 20, yPos);
        yPos += 10;

        const canvas = document.getElementById('heatmapCanvas');
        if (canvas) {
            const imgData = canvas.toDataURL('image/png');
            doc.addImage(imgData, 'PNG', 20, yPos, 120, 100);
            yPos += 110;
        }
    } catch (e) {
        console.error('Error in heatmap section:', e);
        throw new Error('Feil i heatmap-seksjonen');
    }

    try {
        // Ny side for risikoer
        doc.addPage();
        yPos = 20;

        doc.setFontSize(14);
        doc.text('RISIKOER', 20, yPos);
        yPos += 10;

        // Risikotabell
        const tableData = currentAnalysis.risikoer.map(r => [
            r.nr || 0,
            safeText(r.risikoelement),
            safeText(r.saarbarhet),
            safeText(r.eksisterendeBeskyttelse),
            safeText(r.eksisterendeKontroll),
            r.K || 0,
            r.I || 0,
            r.T || 0,
            r.konsekvens || 0,
            r.sannsynlighet || 0,
            r.risikonivaa || 0,
            safeText(r.foreslaatteTiltak)
        ]);

        doc.autoTable({
            startY: yPos,
            head: [['Nr', 'Risikoelement', 'Sårbarhet', 'Beskyttelse', 'Kontroll', 'K', 'I', 'T', 'K*', 'S*', 'RN*', 'Tiltak']],
            body: tableData,
            styles: { fontSize: 8, cellPadding: 2 },
            headStyles: { fillColor: [0, 123, 255], textColor: 255 },
            columnStyles: {
                0: { cellWidth: 10 },
                5: { cellWidth: 8 },
                6: { cellWidth: 8 },
                7: { cellWidth: 8 },
                8: { cellWidth: 8 },
                9: { cellWidth: 8 },
                10: { cellWidth: 10, fontStyle: 'bold' }
            },
            didParseCell: function(data) {
                // Fargelegg risikonivå
                if (data.column.index === 10 && data.section === 'body') {
                    const rn = parseInt(data.cell.text[0]) || 0;
                    if (rn >= 19) {
                        data.cell.styles.fillColor = [220, 53, 69];
                        data.cell.styles.textColor = [255, 255, 255];
                    } else if (rn >= 13) {
                        data.cell.styles.fillColor = [253, 126, 20];
                        data.cell.styles.textColor = [255, 255, 255];
                    } else if (rn >= 7) {
                        data.cell.styles.fillColor = [255, 193, 7];
                        data.cell.styles.textColor = [0, 0, 0];
                    } else {
                        data.cell.styles.fillColor = [40, 167, 69];
                        data.cell.styles.textColor = [255, 255, 255];
                    }
                }
            }
        });
    } catch (e) {
        console.error('Error in risks table section:', e);
        throw new Error('Feil i risiko-tabell-seksjonen');
    }

    try {
        // KIT-analyse på ny side eller etter tabell
        let finalY = doc.lastAutoTable.finalY || yPos;

        if (finalY > 170) {
            doc.addPage();
            yPos = 20;
        } else {
            yPos = finalY + 15;
        }

        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text('KIT-ANALYSE (Konfidensialitet, Integritet, Tilgjengelighet)', 20, yPos);
        yPos += 10;

        const kit = calculateKIT(currentAnalysis.risikoer);
        const kitData = [
            ['K (kun konfidensialitet)', `${kit.K} risikoer`],
            ['I (kun integritet)', `${kit.I} risikoer`],
            ['T (kun tilgjengelighet)', `${kit.T} risikoer`],
            ['K+I', `${kit.KI} risikoer`],
            ['K+T', `${kit.KT} risikoer`],
            ['I+T', `${kit.IT} risikoer`],
            ['K+I+T (alle tre)', `${kit.KIT} risikoer`],
            ['TOTALT', `${kit.total} risikoer`]
        ];

        doc.autoTable({
            startY: yPos,
            head: [['Kombinasjon', 'Antall']],
            body: kitData,
            styles: { fontSize: 10 },
            headStyles: { fillColor: [108, 117, 125] },
            columnStyles: {
                0: { cellWidth: 80 },
                1: { cellWidth: 40 }
            },
            didParseCell: function(data) {
                if (data.row.index === kitData.length - 1) {
                    data.cell.styles.fontStyle = 'bold';
                }
            }
        });
    } catch (e) {
        console.error('Error in KIT analysis section:', e);
        throw new Error('Feil i KIT-analyse-seksjonen');
    }

    // Legg til kommentarer - Filtrer basert på synlige typer
    try {
        const risksWithComments = currentAnalysis.risikoer.filter(r => r.comments && r.comments.length > 0);

        if (risksWithComments.length > 0) {
            // Sjekk om det finnes noen synlige kommentarer
            let hasAnyVisibleComments = false;
            risksWithComments.forEach(risk => {
                risk.comments.forEach(comment => {
                    if (isCommentTypeVisible(comment.type)) {
                        hasAnyVisibleComments = true;
                    }
                });
            });

            if (!hasAnyVisibleComments) {
                // Ingen synlige kommentarer, hopp over denne seksjonen
                return;
            }
            doc.addPage();
            yPos = 20;

            doc.setFontSize(14);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(0, 0, 0);
            const sectionTitle = currentAnalysis.metadata.commentsSectionTitle || 'TILTAK OG KOMMENTARER';
            doc.text(sectionTitle, 20, yPos);
            yPos += 15;

            risksWithComments.forEach(risk => {
                let riskTitleAdded = false;

                risk.comments.forEach((comment, idx) => {
                    // Filtrer basert på synlige typer OG individuell synlighet
                    if (!isCommentTypeVisible(comment.type)) {
                        return;
                    }
                    if (comment.visible === false) {
                        return; // Hopp over skjulte kommentarer
                    }

                    try {
                        // Sjekk om vi trenger ny side først
                        if (yPos > 260) {
                            doc.addPage();
                            yPos = 20;
                        }

                        // Legg til risikotittel første gang
                        if (!riskTitleAdded) {
                            doc.setFontSize(12);
                            doc.setFont(undefined, 'bold');
                            doc.setTextColor(0, 0, 0);
                            const titleText = `#${risk.nr || 0} - ${safeText(risk.risikoelement)}`;
                            const titleLines = doc.splitTextToSize(titleText, 250);
                            doc.text(titleLines, 20, yPos);
                            yPos += titleLines.length * 6 + 3;
                            riskTitleAdded = true;
                        }

                        // Type label med fargekoding
                        doc.setFontSize(10);
                        doc.setFont(undefined, 'bold');

                        const typeConfig = {
                            'tiltak': { color: [40, 167, 69], label: 'TILTAK:' },
                            'kommentar': { color: [23, 162, 184], label: 'KOMMENTAR:' },
                            'oppfolging': { color: [253, 126, 20], label: 'OPPFØLGING:' },
                            'intern': { color: [108, 117, 125], label: 'INTERN KOMMENTAR:' }
                        };

                        const config = typeConfig[comment.type] || typeConfig['kommentar'];
                        doc.setTextColor(config.color[0], config.color[1], config.color[2]);
                        doc.text(config.label, 25, yPos);
                        yPos += 7;

                        // Kommentar tekst
                        doc.setFont(undefined, 'normal');
                        doc.setTextColor(0, 0, 0);
                        const commentText = safeText(comment.text);

                        if (commentText && commentText.length > 0) {
                            const lines = doc.splitTextToSize(commentText, 250);
                            doc.text(lines, 25, yPos);
                            yPos += lines.length * 5 + 3;
                        }

                        // Lenker
                        if (comment.links && Array.isArray(comment.links) && comment.links.length > 0) {
                            doc.setFont(undefined, 'bold');
                            doc.setTextColor(100, 100, 100);
                            doc.text('Lenker:', 25, yPos);
                            yPos += 6;

                            comment.links.forEach((link, linkIdx) => {
                                try {
                                    if (yPos > 260) {
                                        doc.addPage();
                                        yPos = 20;
                                    }

                                    // Tittel
                                    const linkTitle = safeText(link.title);
                                    if (linkTitle) {
                                        doc.setFont(undefined, 'normal');
                                        doc.setTextColor(0, 123, 255);
                                        doc.text(`  • ${linkTitle}`, 25, yPos);
                                        yPos += 5;
                                    }

                                    // URL
                                    const linkUrl = safeText(link.url);
                                    if (linkUrl && linkUrl.trim()) {
                                        doc.setTextColor(100, 100, 100);
                                        doc.setFontSize(9);
                                        const urlLines = doc.splitTextToSize(`    ${linkUrl}`, 245);
                                        doc.text(urlLines, 25, yPos);
                                        yPos += urlLines.length * 4 + 2;
                                        doc.setFontSize(10);
                                    }
                                } catch (linkError) {
                                    console.error('Error processing link:', linkError, link);
                                }
                            });
                            yPos += 3;
                        }

                        yPos += 8; // Mellomrom mellom kommentarer
                    } catch (commentError) {
                        console.error('Error processing comment:', commentError, comment);
                    }
                });

                if (riskTitleAdded) {
                    yPos += 5;
                }
            });
        }
    } catch (e) {
        console.error('Error in comments section:', e);
        // Don't throw - just skip comments if there's an error
    }

    // Lagre PDF
    const tjeneste = safeText(currentAnalysis.metadata.tjeneste) || 'analyse';
    const dato = safeText(currentAnalysis.createdDate) || 'ukjent';
    const filename = `ROS_${tjeneste}_${dato}.pdf`;
    doc.save(filename);
}
