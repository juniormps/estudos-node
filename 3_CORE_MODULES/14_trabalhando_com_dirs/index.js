// Trabalhando com diretórios. Verificando se um diretório existe com o método fs.existsSync(). Caso não exista, ele é criado com o método fs.mkdirSync().


const fs = require('fs')

if (!fs.existsSync('./minhapasta')) {
  console.log('Não existe')

  fs.mkdirSync('minhapasta')  // Cria a pasta minhapasta
}


if (fs.existsSync('minhapasta')) {
  console.log('Existe')
}
