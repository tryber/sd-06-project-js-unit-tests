/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');
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
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.ok(Array.isArray(productDetails()));

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const retorno1 = productDetails('item1', 'item2');
    assert.strictEqual(typeof (retorno1[0]), 'object');
    assert.strictEqual(typeof (retorno1[1]), 'object');

    // Teste que os dois objetos são diferentes entre si.
    const retorno2 = productDetails("fisrt", "second");
    assert.notStrictEqual(retorno2[0], retorno2[1]);

    // (Difícil) Teste que os dois productIds terminam com 123.
    const retorno3 = productDetails("produto1", "produto2");
    assert.strictEqual(retorno3[0].details.productId.endsWith('123'), true);
    assert.strictEqual(retorno3[1].details.productId.endsWith('123'), true);
  });
});
