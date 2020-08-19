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
const assert = require('assert');

const myCounter = () => {
  const myArray = []; 
  for (counter = 0; counter <= 3; counter+=1) { 
    myArray.push(counter);
    // console.log(myArray)
    for (counterTwo = 2; counterTwo <=3; counterTwo++){
      
      myArray.push(counterTwo);
     }
    }
  return myArray;
}
// codigo baseado no link https://codingrooms.com/nested-loops-javascript/
// const expectedOutput = [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
// assert.deepEqual(myCounter(), expectedOutput);
console.log(myCounter());

module.exports = myCounter;
