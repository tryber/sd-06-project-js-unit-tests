/*
  A função numbers recebe um array (tamanho variável),
  retornando true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false
     // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    // Escreva um teste em que a função recebe [' '] e retorna false
*/
const assert = require('assert');

const numbers = (myArray) => {
  for (let i = 0; i < myArray.length; i += 1) {
    if (typeof myArray[i] !== 'number') {
      return false;
    }
  }
  return true;
  };

module.exports = numbers;




