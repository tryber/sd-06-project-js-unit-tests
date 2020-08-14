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
    //pesquisa de como confirmar que um array.isArray - https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery
    assert.strictEqual(Array.isArray(productDetails('param1', 'param2')), true, 'true');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('param1', 'param2').length, 2, 'true');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(productDetails('param1', 'param2')[0]), 'object', 'true');
    assert.strictEqual(typeof(productDetails('param1', 'param2')[1]), 'object', 'true');
    // Teste que os dois objetos são diferentes entre si.
    assert.notEqual(productDetails('param1', 'param2')[0], productDetails('param1', 'param2')[1], 'true');
    // (Difícil) Teste que os dois productIds terminam com 123.
    //pesquisa - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    assert.strictEqual(productDetails('param1', 'param2')[0].details.productId.indexOf('123') && productDetails('param1', 'param2')[1].details.productId.indexOf('123'), 6, 'true');
  });
});
