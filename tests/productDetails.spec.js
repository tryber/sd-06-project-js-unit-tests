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
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('Alcool', 'Mascara')), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool', 'Mascara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('Alcool', 'Mascara')[0], 'object');
    assert.strictEqual(typeof productDetails('Alcool', 'Mascara')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('Alcool', 'Mascara')[0], productDetails('Alcool', 'Mascara')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const endString = productDetails('Alcool', 'Mascara')[0].details.productId;
    assert.strictEqual(endString.substring(endString.length - 3, endString.length), '123');
    const endString2 = productDetails('Alcool', 'Mascara')[1].details.productId;
    assert.strictEqual(endString2.substring(endString2.length - 3, endString2.length), '123');
  });
});
