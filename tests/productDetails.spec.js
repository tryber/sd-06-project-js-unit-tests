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
    // ESCREVA SEUS TESTES ABAIXO:
    assert.strictEqual(Array.isArray(productDetails('produto A', 'produto B')), true);
    assert.strictEqual(productDetails().length, 2);
    assert.deepEqual(typeof productDetails('produto A', 'produto B'), 'object');
    assert.deepStrictEqual(productDetails()[0], productDetails()[1]);
    const first = productDetails('string1','string2')[0].details.productId.endsWith('123');
    const second = productDetails('string1','string2')[1].details.productId.endsWith('123');
    assert.strictEqual((first && second), true);
  });
});
