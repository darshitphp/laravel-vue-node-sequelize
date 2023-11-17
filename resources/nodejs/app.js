var https = require('https');
var server = https.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(7000);
console.log("Server running at https://127.0.0.1:7000/");

