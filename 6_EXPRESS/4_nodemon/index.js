//Nesta etapa, foi instalado o nodemon, que é uma ferramenta que reinicia automaticamente o servidor sempre que houver alterações no código. O mesmo foi instalado como dependência de desenvolvimento. Para isto, foi utilizado o comando: "npm install nodemon --save-dev".


const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
