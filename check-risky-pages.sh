#!/bin/bash
# Quick check for Risky GitHub Pages status

echo "🔍 Sjekker GitHub Pages status for sikkerhet/risky..."
echo ""

STATUS=$(gh api /repos/sikkerhet/risky/pages 2>/dev/null | jq -r '.status')
URL=$(gh api /repos/sikkerhet/risky/pages 2>/dev/null | jq -r '.html_url')

echo "Status: $STATUS"
echo "URL: $URL"
echo ""

BUILD_STATUS=$(gh api /repos/sikkerhet/risky/pages/builds/latest 2>/dev/null | jq -r '.status')
BUILD_TIME=$(gh api /repos/sikkerhet/risky/pages/builds/latest 2>/dev/null | jq -r '.updated_at')
BUILD_COMMIT=$(gh api /repos/sikkerhet/risky/pages/builds/latest 2>/dev/null | jq -r '.commit' | cut -c1-7)

echo "Siste bygg:"
echo "  Status: $BUILD_STATUS"
echo "  Commit: $BUILD_COMMIT"
echo "  Tid: $BUILD_TIME"
echo ""

if [ "$BUILD_STATUS" = "built" ]; then
    echo "✅ Siden er oppdatert og live!"
    echo ""
    echo "Du kan åpne den med:"
    echo "  xdg-open $URL    # Linux"
    echo "  open $URL        # macOS"
else
    echo "⏳ Siden bygges... vent 1-3 minutter"
fi
