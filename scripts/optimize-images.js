#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * Compresses all PNG images in public/images/ to WebP format
 * Target: 800x800px for covers, 600x900px for avatars, <100KB each
 *
 * Usage: npm run optimize-images
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../public/images');
const COVERS_DIR = path.join(IMAGES_DIR, 'covers');
const ARTISTS_DIR = path.join(IMAGES_DIR, 'artists');

// Configuration
const COVER_SIZE = 800;  // 800x800px for covers
const ARTIST_WIDTH = 600; // 600x900px for artists (3:4 ratio)
const ARTIST_HEIGHT = 900;
const WEBP_QUALITY = 85;

async function optimizeImage(inputPath, outputPath, width, height = null) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2); // MB

    let sharpInstance = sharp(inputPath);

    // Resize
    if (height) {
      sharpInstance = sharpInstance.resize(width, height, { fit: 'cover' });
    } else {
      sharpInstance = sharpInstance.resize(width, width, { fit: 'cover' });
    }

    // Convert to WebP
    await sharpInstance
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSize = (newStats.size / 1024).toFixed(2); // KB

    console.log(`✅ ${path.basename(inputPath)}`);
    console.log(`   ${originalSize} MB → ${newSize} KB (${((1 - newStats.size / stats.size) * 100).toFixed(1)}% reduction)`);

    return true;
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    return false;
  }
}

async function optimizeDirectory(dir, width, height = null, label) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  console.log(`\n📁 Optimizing ${label}...`);
  console.log(`   Directory: ${dir}`);
  console.log(`   Target size: ${width}x${height || width}px`);

  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png'));

  if (files.length === 0) {
    console.log(`   No PNG files found`);
    return;
  }

  let successCount = 0;

  for (const file of files) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace('.png', '.webp'));

    const success = await optimizeImage(inputPath, outputPath, width, height);
    if (success) successCount++;
  }

  console.log(`   Processed ${successCount}/${files.length} images`);
}

async function main() {
  console.log('🎨 CMH Image Optimization Tool');
  console.log('================================\n');

  // Optimize cover art (square)
  await optimizeDirectory(COVERS_DIR, COVER_SIZE, null, 'Cover Art');

  // Optimize artist avatars (3:4 portrait)
  await optimizeDirectory(ARTISTS_DIR, ARTIST_WIDTH, ARTIST_HEIGHT, 'Artist Avatars');

  // Optimize logo
  const logoPath = path.join(__dirname, '../public/logo.png');
  if (fs.existsSync(logoPath)) {
    console.log('\n📁 Optimizing Logo...');
    await optimizeImage(logoPath, logoPath.replace('.png', '.webp'), 256);
  }

  console.log('\n✨ Optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('   1. Update components to use .webp files with .png fallback');
  console.log('   2. Test image loading on the site');
  console.log('   3. Run PageSpeed Insights to verify improvements');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
