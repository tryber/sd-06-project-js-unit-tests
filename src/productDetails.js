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

const assert = require('assert');
assert.equal(Array.isArray(productDetails('tes', 'tes')), true, 'Function result should be an Array');
// Teste que o array retornado pela função contém dois itens dentro.
assert.equal(productDetails('tes', 'tes').length, 2, 'array should have 2 items');
// Teste que os dois itens dentro do array retornado pela função são objetos.
assert.equal(typeof (productDetails('tes', 'tes')[0]), 'object', 'each of returned array indexes should be an object');
assert.equal(typeof (productDetails('tes', 'tes')[1]), 'object', 'each of returned array indexes should be an object');
// Teste que os dois objetos são diferentes entre si.
assert.notDeepEqual(productDetails('tes', 'test')[0], productDetails('tes', 'test')[1], 'Objects should not be equal');
// (Difícil) Teste que os dois productIds terminam com 123.
assert.match(productDetails('tes', 'tes')[0].details.productId, /^.*123$/, 'ProductID should end with 123');
