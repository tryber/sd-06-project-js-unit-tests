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

// const assert = require ('assert');
// assert.equal(typeof (productDetails('teste', 'teste')), 'object', 'Function result should be an Array');
// assert.equal(productDetails('tes', 'tes').length, 2, 'array should have 2 items');
// for (index = 0; index <= 1; index += 1) {
//   assert.equal(typeof (productDetails('tes', 'tes')[index]), 'object', 'each of returned array indexes should be an object');
// }
// assert.notEqual(productDetails('tes', 'tes')[0], productDetails('tes', 'tes')[1], 'Objects should not be equal');
// assert.match(productDetails('tes', 'tes')[0].details.productId, /^.*123$/, 'ProductID should end with 123');
