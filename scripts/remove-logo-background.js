import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const inputPath = path.join(publicDir, 'logo.png');
const outputPath = path.join(publicDir, 'logo-transparent.png');

async function removeBackground() {
  try {
    console.log('🎨 Removing brown background from logo...');

    // Read the image and get its metadata
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Convert to raw pixel data
    const { data, info } = await image
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Process pixels: make brown pixels transparent
    // Brown background is approximately RGB(61, 41, 28) - dark brown
    // We'll use a threshold to catch similar browns
    const threshold = 40; // Color similarity threshold

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      // Check if pixel is brownish (dark, low saturation, reddish)
      // Brown is typically: R > G > B, all values relatively low
      const isBrown = (
        r < 100 && g < 70 && b < 50 && // Dark colors
        r > b && g > b // Reddish/brownish tone
      );

      if (isBrown) {
        data[i + 3] = 0; // Set alpha to 0 (transparent)
      }
    }

    // Save the modified image
    await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
    .png()
    .toFile(outputPath);

    console.log('✅ Transparent logo created:', outputPath);
    console.log('   Original: logo.png');
    console.log('   New: logo-transparent.png');

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

removeBackground();
