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

const average = (e) => {
  let sumArray = 0;
  let avgArray = 0;
  // let numOfNotEqualZeroItens = 0;
  for (let r = 0; r < e.length; r += 1) {
    sumArray += e[r];
  }
  if (e.length === 0 || typeof (sumArray) === 'string') return undefined;
  avgArray = Math.round(sumArray / e.length);
  return avgArray;
};
console.log(average([1, 2]));
console.log(average([1, 2, 3, 4, 5]));
console.log(average([1, 2, '3']));
console.log(average([]));
console.log(average([0, 0, 0, 0, 0, 0, 0]));
module.exports = average;
