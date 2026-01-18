# Open Graph Image Specifications

## Required Image

**File:** `public/og-image.jpg`
**Size:** 1200x630px
**Format:** JPEG (optimized, <200KB)
**Purpose:** Social media preview when sharing craftedmusichouse.com

---

## Design Requirements

### Dimensions
- **Width:** 1200px
- **Height:** 630px
- **Aspect Ratio:** 1.91:1 (Facebook/Twitter standard)
- **File Size:** <200KB (ideally ~150KB)
- **Format:** JPG (better compression for photos)

### Content to Include

**Layout suggestion:**

```
┌────────────────────────────────────────┐
│                                        │
│    [CMH Logo - top left]               │
│                                        │
│    ┌──┬──┬──┬──┬──┬──┐               │
│    │  │  │  │  │  │  │  (6 artists)  │
│    │SU│RU│CL│AS│BE│SA│               │
│    │  │  │  │  │  │  │               │
│    └──┴──┴──┴──┴──┴──┘               │
│                                        │
│    CRAFTED MUSIC HOUSE                 │
│    Vintage Jazz, Blues & Americana     │
│    from AI Artists                     │
│                                        │
└────────────────────────────────────────┘
```

### Elements to Include

1. **CMH Logo** (top left or center)
   - Use the circle logo (transparent background)
   - Size: ~200px

2. **Artist Portraits** (main focal point)
   - All 6 artists: Sunny, Ruby, Clyde, Ashley, Belladonna, Salvatore
   - Arranged horizontally or in a grid
   - Each portrait: ~150-180px

3. **Text:**
   - **Main headline:** "Crafted Music House"
   - **Subheadline:** "Vintage Jazz, Blues & Americana from AI Artists"
   - Font: Playfair Display (serif) for headline, Inter (sans) for subheadline

4. **Color Scheme:**
   - Background: `#F5F0E6` (CMH cream)
   - Text: `#4A2C2A` (CMH mahogany)
   - Accents: `#C9A227` (CMH gold)

---

## Creation Methods

### Option 1: Canva (Easiest)

1. **Visit:** https://www.canva.com
2. **Create custom design:** 1200x630px
3. **Upload artist images** from:
   - `/Users/jay/Documents/Crafted-Music-House/catalog/[artist]/_artist-images/`
4. **Add text and logo**
5. **Export as JPG** (quality: 90)

### Option 2: Figma (Professional)

1. Create 1200x630px frame
2. Add background color: `#F5F0E6`
3. Import artist images
4. Add text layers
5. Export as JPG (2x quality, optimize for web)

### Option 3: Photoshop/GIMP

1. New document: 1200x630px, 72 DPI
2. Fill background: `#F5F0E6`
3. Place artist images
4. Add text with appropriate fonts
5. Save for Web: JPG, quality 80-85, <200KB

### Option 4: AI Generation

Use Claude with Artifacts or Midjourney:

**Prompt:**
```
Create a social media banner (1200x630px) for Crafted Music House,
a vintage music label. Include 6 artist portraits arranged horizontally:
a 1940s jazz trumpeter, a 1950s torch singer, a weathered blues guitarist,
a desert highway singer, a gothic cabaret performer, and a 1950s lounge
crooner. Vintage aesthetic with warm sepia tones. Add text: "Crafted Music
House - Vintage Jazz, Blues & Americana from AI Artists"
```

---

## Artist Images to Use

**Location:** `/Users/jay/Documents/Crafted-Music-House/catalog/[artist]/_artist-images/`

1. **Sunny Boudreaux:** `sunny_gallery-1_river.png` or similar
2. **Ruby James:** `ruby_gallery-1_skyline.png`
3. **Clyde Moss:** `clyde_gallery-1_scrapyard.png`
4. **Ashley Wolfe:** Use profile image from `artists/ashley-wolfe_profile.png`
5. **Belladonna Vale:** Use profile image from `site/public/images/artists/belladonna.png`
6. **Salvatore Moretti:** Use profile image from `artists/salvatore_profile.png`

---

## Testing

After creating the image:

1. **Validate dimensions:**
   ```bash
   file og-image.jpg
   # Should show: 1200 x 630
   ```

2. **Check file size:**
   ```bash
   ls -lh public/og-image.jpg
   # Should be <200KB
   ```

3. **Test with Facebook Debugger:**
   - https://developers.facebook.com/tools/debug/
   - Enter: `https://craftedmusichouse.com`
   - Check preview

4. **Test with Twitter Card Validator:**
   - https://cards-dev.twitter.com/validator
   - Enter: `https://craftedmusichouse.com`
   - Check preview

5. **Test with LinkedIn Post Inspector:**
   - https://www.linkedin.com/post-inspector/
   - Enter: `https://craftedmusichouse.com`

---

## Quick Template

If you want a text-based approach (simpler):

**Background:** CMH cream (#F5F0E6)
**Main text (center):**
```
CRAFTED MUSIC HOUSE
━━━━━━━━━━━━━━━━━━━
Vintage Jazz, Blues & Americana
from AI Artists

🎵 Sunny Boudreaux • Ruby James • Clyde Moss
   Ashley Wolfe • Belladonna Vale • Salvatore Moretti

Stream Now on Spotify, Apple Music & YouTube
```

**Logo:** Bottom right corner

---

## Fallback Option

If you don't want to create a custom image right now, you can use one of the existing cover art images as a temporary placeholder:

```bash
# Copy an existing cover as temporary OG image
cp public/images/covers/rust-bucket-glory.png public/og-image-temp.jpg

# Then optimize it:
npx sharp-cli -i public/og-image-temp.jpg -o public/og-image.jpg --resize 1200,630
```

**But:** Custom image with all 6 artists will perform MUCH better for social sharing.

---

**Status:**
- [ ] Design OG image (1200x630px)
- [ ] Add all 6 artists
- [ ] Include CMH logo
- [ ] Add text: "Vintage Jazz, Blues & Americana from AI Artists"
- [ ] Export as JPG (<200KB)
- [ ] Save to `public/og-image.jpg`
- [ ] Test with Facebook Debugger
- [ ] Test with Twitter Card Validator
