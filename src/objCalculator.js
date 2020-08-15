/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  number1: 0,
  number2: 0,

  add: (number1, number2) => number1 + number2,
  mult: (number1, number2) => number1 * number2,
  div: (number1, number2) => parseInt(number1 / number2, 10),
  sub: (number1, number2) => number1 - number2,

};


console.log(calculator.add(1, 3));
console.log(calculator.mult(10, 3));
console.log(calculator.div(5, 2));
console.log(calculator.sub(1, 3));
module.exports = calculator;
