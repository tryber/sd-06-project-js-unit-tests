/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');
const { isArray } = require('util');
const { compileFunction } = require('vm');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    const STR1 = 'tomate';
    const STR2 = 'abacate';
    const COMBO = ['tomate', 'abacate'];

    assert.deepEqual(isArray(productDetails(STR1, STR2)), true, 'productDetails() must return an array');
    assert.deepEqual(productDetails(STR1, STR2).length, 2, 'productDetails().length must match 2');
    productDetails(COMBO).map(element => {
      assert.deepEqual(typeof(element), 'object', 'productDetails() should return an object');
    });
    assert.notDeepEqual(productDetails(STR1, STR2)[0], productDetails(STR1, STR2)[1], 'productDetails(STR1, STR2)[0] should not be equal of productDetails(STR1, STR2)[1]');
    productDetails(COMBO).map(element => {
      assert.strictEqual(element.details.productId.slice(-3), '123');
    });
  });
});
