# Risky

Webbasert ROS-analyseverktøy (Risiko- og sårbarhetsanalyse).

**[Live Demo](https://sikkerhet.github.io/risky/)** | [Repository](https://github.com/sikkerhet/risky)

Kjører 100% i nettleseren, ingen installasjon nødvendig.

## Funksjoner

- Multi-analyse håndtering
- Metadata-registrering (dato, tjeneste, deltakere, etc.)
- Interaktiv 5x5 heatmap med fargekoding (grønn/gul/oransje/rød)
- Komplett risikotabell med auto-beregning
- **Risikobank med 415 risikoer**:
  - 14 modulære banker (364 risikoer): Generell IT, Sky, On-premise, Persondata, KI/AI, SaaS, Governance, Personell, Business Continuity, Integrasjoner, DevOps/CI-CD, Supply Chain, IoT/Embedded, Fysisk sikkerhet
  - 6 baseline-maler (51 risikoer): IT-tjeneste, Sky, Persondata, Webapp/API, Database, Mobilapp
- KIT-analyse (Konfidensialitet, Integritet, Tilgjengelighet)
- Tiltak og kommentarer med fire typer (tiltak, kommentar, oppfølging, intern)
- Eksterne lenker (GitHub issues, Jira, etc.)
- Statistikk med 3 visualiseringer (konsekvens, sannsynlighet, KIT)
- Akseptansenivå med Markdown-eksport for høyrisikorapport
- Tilleggsinformasjon med redigerbar overskrift
- Eksempelanalyse (Nettbank med 12 risikoer)
- **Eksport**:
  - PDF (komplett rapport)
  - Excel (flere ark)
  - JSON (backup/import)
  - ZIP (alle analyser)
  - Markdown (høyrisikorapport)
- LocalStorage lagring (automatisk)
- Responsivt design

## Kom i gang

### Bruk direkte i nettleser
**[https://sikkerhet.github.io/risky/](https://sikkerhet.github.io/risky/)**

### Kjør lokalt
```bash
git clone https://github.com/sikkerhet/risky.git
cd risky
python3 -m http.server 8000
# Åpne http://localhost:8000
```

## Bruk

1. Klikk "Ny analyse" eller last inn eksempelanalysen
2. Fyll inn metadata
3. Legg til risikoer fra risikobanken eller opprett egne
4. Vurder konsekvens (K, I, T: 0-5) og sannsynlighet (0-5)
5. Se statistikk og heatmap oppdateres
6. Dokumenter med kommentarer og tiltak
7. Eksporter som PDF, Excel, JSON eller Markdown

## Risikobank

### Modulære risikobanker (364 risikoer)

1. **Generell IT-tjeneste** (39): Tilgangsstyring, drift, appsec, logging, nettverk, org.
2. **Skytjeneste** (13): IAM, nettverk, datalagring, kostnader, compliance
3. **Lokal server** (10): Fysisk sikkerhet, drift, nettverk
4. **Persondata/GDPR** (12): Behandlingsgrunnlag, rettigheter, datadeling, sikkerhet
5. **KI-tjenester og Agentic AI** (34): LLM-sikkerhet, autonome systemer, ML-modeller, bias, governance
6. **SaaS** (34): Multi-tenancy, leverandørrisiko, forbrukerrisiko, integrasjoner, data governance
7. **Governance** (29): Ledelse, roller, policy, leverandørstyring, audit, dokumentasjon
8. **Personell** (33): HR-livssyklus, insider threat, awareness, fjernarbeid, fysisk sikkerhet
9. **Business Continuity** (32): BCP/DR, backup, krisehåndtering, testing, resiliens
10. **Integrasjoner** (35): Synkron/asynkron integrasjon, data pipelines, resiliens, middleware
11. **DevOps & CI/CD** (22): Pipeline-sikkerhet, kildekode, dependencies, IaC, containers, deployment
12. **Supply Chain** (20): Leverandørstyring, datadeling, tredjepartsintegrasjoner, OSS, offboarding
13. **IoT/Embedded** (24): Device security, firmware, OT/SCADA, IoT backend, edge computing
14. **Fysisk sikkerhet** (27): Adgangskontroll, utstyrssikring, miljøkontroll, overvåkning, dokumenthåndtering

### Baseline-maler (51 risikoer)

1. **IT-tjeneste** (10): Generelle IT-risikoer
2. **Sky** (8): AWS/Azure/GCP
3. **Persondata** (8): GDPR
4. **Webapp/API** (10): OWASP Top 10
5. **Database** (7): SQL/NoSQL sikkerhet
6. **Mobilapp** (8): OWASP Mobile Top 10

## Filstruktur

```
risky/
├── index.html              # Startskjerm
├── editor.html             # Hovedverktøy
├── help.html              # Hjelpedokumentasjon
├── css/                   # Styling
├── js/                    # Kjernefunksjoner
└── data/
    ├── baselines/         # 6 baseline-maler
    ├── risikobanker/      # 10 modulære banker
    └── eksempel-analyse.json
```

## Teknologi

- Vanilla JavaScript (ingen dependencies)
- HTML5 Canvas (visualisering)
- LocalStorage API
- jsPDF + jsPDF-AutoTable (PDF)
- SheetJS/xlsx.js (Excel)
- CSS Grid/Flexbox

## Data og personvern

- All data lagres kun lokalt i nettleseren (localStorage)
- Ingen data sendes til servere
- Eksporter JSON regelmessig for backup
- LocalStorage slettes hvis nettleserdata slettes

## ROS-modellen

### 5x5 Matrise
- **Konsekvens** (1-5): max(K, I, T)
- **Sannsynlighet** (1-5)
- **Risikonivå**: Konsekvens × Sannsynlighet (1-25)

### KIT-vurdering
- **K** (Konfidensialitet): Kan uvedkommende få tilgang?
- **I** (Integritet): Kan informasjonen endres uautorisert?
- **T** (Tilgjengelighet): Kan tjenesten bli utilgjengelig?

### Risikonivåer
- **1-6** (Grønn): Lav
- **7-12** (Gul): Middels
- **13-18** (Oransje): Høy
- **19-25** (Rød): Kritisk

## Lisens

MIT License - Copyright (c) 2026 Sikkerhet
