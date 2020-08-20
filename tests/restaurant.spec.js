/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');
const { createPrivateKey } = require('crypto');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // TESTE1
  const objetoQualquer = {
    comes: 'coxinha',
    bebes: 'cerva',
  }
  assert.deepEqual(createMenu(objetoQualquer).fetchMenu, objetoQualquer, 'return should be an object  with { fetchMenu: objetoQualquer }');

  // TESTE 2
  assert.deepEqual(Object.keys(createMenu(teste2).fetchMenu), ['food', 'drink'], 'returned fetchMenus keys should be FOOD and DRINK');

  // TESTE 3
  assert.deepEqual(createMenu(teste2).fetchMenu, teste2, 'Returned object inside Fetch menu should be equal obj passed as parameter');

  // TESTE 4
  assert.deepEqual(createMenu(teste2).consumption, [], 'Returned consumption key should be an empty Array');

  // Teste 5
  createMenu(teste2);
  createOrder('coxinha');
  assert.equal(myRestaurant.consumption, 'coxinha', 'Returned string should be the same inputes through function inside order key');

  // TESTE 6
  myRestaurant.order('agua');
  myRestaurant.order('sopa');
  myRestaurant.order('sashimi');
  assert.deepEqual(myRestaurant.consumption, ["coxinha", "agua", "sopa", "sashimi"], 'Consumption should have this array ["coxinha", "agua", "sopa", "sashimi"]')

  //TESTE 7
  myRestaurant.order('coxinha');
  assert.deepEqual(myRestaurant.consumption, ["coxinha", "agua", "sopa", "sashimi", "coxinha"], 'Consumption should have this array ["coxinha", "agua", "sopa", "sashimi"]')

  // // TESTE 8
  console.log(myRestaurant);
  console.log(paymentCalc());
  assert.deepEqual(myRestaurant.pay(), 27.5, "price should be 27.5");
}
