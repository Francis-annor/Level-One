import { createServer } from 'node:http';

const hostname = "127.0.0.1";
const PORT = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    // res.writeHead(200, {'Content-Type':'text/plain'});
    res.end("Hello From Server NodeJS");
});

server.listen(PORT, hostname, () => {
    console.log("Server Successfully Started");
    console.log(`Server running on: http://'${hostname}:${PORT}`);
});
