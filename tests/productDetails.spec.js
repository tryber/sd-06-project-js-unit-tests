/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois 
  objetos com os detalhes dos respectivos produtos.

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

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    const [obj1, obj2] = productDetails('Alguma coisa', 'Outra coisa');

    assert.equal(Array.isArray([obj1, obj2]), true);
    assert.equal([obj1, obj2].length, 2);

    assert.deepStrictEqual(typeof [obj1, obj2], 'object');
    assert.notDeepEqual(obj1, obj2);

    assert.deepStrictEqual([obj1, obj2].map(e => {
      return e.details.productId.slice(-3);
    }), ['123', '123']);

  });
});
