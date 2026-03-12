const https = require('https');

const workingImages = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
  "https://images.unsplash.com/photo-1556909172-54557c7e4fb7",
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
  "https://images.unsplash.com/photo-1593618998160-e34014e67546",
  "https://images.unsplash.com/photo-1556910110-a5a66af3b497",
  "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
  "https://images.unsplash.com/photo-1514986888952-c8f3ef7e8f64",
  "https://images.unsplash.com/photo-1466637574441-749b8f19452f",
  "https://images.unsplash.com/photo-1556679343-c7306c1976bc",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433",
  "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c",
  "https://images.unsplash.com/photo-1544457070-4cd96417751e",
  "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1",
  "https://images.unsplash.com/photo-1532336414038-cf19250c5757"
];

async function run() {
  for (let url of workingImages) {
    await new Promise(res => {
        let full = url + "?w=600&h=400&fit=crop";
        https.get(full, response => {
            console.log(url, response.statusCode, response.headers['content-length']);
            response.resume();
            res();
        });
    });
  }
}

run();
