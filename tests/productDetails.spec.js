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
    assert.strictEqual(Array.isArray(productDetails('A', 'B')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails()[0] && typeof productDetails()[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(productDetails()[0] !== productDetails()[1], true);
    // (Difícil) Teste que os dois productIds terminam com 123.
    /* Pensei em como manipular a string. Mais precisamente
    os 3 ultimos digitos. Pensei em utilizar Regex.
    Fiz muitos testes, mas não consegui encontrar
    a expressão correta. Lembrei do video da Trybe sobre
    substrings https://www.youtube.com/watch?v=nDQTev2IFU8.
    Assisti e comecei a fazer testes de manipulação
    utilizando conhecimentos anteriores sobre strings e
    arrays. Consegui encontrar a forma correta e montei
    a expressão abaixo;
    */
    const productA = productDetails()[0].details.productId;
    const productB = productDetails()[1].details.productId;
    assert.strictEqual(productA.substring(productA.length-3), productB.substring(productB.length-3));
  }
)});