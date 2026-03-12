const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const imageRegex = /image:\s*["']([^"']+)["']/g;
const srcRegex = /src=["']([^"']+)["']/g;

let allImages = new Set();
let missingImages = [];

walkDir('src/app/reviews', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    let match;
    while ((match = imageRegex.exec(content)) !== null) {
      if (!match[1]) {
        missingImages.push(`Empty image in ${filePath}`);
      } else {
        allImages.add(match[1]);
      }
    }
    while ((match = srcRegex.exec(content)) !== null) {
      if (!match[1] || match[1].includes('{')) continue; // Skip if empty or variable
      allImages.add(match[1]);
    }
  }
});

console.log(`Found ${allImages.size} unique image URLs.`);
if (missingImages.length > 0) {
  console.log('Missing images found:', missingImages);
}

// Check for unsplash domains or empty strings
const invalidUrls = Array.from(allImages).filter(url => {
  return !url.startsWith('http') && !url.startsWith('/');
});

if (invalidUrls.length > 0) {
  console.log('Invalid URLs found:', invalidUrls);
} else {
  console.log('All image URLs are properly formatted.');
}
