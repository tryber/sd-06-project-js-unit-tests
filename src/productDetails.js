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

const assert = require('assert');

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

// const itens = productDetails('alcool', 'mascara');

// assert.strictEqual(typeof itens[1], 'object');
// assert.strictEqual(typeof itens[0], 'object');
// assert.deepEqual((itens[0] !== itens[1]), true);

// const idProduto1 = itens[0].details.productId;
// const idProduto2 = itens[1].details.productId;

// const finalString1 = idProduto1.substring(idProduto1.length -3, idProduto1.length);
// const finalString2 = idProduto2.substring(idProduto2.length -3, idProduto2.length);

assert.strictEqual(finalString1, '123');
assert.strictEqual(finalString2, '123');


module.exports = productDetails;
