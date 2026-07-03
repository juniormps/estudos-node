// Para instalar uma dependência de desenvolvimento, você deve utilizar o comando "npm install <nome do pacote> --save-dev". Aqui, o pacote "chalk" foi instalado como dependência de desenvolvimento, pois ele é utilizado apenas durante o desenvolvimento do projeto e não é necessário em produção.

// A importação e utilização de uma dependência de desenvolvimento é feita da mesma forma que uma dependência normal, utilizando o comando "require" para importar o pacote e, em seguida, chamando suas funções ou métodos conforme necessário.

//---------------------------------------------------------------------------//

//Atualização de pacotes: Para atualizar um pacote, você pode utilizar o comando "npm update <nome do pacote>". Isso irá atualizar o pacote para a versão mais recente disponível, respeitando as restrições de versão definidas no arquivo package.json.

// Para uma atualização global de todos os pacotes, você pode utilizar o comando "npm update -g". Isso irá atualizar todos os pacotes instalados globalmente para suas versões mais recentes. Ou, pode utilizar também o comando npx npm-check-updates -u, que irá atualizar todas as dependências do projeto para suas versões mais recentes, respeitando as restrições de versão definidas no arquivo package.json. Após executar esse comando, você deve rodar o comando "npm install" para instalar as novas versões dos pacotes.

//------------------------------------------//

const _ = require("lodash");
const chalk = require("chalk");

const a = [1, 2, 3];
const b = [4, 5, 6];

const diff = _.merge(a, b);

console.log(chalk.red.bold(diff));
