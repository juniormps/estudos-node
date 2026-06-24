//Utilizando o módulo http e fs para criar um servidor que lê um arquivo HTML e o envia como resposta. O fs é utilizado para ler o conteúdo do arquivo "mensagem.html" e enviá-lo como resposta ao cliente. O servidor responde com o conteúdo do arquivo HTML quando acessado na porta 3000.

const http = require("http");
const fs = require("fs");

const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile("mensagem.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
