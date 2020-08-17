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

// console.log(productDetails("milho", "arroz"));
// const productOne = productDetails("milho", "arroz")[0].details.productId
// console.log()

//  assert.strictEqual(typeof productDetails("milho", "arroz"), 'object');
//  assert.strictEqual(productDetails("milho", "arroz").length,2);
//  assert.notDeepEqual(productDetails("milho", "arroz")[0], productDetails("milho", "arroz")[1])
//  if(productDetails("milho", "arroz")[0].details.productId.toString().endsWith("123") === true && productDetails("milho", "arroz")[1].
//details.productId.toString().endsWith("123") === true){
//     const result = 'true';
//     return result;
//  }
//  assert(result === 'true')
