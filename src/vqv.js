/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const isUndefined = (nome, idade) => {
  if (typeof nome !== 'string' || typeof idade !== 'number') {
    return true;
  }
  return false;
};

// Essa ficou confusa, achei que era para usar o string literals ${variavel} e a quebra de linha auto, consegui acertar a identação com a ajuda dos colegas no slack, a function é minha
const vqv = (nome, idade) => {
  if (!isUndefined(nome, idade)) {
    return 'Oi, meu nome é ' + nome + '!\n' +
      'Tenho ' + idade + ' anos,\n' +
      'trabalho na Trybe e mando muito em programação!\n' +
      '#VQV!'
  }
  return undefined;
};

module.exports = vqv;
