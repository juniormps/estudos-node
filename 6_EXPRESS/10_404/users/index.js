const express = require("express");
const router = express.Router();
const path = require("path");

const port = 3000;

const basePath = path.join(__dirname, "../templates");

// Entrega o formulário
router.get("/add", (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

// Recebe os dados do formulário e trata eles
router.post("/save", (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);

    res.sendFile(`${basePath}/userform.html`);
});

// antes do "/"
router.get("/:id", (req, res) => {
    console.log(`Carregando usuário: ${req.params.id}`);

    res.sendFile(`${basePath}/users.html`);
});

module.exports = router;
