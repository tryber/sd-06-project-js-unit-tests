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
    assert.strictEqual(typeof productDetails('boneco de ação do Clayton', 'miojo'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Clayton', 'miojo 2').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('Clayton zica', 'miojão 3')[0], 'object');
    assert.strictEqual(typeof productDetails('Clayton zica', 'miojão 3')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepEqual(productDetails('Clayton zica 2', 'miojão 4')[0], productDetails('Clayton zica 2', 'miojão 4')[1])
    // (Difícil) Teste que os dois productIds terminam com 123.
    const id0 = productDetails('Clayton zica 2', 'miojão 4')[0].details.productId;
    const id1 = productDetails('Clayton zica 2', 'miojão 4')[1].details.productId;
    assert.strictEqual(id0[id0.length - 3] + id0[id0.length - 2] + id0[id0.length - 1], '123');
    assert.strictEqual(id1[id1.length - 3] + id1[id1.length - 2] + id1[id1.length - 1], '123');
  });
});
