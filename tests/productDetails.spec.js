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
    assert.equal(Array.isArray(productDetails('tes', 'tes')), true, 'Function result should be an Array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.equal(productDetails('tes', 'tes').length, 2, 'array should have 2 items');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    for (index = 0; index <= 1; index += 1) {
      assert.equal(typeof (productDetails('tes', 'tes')[index]), 'object', 'each of returned array indexes should be an object');
    }
    // Teste que os dois objetos são diferentes entre si.
    assert.notEqual(productDetails('tes', 'tes')[0], productDetails('tes', 'tes')[1], 'Objects should not be equal');
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.match(productDetails('tes', 'tes')[0].details.productId, /^.*123$/, 'ProductID should end with 123');
  });
});
