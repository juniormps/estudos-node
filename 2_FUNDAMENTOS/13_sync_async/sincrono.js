//O código abaixo é um exemplo de escrita síncrona em Node.js. A função `writeFileSync` bloqueia a execução do código até que o arquivo seja completamente escrito, o que significa que o próximo console.log só será executado após a conclusão da escrita do arquivo.

//O módulo `fs` (file system) é utilizado para interagir com o sistema de arquivos, permitindo a leitura e escrita de arquivos de forma síncrona ou assíncrona.

const fs = require("fs");

console.log("Início");

fs.writeFileSync("arquivo.txt", "Oi");

console.log("Fim");
