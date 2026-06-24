//Utilizando o módulo http e url para criar um servidor que recebe parâmetros via query string. O url é utilizado para fazer o parse da url e extrair os parâmetros passados na query string. O servidor responde com uma mensagem de boas-vindas personalizada, caso o parâmetro "name" seja fornecido, ou solicita que o usuário preencha seu nome caso contrário.

const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
    var urlInfo = url.parse(req.url, true);

    const name = urlInfo.query.name;

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    if (!name) {
        res.end(
            "<h1>Preencha seu nome:</h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Enviar'></form>",
        );
    } else {
        res.end(`<h1>Seja bem-vindo ${name}!</h1>`);
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
