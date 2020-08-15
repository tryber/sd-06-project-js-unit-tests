/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');

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
    assert.deepStrictEqual(Array.isArray(productDetails('bola', 'gato')), true);
    assert.deepStrictEqual(productDetails('bola', 'gato').length, 2);
    assert.deepStrictEqual(typeof Object.values(productDetails('bola', 'gato')), 'object');

    const obj01 = productDetails('bola', 'gato')[0];
    const obj02 = productDetails('bola', 'gato')[1];
    assert.notDeepEqual(obj01 === obj02, true);
    
    assert.deepStrictEqual(obj01.details.productId.slice(-3), '123');
    assert.deepStrictEqual(obj02.details.productId.slice(-3), '123');
  });
});
