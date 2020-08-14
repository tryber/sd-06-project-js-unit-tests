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
    // Teste que o retorno da função é um array.
    const array = productDetails('Álcool', 'Máscara');
    assert.ok(Array.isArray(array), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    const arrayLength = array.length;
    assert.strictEqual(arrayLength, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const elements = array[0, 1];
    assert.strictEqual(typeof elements, 'object');
    // Teste que os dois objetos são diferentes entre si.
    const equality = Object.is(array[0], array[1]);
    assert.strictEqual(equality, false);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const end = array[0]["details"]["productID"].endsWith(123); 
    const finishs = array[1]['details']['productID'].endsWith(123);
    assert.deepStrictEqual(end && finishs, true);
  });
});
