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
  const myArray = [];
  for (let externalCounter = 0; externalCounter <= 3; externalCounter += 1) {
    myArray.push(externalCounter);
    for (let internalCounter = 2; internalCounter <= 3; internalCounter += 1) {
      myArray.push(internalCounter);
    }
  }
  return myArray;
};

module.exports = myCounter;
