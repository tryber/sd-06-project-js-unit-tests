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

const anArray = [1, 2, 3, 5, 8, 9, '71'];

const average = (arr) => {
  let totalSum = 0;
  for (let i in arr) {
    if (typeof(arr[i]) === 'number') {
      totalSum += arr[i];
    } else {
      totalSum = undefined;
      return totalSum;
    }
  }
  return Math.round(totalSum / arr.length);
};

console.log(average(anArray));

module.exports = average;
