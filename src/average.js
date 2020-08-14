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
  let soma = 0;
  let media = 0;
  if (array.length === 0)
    return undefined
  for (let index = 0 ;index < array.length; index++) {
    if (typeof array[index] == 'string')
  return undefined;
  soma += array[index];
  media = soma / array.length;
  }
  return Math.round(media);
  }

//font:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//font:https://pt.stackoverflow.com/questions/13720/como-fa%C3%A7o-para-arredondar-um-valor-de-39-54-para-39/13724
//font: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
module.exports = average;
