/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const createMenu = require('../src/restaurant');

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menuItems. Dado que um menuItems foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menuItems cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const myMenu = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  myMenu.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  myMenu.order('coxinha') // Retorno: undefined

  myMenu.consumption // Retorno: ['coxinha']

  myMenu.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menuItems tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const myMenu = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  myMenu.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
    // ```
    // createMenu(objetoQualquer) // Retorno: { fetchMenu: objetoQualquer }
    // ```
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    const menuItems = {
      food: {
        coxinha: 3.90,
        sanduiche: 9.90,
      },
      drink: {
        agua: 3.90,
        cerveja: 6.90,
      },
    };

    let myMenu = createMenu(menuItems);

    const { fetchMenu } = myMenu;

    assert.deepStrictEqual(fetchMenu, menuItems);

    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu // Retorno: { food: {}, drink: {}}
    // ```
    // Agora faça o TESTE 3 deste arquivo.
    // --------------------------------------------------------------------------------------

    assert.deepStrictEqual(Object.keys(myMenu.fetchMenu), ['food', 'drink']);

    // TESTE 3: Verifique que o menuItems passado pra função createMenu é identico ao menuItems recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu // Retorno: objetoQualquer
    // ```
    // Agora faça o TESTE 4 deste arquivo.
    // --------------------------------------------------------------------------------------

    assert.deepStrictEqual(myMenu.fetchMenu, menuItems);

    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menuItems, retorna um array vazio.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []
    // ```
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------

    assert.deepStrictEqual(myMenu.consumption, []);

    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```;
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha']
    // ```
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------

    myMenu.order('coxinha');
    assert.deepStrictEqual(myMenu.consumption, ['coxinha']);


    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('sopa');
    // objetoRetornado.order('sashimi');
    // objetoRetornado.consumption // Retorno: ['coxinha', 'agua', 'sopa', 'sashimi']
    // ```

    myMenu = createMenu(menuItems);
    myMenu.order('coxinha');
    myMenu.order('agua');
    myMenu.order('sopa');
    myMenu.order('sashimi');
    assert.deepStrictEqual(myMenu.consumption, ['coxinha', 'agua', 'sopa', 'sashimi']);


    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```

    myMenu = createMenu(menuItems);
    myMenu.order('coxinha');
    myMenu.order('agua');
    myMenu.order('coxinha');
    assert.deepStrictEqual(myMenu.consumption, ['coxinha', 'agua', 'coxinha']);

    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```

    myMenu = createMenu(menuItems);
    myMenu.order('coxinha');
    myMenu.order('agua');
    myMenu.order('coxinha');
    assert.deepStrictEqual(myMenu.pay(), 11.70);

    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
