# ROS-Analyse Verktøy - Design Dokument

**Dato:** 2026-02-26
**Formål:** Web-basert verktøy for å lage risiko- og sårbarhetsanalyser (ROS)

## Oversikt

Et web-basert verktøy for å utføre ROS-analyser basert på klassisk ROS-modell. Verktøyet skal være enkelt å bruke, lagre data lokalt i nettleseren, og kunne eksportere til PDF, Excel og JSON.

## Brukergrensesnitt

### Layout-tilnærming
Én-sides oppsett med scrolling:
- Metadata-seksjon øverst
- Sticky heatmap under metadata
- Hovedtabell med risikoer
- KIT-oversiktstabell
- Eksport-knapper nederst

## Arkitektur

### Filstruktur
```
rosa/
├── index.html              # Startskjerm (liste over analyser)
├── editor.html             # Hovedverktøy for ROS-analyse
├── css/
│   ├── main.css           # Felles styling
│   ├── heatmap.css        # Heatmap-spesifikk styling
│   └── table.css          # Tabell-styling
├── js/
│   ├── app.js             # Hovedlogikk og localStorage håndtering
│   ├── heatmap.js         # Heatmap rendering og interaksjon
│   ├── table.js           # Tabell-håndtering
│   ├── risikobank.js      # Risikobank data og logikk
│   ├── export-pdf.js      # PDF generering (jsPDF + autoTable)
│   ├── export-excel.js    # Excel generering (SheetJS)
│   └── export-json.js     # JSON import/export
└── data/
    └── risikobank.json    # Forhåndsutfylte risikoer med kategorier
```

### Teknologivalg
- **Frontend:** Vanilla JavaScript (ingen framework)
- **Styling:** CSS Grid/Flexbox
- **PDF-eksport:** jsPDF + jsPDF-AutoTable
- **Excel-eksport:** SheetJS (xlsx.js)
- **Lagring:** LocalStorage API

## Datamodell

### LocalStorage Struktur

```javascript
// Liste over alle analyser
localStorage.setItem('ros_analyses', JSON.stringify([
  {
    id: 'uuid-1234',
    name: 'Webportal sikkerhet',
    createdDate: '2026-02-26',
    lastModified: '2026-02-26T14:30:00',
    metadata: {
      dato: '2026-02-26',
      tjeneste: 'Webportal',
      utfortAv: 'Ola Nordmann',
      deltakere: 'Kari, Per, Anne',
      tjenesteeier: 'IT-avdelingen',
      beskrivelse: 'ROS for ny webportal'
    },
    risikoer: [
      {
        id: 'risk-1',
        nr: 1,
        risikoelement: 'Brukere får ikke tilgang...',
        saarbarhet: 'Manuelle rutiner...',
        eksisterendeBeskyttelse: 'FEIDE autentisering',
        eksisterendeKontroll: 'Månedlig gjennomgang',
        K: 3,  // Konfidensialitet (1-5)
        I: 2,  // Integritet (1-5)
        T: 4,  // Tilgjengelighet (1-5)
        konsekvens: 4,  // max(K,I,T) - auto-beregnet
        sannsynlighet: 3,  // 1-5
        risikonivaa: 12,  // konsekvens × sannsynlighet - auto-beregnet
        foreslaatteTiltak: 'Implementere backup-løsning'
      }
    ]
  }
]));

// Aktiv analyse ID
localStorage.setItem('ros_active_analysis', 'uuid-1234');
```

### Automatiske Beregninger
- **Konsekvens:** `max(K, I, T)`
- **Risikonivå:** `konsekvens × sannsynlighet`
- **Fargekoding i heatmap:**
  - Grønn: 1-6 (lav risiko)
  - Gul: 7-12 (middels risiko)
  - Oransje: 13-18 (høy risiko)
  - Rød: 19-25 (kritisk risiko)

## Risikobank

### Struktur

```javascript
// data/risikobank.json
{
  "kategorier": [
    {
      "id": "tilgangsstyring",
      "navn": "Tilgangsstyring",
      "risikoer": [
        {
          "id": "tilgang-001",
          "risikoelement": "Brukere får ikke tilgang til systemet",
          "saarbarhet": "Manuelle rutiner for vedlikehold av admin/superbrukere",
          "eksisterendeBeskyttelse": "FEIDE? Weblogin? Windows domene?",
          "eksisterendeKontroll": "Månedlig gjennomgang av brukerrettigheter",
          "K": 2,
          "I": 1,
          "T": 4,
          "sannsynlighet": 2,
          "foreslaatteTiltak": "Automatisere brukeradministrasjon"
        }
      ]
    },
    {
      "id": "teknisk-drift",
      "navn": "Teknisk drift",
      "risikoer": []
    },
    {
      "id": "backup",
      "navn": "Backup og gjenoppretting",
      "risikoer": []
    },
    {
      "id": "nettverk",
      "navn": "Nettverk og kommunikasjon",
      "risikoer": []
    },
    {
      "id": "fysisk",
      "navn": "Fysisk sikkerhet",
      "risikoer": []
    }
  ]
}
```

### Kategorier fra Excel-mal
Basert på `uio-ros-mal.xlsx`:
1. **Tilgangsstyring** - brukerrettigheter, autentisering, autorisasjon
2. **Teknisk drift** - serverrom, systemtilganger, driftspersonell
3. **Backup og gjenoppretting** - backup rutiner, gjenopprettingstid, datalagring
4. **Nettverk** - nettverkssikkerhet, kommunikasjon, eksponering
5. **Fysisk sikkerhet** - fysisk tilgang, miljøhendelser

### UI-implementering
- To-stegs dropdown per rad:
  1. Velg kategori
  2. Velg risiko (populeres basert på kategori)
- Ved valg: alle felt auto-fylles, men kan redigeres manuelt
- Risikobanken kan utvides ved å eksportere/importere JSON

## Heatmap

### Design

5x5 matrise basert på klassisk ROS-modell:

```
┌─────────────────────────────────────────────────────────────┐
│                    RISIKO HEATMAP                           │
│                                                             │
│   K  5 │ 5  │ 10 │ 15 │ 20 │ 25 │                         │
│   o  4 │ 4  │ 8  │ 12 │ 16 │ 20 │                         │
│   n  3 │ 3  │ 6  │ 9  │ 12 │ 15 │                         │
│   s  2 │ 2  │ 4  │ 6  │ 8  │ 10 │                         │
│   e  1 │ 1  │ 2  │ 3  │ 4  │ 5  │                         │
│   k    └────┴────┴────┴────┴────┘                         │
│          1    2    3    4    5                             │
│              Sannsynlighet                                 │
│                                                             │
│   Grønn (1-6)  Gul (7-12)  Oransje (13-18)  Rød (19-25)   │
└─────────────────────────────────────────────────────────────┘
```

### Interaktivitet

1. **Sticky positioning** - Forblir synlig ved scrolling
2. **Plassering** - Nummererte badges i hver celle for risikoer
3. **Hover** - Viser kort sammendrag (nr + risikoelement)
4. **Klikk** - Scroller til og highlighter tilsvarende rad i tabellen
5. **Synkronisering** - Oppdateres automatisk ved endring i tabellen
6. **Responsivt** - Kan kollapses på mobil

### Fargekoding
- **Grønn:** risikonivå 1-6 (lav risiko)
- **Gul:** risikonivå 7-12 (middels risiko)
- **Oransje:** risikonivå 13-18 (høy risiko)
- **Rød:** risikonivå 19-25 (kritisk risiko)

## Hovedtabell

### Kolonner

| Nr | Risikoelement | Sårbarhet/svakhet | Eksisterende beskyttelse | Eksisterende kontroll | K | I | T | K* | S* | RN* | Foreslåtte tiltak | Handlinger |
|----|---------------|-------------------|--------------------------|----------------------|---|---|---|----|----|----|-------------------|------------|

**Forklaring:**
- **Nr:** Løpenummer
- **K, I, T:** Konfidensialitet, Integritet, Tilgjengelighet (1-5)
- **K*:** Konsekvens (auto-beregnet, max av K,I,T)
- **S*:** Sannsynlighet (1-5)
- **RN*:** Risikonivå (auto-beregnet, K*×S*)

### Input-typer
- **Tekstfelt:** `<textarea>` for Risikoelement, Sårbarhet, Beskyttelse, Kontroll, Tiltak
- **Dropdown:** `<select>` (1-5) for K, I, T, Sannsynlighet
- **Read-only:** Konsekvens og Risikonivå (visuelt fremhevet)

### Funksjonalitet per rad

1. **Risikovelger:**
   - Dropdown 1: Kategori
   - Dropdown 2: Risiko
   - Auto-utfylling ved valg

2. **Handlinger:**
   - **[×]** Slett risiko
   - **[↑↓]** Flytt rad opp/ned

3. **Auto-save:**
   - Lagres til localStorage ved blur/change
   - Visuell indikator: "Lagret ✓"

4. **Rad-highlighting:**
   - Gul bakgrunn når klikket fra heatmap (2 sek)

### Knapper
- **[+ Legg til risiko]** under tabellen

## Metadata-seksjon

Vises øverst i editor.html:

```
┌─────────────────────────────────────────────────────────────┐
│  ROS-ANALYSE - [Analysenavn - redigerbart]                 │
├─────────────────────────────────────────────────────────────┤
│  Dato: [date input]                                        │
│  Tjeneste/system: [text input]                             │
│  Utført av: [text input]                                   │
│  Deltakere: [text input]                                   │
│  Tjenesteeier/systemeier: [text input]                     │
│  Beskrivelse: [textarea]                                   │
│                                                             │
│  [Lagre metadata] [Tilbake til oversikt]                   │
└─────────────────────────────────────────────────────────────┘
```

## KIT-Oversiktstabell

Vises under hovedtabellen:

```
┌─────────────────────────────────────────────────────────────┐
│           KIT-ANALYSE (Konfidensialitet, Integritet,       │
│                     Tilgjengelighet)                        │
├──────────────┬──────────────────────────────────────────────┤
│ Kombinasjon  │ Antall risikoer                             │
├──────────────┼──────────────────────────────────────────────┤
│ K            │ X risikoer påvirker kun konfidensialitet    │
│ I            │ X risikoer påvirker kun integritet          │
│ T            │ X risikoer påvirker kun tilgjengelighet     │
│ K+I          │ X risikoer påvirker K og I                  │
│ K+T          │ X risikoer påvirker K og T                  │
│ I+T          │ X risikoer påvirker I og T                  │
│ K+I+T        │ X risikoer påvirker alle tre                │
├──────────────┼──────────────────────────────────────────────┤
│ TOTALT       │ X risikoer                                  │
└──────────────┴──────────────────────────────────────────────┘
```

### Beregningslogikk
- **K (kun):** K > 0 og I = 0 og T = 0
- **I (kun):** I > 0 og K = 0 og T = 0
- **T (kun):** T > 0 og K = 0 og I = 0
- **K+I:** K > 0 og I > 0 og T = 0
- **K+T:** K > 0 og T > 0 og I = 0
- **I+T:** I > 0 og T > 0 og K = 0
- **K+I+T:** K > 0 og I > 0 og T > 0

Oppdateres automatisk når risikoer endres.

## Startskjerm (index.html)

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│              ROS-ANALYSE VERKTØY                            │
│              Risiko- og sårbarhetsanalyse                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [+ Ny analyse]  [📁 Importer JSON]  [💾 Eksporter alle]   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  MINE ANALYSER                                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───────────────────────────────────────────────────────┐ │
│  │ Webportal sikkerhet                                   │ │
│  │ Opprettet: 2026-02-20  |  Sist endret: 2026-02-26    │ │
│  │ 12 risikoer  |  Tjeneste: Webportal                  │ │
│  │                                                       │ │
│  │ [Åpne] [Eksporter JSON] [Slett]                      │ │
│  └───────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Funksjonalitet

1. **Ny analyse:**
   - Navigerer til editor.html med tom analyse
   - Auto-genererer UUID og timestamp

2. **Importer JSON:**
   - File picker, validerer struktur
   - Legger til i listen (eller erstatter ved duplikat ID)

3. **Eksporter alle:**
   - Genererer én JSON-fil med alle analyser
   - Backup-funksjonalitet

4. **Per analyse:**
   - **Åpne:** Navigerer til editor.html
   - **Eksporter JSON:** Eksporterer kun denne analysen
   - **Slett:** Med bekreftelsesdialog

5. **Sortering:**
   - Standard: nyeste først (lastModified)

## Eksport

### Eksport-seksjon
Nederst i editor.html:

```
┌─────────────────────────────────────────────────────────────┐
│  EKSPORT                                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  [📄 Eksporter PDF]  [📊 Eksporter Excel]  [💾 Eksporter JSON] │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### PDF-eksport (jsPDF + autoTable)

**Innhold:**
- **Side 1:** Metadata + Heatmap (canvas → PNG)
- **Side 2-N:** Risikotabell (auto-paginering)
- **Siste side:** KIT-oversiktstabell

**Styling:** Profesjonelt utseende, UiO-farger
**Filnavn:** `ROS_[Tjeneste]_[Dato].pdf`

### Excel-eksport (SheetJS)

**Ark:**
1. **Metadata:** Alle metadata-felt
2. **Risikoer:** Hovedtabell med alle kolonner
3. **KIT-analyse:** KIT-oversiktstabell
4. **Heatmap:** 5x5 matrise med risikonumre

**Styling:** Matcher original Excel-mal (farger, borders)
**Filnavn:** `ROS_[Tjeneste]_[Dato].xlsx`

### JSON-eksport

**Innhold:** Komplett datastruktur (se datamodell)
**Filnavn:** `ROS_[Tjeneste]_[Dato].json`

### Import-validering

```javascript
// Validering av JSON-import
- Må ha: id, name, metadata, risikoer
- Validerer at risikoer har påkrevde felt
- Hvis ID finnes: spør om overskrive
- Hvis ID ikke finnes: legger til som ny
```

## Feilhåndtering

1. **LocalStorage full:**
   - Vis varsel til bruker
   - Foreslå å eksportere og slette gamle analyser

2. **Import feil:**
   - Valider JSON-struktur
   - Vis spesifikk feilmelding

3. **Eksport feil:**
   - Catch errors og vis brukervennlig melding
   - Log til console for debugging

## Fremtidige forbedringer

- Mulighet for egendefinerte skalaer (3x3, 4x4)
- Eksport til Word/DOCX
- Samarbeidsfunksjonalitet (deling via URL/cloud)
- Historikk/versjonering av analyser
- Print-optimalisert visning
- Mørk modus

## Oppsummering

Dette designet gir et komplett, brukervennlig ROS-analyseverktøy som:
- Følger klassisk ROS-modell (5x5 matrise)
- Har risikobank for rask utfylling
- Gir visuell oversikt via heatmap
- Støtter flere analyser samtidig
- Eksporterer til PDF, Excel og JSON
- Fungerer helt uten server (lokalt i nettleser)
