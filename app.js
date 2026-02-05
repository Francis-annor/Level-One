let http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'test/plain'});
    res.end("Hello From Server NodeJS");
}).listen(3030);