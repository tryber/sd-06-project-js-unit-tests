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
const assert = require('assert');

const vqv = (nome, idade) => {
  // retorna undefined
  if(nome === undefined && idade === undefined){
    return undefined;
  }
  // retorna a frase
 return (`Oi, meu nome é ${nome}!\nTenho ${idade} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`);
  };

console.log(vqv('Tunico',30))
module.exports = vqv;

// assert.strictEqual(typeof vqv, 'function');
// assert.strictEqual(typeof vqv('Tunico', 30), 'string');
// assert.strictEqual(
//   vqv('Tunico', 29),
//   'Oi, meu nome é Tunico!\n' +
//     'Tenho 29 anos,\n' +
//     'trabalho na Trybe e mando muito em programação!\n' +
//     '#VQV!',
// );
// assert.strictEqual(
//   vqv('Alberto', 30),
//   'Oi, meu nome é Alberto!\n' +
//     'Tenho 30 anos,\n' +
//     'trabalho na Trybe e mando muito em programação!\n' +
//     '#VQV!',
// );
// assert.strictEqual(
//   vqv('Hamaji', 29),
//   'Oi, meu nome é Hamaji!\n' +
//     'Tenho 29 anos,\n' +
//     'trabalho na Trybe e mando muito em programação!\n' +
//     '#VQV!',
// );
// assert.strictEqual(vqv(), undefined);
