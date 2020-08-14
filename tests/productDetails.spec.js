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
    const returnProductDetails = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(returnProductDetails), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(returnProductDetails.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(returnProductDetails[0]), 'object');
    assert.strictEqual(typeof(returnProductDetails[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepEqual(Object.values(returnProductDetails[0]), Object.values(returnProductDetails[1]));
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(returnProductDetails[0].details.productId.endsWith('123'), true);
    assert.deepStrictEqual(returnProductDetails[1].details.productId.endsWith('123'), true);
  });
});
