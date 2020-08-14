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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails('alcool gel', 'mascara')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('alcool gel', 'mascara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productDetails('alcool gel', 'mascara'))[0], 'object');
    assert.strictEqual(typeof (productDetails('alcool gel', 'mascara'))[1], 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('alcool gel', 'mascara')[0], productDetails('alcool gel', 'mascara')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDetails('alcool gel', 'mascara')[0].details.productId.substring(productDetails('alcool gel', 'mascara')[0].details.productId.length - 3), '123');
    assert.strictEqual(productDetails('alcool gel', 'mascara')[1].details.productId.substring(productDetails('alcool gel', 'mascara')[1].details.productId.length - 3), '123');
  });
});
