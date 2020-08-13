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

const average = (newArray) => {
  let media = 0;
  let sum = 0;

  if (newArray.length <= 0) {
    return undefined;
  }

  for (let i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] !== 'number') {
      return undefined
    } else {
      sum += Math.round(newArray[i]);
    }

  }

  media = Math.round(sum / newArray.length);
  return media;
};


module.exports = average;