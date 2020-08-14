/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  var myArray = [];
  for (var counter01 = 0; counter01 <= 3; counter01 += 1) {
    myArray.push(counter01);
    for (var counter02 = 2; counter02 <= 3; counter02 += 1) {
      myArray.push(counter02);
    }
  }
  return myArray;
};

module.exports = myCounter;
