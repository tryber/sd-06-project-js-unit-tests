/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]
*/

// const assert = require('assert');

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

module.exports = productDetails;

// if(productDetails("milho", "arroz")
// [0].details.productId.toString().endsWith("123") === true && productDetails("milho", "arroz")[1].
// details.productId.toString().endsWith("123") === true){
// var resultado = 'true';
// utilizando o VAR intencionalmente para que o test possa identifica-lo
// fora do bloco de codigo
// console.log(resultado);
// }
// assert.strictEqual(resultado, 'true');
