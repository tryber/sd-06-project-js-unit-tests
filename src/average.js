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

const average = (arrayNumbers) => {
  let sum = 0;
  let average = 0;
  if (arrayNumbers.length === 0) {
    return undefined;
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (typeof arrayNumbers[index] === 'string') {
      return undefined;
    }
    sum += arrayNumbers[index];
  }
  average = (sum / arrayNumbers.length);
  if (average > 0 && average < 1) {
    return 0;
  } else if (average < 0) {
    return Math.round(average);
  }
  return Math.trunc(average);
};

module.exports = average;
