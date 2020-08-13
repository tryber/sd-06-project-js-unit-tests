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

const average = (arr) => {
  let sum = 0;
  let roundedArr = [];
  if(arr.length == 0) {
    return undefined;
  }
  for(let i = 0; i < arr.length; i += 1) {
    if(typeof arr[i] !== "number") {
      return undefined;
  } else if(typeof arr[i] == "number") {
    roundedArr.push(Math.round(arr[i]));
    }
  }
  for(let j = 0; j < roundedArr.length; j+= 1) {
    sum += roundedArr[j];
  }
  return Math.round(sum/roundedArr.length);
};

module.exports = average;
