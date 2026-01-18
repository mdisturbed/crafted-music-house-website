import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const outputPath = path.join(publicDir, 'og-image.jpg');

async function createOGImage() {
  try {
    console.log('🎨 Creating OG image (1200x630)...');

    // OG image dimensions
    const WIDTH = 1200;
    const HEIGHT = 630;

    // CMH brand colors
    const CREAM = '#F5F0E6';
    const GOLD = '#C9A227';
    const MAHOGANY = '#4A2C2A';
    const MIDNIGHT = '#1A1A2E';

    // Create base canvas with gradient background
    const svg = `
      <svg width="${WIDTH}" height="${HEIGHT}">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:${MIDNIGHT};stop-opacity:1" />
            <stop offset="100%" style="stop-color:${MAHOGANY};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#grad)"/>
      </svg>
    `;

    let canvas = sharp(Buffer.from(svg));

    // Prepare artist images (6 artists in a row)
    const artistPaths = [
      path.join(publicDir, 'images/artists/sunny.webp'),
      path.join(publicDir, 'images/artists/ruby-clean.webp'),
      path.join(publicDir, 'images/artists/clyde.webp'),
      path.join(publicDir, 'images/artists/ashley.webp'),
      path.join(publicDir, 'images/artists/belladonna.webp'),
      path.join(publicDir, 'images/artists/salvatore.webp')
    ];

    // Resize and position artist images
    const artistWidth = 180;
    const artistHeight = 270;
    const artistY = 280; // Position artists in bottom half
    const spacing = (WIDTH - (artistWidth * 6)) / 7; // Even spacing

    const artistComposites = await Promise.all(
      artistPaths.map(async (artistPath, i) => {
        const x = Math.floor(spacing + (artistWidth + spacing) * i);

        const resizedImage = await sharp(artistPath)
          .resize(artistWidth, artistHeight, { fit: 'cover' })
          .composite([{
            input: Buffer.from(
              `<svg width="${artistWidth}" height="${artistHeight}">
                <rect width="${artistWidth}" height="${artistHeight}"
                      fill="none" stroke="${GOLD}" stroke-width="2"/>
              </svg>`
            ),
            blend: 'over'
          }])
          .toBuffer();

        return {
          input: resizedImage,
          top: artistY,
          left: x
        };
      })
    );

    // Add logo (centered, positioned above artists)
    const logoPath = path.join(publicDir, 'logo-transparent.png');
    const logoSize = 120;
    const logoResized = await sharp(logoPath)
      .resize(logoSize, logoSize, { fit: 'contain' })
      .toBuffer();

    const logoComposite = {
      input: logoResized,
      top: 170,
      left: Math.floor((WIDTH - logoSize) / 2)
    };

    // Add text overlay (brand name and tagline)
    const textSvg = `
      <svg width="${WIDTH}" height="200">
        <style>
          .brand {
            fill: ${CREAM};
            font-family: 'Playfair Display', serif;
            font-size: 56px;
            font-weight: 700;
            text-anchor: middle;
          }
          .tagline {
            fill: ${GOLD};
            font-family: 'Inter', sans-serif;
            font-size: 24px;
            font-weight: 400;
            text-anchor: middle;
            letter-spacing: 2px;
          }
        </style>
        <text x="${WIDTH / 2}" y="80" class="brand">CRAFTED MUSIC HOUSE</text>
        <text x="${WIDTH / 2}" y="120" class="tagline">VINTAGE JAZZ, BLUES &amp; AMERICANA</text>
      </svg>
    `;

    const textComposite = {
      input: Buffer.from(textSvg),
      top: 0,
      left: 0
    };

    // Composite all elements
    await canvas
      .composite([...artistComposites, logoComposite, textComposite])
      .jpeg({ quality: 90, mozjpeg: true })
      .toFile(outputPath);

    const stats = fs.statSync(outputPath);
    const sizeKB = (stats.size / 1024).toFixed(1);

    console.log('✅ OG image created successfully!');
    console.log(`   Size: ${sizeKB} KB`);
    console.log(`   Location: ${outputPath}`);
    console.log(`   Dimensions: ${WIDTH}x${HEIGHT}px`);

  } catch (error) {
    console.error('❌ Error creating OG image:', error.message);
  }
}

createOGImage();
