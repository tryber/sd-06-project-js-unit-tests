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
  add : (value1, value2) => {
    return value1 + value2
  },
  mult : (value1, value2) => {
    return value1 *value2
  },
  div : (value1, value2) => {
    return Math.floor(value1 / value2); // searched at https://stackoverflow.com/questions/1435975/how-can-i-round-down-a-number-in-javascript
  },
  sub : (value1, value2)  => {
    return value1 - value2
  }
};

module.exports = calculator;
