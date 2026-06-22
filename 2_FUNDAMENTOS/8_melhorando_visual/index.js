//O módulo chalk permite que você estilize o texto no console, adicionando cores, estilos e fundos. No exemplo abaixo, usamos o chalk para exibir mensagens diferentes com base na nota do aluno.

const chalk = require("chalk");

const nota = 10;

if (nota >= 7) {
  console.log(chalk.green.bold("Parabéns, você passou!"));
} else {
  console.log(chalk.bgRed.black("Você precisa fazer a prova final!"));
}

