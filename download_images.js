const fs = require('fs');
const https = require('https');

const urls = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=600&h=400&fit=crop"
];

async function download() {
  for (let i = 0; i < urls.length; i++) {
    const file = fs.createWriteStream(`public/images/kitchen/${i+1}.jpg`);
    await new Promise((resolve) => {
      https.get(urls[i], function(response) {
        response.pipe(file);
        file.on('finish', function() {
          file.close(resolve);
        });
      });
    });
    console.log(`Downloaded image ${i+1}`);
  }
}

download();
