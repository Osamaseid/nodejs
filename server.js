const http = require('http');

const hostname = '127.0.0.1'; // or '0.0.0.0' for all interfaces
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code
  res.setHeader('Content-Type', 'text/plain'); // Response header
  res.end('Hello, World!\n'); // Response body
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
  