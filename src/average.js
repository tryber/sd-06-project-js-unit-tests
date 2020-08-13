/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  // variable to receive sum of all itens in array
  let sumArray = 0;
  // analyzing if array is empty
  if (array.length === 0) {
    return undefined;
  }
  // repetition loop to analyze expected conditions or sum array itens
  for (let index = 0; index < array.length; index += 1) {
    // analyze expected conditions of existence
    if (typeof (array[index]) !== 'number') {// || array[index] === ' ') {
      return undefined;
    }
    // sum all itens of array
    sumArray += array[index];
  }
  // if all conditions ok, return the arithmetic mean of the items in the array
  return Math.round(sumArray / array.length);
};

module.exports = average;
