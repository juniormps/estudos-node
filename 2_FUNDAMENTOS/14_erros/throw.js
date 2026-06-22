//O código abaixo lança um erro com o "throw new Error()" caso a variável x não seja um número inteiro.

//O "throw" é usado para lançar um erro, e o "new Error()" cria um objeto de erro com uma mensagem personalizada.

const x = "10";

if (!Number.isInteger(x)) {
  throw new Error("O valor de x não é um número inteiro");
}
