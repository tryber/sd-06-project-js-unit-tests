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
    const myArray = productDetails('Álcool', 'Máscara');
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(myArray), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(myArray.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const objects = myArray[0, 1];
    assert.strictEqual(typeof objects, 'object');
    // Teste que os dois objetos são diferentes entre si.
    const obj1 = Object.values(myArray)[0];
    const obj2 = Object.values(myArray)[1];
    assert.notEqual(obj1, obj2);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
