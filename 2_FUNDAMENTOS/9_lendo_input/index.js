//O módulo readline é um módulo nativo do Node.js que permite ler inputs de entrada do usuário de forma interativa. Ele é útil para criar interfaces de linha de comando (CLI) e coletar informações do usuário durante a execução de um programa.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Qual a sua linguagem preferida? `, (resposta) => {
  console.log(`A minha linguagem preferida é: ${resposta}`);
  readline.close();
});
