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
  add: (num1, num2) => {
    if (Number.isInteger(num1) === true && Number.isInteger(num1) === true) {
      const resultAdd = num1 + num2;
      return resultAdd;
    }
  },
  mult: (num1, num2) => {
    if (Number.isInteger(num1) === true && Number.isInteger(num1) === true) {
      const resultMult = num1 * num2;
      return resultMult;
    }
  },
  div: (num1, num2) => {
    if (Number.isInteger(num1) === true && Number.isInteger(num1) === true) {
      const resultDiv = parseInt(num1 / num2);
      return resultDiv;
    }
  },
  sub: (num1, num2) => {
    if (Number.isInteger(num1) === true && Number.isInteger(num1) === true) {
      const resultSub = num1 - num2;
      return resultSub;
    }
  },
};

module.exports = calculator;
