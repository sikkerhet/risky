# Risky

Browser-based ROS analysis tool for structured risk and vulnerability assessments.

**[Live Demo](https://sikkerhet.github.io/risky/)** | **[Repository](https://github.com/sikkerhet/risky)**

Risky runs entirely in the browser. No backend, no installation, and no server-side data storage are required.

## Highlights

- Multi-analysis overview with local persistence
- Structured metadata for service, date, participants, owners, and scope
- Interactive 5x5 heatmap and live risk statistics
- Full risk table with KIT scoring and automatic risk-level calculation
- Bilingual interface support
- Bilingual risk banks in Norwegian and English
- Logo support, custom risk banks, and baseline templates
- Comments and measures with multiple note types
- PDF, Excel, JSON, ZIP, and Markdown export
- Responsive browser-only workflow backed by `localStorage`

## Risk Library

Risky includes **415 predefined risks**:

- **14 modular risk banks** with **364 risks**
- **6 baseline templates** with **51 risks**

### Modular Risk Banks

1. **General IT Service** (39)
2. **Cloud Service** (13)
3. **Local Server / On-premises** (10)
4. **Personal Data / GDPR** (12)
5. **AI Services and Agentic AI** (34)
6. **SaaS** (34)
7. **Governance** (29)
8. **Personnel** (33)
9. **Business Continuity** (32)
10. **Integrations** (35)
11. **DevOps & CI/CD** (22)
12. **Supply Chain** (20)
13. **IoT / Embedded** (24)
14. **Physical Security** (27)

### Baseline Templates

1. **IT Service** (10)
2. **Cloud** (8)
3. **Personal Data** (8)
4. **Web App / API** (10)
5. **Database** (7)
6. **Mobile App** (8)

## What Changed In This Major Release

- Internal data model cleaned up around English field names
- Risk-bank structure standardized and expanded for bilingual content
- User interface updated for bilingual operation
- Heatmap and table behavior cleaned up
- Risk-bank loading improved for both `http://` and `file://` usage
- Visual noise reduced and icon placement improved
- Large editorial cleanup across the risk banks for language consistency and better risk quality

## Getting Started

### Run Directly In The Browser

Open the live version:

**[https://sikkerhet.github.io/risky/](https://sikkerhet.github.io/risky/)**

### Run Locally

```bash
git clone https://github.com/sikkerhet/risky.git
cd risky
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Typical Workflow

1. Create a new analysis or open an example analysis.
2. Fill in metadata.
3. Add risks from a risk bank or create custom risks.
4. Score confidentiality, integrity, and availability.
5. Set probability.
6. Review the heatmap and statistics.
7. Document comments, follow-up items, and measures.
8. Export to the required format.

## File Structure

```text
risky/
├── index.html
├── editor.html
├── help.html
├── css/
├── js/
└── data/
    ├── baselines/
    ├── risikobanker/
    └── eksempel-analyse.json
```

## Technology

- Vanilla JavaScript
- HTML5 Canvas
- `localStorage`
- jsPDF + jsPDF-AutoTable
- SheetJS / xlsx.js
- CSS Grid and Flexbox

## Data And Privacy

- All analysis data is stored locally in the browser
- No analysis data is sent to a backend
- Export JSON regularly if you want explicit backups
- Data is removed if browser storage is cleared

## Risk Model

### 5x5 Matrix

- **Consequence**: `max(K, I, T)`
- **Probability**: `1-5`
- **Risk level**: `Consequence × Probability`

### KIT Assessment

- **K**: Confidentiality
- **I**: Integrity
- **T**: Availability

### Risk Levels

- **1-6**: Low
- **7-12**: Medium
- **13-18**: High
- **19-25**: Critical

## License

MIT License - Copyright (c) 2026 UiO-CERT
