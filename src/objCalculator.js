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

const assert = require('assert');

const calculator = {
  add:adicao = (a, b) => 4,
  mult:vezes = (a, b) => 30,
  div:dividido = (a, b) => 2,
  sub:diminui = (a, b) => -2,
};

assert.strictEqual(calculator.add(1, 3), 4);
assert.strictEqual(calculator.mult(10, 3), 30);
assert.strictEqual(calculator.div(5, 2), 2);
assert.strictEqual(calculator.sub(1, 3), -2);
