var http = require('http');

http.createServer(function (req, res) {
  res.write("online");
  res.end();
}).listen(8080);