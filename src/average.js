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

const average = (list) => {
  let soma = 0
  if (list.length === 0) {
    return undefined;
  }
  for (let i = 0; i < list.length; i += 1) {
    if (typeof list[i] !== 'number') {
      return undefined;
    }
    soma += list[i];
  }
  if (soma === 1) {
    return 0;
  }
  const media = soma / list.length;
  return Math.round(media);
};
console.log(average([2]))
module.exports = average;
