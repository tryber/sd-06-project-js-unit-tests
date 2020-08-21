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
  //Solução de usar dois contadores diferentes de Paulo Cheloni
*/

const myCounter = () => {
  const myArray = [];
  for (let i = 0; i <= 3; i += 1) {
    myArray.push(i);
    for (let i2 = 2; i2 <= 3; i2 += 1) {
      myArray.push(i2);
    }
  }
  return myArray;
};

module.exports = myCounter;
