// O módulo path fornece informações sobre o caminho de arquivos e diretórios no sistema operacional. Ele é útil para manipular caminhos de forma independente do sistema operacional.


const path = require('path')

const customPath = '/relatorios/matheus/relatorio1.pdf'

console.log(path.dirname(customPath))  // Retorna o diretório pai do caminho especificado
console.log(path.basename(customPath))  // Retorna o nome do arquivo
console.log(path.extname(customPath))  // Retorna a extensão do arquivo
