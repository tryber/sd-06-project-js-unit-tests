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
  add: (parametro1, parametro2) => parametro1 + parametro2,
  mult: (parametro1, parametro2) => parametro1 * parametro2,
  div: (parametro1, parametro2) => {
    const result = parametro1 / parametro2;
    return Math.floor(result);
  },
  // div: (parametro1, parametro2) => Math.floor(parametro1 / parametro2); ****** Outra forma ******
  sub: (parametro1, parametro2) => parametro1 - parametro2,
};

module.exports = calculator;
