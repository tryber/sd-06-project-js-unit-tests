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
  add: add = (num1, num2) => { return num1 + num2; },
  mult: mult = (num1, num2) => {
    return num1 * num2;
  },
  //  Math.round asia baixo
  //  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  div: div = (num1, num2) => {
    return Math.round((num1 / num2) - 0.1);
  },
  sub: sub = (num1, num2) => {
    return num1 - num2;
  },
};

module.exports = calculator;
