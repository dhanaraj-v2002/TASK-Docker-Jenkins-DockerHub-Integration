const http = require('http');
http.createServer((req, res) => {
  res.end('updated one this my web');
}).listen(3000);
