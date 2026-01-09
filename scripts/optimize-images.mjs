import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const filesToOptimize = [
  'public/video/hero-poster.jpg',
  'public/video/about-poster.jpg'
];

async function optimize() {
  for (const file of filesToOptimize) {
    if (!fs.existsSync(file)) {
      console.log(`Skipping ${file} (not found)`);
      continue;
    }

    const tempFile = file + '.temp.jpg';
    
    console.log(`Optimizing ${file}...`);
    
    try {
      await sharp(file)
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(tempFile);

      const originalSize = fs.statSync(file).size;
      const newSize = fs.statSync(tempFile).size;

      if (newSize < originalSize) {
        fs.renameSync(tempFile, file);
        console.log(`✅ Optimized ${file}: ${originalSize} -> ${newSize} bytes (${Math.round((originalSize - newSize) / originalSize * 100)}% saved)`);
      } else {
        fs.unlinkSync(tempFile);
        console.log(`⚠️  Skipped ${file}: New file was larger (already optimized?)`);
      }
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error);
      if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
    }
  }
}

optimize();
