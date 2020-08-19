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
    const itens = productDetails('alcool', 'mascara');
    assert.strictEqual(Array.isArray(itens), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(itens.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof itens[1], 'object');
    assert.strictEqual(typeof itens[0], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.deepEqual((itens[0] !== itens[1]), true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const idProduto1 = itens[0].details.productId;
    const idProduto2 = itens[1].details.productId;
    const finalString1 = idProduto1.substring(idProduto1.length-3, idProduto1.length);
    const finalString2 = idProduto2.substring(idProduto2.length-3, idProduto2.length);
    assert.strictEqual(finalString1, '123');
    assert.strictEqual(finalString2, '123');
  });
});
