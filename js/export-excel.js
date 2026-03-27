// Excel eksport med SheetJS

function exportToExcel() {
    if (!currentAnalysis) {
        alert(t('noAnalysisToExport'));
        return;
    }

    if (!window.XLSX) {
        alert(t('excelLibraryMissing'));
        console.error('XLSX library not found');
        return;
    }

    try {
        generateExcelContent();
    } catch (error) {
        alert(`${t('excelGenerationError')}: ${error.message}`);
        console.error('Excel export error:', error);
    }
}

function generateExcelContent() {
    // Helper function to safely get text value
    const safeText = (value) => {
        if (value === null || value === undefined) return '';
        return String(value);
    };

    const safeSheetName = (name) => safeText(name).replace(/[\\/*?:[\]]/g, ' ').slice(0, 31) || 'Sheet';
    const safeFilenamePart = (value) => safeText(value).replace(/[<>:"/\\|?*\u0000-\u001F]/g, '_').trim();
    const riskCategory = (riskLevel) => getRiskLevel(riskLevel || 0);
    const sectionHeaderStyle = {
        font: { bold: true, sz: 14, color: { rgb: '1F2933' } },
        fill: { fgColor: { rgb: 'EAF2FF' } },
        alignment: { horizontal: 'left', vertical: 'center' }
    };
    const tableHeaderStyle = {
        font: { bold: true, color: { rgb: 'FFFFFF' } },
        fill: { fgColor: { rgb: '007BFF' } },
        alignment: { horizontal: 'center', vertical: 'center' }
    };
    const neutralTableHeaderStyle = {
        font: { bold: true, color: { rgb: 'FFFFFF' } },
        fill: { fgColor: { rgb: '6C757D' } },
        alignment: { horizontal: 'center', vertical: 'center' }
    };
    const labelStyle = {
        font: { bold: true, color: { rgb: '334E68' } },
        alignment: { horizontal: 'left', vertical: 'center' }
    };
    const wrapTopStyle = {
        alignment: { wrapText: true, vertical: 'top' }
    };
    const centeredStyle = {
        alignment: { horizontal: 'center', vertical: 'center' }
    };

    const wb = XLSX.utils.book_new();
    const risks = currentAnalysis.risks || [];
    const total = risks.length;

    let green = 0, yellow = 0, orange = 0, red = 0;
    let sumRiskLevel = 0;

    risks.forEach(risk => {
        const rn = risk.riskLevel;
        sumRiskLevel += rn;

        if (rn >= 1 && rn <= 6) green++;
        else if (rn >= 7 && rn <= 12) yellow++;
        else if (rn >= 13 && rn <= 18) orange++;
        else if (rn >= 19 && rn <= 25) red++;
    });

    const avgRisk = total > 0 ? (sumRiskLevel / total).toFixed(1) : '0.0';
    const acceptanceLevel = Number(currentAnalysis.metadata.acceptanceLevel || 0);
    const topRisks = [...risks]
        .filter((risk) => (risk.riskLevel || 0) >= acceptanceLevel)
        .sort((a, b) => (b.riskLevel || 0) - (a.riskLevel || 0))
        .slice(0, 10);

    // Ark 1: Sammendrag
    const summaryTitle = safeText(currentAnalysis.metadata.reportTitle) || safeText(currentAnalysis.name) || t('summaryTitle');
    const summaryData = [
        [summaryTitle],
        [t('generatedWithRisky', { date: formatNorwegianDate(new Date().toISOString()) })],
        [''],
        [t('summaryPreparedFor'), safeText(currentAnalysis.metadata.service) || safeText(currentAnalysis.name)],
        [`${t('dateLabel')}:`, safeText(currentAnalysis.metadata.date)],
        [`${t('performedByLabel')}:`, safeText(currentAnalysis.metadata.performedBy) || t('notSpecified')],
        [`${t('participants')}:`, safeText(currentAnalysis.metadata.participants) || t('notSpecified')],
        [`${t('serviceOwner')}:`, safeText(currentAnalysis.metadata.serviceOwner) || t('notSpecified')],
        [`${t('acceptanceLevelLabel')}:`, safeText(currentAnalysis.metadata.acceptanceLevel)],
        [''],
        [t('statistics').toUpperCase()],
        [t('totalRisks'), total],
        [t('criticalRisksGroup', { count: red })],
        [t('highRisksGroup', { count: orange })],
        [t('mediumRisksGroup', { count: yellow })],
        [t('greenRisks'), green],
        [t('averageRisk'), avgRisk],
        [''],
        [t('summaryTopRisks')],
        ['#', t('riskElement'), t('riskLevelLabel'), t('riskCategoryLabel'), t('proposedMeasures')]
    ];

    if (topRisks.length > 0) {
        topRisks.forEach((risk) => {
            summaryData.push([
                risk.number || 0,
                safeText(risk.riskElement),
                risk.riskLevel || 0,
                riskCategory(risk.riskLevel),
                safeText(risk.proposedMeasures)
            ]);
        });
    } else {
        summaryData.push(['', t('summaryNoHighRisks')]);
    }

    const wsSummary = XLSX.utils.aoa_to_sheet(summaryData);
    wsSummary['!cols'] = [
        { wch: 8 },
        { wch: 44 },
        { wch: 12 },
        { wch: 16 },
        { wch: 48 }
    ];

    ['A1', 'A11', 'A19'].forEach((cell) => {
        if (wsSummary[cell]) wsSummary[cell].s = sectionHeaderStyle;
    });
    ['A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17'].forEach((cell) => {
        if (wsSummary[cell]) wsSummary[cell].s = labelStyle;
    });
    ['A20', 'B20', 'C20', 'D20', 'E20'].forEach((cell) => {
        if (wsSummary[cell]) wsSummary[cell].s = tableHeaderStyle;
    });

    const summaryRange = XLSX.utils.decode_range(wsSummary['!ref']);
    for (let R = 20; R <= summaryRange.e.r; ++R) {
        ['B', 'E'].forEach((column) => {
            const cell = wsSummary[`${column}${R + 1}`];
            if (cell) cell.s = { ...(cell.s || {}), ...wrapTopStyle };
        });
        ['A', 'C', 'D'].forEach((column) => {
            const cell = wsSummary[`${column}${R + 1}`];
            if (cell) cell.s = { ...(cell.s || {}), ...centeredStyle };
        });
    }

    XLSX.utils.book_append_sheet(wb, wsSummary, safeSheetName(t('worksheetSummary')));

    // Ark 2: Metadata
    const reportTitle = safeText(currentAnalysis.metadata.reportTitle);
    const metadataData = [];

    // Add title if provided
    if (reportTitle) {
        metadataData.push([reportTitle]);
        metadataData.push(['']);
    }

    // Add metadata
    metadataData.push(
        [`${t('analysisNameLabel')}:`, safeText(currentAnalysis.name)],
        [`${t('dateLabel')}:`, safeText(currentAnalysis.metadata.date)],
        [`${t('serviceSystemLabel')}:`, safeText(currentAnalysis.metadata.service)],
        [`${t('performedByLabel')}:`, safeText(currentAnalysis.metadata.performedBy)],
        [`${t('participants')}:`, safeText(currentAnalysis.metadata.participants)],
        [`${t('serviceOwner')}:`, safeText(currentAnalysis.metadata.serviceOwner)],
        [`${t('description')}:`, safeText(currentAnalysis.metadata.description)],
        [`${t('acceptanceLevelLabel')}:`, safeText(currentAnalysis.metadata.acceptanceLevel)],
        [''],
        [`${t('created')}:`, safeText(currentAnalysis.createdDate)],
        [`${t('lastModified')}:`, formatNorwegianDate(currentAnalysis.lastModified)]
    );

    const wsMetadata = XLSX.utils.aoa_to_sheet(metadataData);

    // Styling for metadata
    if (!wsMetadata['!cols']) wsMetadata['!cols'] = [];
    wsMetadata['!cols'][0] = { wch: 25 };
    wsMetadata['!cols'][1] = { wch: 50 };

    // Style title if present
    if (reportTitle && wsMetadata['A1']) {
        wsMetadata['A1'].s = sectionHeaderStyle;
    }

    // Bold labels - calculate row offset based on whether title exists
    const rowOffset = reportTitle ? 2 : 0; // Title + blank row = 2 rows
    const labelRows = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11]; // Relative row numbers for labels
    labelRows.forEach(relativeRow => {
        const actualRow = relativeRow + rowOffset;
        const cell = `A${actualRow}`;
        if (wsMetadata[cell]) {
            wsMetadata[cell].s = labelStyle;
        }
    });

    XLSX.utils.book_append_sheet(wb, wsMetadata, safeSheetName(t('worksheetMetadata')));

    // Ark 3: Statistikk
    const statsData = [
        [t('statistics').toUpperCase()],
        [''],
        [`${t('totalRisks')}:`, total],
        [''],
        [`${t('redRisks')}:`, red, total > 0 ? `${Math.round(red/total*100)}%` : '0%'],
        [`${t('orangeRisks')}:`, orange, total > 0 ? `${Math.round(orange/total*100)}%` : '0%'],
        [`${t('yellowRisks')}:`, yellow, total > 0 ? `${Math.round(yellow/total*100)}%` : '0%'],
        [`${t('greenRisks')}:`, green, total > 0 ? `${Math.round(green/total*100)}%` : '0%'],
        [''],
        [`${t('averageRisk')}:`, avgRisk]
    ];

    const wsStats = XLSX.utils.aoa_to_sheet(statsData);

    // Column widths
    if (!wsStats['!cols']) wsStats['!cols'] = [];
    wsStats['!cols'][0] = { wch: 30 };
    wsStats['!cols'][1] = { wch: 15 };
    wsStats['!cols'][2] = { wch: 15 };

    // Style header
    if (wsStats['A1']) wsStats['A1'].s = sectionHeaderStyle;

    // Bold labels and add colors to risk categories
    const statsLabelCells = ['A3', 'A5', 'A6', 'A7', 'A8', 'A10'];
    statsLabelCells.forEach(cell => {
        if (wsStats[cell]) {
            wsStats[cell].s = labelStyle;
        }
    });

    // Color code risk levels
    if (wsStats['A5']) wsStats['A5'].s = { ...labelStyle, font: { bold: true, color: { rgb: 'DC3545' } } };
    if (wsStats['A6']) wsStats['A6'].s = { ...labelStyle, font: { bold: true, color: { rgb: 'FD7E14' } } };
    if (wsStats['A7']) wsStats['A7'].s = { ...labelStyle, font: { bold: true, color: { rgb: 'FFC107' } } };
    if (wsStats['A8']) wsStats['A8'].s = { ...labelStyle, font: { bold: true, color: { rgb: '28A745' } } };

    XLSX.utils.book_append_sheet(wb, wsStats, safeSheetName(t('worksheetStatistics')));

    // Ark 4: Risikoer
    const risikoerHeaders = [
        t('riskNumber'),
        t('riskElement'),
        t('vulnerabilityWeakness'),
        t('existingProtectionHeader'),
        t('existingControlHeader'),
        'K',
        'I',
        'T',
        t('consequence'),
        t('probability'),
        t('pdfRiskLevelShort'),
        t('riskCategoryLabel'),
        t('proposedMeasures')
    ];

    const risikoerData = currentAnalysis.risks.map(r => [
        r.number || 0,
        safeText(r.riskElement),
        safeText(r.vulnerability),
        safeText(r.existingProtection),
        safeText(r.existingControl),
        r.K || 0,
        r.I || 0,
        r.T || 0,
        r.consequence || 0,
        r.probability || 0,
        r.riskLevel || 0,
        riskCategory(r.riskLevel),
        safeText(r.proposedMeasures)
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
    wsRisikoer['!cols'][11] = { wch: 14 }; // Kategori
    wsRisikoer['!cols'][12] = { wch: 40 }; // Tiltak

    // Freeze first row (header)
    wsRisikoer['!freeze'] = { xSplit: 0, ySplit: 1 };
    wsRisikoer['!autofilter'] = { ref: wsRisikoer['!ref'] };

    // Style header row - bold with blue background
    const headerCells = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1', 'K1', 'L1', 'M1'];
    headerCells.forEach(cell => {
        if (wsRisikoer[cell]) {
            wsRisikoer[cell].s = {
                ...tableHeaderStyle
            };
        }
    });

    // Improve readability for text-heavy columns
    const risikoRange = XLSX.utils.decode_range(wsRisikoer['!ref']);
    for (let R = 1; R <= risikoRange.e.r; ++R) {
        ['B', 'C', 'D', 'E', 'M'].forEach((column) => {
            const cell = wsRisikoer[`${column}${R + 1}`];
            if (cell) {
                cell.s = {
                    ...(cell.s || {}),
                    alignment: { wrapText: true, vertical: 'top' }
                };
            }
        });

        ['A', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].forEach((column) => {
            const cell = wsRisikoer[`${column}${R + 1}`];
            if (cell) {
                cell.s = {
                    ...(cell.s || {}),
                    alignment: { horizontal: 'center', vertical: 'center' }
                };
            }
        });
    }

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

    XLSX.utils.book_append_sheet(wb, wsRisikoer, safeSheetName(t('worksheetRisks')));

    // Ark 5: KIT-analyse
    const kit = calculateKIT(currentAnalysis.risks);
    const kitData = [
        [t('kitTitle').toUpperCase()],
        [t('kitTitle')],
        [''],
        [t('combination'), t('numberOfRisks')],
        [t('kitConfidentialityOnly'), kit.K],
        [t('kitIntegrityOnly'), kit.I],
        [t('kitAvailabilityOnly'), kit.T],
        ['K+I', kit.KI],
        ['K+T', kit.KT],
        ['I+T', kit.IT],
        [t('kitAllThree'), kit.KIT],
        [''],
        [t('totalUppercase'), kit.total]
    ];

    const wsKit = XLSX.utils.aoa_to_sheet(kitData);

    if (!wsKit['!cols']) wsKit['!cols'] = [];
    wsKit['!cols'][0] = { wch: 30 };
    wsKit['!cols'][1] = { wch: 15 };

    // Style header
    if (wsKit['A1']) wsKit['A1'].s = sectionHeaderStyle;

    if (wsKit['A2']) {
        wsKit['A2'].s = {
            font: { italic: true },
            alignment: { horizontal: 'left' }
        };
    }

    // Style table header
    ['A4', 'B4'].forEach(cell => {
        if (wsKit[cell]) {
            wsKit[cell].s = neutralTableHeaderStyle;
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

    XLSX.utils.book_append_sheet(wb, wsKit, safeSheetName(t('worksheetKit')));

    // Ark 6: Heatmap (5x5 matrise med risikonumre)
    const heatmapData = [
        [t('pdfHeatmapTitle')],
        [''],
        [`${t('consequence')} / ${t('probability')}`, '1', '2', '3', '4', '5']
    ];

    // Create heatmap grid
    for (let k = 5; k >= 1; k--) {
        const row = [k.toString()];
        for (let s = 1; s <= 5; s++) {
            const risksInCell = currentAnalysis.risks
                .filter(r => r.consequence === k && r.probability === s)
                .map(r => r.number)
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
    if (wsHeatmap['A1']) wsHeatmap['A1'].s = sectionHeaderStyle;

    // Style table headers
    ['A3', 'B3', 'C3', 'D3', 'E3', 'F3'].forEach(cell => {
        if (wsHeatmap[cell]) {
            wsHeatmap[cell].s = tableHeaderStyle;
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

    XLSX.utils.book_append_sheet(wb, wsHeatmap, safeSheetName(t('worksheetHeatmap')));

    // Ark 7: Egendefinert tekst
    const customTextTitle = currentAnalysis.metadata.customTextTitle || t('additionalInfoDefaultTitle');
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
        if (wsCustomText['A1']) wsCustomText['A1'].s = sectionHeaderStyle;

        // Enable text wrapping for content
        if (wsCustomText['A3']) {
            wsCustomText['A3'].s = {
                alignment: { wrapText: true, vertical: 'top' }
            };
        }

        XLSX.utils.book_append_sheet(wb, wsCustomText, safeSheetName(t('worksheetAdditionalInfo')));
    }

    // Ark 8: Tiltak og kommentarer som tabell
    const risksWithComments = currentAnalysis.risks.filter(r => r.comments && r.comments.length > 0);

    if (risksWithComments.length > 0) {
        try {
            const commentsHeaders = [
                t('riskNumberHeader'),
                t('riskElement'),
                t('typeLabel'),
                t('commentsColumnHeader'),
                t('authorLabel'),
                t('dateLabel'),
                t('linksLabel')
            ];

            const typeLabels = {
                tiltak: t('action'),
                kommentar: t('comment'),
                oppfolging: t('followUp'),
                intern: t('internalComment')
            };

            const commentsRows = [];
            risksWithComments.forEach((risk) => {
                risk.comments.forEach((comment) => {
                    if (!isCommentTypeVisible(comment.type) || comment.visible === false) {
                        return;
                    }

                    const links = Array.isArray(comment.links)
                        ? comment.links
                            .map((link) => {
                                const title = safeText(link.title);
                                const url = safeText(link.url);
                                if (title && url) return `${title}: ${url}`;
                                return title || url;
                            })
                            .filter(Boolean)
                            .join('\n')
                        : '';

                    commentsRows.push([
                        risk.number || 0,
                        safeText(risk.riskElement),
                        typeLabels[comment.type] || safeText(comment.type),
                        safeText(comment.text),
                        safeText(comment.author),
                        formatNorwegianDate(comment.date || comment.created),
                        links
                    ]);
                });
            });

            if (commentsRows.length === 0) {
                return;
            }

            const wsComments = XLSX.utils.aoa_to_sheet([commentsHeaders, ...commentsRows]);

            if (!wsComments['!cols']) wsComments['!cols'] = [];
            wsComments['!cols'][0] = { wch: 10 };
            wsComments['!cols'][1] = { wch: 36 };
            wsComments['!cols'][2] = { wch: 16 };
            wsComments['!cols'][3] = { wch: 60 };
            wsComments['!cols'][4] = { wch: 20 };
            wsComments['!cols'][5] = { wch: 14 };
            wsComments['!cols'][6] = { wch: 50 };
            wsComments['!freeze'] = { xSplit: 0, ySplit: 1 };
            wsComments['!autofilter'] = { ref: wsComments['!ref'] };

            ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1'].forEach((cell) => {
                if (wsComments[cell]) {
                    wsComments[cell].s = neutralTableHeaderStyle;
                }
            });

            const commentsRange = XLSX.utils.decode_range(wsComments['!ref']);
            for (let R = 1; R <= commentsRange.e.r; ++R) {
                ['B', 'D', 'G'].forEach((column) => {
                    const cell = wsComments[`${column}${R + 1}`];
                    if (cell) {
                        cell.s = {
                            ...(cell.s || {}),
                            alignment: { wrapText: true, vertical: 'top' }
                        };
                    }
                });
            }

            XLSX.utils.book_append_sheet(wb, wsComments, safeSheetName(t('worksheetComments')));
        } catch (e) {
            console.error('Error creating comments sheet:', e);
            // Skip comments sheet if there's an error
        }
    }

    // Lagre fil
    const serviceName = safeFilenamePart(currentAnalysis.metadata.service) || t('analysisWithoutName');
    const date = safeFilenamePart(currentAnalysis.createdDate) || t('unknown');
    const filename = `Risky_${serviceName}_${date}.xlsx`;
    XLSX.writeFile(wb, filename);
}
