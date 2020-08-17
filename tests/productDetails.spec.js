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
    const product = productDetails('Produto1', 'Produto2');
    assert.deepStrictEqual(Array.isArray(product), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(product.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(product[0], product[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    for (let index = 0; index < product.length; index += 1) {
      assert.deepStrictEqual(typeof product[index], 'object');
      assert.deepStrictEqual(product[index].details.productId.substr(-3), '123');
    }
  });
});
