# Risky

**Risiko- og sårbarhetsanalyse (ROS) verktøy**

En moderne, webbasert applikasjon for strukturert risikovurdering etter norsk ROS-metodikk. Perfekt for sikkerhetsteam, IT-avdelinger og organisasjoner som trenger å dokumentere og håndtere risikoer systematisk.

🌐 **[Live Demo - Åpne Risky](https://sikkerhet.github.io/risky/)** | 📂 [GitHub Repository](https://github.com/sikkerhet/risky)

> Kjør 100% i nettleseren - ingen installasjon nødvendig!

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
- **Risikobank** - 322 profesjonelle risikoer
  - **10 modulære risikobanker** (271 risikoer):
    - Generell IT-tjeneste (39 risikoer)
    - Skytjeneste - AWS/Azure/GCP (13 risikoer)
    - Lokal server/on-premise (10 risikoer)
    - Persondata/GDPR (12 risikoer)
    - KI-tjenester og Agentic AI (34 risikoer)
    - SaaS-tjenester (34 risikoer)
    - Governance og organisasjon (29 risikoer)
    - Personell og menneskelige faktorer (33 risikoer)
    - Business Continuity og resiliens (32 risikoer)
    - Integrasjoner og systemsamspill (35 risikoer)
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

### Alternativ 1: Bruk direkte i nettleser (anbefalt)
Ingen installasjon nødvendig! Bare åpne:

**🌐 [https://sikkerhet.github.io/risky/](https://sikkerhet.github.io/risky/)**

### Alternativ 2: Kjør lokalt
```bash
# Last ned eller klon repository
git clone https://github.com/sikkerhet/risky.git
cd risky

# Åpne i nettleser (anbefalt: bruk lokal webserver)
python3 -m http.server 8000
# Deretter åpne http://localhost:8000

# Eller åpne direkte
open index.html  # macOS
xdg-open index.html  # Linux
```

### Slik bruker du Risky:
1. Klikk "Ny analyse" eller last inn eksempelanalysen
2. Fyll inn metadata (tjeneste, dato, deltakere, etc.)
3. Legg til risikoer fra risikobanken eller opprett egne
4. Vurder konsekvens (1-5) og sannsynlighet (1-5)
5. Se statistikk og heatmap oppdateres automatisk
6. Dokumenter oppfølging med kommentarer og tiltak
7. Eksporter som PDF, Excel, JSON eller Markdown

## 📊 Risikobank - 322 profesjonelle risikoer

Risky kommer med to typer forhåndsdefinerte risikoer:

### Modulære risikobanker (271 risikoer i 10 banker)
Brukes gjennom risikobank-velgeren (📁-knappen):

#### 1. Generell IT-tjeneste (39 risikoer, 6 kategorier)
Standard risikoer for de fleste IT-tjenester:
- **Tilgangsstyring** (15) - Brukeradministrasjon, passord, MFA, service accounts, API-nøkler
- **Teknisk drift** (5) - Backup, patch management, kunnskapstap
- **Applikasjonssikkerhet** (7) - SQL injection, XSS, CSRF, broken access control, rate limiting
- **Logging og overvåking** (3) - Sensitive data i logger, integritetssjekk, alerting
- **Nettverk og kommunikasjon** (5) - Kryptering, DDoS, MitM, DNS, segmentering
- **Organisatoriske forhold** (4) - Sikkerhetskompetanse, incident response, awareness, shadow IT

#### 2. Skytjeneste - AWS/Azure/GCP (13 risikoer, 5 kategorier)
Spesifikke cloud-risikoer:
- **Sky-tilgangsstyring** (4) - IAM-roller, rot-kontoer, public exposure, credential stuffing
- **Sky-nettverk** (3) - Security groups, mTLS, service mesh
- **Sky-datalagring** (3) - Encryption at rest, multi-region backup, data residency
- **Sky-kostnader** (1) - Ressurs-forbruk, budget alerts
- **Sky-compliance** (2) - Resource sprawl, continuous compliance

#### 3. Lokal server/on-premise (10 risikoer, 3 kategorier)
On-premise spesifikke risikoer:
- **Fysisk sikkerhet** (4) - Fysisk tilgang, brann/vann, tyveri, dumpster diving
- **Lokal drift** (4) - Hardware lifecycle, destruksjon, kapasitet, change management
- **Lokalt nettverk** (2) - Intern angriper, nettverksutstyr

#### 4. Persondata/GDPR (12 risikoer, 4 kategorier)
Personvernspesifikke risikoer:
- **Behandlingsgrunnlag** (3) - Samtykke, formålsbegrensning, data minimization
- **Registrertes rettigheter** (3) - Sletting, dataportabilitet, identifisering av data
- **Datadeling** (3) - DPA, tredjelandsoverføring, sub-processorer
- **GDPR sikkerhetstiltak** (3) - Kryptering, pseudonymisering, breach notification

#### 5. KI-tjenester og Agentic AI (34 risikoer, 6 kategorier)
AI og LLM-spesifikke risikoer:
- **LLM-sikkerhet** (7) - Prompt injection, model poisoning, data leakage
- **Agentic AI og autonome systemer** (8) - Tool use risks, agentic loops, hallucinations
- **ML-modell sikkerhet** (5) - Adversarial attacks, model theft, backdoors
- **AI-spesifikk datahåndtering** (5) - Training data privacy, PII i modeller
- **Bias og rettferdighet** (4) - Diskriminering, fairness, transparens
- **AI-governance og compliance** (5) - AI Act, risikoklassifisering, dokumentasjon

#### 6. SaaS-tjenester (34 risikoer, 6 kategorier)
Software-as-a-Service risikoer:
- **Multi-tenancy og isolasjon** (5) - Data leakage mellom kunder
- **SaaS-leverandør risiko** (7) - Lock-in, leverandør-shutdown, SLA
- **SaaS-forbruker risiko** (8) - Shadow IT, lisenshåndtering, konfigurasjon
- **SaaS-integrasjoner og API** (5) - OAuth misbruk, API-eksponering
- **Data governance i SaaS** (5) - Datasuverenitet, eksport, sletting
- **Tilgjengelighet og kontinuitet** (4) - Uptime, failover, exit-strategi

#### 7. Governance og organisasjon (29 risikoer, 6 kategorier)
Styring og organisatoriske risikoer:
- **Ledelse og styring** (5) - Ledelses-commitment, sikkerhetsstrategi
- **Roller, ansvar og eierskap** (4) - Unclear ownership, RACI
- **Policy og compliance** (6) - Manglende policies, ISO 27001, regulatoriske krav
- **Leverandørstyring** (6) - Vendor risk, SLA, avhengigheter
- **Audit og tilsyn** (4) - Manglende audit, findings ikke fulgt opp
- **Dokumentasjon og kunnskapsstyring** (4) - Dårlig dokumentasjon, kunnskapstap

#### 8. Personell og menneskelige faktorer (33 risikoer, 6 kategorier)
HR og personellsikkerhet:
- **HR-livssyklus sikkerhet** (6) - Bakgrunnssjekk, onboarding, offboarding
- **Insider threat** (5) - Misfornøyde ansatte, privilegert tilgang
- **Security awareness og trening** (5) - Phishing, social engineering
- **Fjernarbeid og BYOD** (6) - Usikrede hjemmekontor, private enheter
- **Fysisk sikkerhet - kontormiljø** (6) - Clean desk, shoulder surfing
- **Menneskelig faktor og feil** (5) - Feilkonfigurasjon, stress, burnout

#### 9. Business Continuity og resiliens (32 risikoer, 6 kategorier)
Kontinuitetsplanlegging og krisehåndtering:
- **BCP/DR-planlegging** (5) - Manglende planer, RTO/RPO
- **Backup og gjenoppretting** (6) - Backup failures, recovery testing
- **Krisehåndtering og kommunikasjon** (5) - Kriseteam, kommunikasjonsplan
- **Testing og øving** (5) - Tabletop exercises, red team
- **Leverandør- og avhengighetsresiliens** (5) - Single point of failure
- **Hendelseshåndtering og resiliens** (6) - Incident response, post-mortem

#### 10. Integrasjoner og systemsamspill (35 risikoer, 6 kategorier)
Integrasjonsrisikoer:
- **Synkron integrasjon** (6) - REST/SOAP/GraphQL sikkerhet, API keys
- **Asynkron integrasjon** (7) - Message queue security, event-driven
- **Data pipelines og ETL** (6) - Data quality, transformation errors
- **Integrasjonsmønstre** (5) - Orkesterering, saga patterns
- **Resiliens og feilhåndtering** (6) - Circuit breakers, retry logic
- **Middleware og integrasjonsplattformer** (5) - ESB security, iPaaS

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
