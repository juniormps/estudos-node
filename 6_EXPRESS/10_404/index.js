const express = require('express')
const app = express()
const path = require('path')

const users = require('./users')

const port = 3000

const basePath = path.join(__dirname, 'templates')

// Transforma o body em um objeto
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// Permite o acesso a arquivos estáticos
app.use(express.static('public'))

app.use('/users', users)

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.use(function (req, res) {
  res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
