//Criando scripts com NPM. Para criar scripts, você precisa adicionar a propriedade "scripts" no arquivo package.json, com uma chave e o comando que você deseja executar. Por exemplo, você pode adicionar um script chamado "start" que executa o arquivo index.js com o comando "node index.js". Para executar o script, você pode usar o comando "npm run start" no terminal.


const _ = require("lodash");
const chalk = require("chalk");

const a = [1, 2, 3];
const b = [4, 5, 6];

const diff = _.merge(a, b);

console.log(chalk.red.bold(diff));
