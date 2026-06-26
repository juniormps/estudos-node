// O método path.resolve() retorna o caminho absoluto de um arquivo ou diretório.

// O método path.join() forma um caminho a partir de uma sequência de caminhos ou segmentos de caminho, garantindo que os separadores corretos sejam usados.


const path = require('path')

// path absoluto
console.log(path.resolve('teste.txt'))

// formar path
const midFolder = 'relatorios'
const fileName = 'matheus.txt'

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)
