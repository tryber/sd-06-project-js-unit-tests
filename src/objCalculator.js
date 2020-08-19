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
add: (soma1, soma2) => soma1 + soma2,
mult: (mult1, mult2) => mult1 * mult2,
div: (div1, div2) => Math.floor(div1 / div2),
sub: (sub1, sub2) => sub1 - sub2,
};

module.exports = calculator;
