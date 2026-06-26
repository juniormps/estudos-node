// Renomeando arquivo. O método fs.rename() é usado para renomear arquivos ou mover arquivos de um diretório para outro. Ele recebe três argumentos: o caminho do arquivo original, o novo nome do arquivo e uma função de callback que é chamada quando a operação é concluída. Se ocorrer algum erro durante a operação, ele será passado como argumento para a função de callback.


const fs = require('fs')

fs.rename('arquivo.txt', 'novoarquivo.txt', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Arquivo renomeado!')
})
