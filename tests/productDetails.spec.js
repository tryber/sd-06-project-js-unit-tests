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
    assert.strictEqual(Array.isArray(productDetails('string', 'string')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('string', 'string').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof productDetails('string', 'string'), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails('strin1', 'string2')[0].details.productId, productDetails('strin1', 'string2')[1].details.productId);
    // (Difícil) Teste que os dois productIds terminam com 123.
    // Eu tinha a ideia na cabeça de pegar os últimos 03 chars de uma string e comparar eles, mas não sabia como
    // Aprendi aqui: https://www.techiedelight.com/get-last-n-characters-from-string-javascript/
    // A lógica eu implementei sozinho a partir do 'substring'
    const output = productDetails('string1', 'string2');
    const obj1Id = output[0].details.productId;
    const obj2Id = output[1].details.productId;
    const obj1LastThree = obj1Id.substring(obj1Id.length - 3);
    const obj2LastThree = obj2Id.substring(obj2Id.length - 3);
    assert.strictEqual(obj1LastThree, obj2LastThree);
  });
});
