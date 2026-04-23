const https = require('https');

https.get('https://api.counterapi.dev/v1/anthonydcm1-portfolio/visits/up', (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
  
  res.on('data', (d) => {
    process.stdout.write(d);
  });
}).on('error', (e) => {
  console.error(e);
});
