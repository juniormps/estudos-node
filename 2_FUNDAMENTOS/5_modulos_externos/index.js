// O módulo minimist também é utilizado para capturar argumentos passados via linha de comando. Porém de uma forma mais simples e direta, sem a necessidade de criar um array de argumentos.
//Basta colocar estes dois traços antes dos nomes dos argumentos, como no exemplo a seguir: "node index.js --nome=Marcio --idade=39"

const minimist = require("minimist");

const args = minimist(process.argv);

const nome = args.nome;
const idade = args.idade;

console.log(nome);
console.log(idade);


// Também é possível estruturar o código desta maneira abaixo. Porém, ela é uma forma um pouco mais verbosa.
// Da mesma forma, é necessário colocar os dois traços antes dos nomes dos argumentos, como no exemplo a seguir: "node index.js --profissao=Programador --cidade=Rio"

/*
const args = minimist(process.argv.slice(2))

console.log(args);

const profissao = args["profissao"];
const cidade = args["cidade"];

console.log(profissao);
console.log(cidade);
*/