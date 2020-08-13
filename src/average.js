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

const average = array => {
  let total = 0;
  if(array.length === 0) {
    return undefined;
  }
  for (let i = 0; i < array.length; i += 1) {
    total += array[i];
  }
  if(typeof(total) === 'string') {
    return undefined
  }
  let resultFull = total/array.length;
  const result = Math.round(resultFull);

  return result;
};

console.log(average([10, 20]));
console.log(average([1, 2]));
console.log(average([1, 2, 3, 4, 5]));
console.log(average([1, 2, '3']));
console.log(average([]));
console.log(average([0, 0, 0]));
module.exports = average;
