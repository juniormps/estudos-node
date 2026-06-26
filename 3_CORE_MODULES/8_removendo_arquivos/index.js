// Removendo arquivos com Node.js. O método unlink() do módulo fs é usado para remover arquivos. Ele recebe o caminho do arquivo a ser removido e uma função de callback que é chamada quando a operação é concluída. Se ocorrer um erro durante a remoção, ele será passado como argumento para a função de callback. Caso contrário, a função de callback será chamada sem argumentos, indicando que o arquivo foi removido com sucesso.

const fs = require('fs')

fs.unlink('arquivo.txt', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Arquivo removido!')
})
