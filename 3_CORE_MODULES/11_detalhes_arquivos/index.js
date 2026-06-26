// Verifica se um arquivo existe e informações sobre ele. O método fs.stat() retorna informações sobre o arquivo, como se é um arquivo ou diretório, tamanho, data de criação, entre outros.


const fs = require("fs");

fs.stat("novoarquivo.txt", (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(stats.isFile());  // Verifica se é um arquivo
    console.log(stats.isDirectory());  // Verifica se é um diretório
    console.log(stats.isSymbolicLink());  // Verifica se é um link simbólico
    console.log(stats.ctime);  // Data de criação
    console.log(stats.size);  // Tamanho do arquivo
    console.log(stats.mode);  // Permissões do arquivo
});
