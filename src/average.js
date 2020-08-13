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
  if (arr.includes(arr[0])) {
    let valid = true;

    // copia o array para que não alteremos o de entrada (princípio de uma função)
    const sum = arr.slice(0).reduce((start, next, index, array) => {
      if (typeof(next) !== "number") {
        valid = false;
        array.splice(1); // 'quebra' o array que o reduce tá olhando, como se fosse um 'break' do loop.
      }
      return start + next;
    }, 0)

    if (valid) {
      return Math.round(sum / arr.length);
    }
  }
};

module.exports = average;

console.log(average([2,4, 's', 5]));