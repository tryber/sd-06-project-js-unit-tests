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

const average = (inputedArray) => {
  if (inputedArray.length <= 0) return undefined;
  for (index in inputedArray) {
    if (typeof (inputedArray[index]) === 'string') {
      return undefined;
    }
  }
  let averageResult = 0;
  for (index = 0; index < inputedArray.length; index += 1) {
    averageResult += inputedArray[index];
  }
  const divisor = inputedArray.length;
  const result = averageResult / divisor;
  return Math.round(result);
};
console.log(average([1, 2, 3, 4]));
console.log(average([]));
console.log(average([1, 2, '3']));

module.exports = average;
