import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');
const inputPath = path.join(publicDir, 'images/artists/ruby.webp');
const outputPath = path.join(publicDir, 'images/artists/ruby-clean.webp');

async function cleanRubyImage() {
  try {
    console.log('🎨 Removing text from Ruby\'s image...');

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Crop out the bottom portion with text (approximately last 20% of image)
    const cropHeight = Math.floor(metadata.height * 0.80);

    await image
      .extract({
        left: 0,
        top: 0,
        width: metadata.width,
        height: cropHeight
      })
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log('✅ Clean Ruby image created:', outputPath);
    console.log(`   Original: ${metadata.width}x${metadata.height}`);
    console.log(`   Cropped: ${metadata.width}x${cropHeight}`);

  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

cleanRubyImage();
