const express = require('express')  // Importando o express
const app = express()  // Criando uma instância do express (executando o express)
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá Mundo!!')
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
