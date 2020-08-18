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
  add: add = (value1, value2) => value1 + value2,
  mult: mult = (value1, value2) => Math.trunc(value1 * value2),
  div: div = (value1, value2) => Math.trunc(value1 / value2),
  sub: sub = (value1, value2) => value1 - value2,
};

// console.log(calculator.add(1, 1)) // Retorno: 2;
// console.log(calculator.mult(1, 2)) // Retorno: 2;
// console.log(calculator.div(4, 2)) // Retorno: 2;
// console.log(calculator.sub(3, 1)) // Retorno: 2;


module.exports = calculator;
