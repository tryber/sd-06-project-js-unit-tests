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
    assert.strictEqual(Array.isArray(productDetails('array1', 'array2')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('array1', 'array2').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(productDetails('array1', 'array2')), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const aux = productDetails('array1', 'array2');
    assert.notDeepStrictEqual(aux[0], aux[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(aux[0].details.productId.slice(-3), '123');
    assert.deepStrictEqual(aux[1].details.productId.slice(-3), '123');

    // slice e os details.productId https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    //https://www.w3schools.com/nodejs/met_assert_notdeepstrictequal.asp
  });
});
