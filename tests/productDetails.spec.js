/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');
const { isObject } = require('util');

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
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(productDetails('firstProduct', 'secondProduct')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(Object.entries(productDetails('firstProduct', 'secondProduct')).length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof (productDetails('firstProduct', 'secondProduct')), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.entries(productDetails('firstProduct', 'secondProduct'))[0], Object.entries(productDetails('firstProduct', 'secondProduct'))[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual((productDetails('firstProduct', 'secondProduct'))[0]['details']['productId'].endsWith('123') || (productDetails('firstProduct', 'secondProduct'))[1]['details']['productId'].endsWith('123'), true);
  });
});
