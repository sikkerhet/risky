# Risikobanker

Dette er systemets risikobanker - forhåndsdefinerte samlinger av risikoer som kan brukes i ROS-analyser.

## Standardbanker

Systemet kommer med følgende banker:

- **generell.json** - Generell IT-tjeneste (tilgangsstyring, drift, applikasjonssikkerhet, etc.)
- **sky.json** - Skytjenester (AWS/Azure/GCP-spesifikke infrastruktur)
- **onprem.json** - Lokal server/on-premise (fysisk sikkerhet, lokal drift)
- **persondata.json** - Persondata/GDPR (behandlingsgrunnlag, registrertes rettigheter, etc.)
- **ai-tjenester.json** - KI-tjenester og Agentic AI (LLM-sikkerhet, autonome agenter, ML-modeller, bias, governance)
- **saas.json** - SaaS-tjenester (multi-tenancy, vendor management, integrasjoner, data governance)

## Egendefinerte banker

Du kan laste opp egne risikobanker via "Risikobank administrasjon" i editoren.

### Format

En risikobank må være en JSON-fil med følgende struktur:

```json
{
  "id": "unik-id",
  "navn": "Navn på banken",
  "beskrivelse": "Beskrivelse av når banken skal brukes",
  "kategorier": [
    {
      "id": "kategori-id",
      "navn": "Kategorinavn",
      "risikoer": [
        {
          "id": "risiko-id",
          "risikoelement": "Hva som kan gå galt",
          "saarbarhet": "Hvorfor det kan gå galt",
          "eksisterendeBeskyttelse": "Hva som allerede gjøres",
          "eksisterendeKontroll": "Hvordan det kontrolleres",
          "K": 0-5,
          "I": 0-5,
          "T": 0-5,
          "sannsynlighet": 0-5,
          "foreslaatteTiltak": "Foreslåtte forbedringer"
        }
      ]
    }
  ]
}
```

### Bruk EKSEMPEL-custom-bank.json som mal

Kopier `EKSEMPEL-custom-bank.json` og tilpass den til dine behov.

## manifest.json

Denne filen styrer hvilke standardbanker som lastes:

```json
{
  "version": "1.0",
  "banker": [
    {
      "id": "bank-id",
      "fil": "filnavn.json",
      "aktiv": true/false
    }
  ]
}
```

Sett `aktiv: false` for å deaktivere en standardbank.
