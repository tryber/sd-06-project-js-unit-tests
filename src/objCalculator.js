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
    const sum = num1 + num2;
    return sum;
  },
  mult: (num1, num2) => {
    const multi = num1 * num2;
    return multi;
  },
  div: (num1, num2) => {
    const divi = num1 / num2;
    return parseInt(divi.toFixed(1), 10);
  },
  sub: (num1, num2) => {
    const subt = num1 - num2;
    return subt;
  },
};
console.log(calculator.sub(1, 2));
module.exports = calculator;
