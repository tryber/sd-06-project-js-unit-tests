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
const size = (test) => {
  let answer = 0
  if (test.length === 0) {
    answer = undefined;
  }
  return answer;
}
const average = (array) => {
  let sum = 0;
  let result = size(array);
  let i = 0;  
  while (array.length !== 0 && i < array.length) {
    if (typeof array[i] !== 'number') {
      result = undefined;
      break;
    }
    sum += array[i];
    i += 1;
  }
  if (result !== undefined) {
    result = Math.round((sum) / array.length);
  }
  return result;
};
module.exports = average;
