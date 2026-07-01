// Removendo pacotes do projeto. Para remover um pacote do projeto, podemos utilizar o comando "npm uninstall <nome-do-pacote>". Isso irá remover o pacote do diretório node_modules e também atualizar o arquivo package.json para refletir a remoção do pacote.

// Outra forma de remover um pacote é apagando manualmente a dependência do arquivo package.json e, em seguida, executando o comando "npm install" para atualizar o diretório node_modules.


const _ = require("lodash");
const chalk = require("chalk");

const a = [1, 2, 3];
const b = [4, 5, 6];

const diff = _.merge(a, b);

console.log(chalk.red.bold(diff));
