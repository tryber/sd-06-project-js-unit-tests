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
  let sum = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let index = 0; index<array.length; index+=1) {
    if (typeof array[index] !== 'number') {
      return undefined;
    }
    sum += array[index];
  }
  return Math.round(sum / array.length);
};


/*codigo baseado no link https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js#:~:text=12%20Answers&text=You%20calculate%20an%20average%20by,var%20avg%20%3D%20total%20%2F%20grades. */

module.exports = average;
