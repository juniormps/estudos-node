const http = require("http");
const fs = require("fs");
const {URL} = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const filename = parsedUrl.pathname;

    switch (filename) {
        
        case "":
        case "/":
            fs.readFile("index.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                return res.end();
            });
            break;

        case "/sobre":
            fs.readFile("sobre.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                return res.end();
            });
            break;

        case "/contato":
            fs.readFile("contato.html", function (err, data) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                return res.end();
            });
            break;

        default:
            fs.readFile("404.html", function (err, data) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write(data);
                return res.end();
            });
            break;
    }
    
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port} \n`);
});
