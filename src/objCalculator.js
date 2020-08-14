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
  add: (integerOne, integerTwo) => {
    const resultAdd = integerOne + integerTwo;
    return resultAdd;
  },
  mult: (integerOne, integerTwo) => {
    const resultMult = integerOne * integerTwo;
    return resultMult;
  },
  // A Math.floor()função retorna o maior inteiro menor ou igual a um determinado número
  div: (integerOne, integerTwo) => {
    const resultDiv = integerOne / integerTwo;
    return Math.floor(resultDiv);
  },
  sub: (integerOne, integerTwo) => {
    const resultSub = integerOne - integerTwo;
    return resultSub;
  },
};

module.exports = calculator;
