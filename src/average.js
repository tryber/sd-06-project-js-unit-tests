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
  let total = 0;
  let med = 0;
  /*  if para a situação em que o array está vazio, retornando undefined*/
  if (array.length === 0) {
    return undefined;
  }
  /*  for para percorrer o array e verificar se possui alguma string e retornar undefined*/
  for (i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'string') {
      return undefined;
    }
    /*  variavel total receberá os valores contidos em array, segundo o index*/

    total += array[i];
  }
  /*  med receberá o valor do calculo referente à media dos valores*/
  med = total / array.length;
  /*  Caso a média seja menor que 1, o valor será arredondado para o numero inteiro mais próximo (1)*/
  if (med < 1) {
    return Math.round(med);
  }
  /*  Não sendo menor que 1, retornada a parte inteira, descartando suas casas decimais.*/
  return Math.trunc(med);
};
module.exports = average;
