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
const isInteger = (val1, val2) => (Number.isInteger(val1) && Number.isInteger(val2) ?
  'yes'
  : 'no');

const calculator = {
  add: (num1, num2) => {
    if (isInteger(num1, num2) === 'yes') return num1 + num2;
    return undefined;
  },
  mult: (num1, num2) => {
    if (isInteger(num1, num2) === 'yes') return num1 * num2;
    return undefined;
  },
  div: (num1, num2) => {
    if (isInteger(num1, num2) === 'yes') return Math.floor(num1 / num2);
    return undefined;
  },
  sub: (num1, num2) => {
    if (isInteger(num1, num2) === 'yes') return num1 - num2;
    return undefined;
  },
};

module.exports = calculator;
