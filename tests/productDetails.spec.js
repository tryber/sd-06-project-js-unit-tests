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
    const output = productDetails('one','two');
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(output), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(output.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof(output[0] || output[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(output[0], output[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const param1 = productDetails('one','two')[0]["details"]["productId"];
    const param2 = productDetails('one','two')[1]["details"]["productId"];
    assert.deepStrictEqual(param1.endsWith(123) || param2.endsWith(123), true);
  });
});
