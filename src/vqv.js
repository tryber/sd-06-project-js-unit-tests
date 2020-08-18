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
/*
'' == false
null == false
undefined == false
if(!x) is basically shorthand for if(x == false)

fonte:
http://frontendcollisionblog.com/javascript/2015/03/20/how-do-i-check-if-a-parameter-was-passed-in-to-a-javascript-function.html

*/

const vqv = (nome, idade) => {
  if (!nome || !idade) {
    return undefined;
  }

  const paragraph =
  `Oi, meu nome é ${nome}!\n` +
  `Tenho ${idade} anos,\n` +
  'trabalho na Trybe e mando muito em programação!\n' +
  '#VQV!';
  return paragraph;
};

// console.log(vqv('Tunico', 29));
// console.log(vqv('Tunico'));
// console.log(vqv());


module.exports = vqv;
