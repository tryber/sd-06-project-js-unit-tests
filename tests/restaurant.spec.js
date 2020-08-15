const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    // ? TESTE 1: Verifique que, dado um objeto qualquer passado como um parâmetro para a função createMenu(), checa se o retorno da função é um objeto no seguinte formato: { fetchMenu: objetoQualquer }.
    const menu = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} };
    assert.deepStrictEqual(createMenu(menu).fetchMenu(), menu);

    // ? TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, verifique que 'objetoRetornado.fetchMenu' retorna um objeto cujas chaves são somente `food` e `drink`.
    assert.deepStrictEqual(Object.keys(createMenu(menu).fetchMenu()), ['food', 'drink']);

    // ? TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    assert.deepStrictEqual(createMenu(menu).fetchMenu(), menu);

    // ? TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    assert.deepStrictEqual(createMenu(menu).consumption, []);

    // ? TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    const restaurant = createMenu(menu);
    restaurant.order('coxinha');
    assert.deepStrictEqual(restaurant.consumption, ['coxinha']);

    // ? TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    restaurant.order('agua');
    restaurant.order('sopa');
    restaurant.order('agua');
    assert.deepStrictEqual(restaurant.consumption, ['coxinha', 'agua', 'sopa', 'agua']);

    // ? TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    restaurant.order('coxinha');
    assert.deepStrictEqual(restaurant.consumption, ['coxinha', 'agua', 'sopa', 'agua','coxinha']);

    // ? TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    assert.deepStrictEqual(restaurant.pay(), 25.5);
  });
});
