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
    // Teste que o retorno da função é um array.
    /*****************************************************************************************************
     * Não me lembrava como verificar se um Objeto é um Array. Após "Googlada", obtive informações aqui :
     * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
     ****************************************************************************************************/
    assert.equal(Array.isArray(productDetails('um', 'dois')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.equal(productDetails('um','dois').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.equal(typeof(productDetails('um', 'dois')[0]) && typeof(productDetails('um', 'dois')[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notEqual(productDetails('um', 'dois')[0], productDetails('um', 'dois')[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.notEqual(productDetails('um', 'dois')[0].details.productId.indexOf('123') && productDetails('um', 'dois')[1].details.productId.indexOf('123'), -1);
  });
});
