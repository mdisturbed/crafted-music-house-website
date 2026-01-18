# Favicon Setup Guide

## Quick Setup (5 minutes)

### Option 1: Using RealFaviconGenerator (Recommended)

1. **Visit:** https://realfavicongenerator.net/

2. **Upload your logo:**
   - Use `/Users/jay/Documents/Crafted-Music-House/site/public/logo.png`
   - Or use `/Users/jay/Documents/Crafted-Music-House/brand/logos/CMH_logo_circle.png`

3. **Configure settings:**
   - **iOS**: Use the logo as-is, background color: `#C9A227` (CMH gold)
   - **Android**: Use the logo as-is, background color: `#F5F0E6` (CMH cream)
   - **Windows**: Use the logo as-is, background color: `#C9A227`
   - **macOS Safari**: Use solid color or the logo
   - **Favicon**: Generate classic favicon

4. **Generate package:**
   - Click "Generate your Favicons and HTML code"
   - Download the package

5. **Extract files to `public/`:**
   ```
   public/
   ├── favicon.ico
   ├── favicon-16x16.png
   ├── favicon-32x32.png
   ├── apple-touch-icon.png
   ├── android-chrome-192x192.png
   ├── android-chrome-512x512.png
   ├── site.webmanifest
   └── browserconfig.xml (optional)
   ```

6. **Copy the HTML code:**
   - The generator will provide `<link>` tags
   - Add them to `index.html` (see below)

### Option 2: Manual Creation

If you want to create favicons manually:

```bash
# Using ImageMagick (if installed)
convert logo.png -resize 16x16 favicon-16x16.png
convert logo.png -resize 32x32 favicon-32x32.png
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 192x192 android-chrome-192x192.png
convert logo.png -resize 512x512 android-chrome-512x512.png
```

## Adding Favicon Links to index.html

Add these lines to the `<head>` section (after the theme-color meta tags):

```html
<!-- Favicons -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-TileColor" content="#C9A227">
```

## site.webmanifest

A basic `site.webmanifest` file has been created in `public/`. Update it with the correct icon paths once you generate the favicons:

```json
{
  "name": "Crafted Music House",
  "short_name": "CMH",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#C9A227",
  "background_color": "#F5F0E6",
  "display": "standalone"
}
```

## Testing

After adding favicons:

1. **Clear browser cache**
2. **Visit:** https://craftedmusichouse.com
3. **Check:**
   - Browser tab shows favicon
   - Bookmark shows icon
   - Mobile home screen shows icon (iOS/Android)

## Favicon Validator

Test your favicons:
- https://realfavicongenerator.net/favicon_checker

Enter: `https://craftedmusichouse.com`

---

**Files needed (7 total):**
- [x] favicon.ico (48x48)
- [ ] favicon-16x16.png
- [ ] favicon-32x32.png
- [ ] apple-touch-icon.png (180x180)
- [ ] android-chrome-192x192.png
- [ ] android-chrome-512x512.png
- [ ] site.webmanifest (created, update after generation)
