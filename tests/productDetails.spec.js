/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');
const { type } = require('os');

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
    // Teste que o retorno da função é um array.
    assert.deepEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails()[0] && typeof productDetails()[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepEqual(productDetails('A', 'B')[0], productDetails('A', 'B')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const end1 = productDetails('a', 'b')[0].details.productId.match(/123$/)[0];
    const end2 = productDetails('a', 'b')[1].details.productId.match(/123$/)[0];
    assert.strictEqual(end1, '123');
    assert.strictEqual(end2, '123');
  });
});
