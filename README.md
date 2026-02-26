# Risky

Web-basert verktøy for å lage Risiko- og Sårbarhetsanalyser (ROS) basert på klassisk ROS-modell (5x5 matrise).

## ✨ Funksjoner

### ✅ Komplett implementasjon
- **Multi-analyse håndtering** - Administrer flere ROS-analyser samtidig
- **Metadata-registrering** - Dato, tjeneste, utført av, deltakere, tjenesteeier, beskrivelse
- **Interaktiv 5x5 Heatmap** - Visuell risikoplassering med fargekoding
  - Grønn (1-6): Lav risiko
  - Gul (7-12): Middels risiko
  - Oransje (13-18): Høy risiko
  - Rød (19-25): Kritisk risiko
  - Klikk på heatmap for å hoppe til risiko i tabellen
- **Komplett risikotabell** - Alle felt med auto-beregning
- **Risikobank** - 117 profesjonelle risikoer
  - **4 hovedbanker** (66 risikoer):
    - Generell IT-tjeneste (31 risikoer)
    - Skytjeneste (13 risikoer)
    - Lokal server/on-premise (10 risikoer)
    - Persondata/GDPR (12 risikoer)
  - **6 baseline-maler** (51 risikoer):
    - Baseline - IT-tjeneste (10 risikoer)
    - Baseline - Sky (8 risikoer)
    - Baseline - Persondata (8 risikoer)
    - Baseline - Webapp/API (10 OWASP Top 10 risikoer)
    - Baseline - Database (7 risikoer)
    - Baseline - Mobilapp (8 OWASP Mobile risikoer)
  - Modal-basert velger: Velg bank → Velg kategori → Velg risiko
  - Import av risikoer fra andre analyser
  - Vises kun for nye/tomme risikoer (grønn 📁-knapp)
  - Automatisk utfylling av alle felt
  - Redigerbart etter valg
  - Last opp egne risikobanker (JSON)
- **KIT-analyse** - Analyse av Konfidensialitet, Integritet, Tilgjengelighet
- **Tiltak og kommentarer**
  - Fire typer: Tiltak, Kommentar, Oppfølging, Intern kommentar
  - Eksterne lenker med full URL (GitHub issues, Jira, arkiv, etc.)
  - Vises i egen seksjon med editerbar overskrift
  - **Dobbelfiltrering**:
    - Type-basert: Vis/skjul alle av en type (tiltak, kommentar, oppfølging, intern)
    - Individuell: Skjul enkeltkommentarer uavhengig av type
  - Kun synlige kommentarer inkluderes i PDF/Excel eksport
  - PDF viser både lenketittel og full URL
  - Fargekoding: Grønn (tiltak), Blå (kommentar), Oransje (oppfølging), Grå (intern)
  - Skjulte kommentarer vises dimmet med 🚫-merke
- **Statistikk og visualisering**
  - Sanntids statistikk-panel med risikofordeling
  - 3 interaktive diagrammer: konsekvens, sannsynlighet, KIT-fordeling
  - Automatisk oppdatering ved endringer
- **Akseptansenivå og høyrisikorapport**
  - Definer akseptabelt risikonivå (grønn/gul/oransje/rød)
  - Eksporter Markdown-rapport over akseptansenivået
  - Automatisk gruppering etter alvorlighet
- **Tilleggsinformasjon**
  - Egendefinert tekstfelt med redigerbar overskrift
  - Inkluderes i PDF- og Excel-rapporter
  - Perfekt for sammendrag og konklusjoner
- **Eksempelanalyse**
  - Komplett "Nettbank for bedriftskunder" med 12 risikoer
  - Demonstrerer alle funksjoner
  - Last inn med ett klikk
- **Automatiske beregninger**
  - Konsekvens = max(K, I, T)
  - Risikonivå = Konsekvens × Sannsynlighet
- **LocalStorage lagring** - Alt lagres automatisk i nettleseren
- **Komplett eksport**
  - 📄 **PDF** - Profesjonell rapport med statistikk, heatmap, tabeller, KIT-analyse og kommentarer
  - 📊 **Excel** - Flere ark (Metadata, Risikoer, KIT-analyse, Heatmap, Tilleggsinformasjon, Kommentarer)
  - 💾 **JSON** - Import/eksport for backup og deling
  - 📦 **ZIP** - Eksporter alle analyser i strukturerte mapper
  - 📝 **Markdown** - Høyrisikorapport over akseptansenivå
- **Responsivt design** - Fungerer på desktop, tablet og mobil

## 🚀 Kom i gang

1. Åpne `index.html` i en moderne nettleser
2. Klikk "Ny analyse" for å starte
3. Fyll inn metadata
4. Legg til risikoer:
   - Bruk risikobanken (anbefalt) eller
   - Fyll inn manuelt
5. Se risikoprofilen i heatmap
6. Eksporter som PDF, Excel eller JSON

## 📊 Risikobank - 117 profesjonelle risikoer

Risky kommer med to typer forhåndsdefinerte risikoer:

### Hovedrisikobank (66 risikoer i 4 banker)
Brukes gjennom risikobank-velgeren (📁-knappen):

#### 1. Generell IT-tjeneste (31 risikoer)
Standard risikoer for de fleste IT-tjenester:
- **Tilgangsstyring** (7) - Brukeradministrasjon, passord, service accounts, API-nøkler
- **Teknisk drift** (5) - Backup, patch management, kunnskapstap
- **Applikasjonssikkerhet** (7) - SQL injection, XSS, CSRF, broken access control, rate limiting
- **Logging og overvåking** (3) - Sensitive data i logger, integritetssjekk, alerting
- **Nettverk og kommunikasjon** (5) - Kryptering, DDoS, MitM, DNS, segmentering
- **Organisatoriske forhold** (4) - Sikkerhetskompetanse, incident response, awareness, shadow IT

#### 2. Skytjeneste - AWS/Azure/GCP (13 risikoer)
Spesifikke cloud-risikoer:
- **Sky-tilgangsstyring** (4) - IAM-roller, rot-kontoer, public exposure, credential stuffing
- **Sky-nettverk** (3) - Security groups, mTLS, service mesh
- **Sky-datalagring** (3) - Encryption at rest, multi-region backup, data residency
- **Sky-kostnader** (1) - Ressurs-forbruk, budget alerts
- **Sky-compliance** (2) - Resource sprawl, continuous compliance

#### 3. Lokal server/on-premise (10 risikoer)
On-premise spesifikke risikoer:
- **Fysisk sikkerhet** (4) - Fysisk tilgang, brann/vann, tyveri, dumpster diving
- **Lokal drift** (4) - Hardware lifecycle, destruksjon, kapasitet, change management
- **Lokalt nettverk** (2) - Intern angriper, nettverksutstyr

#### 4. Persondata/GDPR (12 risikoer)
Personvernspesifikke risikoer:
- **Behandlingsgrunnlag** (3) - Samtykke, formålsbegrensning, data minimization
- **Registrertes rettigheter** (3) - Sletting, dataportabilitet, identifisering av data
- **Datadeling** (3) - DPA, tredjelandsoverføring, sub-processorer
- **GDPR sikkerhetstiltak** (3) - Kryptering, pseudonymisering, breach notification

### Baseline-maler (51 risikoer i 6 maler)
Brukes gjennom import-funksjonen (📥 Importer risikoer):

#### 1. Baseline - IT-tjeneste (10 risikoer)
Kompakt samling for generelle IT-tjenester

#### 2. Baseline - Sky (8 risikoer)
Cloud-spesifikke risikoer for AWS/Azure/GCP

#### 3. Baseline - Persondata (8 risikoer)
GDPR og personvernrisikoer

#### 4. Baseline - Webapp/API (10 risikoer)
OWASP Top 10 for webapplikasjoner og API-er

#### 5. Baseline - Database (7 risikoer)
Database-sikkerhet (SQL og NoSQL)

#### 6. Baseline - Mobilapp (8 risikoer)
OWASP Mobile Top 10 for iOS/Android

## 📖 Brukerveiledning

### Opprette ny analyse
1. Klikk "Ny analyse" på forsiden
2. Gi analysen et beskrivende navn (klikk på tittelen)
3. Fyll inn metadata-feltene
4. Alt lagres automatisk

### Legge til risikoer fra risikobanken (anbefalt)
1. Klikk "+ Legg til risiko" for å legge til en tom rad
2. Klikk på 📁-ikonet i handlinger-kolonnen
3. I risikobank-dialogen:
   - Velg bank (Generell, Skytjeneste, Lokal server, eller Persondata)
   - Velg kategori
   - Bla gjennom og klikk på ønsket risiko
4. Alle felt fylles automatisk ut
5. Juster verdier etter behov for din spesifikke situasjon

### Legge til risikoer manuelt
1. Klikk "+ Legg til risiko"
2. Fyll inn feltene direkte:
   - **Risikoelement**: Hva kan gå galt?
   - **Sårbarhet**: Hvorfor kan dette skje?
   - **Beskyttelse**: Hvilke beskyttelsestiltak finnes?
   - **Kontroll**: Hvilke kontrolltiltak finnes?
   - **K, I, T**: Vurder påvirkning (0-5)
     - K = Konfidensialitet
     - I = Integritet
     - T = Tilgjengelighet
   - **Sannsynlighet**: Hvor sannsynlig er det? (0-5)
   - **Foreslåtte tiltak**: Hva bør gjøres?
3. Konsekvens og risikonivå beregnes automatisk

### Arbeide med heatmap
- Risikoer plasseres automatisk basert på sannsynlighet og konsekvens
- Klikk på en risiko for å hoppe til den i tabellen
- **Flere overlappende risikoer?** Klikk på cellen → velg fra liste
- Farger indikerer risikonivå

### Arbeide med tiltak og kommentarer
1. Klikk på 💬-ikonet i handlings-kolonnen for en risiko
2. Velg type:
   - **Tiltak**: Konkrete handlinger som skal utføres
   - **Kommentar**: Generelle notater og observasjoner
   - **Oppfølging**: Ting som må følges opp senere
   - **Intern kommentar**: Interne notater (kan skjules i eksport)
3. Skriv beskrivelse
4. Legg til eksterne lenker (valgfritt):
   - GitHub issues: `https://github.com/user/repo/issues/123`
   - Jira tickets: `https://jira.company.com/browse/PROJ-456`
   - Dokumentasjon
   - Arkiv
5. Klikk "Lagre"
6. Kommentarer vises:
   - Som teller på 💬-knappen (grønn når det finnes kommentarer)
   - I "TILTAK OG KOMMENTARER"-seksjonen nederst
   - Fargekoding: Grønn (tiltak), Blå (kommentar), Oransje (oppfølging), Grå (intern)
7. **Endre seksjonsoverskrift**:
   - Klikk på "TILTAK OG KOMMENTARER"-overskriften for å redigere
   - Sett egendefinert navn som "OPPFØLGING" eller "TILTAK FOR GODKJENNING"
   - Lagres automatisk og brukes i PDF/Excel eksport
8. **Filtrer visning** med knappene øverst høyre (type-basert):
   - "Skjul tiltak" / "Vis tiltak" (grønn = synlig, grå = skjult)
   - "Skjul kommentarer" / "Vis kommentarer"
   - "Skjul oppfølging" / "Vis oppfølging"
   - "Skjul intern" / "Vis intern"
9. **Skjul enkeltkommentarer** (individuelt):
   - Klikk 🚫-knappen på hver kommentar for å skjule den i eksport
   - Skjulte kommentarer vises dimmet med "🚫 Skjult i eksport"-merke
   - Klikk 👁️-knappen for å vise igjen
   - Gir full kontroll over hva som inkluderes i eksport
10. **I PDF/Excel-eksport**:
   - Lenker vises med både tittel OG full URL
   - Kun synlige typer OG ikke-skjulte kommentarer inkluderes
   - Perfekt for å skjule sensitive/interne detaljer før ekstern deling

### Eksportere
- **PDF**: Komplett rapport med alle seksjoner
  - Metadata
  - Heatmap (visuelt)
  - Risikotabell
  - KIT-analyse
  - Tiltak og kommentarer (kun synlige typer)
    - **Lenker med full URL**: Både tittel og komplett URL vises
    - Fargekoding: Grønn (tiltak), Blå (kommentar), Oransje (oppfølging), Grå (intern)
- **Excel**: 4-5 separate ark
  - Metadata, Risikoer, KIT-analyse, Heatmap
  - Tiltak og kommentarer (kun synlige typer)
    - Lenker som hyperlinks
- **JSON**: For backup eller import i annet verktøy/senere
  - Inkluderer alle tiltak og kommentarer uavhengig av filtrering

### Importere JSON
1. Klikk "Importer JSON" på forsiden
2. Velg tidligere eksportert JSON-fil
3. Hvis analyse finnes fra før, velg om du vil overskrive

## 🗂️ Filstruktur

```
risky/
├── index.html              # Startskjerm (oversikt)
├── editor.html             # Hovedverktøy
├── help.html              # Komplett hjelpedokumentasjon
├── README.md              # Dokumentasjon
├── css/
│   ├── main.css           # Hovedstyling
│   ├── heatmap.css        # Heatmap
│   ├── table.css          # Tabell
│   ├── modal.css          # Modal-vinduer
│   └── comments.css       # Kommentarsystem
├── js/
│   ├── app.js             # Kjernefunksjoner
│   ├── heatmap.js         # Heatmap rendering
│   ├── table.js           # Tabell-håndtering
│   ├── risikobank.js      # Risikobank logikk
│   ├── comments.js        # Kommentarsystem
│   ├── export-json.js     # JSON import/eksport
│   ├── export-pdf.js      # PDF generering
│   ├── export-excel.js    # Excel generering
│   └── export-all.js      # ZIP eksport
└── data/
    ├── baselines/         # 6 baseline-maler
    │   ├── baseline-it-tjeneste.json
    │   ├── baseline-sky.json
    │   ├── baseline-persondata.json
    │   ├── baseline-webapp.json
    │   ├── baseline-database.json
    │   └── baseline-mobile.json
    ├── risikobank.json    # Hovedrisikobank
    └── eksempel-analyse.json  # Eksempelanalyse
```

## 🔧 Teknologi

- **Frontend**: Vanilla JavaScript (ingen dependencies)
- **Visualisering**: HTML5 Canvas (heatmap)
- **Lagring**: LocalStorage API
- **PDF**: jsPDF + jsPDF-AutoTable (CDN)
- **Excel**: SheetJS/xlsx.js (CDN)
- **Styling**: CSS Grid/Flexbox (responsivt)

## 💾 Data og personvern

- All data lagres **kun lokalt** i nettleseren (localStorage)
- Ingen data sendes til servere
- Eksporter JSON regelmessig for backup
- LocalStorage kan slettes hvis nettleserdata slettes

## 🎯 ROS-modellen

Verktøyet følger klassisk ROS-metodikk:

### 5x5 Matrise
- **Konsekvens** (1-5): Basert på max(K, I, T)
- **Sannsynlighet** (1-5): Hvor sannsynlig er hendelsen?
- **Risikonivå**: Konsekvens × Sannsynlighet (1-25)

### KIT-vurdering
- **K** (Konfidensialitet): Kan uvedkommende få tilgang til informasjonen?
- **I** (Integritet): Kan informasjonen endres utilsiktet eller uautorisert?
- **T** (Tilgjengelighet): Kan tjenesten bli utilgjengelig?

### Risikonivåer
- **1-6** (Grønn): Lav risiko - Aksepter
- **7-12** (Gul): Middels risiko - Vurder tiltak
- **13-18** (Oransje): Høy risiko - Reduser
- **19-25** (Rød): Kritisk risiko - Umiddelbare tiltak

## 🤝 Bidrag

Bidrag er velkomne! Vennligst:

1. Fork repository
2. Opprett en feature branch (`git checkout -b feature/ny-funksjon`)
3. Commit endringer (`git commit -m 'Legg til ny funksjon'`)
4. Push til branch (`git push origin feature/ny-funksjon`)
5. Åpne en Pull Request

## 🔮 Fremtidige forbedringer

- Eksport til Word/DOCX
- Samarbeidsfunksjonalitet (deling via URL/cloud)
- Historikk/versjonering av analyser
- Sammenligning av flere analyser
- Dashboard med risikooversikt
- Egendefinerte skalaer (3x3, 4x4)
- Mørk modus

## 🙏 Anerkjennelser

- OWASP Top 10 og OWASP Mobile Top 10 for baseline-maler
- Norsk ROS-metodikk for risikovurdering
- Open source-biblioteker: jsPDF, xlsx, JSZip

## 📄 Lisens

MIT License

Copyright (c) 2026 Sikkerhet

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

**Utviklet for norske organisasjoner som ønsker strukturert risikovurdering.**
