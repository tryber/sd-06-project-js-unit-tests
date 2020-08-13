/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');
const { isArray, formatWithOptions } = require('util');

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
    assert.deepStrictEqual(isArray(productDetails('Alcool gel', 'Máscara')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const obj = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(typeof (obj[0] && obj[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const obj2 = productDetails('pro1', 'pro');
    assert.notDeepEqual(Object.values(Object.values(obj2)[0])[0], Object.values(Object.values(obj2)[1])[0]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    const obj3 = productDetails('pro1', 'pro2');
    const result123 = obj3.map(element => {
      const id = element.details.productId;
      const number = id.slice((id.length-3),id.length);
      if (number === '123') {
        return true;
      }
    });
    assert.deepEqual(result123, [true, true]);
  });
});
