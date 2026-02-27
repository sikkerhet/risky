# Guide: Bruke logo i ROS-analyser

## Hvorfor fungerer ikke min logo?

Når du bruker en ekstern URL (f.eks. `https://example.com/logo.png`), kan nettleseren blokkere lasting av bildet på grunn av **CORS (Cross-Origin Resource Sharing)**-sikkerhetspolicy. Dette er en sikkerhetsfunksjon som hindrer nettsider i å laste ressurser fra andre domener.

## Løsning: Bruk Data URL (Base64)

Data URL-er er en måte å "bake inn" bildet direkte i tekst-format, slik at det ikke trenger å lastes fra en ekstern server.

### Metode 1: Online konvertering (enklest)

1. Gå til **[https://www.base64-image.de/](https://www.base64-image.de/)**
2. Last opp din logo (PNG eller JPG)
3. Kopier hele Data URL-teksten (starter med `data:image/png;base64,` eller `data:image/jpeg;base64,`)
4. Lim inn i "Logo URL"-feltet i Risky

**Eksempel på Data URL:**
```
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...
```

### Metode 2: Kommandolinje (Linux/Mac)

```bash
# For PNG:
base64 -i logo.png | awk '{printf "data:image/png;base64,%s", $0}'

# For JPG:
base64 -i logo.jpg | awk '{printf "data:image/jpeg;base64,%s", $0}'
```

### Metode 3: Python-script

```python
import base64

def image_to_data_url(image_path):
    with open(image_path, 'rb') as f:
        data = base64.b64encode(f.read()).decode()

    # Detect format
    ext = image_path.lower().split('.')[-1]
    mime = 'image/png' if ext == 'png' else 'image/jpeg'

    return f"data:{mime};base64,{data}"

# Bruk:
data_url = image_to_data_url('logo.png')
print(data_url)
```

## Test logo før eksport

1. Lim inn logo URL i feltet
2. Klikk **"Test logo"**-knappen
3. Hvis logoen vises ✓ = OK for PDF-eksport
4. Hvis feil ✗ = Bruk Data URL i stedet

## Anbefalinger

### ✅ Anbefalt:
- **Data URL** (garantert å fungere)
- PNG eller JPG format
- Maksimal bredde: 150px (for best resultat i PDF)
- Maksimal filstørrelse: ~50 KB (for å unngå store JSON-filer)

### ⚠️ Fungerer kanskje:
- Offentlige CDN-er som støtter CORS (f.eks. Imgur, GitHub raw)
- Bilder fra samme domene som Risky kjører på

### ❌ Fungerer ikke:
- Private servere uten CORS-headere
- Bilder som krever autentisering
- SVG fra eksterne kilder (konverter til PNG først)

## Optimalisering

Hvis logoen er for stor, optimaliser før konvertering:

```bash
# Resize med ImageMagick
convert logo.png -resize 150x logo-small.png

# Komprimer PNG
pngcrush logo.png logo-optimized.png

# Konverter til optimalisert JPG
convert logo.png -quality 85 -resize 150x logo.jpg
```

## Eksempel

**Dårlig (CORS-feil):**
```
Logo URL: https://example.com/logo.png
Resultat: ✗ Viser kun tekst i PDF
```

**Bra (Data URL):**
```
Logo URL: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...
Resultat: ✓ Logo vises korrekt i PDF
```

## Feilsøking

### "Logo ikke lastet" i console
- Sjekk at URL-en er riktig
- Test URL-en i en ny browser-fane
- Bruk "Test logo"-knappen

### "CORS error" i console
- Konverter til Data URL (se over)
- Eller host bildet på samme domene som Risky

### Logo vises i test, men ikke i PDF
- Sjekk console for feilmeldinger
- Prøv å konvertere til Data URL
- Kontakt support med console-loggen

## Support

Hvis du fortsatt har problemer:
1. Åpne browser developer tools (F12)
2. Gå til Console-fanen
3. Klikk "Test logo" og kopier feilmeldingene
4. Rapporter issue på GitHub med feilmeldingen
