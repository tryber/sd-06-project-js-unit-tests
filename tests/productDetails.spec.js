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
    assert.deepStrictEqual(Array.isArray(productDetails()) , true);
    // Refatorado com o código do plantão(Ícaro)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.notDeepStrictEqual(productDetails('1','2')[1]['name'], undefined);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof(productDetails('1','2')[0]), 'object');
    assert.deepStrictEqual(typeof(productDetails('1','2')[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const productOne = productDetails('1','2')[0];
    const productTwo = productDetails('1','2')[1];
    assert.notDeepStrictEqual(productOne, productTwo);
    // Refatorado com dica do Plantão (Ícaro)
    // (Difícil) Teste que os dois productIds terminam com 123.
    const firstValue = productDetails('mascara','bota');
    const secondValue = productDetails('mascara','bota');
    assert.deepStrictEqual(firstValue[0]['details']['productId'], `${firstValue[0]['name']}123`);
    assert.deepStrictEqual(secondValue[1]['details']['productId'], `${secondValue[1]['name']}123`);
  });
});
