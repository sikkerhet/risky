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

    // Stil for metadata (støttes av noen Excel-versjoner)
    if (!wsMetadata['!cols']) wsMetadata['!cols'] = [];
    wsMetadata['!cols'][0] = { wch: 25 };
    wsMetadata['!cols'][1] = { wch: 50 };

    XLSX.utils.book_append_sheet(wb, wsMetadata, 'Metadata');

    // Ark 2: Risikoer
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

    // Kolonne-bredder
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

    XLSX.utils.book_append_sheet(wb, wsRisikoer, 'Risikoer');

    // Ark 3: KIT-analyse
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

    XLSX.utils.book_append_sheet(wb, wsKit, 'KIT-analyse');

    // Ark 4: Heatmap (5x5 matrise med risikonumre)
    const heatmapData = [
        ['RISIKO HEATMAP'],
        [''],
        ['Konsekvens / Sannsynlighet', '1', '2', '3', '4', '5']
    ];

    // Opprett heatmap grid
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
    for (let i = 0; i <= 5; i++) {
        wsHeatmap['!cols'][i] = { wch: 12 };
    }

    XLSX.utils.book_append_sheet(wb, wsHeatmap, 'Heatmap');

    // Ark 5: Egendefinert tekst
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

        XLSX.utils.book_append_sheet(wb, wsCustomText, 'Tilleggsinformasjon');
    }

    // Ark 6: Tiltak og kommentarer (alltid inkluder alle i eksport)
    const risksWithComments = currentAnalysis.risikoer.filter(r => r.comments && r.comments.length > 0);

    if (risksWithComments.length > 0) {
        try {
            const sectionTitle = currentAnalysis.metadata.commentsSectionTitle || 'TILTAK OG KOMMENTARER';
            const commentsData = [[sectionTitle], ['']];
            let hasAnyVisibleComments = false;

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
                        commentsData.push([`#${risk.nr || 0} - ${safeText(risk.risikoelement)}`]);
                        commentsData.push(['']);
                        riskTitleAdded = true;
                    }

                    const typeLabels = {
                        'tiltak': 'TILTAK',
                        'kommentar': 'KOMMENTAR',
                        'oppfolging': 'OPPFØLGING',
                        'intern': 'INTERN KOMMENTAR'
                    };
                    const typeLabel = typeLabels[comment.type] || comment.type.toUpperCase();

                    commentsData.push(['Type:', typeLabel]);
                    commentsData.push(['Beskrivelse:', safeText(comment.text)]);

                    if (comment.links && comment.links.length > 0) {
                        commentsData.push(['Lenker:']);
                        comment.links.forEach(link => {
                            commentsData.push(['', safeText(link.title), safeText(link.url)]);
                        });
                    }

                    commentsData.push(['']);
                });

                if (riskTitleAdded) {
                    commentsData.push(['---']);
                    commentsData.push(['']);
                }
            });

            // Kun opprett arket hvis det finnes synlige kommentarer
            if (!hasAnyVisibleComments) {
                return;
            }

            const wsComments = XLSX.utils.aoa_to_sheet(commentsData);

            if (!wsComments['!cols']) wsComments['!cols'] = [];
            wsComments['!cols'][0] = { wch: 20 };
            wsComments['!cols'][1] = { wch: 50 };
            wsComments['!cols'][2] = { wch: 60 };

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
