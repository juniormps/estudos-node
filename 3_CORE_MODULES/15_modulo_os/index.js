// O módulo OS fornece informações sobre o sistema operacional e a máquina em que o Node.js está sendo executado. Ele pode ser usado para obter informações como o número de CPUs, memória livre, diretório home do usuário e tipo de sistema operacional.


const os = require("os");

console.log(os.cpus());

console.log(os.freemem());

console.log(os.homedir());

console.log(os.type());
