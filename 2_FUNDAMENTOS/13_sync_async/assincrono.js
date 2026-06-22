//O código abaixo é um exemplo de escrita assíncrona em Node.js. A função `writeFile` não bloqueia a execução do código, permitindo que o próximo console.log seja executado imediatamente, enquanto a escrita do arquivo ocorre em segundo plano. A função de callback é chamada quando a escrita do arquivo é concluída, permitindo que você execute ações adicionais após a criação do arquivo.

//O módulo `fs` (file system) é utilizado para interagir com o sistema de arquivos, permitindo a leitura e escrita de arquivos de forma síncrona ou assíncrona.

const fs = require("fs");

console.log("Início");

fs.writeFile("arquivo.txt", "Oi", function (err) {
  setTimeout(function () {
    console.log("Arquivo criado!");
  }, 1000);
});

console.log("Fim");
