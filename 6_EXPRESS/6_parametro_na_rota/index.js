const express = require("express");
const app = express();
const port = 3000;

const path = require("path");

const basePath = path.join(__dirname, "templates");

// antes do /
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    console.log(`Carregando usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta:${port}`);
});
