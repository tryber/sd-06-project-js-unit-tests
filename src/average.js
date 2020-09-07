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

function checkEmpty(numberArray) {
  let result = false;
  if (!Array.isArray(numberArray) || !numberArray.length) {
    result = true;
  }
  return result;
}

function sumAllValues(numberArray) {
  if (checkEmpty(numberArray)) {
    return undefined;
  }
  return numberArray.reduce((accum, curr) => accum + curr);
}

function checkNumber(element) {
  return typeof element === 'number';
}

function areAllNumbers(numberArray) {
  let result = false;
  const filtered = numberArray.filter(checkNumber);
  if (numberArray.length === filtered.length) {
    result = true;
  }
  return result;
}

const average = (numberArray) => {
  // Armazenar o valor da soma
  let result;
  const total = sumAllValues(numberArray);
  // Percorrer um array
  switch (true) {
    case (checkEmpty(numberArray) || !areAllNumbers(numberArray)):
      result = undefined;
      break;
    case (total <= 1 && total > 0):
      result = 0;
      break;
    default:
      result = Math.round(total / numberArray.length);
  }
  return result;
};

module.exports = average;
