//O código abaixo utiliza o "try" e o "catch" para capturar um erro que ocorre ao tentar atribuir um valor a uma constante.

const x = 10;

try {
  x = 2;
} catch (err) {
  console.log(`Erro: ${err}`);
}
