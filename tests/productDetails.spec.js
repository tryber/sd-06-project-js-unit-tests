/* eslint-disable max-len*/
/* eslint-disable no-unused-vars */

const assert = require('assert');
const productDetails = require('../src/productDetails');
const { type } = require('os');

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

    assert.equal((Array.isArray(productDetails())), true, 'Return is not an Object')

    // Teste que o array retornado pela função contém dois itens dentro.

    assert.equal((productDetails('a', 'b').length), 2, 'Expected 2 itens')

    // Teste que os dois itens dentro do array retornado pela função são objetos.

    assert.equal((typeof (Object.entries(productDetails('produtoa', 'produtob')[0]))), typeof (Object.entries(productDetails('produtoa', 'produtob')[1])), 'object object', 'Expected object object')

    // Teste que os dois objetos são diferentes entre si.

    assert.notDeepStrictEqual(((Object.entries(productDetails('produtoa', 'produtob')[0]))), typeof (Object.entries(productDetails('produtoa', 'produtob')[1])), 'object object', 'Expected object object')
    // (Difícil) Teste que os dois productIds terminam com 123.

    assert.equal((productDetails('a', 'b')[0].details.productId.replace('a', '')), (productDetails('a', 'b')[1].details.productId.replace('b', '')), '123 123', 'Expected 123')

  });
});
