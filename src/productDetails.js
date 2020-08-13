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
// const id0 = productDetails('Clayton zica 2', 'miojão 4')[0].details.productId;
// const id1 = productDetails('Clayton zica 2', 'miojão 4')[1].details.productId;
// assert.strictEqual(`${id0[id0.length - 3]}${id0[id0.length - 2]}${id0[id0.length - 1]}`, '123');
// assert.strictEqual(`${id1[id1.length - 3]}${id1[id1.length - 2]}${id1[id1.length - 1]}`, '123');
// console.log(typeof [1, 3, 4])

module.exports = productDetails;
