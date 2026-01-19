#!/bin/bash
# Make CSS non-render-blocking using media="print" trick

HTML_FILE="dist/index.html"

# Replace blocking CSS with async loading
sed -i.bak 's/<link rel="stylesheet" crossorigin href="\([^"]*\)"/<link rel="preload" as="style" crossorigin href="\1" onload="this.onload=null;this.rel='\''stylesheet'\''"><noscript><link rel="stylesheet" crossorigin href="\1"><\/noscript/g' "$HTML_FILE"

# Remove backup file
rm -f "${HTML_FILE}.bak"

echo "✅ CSS made async in $HTML_FILE"
