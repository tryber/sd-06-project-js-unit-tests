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
    //assert.fail('deu ruim!!!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // referencia -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
    const meuArray = productDetails('array1', 'array2');
    assert.strictEqual(Array.isArray(meuArray), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.equal(productDetails.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const produto = (itens) => {
      let resultado = false;
      itens.forEach((element) => {
        if (typeof element === 'object') {
          resultado = true;
        }
      });
      return resultado;
    };
    assert.strictEqual(produto(meuArray), true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(meuArray[0], meuArray[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
  });
});
