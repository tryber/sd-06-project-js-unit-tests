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
    assert.strictEqual(Array.isArray(productDetails('a', 'b')), true, 'ok');
    assert.strictEqual(productDetails('a', 'b').length, 2, 'ok');
    assert.strictEqual(typeof (productDetails('a', 'b')[0]), 'object', 'ok');
    assert.strictEqual(typeof (productDetails('a', 'b')[1]), 'object', 'ok');
    assert.ok(productDetails('a', 'b')[0] !== productDetails('a', 'b')[1], true, 'ok');
    assert.ok(/.123$/.test(productDetails('a', 'b')[0].details.productId), true, 'ok');
    assert.ok(/.123$/.test(productDetails('a', 'b')[1].details.productId), true, 'ok');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
