// Excel eksport med SheetJS

function exportToExcel() {
    if (!currentAnalysis) {
        alert('Ingen analyse å eksportere');
        return;
    }

    if (!window.XLSX) {
        alert('Excel-biblioteket er ikke lastet. Sjekk internettforbindelsen og last siden på nytt.');
        console.error('XLSX library not found');
        return;
    }

    try {
        generateExcelContent();
    } catch (error) {
        alert('Feil ved generering av Excel: ' + error.message);
        console.error('Excel export error:', error);
    }
}

function generateExcelContent() {
    // Helper function to safely get text value
    const safeText = (value) => {
        if (value === null || value === undefined) return '';
        return String(value);
    };

    const wb = XLSX.utils.book_new();

    // Ark 1: Metadata
    const metadataData = [
        ['RISKY'],
        [''],
        ['Analysenavn:', safeText(currentAnalysis.name)],
        ['Dato:', safeText(currentAnalysis.metadata.dato)],
        ['Tjeneste/system:', safeText(currentAnalysis.metadata.tjeneste)],
        ['Utført av:', safeText(currentAnalysis.metadata.utfortAv)],
        ['Deltakere:', safeText(currentAnalysis.metadata.deltakere)],
        ['Tjenesteeier/systemeier:', safeText(currentAnalysis.metadata.tjenesteeier)],
        ['Beskrivelse:', safeText(currentAnalysis.metadata.beskrivelse)],
        [''],
        ['Opprettet:', safeText(currentAnalysis.createdDate)],
        ['Sist endret:', formatNorwegianDate(currentAnalysis.lastModified)]
    ];

    const wsMetadata = XLSX.utils.aoa_to_sheet(metadataData);

    // Styling for metadata
    if (!wsMetadata['!cols']) wsMetadata['!cols'] = [];
    wsMetadata['!cols'][0] = { wch: 25 };
    wsMetadata['!cols'][1] = { wch: 50 };

    // Style header
    if (wsMetadata['A1']) {
        wsMetadata['A1'].s = {
            font: { bold: true, sz: 16, color: { rgb: '007BFF' } },
            alignment: { horizontal: 'left', vertical: 'center' }
        };
    }

    // Bold labels
    const labelCells = ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A11', 'A12'];
    labelCells.forEach(cell => {
        if (wsMetadata[cell]) {
            wsMetadata[cell].s = { font: { bold: true } };
        }
    });

    XLSX.utils.book_append_sheet(wb, wsMetadata, 'Metadata');

    // Ark 2: Statistikk (ny)
    const risks = currentAnalysis.risikoer || [];
    const total = risks.length;

    // Kategoriser risikoer
    let green = 0, yellow = 0, orange = 0, red = 0;
    let sumRiskLevel = 0;

    risks.forEach(risk => {
        const rn = risk.risikonivaa;
        sumRiskLevel += rn;

        if (rn >= 1 && rn <= 6) green++;
        else if (rn >= 7 && rn <= 12) yellow++;
        else if (rn >= 13 && rn <= 18) orange++;
        else if (rn >= 19 && rn <= 25) red++;
    });

    const avgRisk = total > 0 ? (sumRiskLevel / total).toFixed(1) : '0.0';

    const statsData = [
        ['STATISTIKK'],
        [''],
        ['Totalt antall risikoer:', total],
        [''],
        ['Røde risikoer (19-25):', red, total > 0 ? `${Math.round(red/total*100)}%` : '0%'],
        ['Oransje risikoer (13-18):', orange, total > 0 ? `${Math.round(orange/total*100)}%` : '0%'],
        ['Gule risikoer (7-12):', yellow, total > 0 ? `${Math.round(yellow/total*100)}%` : '0%'],
        ['Grønne risikoer (1-6):', green, total > 0 ? `${Math.round(green/total*100)}%` : '0%'],
        [''],
        ['Gjennomsnittlig risikonivå:', avgRisk]
    ];

    const wsStats = XLSX.utils.aoa_to_sheet(statsData);

    // Column widths
    if (!wsStats['!cols']) wsStats['!cols'] = [];
    wsStats['!cols'][0] = { wch: 30 };
    wsStats['!cols'][1] = { wch: 15 };
    wsStats['!cols'][2] = { wch: 15 };

    // Style header
    if (wsStats['A1']) {
        wsStats['A1'].s = {
            font: { bold: true, sz: 14 },
            alignment: { horizontal: 'left' }
        };
    }

    // Bold labels and add colors to risk categories
    const statsLabelCells = ['A3', 'A5', 'A6', 'A7', 'A8', 'A10'];
    statsLabelCells.forEach(cell => {
        if (wsStats[cell]) {
            wsStats[cell].s = { font: { bold: true } };
        }
    });

    // Color code risk levels
    if (wsStats['A5']) wsStats['A5'].s = { font: { bold: true, color: { rgb: 'DC3545' } } }; // Red
    if (wsStats['A6']) wsStats['A6'].s = { font: { bold: true, color: { rgb: 'FD7E14' } } }; // Orange
    if (wsStats['A7']) wsStats['A7'].s = { font: { bold: true, color: { rgb: 'FFC107' } } }; // Yellow
    if (wsStats['A8']) wsStats['A8'].s = { font: { bold: true, color: { rgb: '28A745' } } }; // Green

    XLSX.utils.book_append_sheet(wb, wsStats, 'Statistikk');

    // Ark 3: Risikoer
    const risikoerHeaders = [
        'Nr',
        'Risikoelement',
        'Sårbarhet/svakhet',
        'Eksisterende beskyttelse',
        'Eksisterende kontroll',
        'K',
        'I',
        'T',
        'Konsekvens',
        'Sannsynlighet',
        'Risikonivå',
        'Foreslåtte tiltak'
    ];

    const risikoerData = currentAnalysis.risikoer.map(r => [
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

    const wsRisikoer = XLSX.utils.aoa_to_sheet([risikoerHeaders, ...risikoerData]);

    // Column widths
    if (!wsRisikoer['!cols']) wsRisikoer['!cols'] = [];
    wsRisikoer['!cols'][0] = { wch: 5 };   // Nr
    wsRisikoer['!cols'][1] = { wch: 40 };  // Risikoelement
    wsRisikoer['!cols'][2] = { wch: 40 };  // Sårbarhet
    wsRisikoer['!cols'][3] = { wch: 30 };  // Beskyttelse
    wsRisikoer['!cols'][4] = { wch: 30 };  // Kontroll
    wsRisikoer['!cols'][5] = { wch: 5 };   // K
    wsRisikoer['!cols'][6] = { wch: 5 };   // I
    wsRisikoer['!cols'][7] = { wch: 5 };   // T
    wsRisikoer['!cols'][8] = { wch: 10 };  // Konsekvens
    wsRisikoer['!cols'][9] = { wch: 12 };  // Sannsynlighet
    wsRisikoer['!cols'][10] = { wch: 10 }; // Risikonivå
    wsRisikoer['!cols'][11] = { wch: 40 }; // Tiltak

    // Freeze first row (header)
    wsRisikoer['!freeze'] = { xSplit: 0, ySplit: 1 };

    // Style header row - bold with blue background
    const headerCells = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1'];
    headerCells.forEach(cell => {
        if (wsRisikoer[cell]) {
            wsRisikoer[cell].s = {
                font: { bold: true, color: { rgb: 'FFFFFF' } },
                fill: { fgColor: { rgb: '007BFF' } },
                alignment: { horizontal: 'center', vertical: 'center' }
            };
        }
    });

    // Apply conditional formatting to risk level column (K column)
    const range = XLSX.utils.decode_range(wsRisikoer['!ref']);
    for (let R = range.s.r + 1; R <= range.e.r; ++R) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: 10 }); // Column K (index 10)
        const cell = wsRisikoer[cellAddress];

        if (cell && cell.v !== undefined) {
            const rn = parseInt(cell.v) || 0;
            let fillColor, fontColor;

            if (rn >= 19) {
                fillColor = 'DC3545'; // Red
                fontColor = 'FFFFFF';
            } else if (rn >= 13) {
                fillColor = 'FD7E14'; // Orange
                fontColor = 'FFFFFF';
            } else if (rn >= 7) {
                fillColor = 'FFC107'; // Yellow
                fontColor = '000000';
            } else if (rn >= 1) {
                fillColor = '28A745'; // Green
                fontColor = 'FFFFFF';
            }

            if (fillColor) {
                cell.s = {
                    font: { bold: true, color: { rgb: fontColor } },
                    fill: { fgColor: { rgb: fillColor } },
                    alignment: { horizontal: 'center', vertical: 'center' }
                };
            }
        }
    }

    XLSX.utils.book_append_sheet(wb, wsRisikoer, 'Risikoer');

    // Ark 4: KIT-analyse
    const kit = calculateKIT(currentAnalysis.risikoer);
    const kitData = [
        ['KIT-ANALYSE'],
        ['Konfidensialitet, Integritet, Tilgjengelighet'],
        [''],
        ['Kombinasjon', 'Antall risikoer'],
        ['K (kun konfidensialitet)', kit.K],
        ['I (kun integritet)', kit.I],
        ['T (kun tilgjengelighet)', kit.T],
        ['K+I', kit.KI],
        ['K+T', kit.KT],
        ['I+T', kit.IT],
        ['K+I+T (alle tre)', kit.KIT],
        [''],
        ['TOTALT', kit.total]
    ];

    const wsKit = XLSX.utils.aoa_to_sheet(kitData);

    if (!wsKit['!cols']) wsKit['!cols'] = [];
    wsKit['!cols'][0] = { wch: 30 };
    wsKit['!cols'][1] = { wch: 15 };

    // Style header
    if (wsKit['A1']) {
        wsKit['A1'].s = {
            font: { bold: true, sz: 14 },
            alignment: { horizontal: 'left' }
        };
    }

    if (wsKit['A2']) {
        wsKit['A2'].s = {
            font: { italic: true },
            alignment: { horizontal: 'left' }
        };
    }

    // Style table header
    ['A4', 'B4'].forEach(cell => {
        if (wsKit[cell]) {
            wsKit[cell].s = {
                font: { bold: true, color: { rgb: 'FFFFFF' } },
                fill: { fgColor: { rgb: '6C757D' } },
                alignment: { horizontal: 'center', vertical: 'center' }
            };
        }
    });

    // Bold the TOTALT row
    ['A13', 'B13'].forEach(cell => {
        if (wsKit[cell]) {
            wsKit[cell].s = {
                font: { bold: true },
                alignment: { horizontal: 'left' }
            };
        }
    });

    XLSX.utils.book_append_sheet(wb, wsKit, 'KIT-analyse');

    // Ark 5: Heatmap (5x5 matrise med risikonumre)
    const heatmapData = [
        ['RISIKO HEATMAP'],
        [''],
        ['Konsekvens / Sannsynlighet', '1', '2', '3', '4', '5']
    ];

    // Create heatmap grid
    for (let k = 5; k >= 1; k--) {
        const row = [k.toString()];
        for (let s = 1; s <= 5; s++) {
            const risksInCell = currentAnalysis.risikoer
                .filter(r => r.konsekvens === k && r.sannsynlighet === s)
                .map(r => r.nr)
                .join(', ');
            row.push(risksInCell || '-');
        }
        heatmapData.push(row);
    }

    const wsHeatmap = XLSX.utils.aoa_to_sheet(heatmapData);

    if (!wsHeatmap['!cols']) wsHeatmap['!cols'] = [];
    wsHeatmap['!cols'][0] = { wch: 25 };
    for (let i = 1; i <= 5; i++) {
        wsHeatmap['!cols'][i] = { wch: 15 };
    }

    // Style header
    if (wsHeatmap['A1']) {
        wsHeatmap['A1'].s = {
            font: { bold: true, sz: 14 },
            alignment: { horizontal: 'left' }
        };
    }

    // Style table headers
    ['A3', 'B3', 'C3', 'D3', 'E3', 'F3'].forEach(cell => {
        if (wsHeatmap[cell]) {
            wsHeatmap[cell].s = {
                font: { bold: true, color: { rgb: 'FFFFFF' } },
                fill: { fgColor: { rgb: '007BFF' } },
                alignment: { horizontal: 'center', vertical: 'center' }
            };
        }
    });

    // Color code heatmap cells based on risk level
    for (let k = 5; k >= 1; k--) {
        const rowIndex = 8 - k; // Row 4-8 (since header is row 3)
        for (let s = 1; s <= 5; s++) {
            const colIndex = s; // Columns B-F (1-5)
            const cellAddress = XLSX.utils.encode_cell({ r: rowIndex, c: colIndex });
            const cell = wsHeatmap[cellAddress];

            if (cell) {
                const riskLevel = k * s;
                let fillColor, fontColor;

                if (riskLevel >= 19) {
                    fillColor = 'DC3545'; // Red
                    fontColor = 'FFFFFF';
                } else if (riskLevel >= 13) {
                    fillColor = 'FD7E14'; // Orange
                    fontColor = 'FFFFFF';
                } else if (riskLevel >= 7) {
                    fillColor = 'FFC107'; // Yellow
                    fontColor = '000000';
                } else {
                    fillColor = '28A745'; // Green
                    fontColor = 'FFFFFF';
                }

                cell.s = {
                    font: { bold: true, color: { rgb: fontColor } },
                    fill: { fgColor: { rgb: fillColor } },
                    alignment: { horizontal: 'center', vertical: 'center' }
                };
            }
        }

        // Bold row labels
        const rowLabelAddress = XLSX.utils.encode_cell({ r: rowIndex, c: 0 });
        if (wsHeatmap[rowLabelAddress]) {
            wsHeatmap[rowLabelAddress].s = {
                font: { bold: true },
                alignment: { horizontal: 'center', vertical: 'center' }
            };
        }
    }

    XLSX.utils.book_append_sheet(wb, wsHeatmap, 'Heatmap');

    // Ark 6: Egendefinert tekst
    const customTextTitle = currentAnalysis.metadata.customTextTitle || 'TILLEGGSINFORMASJON';
    const customText = currentAnalysis.metadata.customText || '';

    if (customText.trim()) {
        const customTextData = [
            [customTextTitle],
            [''],
            [customText]
        ];

        const wsCustomText = XLSX.utils.aoa_to_sheet(customTextData);

        if (!wsCustomText['!cols']) wsCustomText['!cols'] = [];
        wsCustomText['!cols'][0] = { wch: 100 };

        // Set row heights for better readability
        if (!wsCustomText['!rows']) wsCustomText['!rows'] = [];
        wsCustomText['!rows'][0] = { hpt: 20 };
        wsCustomText['!rows'][2] = { hpt: 15 };

        // Style header
        if (wsCustomText['A1']) {
            wsCustomText['A1'].s = {
                font: { bold: true, sz: 14 },
                alignment: { horizontal: 'left', wrapText: true }
            };
        }

        // Enable text wrapping for content
        if (wsCustomText['A3']) {
            wsCustomText['A3'].s = {
                alignment: { wrapText: true, vertical: 'top' }
            };
        }

        XLSX.utils.book_append_sheet(wb, wsCustomText, 'Tilleggsinformasjon');
    }

    // Ark 7: Tiltak og kommentarer (alltid inkluder alle i eksport)
    const risksWithComments = currentAnalysis.risikoer.filter(r => r.comments && r.comments.length > 0);

    if (risksWithComments.length > 0) {
        try {
            const sectionTitle = currentAnalysis.metadata.commentsSectionTitle || 'TILTAK OG KOMMENTARER';
            const commentsData = [[sectionTitle], ['']];
            let hasAnyVisibleComments = false;
            const styleMap = {}; // Track cells that need styling

            let currentRow = 2; // Start after title and blank row

            risksWithComments.forEach(risk => {
                let riskTitleAdded = false;

                risk.comments.forEach(comment => {
                    // Filtrer basert på synlige typer OG individuell synlighet
                    if (!isCommentTypeVisible(comment.type)) {
                        return;
                    }
                    if (comment.visible === false) {
                        return; // Hopp over skjulte kommentarer
                    }

                    hasAnyVisibleComments = true;

                    if (!riskTitleAdded) {
                        const riskTitle = `#${risk.nr || 0} - ${safeText(risk.risikoelement)}`;
                        commentsData.push([riskTitle]);

                        // Mark this row for bold styling
                        const cellAddr = XLSX.utils.encode_cell({ r: currentRow, c: 0 });
                        styleMap[cellAddr] = {
                            font: { bold: true, sz: 12 },
                            alignment: { horizontal: 'left' }
                        };
                        currentRow++;

                        commentsData.push(['']);
                        currentRow++;
                        riskTitleAdded = true;
                    }

                    const typeLabels = {
                        'tiltak': { label: 'TILTAK:', color: '28A745' },
                        'kommentar': { label: 'KOMMENTAR:', color: '17A2B8' },
                        'oppfolging': { label: 'OPPFØLGING:', color: 'FD7E14' },
                        'intern': { label: 'INTERN KOMMENTAR:', color: '6C757D' }
                    };
                    const typeConfig = typeLabels[comment.type] || { label: comment.type.toUpperCase() + ':', color: '000000' };

                    commentsData.push(['  ' + typeConfig.label]);

                    // Style the type label with color
                    const typeCellAddr = XLSX.utils.encode_cell({ r: currentRow, c: 0 });
                    styleMap[typeCellAddr] = {
                        font: { bold: true, color: { rgb: typeConfig.color } },
                        alignment: { horizontal: 'left' }
                    };
                    currentRow++;

                    commentsData.push(['    ' + safeText(comment.text)]);

                    // Add text wrapping for comment text
                    const textCellAddr = XLSX.utils.encode_cell({ r: currentRow, c: 0 });
                    styleMap[textCellAddr] = {
                        alignment: { wrapText: true, vertical: 'top' }
                    };
                    currentRow++;

                    if (comment.links && comment.links.length > 0) {
                        commentsData.push(['    Lenker:']);
                        currentRow++;

                        comment.links.forEach(link => {
                            const linkTitle = safeText(link.title);
                            const linkUrl = safeText(link.url);
                            commentsData.push(['      • ' + linkTitle, linkUrl]);

                            // Style link title in blue
                            const linkCellAddr = XLSX.utils.encode_cell({ r: currentRow, c: 0 });
                            styleMap[linkCellAddr] = {
                                font: { color: { rgb: '007BFF' } }
                            };

                            // Style URL in gray
                            const urlCellAddr = XLSX.utils.encode_cell({ r: currentRow, c: 1 });
                            styleMap[urlCellAddr] = {
                                font: { color: { rgb: '6C757D' }, sz: 9 }
                            };
                            currentRow++;
                        });
                    }

                    commentsData.push(['']);
                    currentRow++;
                });

                if (riskTitleAdded) {
                    commentsData.push(['']);
                    currentRow++;
                }
            });

            // Kun opprett arket hvis det finnes synlige kommentarer
            if (!hasAnyVisibleComments) {
                return;
            }

            const wsComments = XLSX.utils.aoa_to_sheet(commentsData);

            if (!wsComments['!cols']) wsComments['!cols'] = [];
            wsComments['!cols'][0] = { wch: 80 };
            wsComments['!cols'][1] = { wch: 60 };

            // Apply header style
            if (wsComments['A1']) {
                wsComments['A1'].s = {
                    font: { bold: true, sz: 14 },
                    alignment: { horizontal: 'left' }
                };
            }

            // Apply all collected styles
            Object.keys(styleMap).forEach(cellAddr => {
                if (wsComments[cellAddr]) {
                    wsComments[cellAddr].s = styleMap[cellAddr];
                }
            });

            XLSX.utils.book_append_sheet(wb, wsComments, 'Tiltak og kommentarer');
        } catch (e) {
            console.error('Error creating comments sheet:', e);
            // Skip comments sheet if there's an error
        }
    }

    // Lagre fil
    const tjeneste = safeText(currentAnalysis.metadata.tjeneste) || 'analyse';
    const dato = safeText(currentAnalysis.createdDate) || 'ukjent';
    const filename = `Risky_${tjeneste}_${dato}.xlsx`;
    XLSX.writeFile(wb, filename);
}
