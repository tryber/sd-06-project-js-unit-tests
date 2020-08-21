const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('#createMenu', () => {
  it('tests the function has the correct behaviour', () => {
    const THINGS = { 
      food: {
        'coxinha': 3.9,
        'sopa': 9.9},
      drink: {
        'agua': 3.9,
        'cerveja': 6.9,
      } 
    };
    const menuReturned = createMenu(THINGS);
    const table1 = createMenu(THINGS);
    const table2 = createMenu(THINGS);
    const table3 = createMenu(THINGS);
    
    const EMPTYTHINGS = { 
      food: {},
      drink: {},
    };

    const EMPTYCONSUMPTION = [];
    // TESTE 1:
    assert.deepStrictEqual(typeof menuReturned, 'object');
    const { fetchMenu } = menuReturned;
    assert.deepStrictEqual(fetchMenu(), THINGS);
    // TESTE 2:
    assert.deepStrictEqual(createMenu(EMPTYTHINGS).fetchMenu(), EMPTYTHINGS);
    // TESTE 3
    assert.deepStrictEqual(menuReturned.fetchMenu(), THINGS);
    // TESTE 4:
    assert.deepStrictEqual(createMenu().consumption, EMPTYCONSUMPTION);
    // TESTE 5:
    menuReturned.order(['coxinha']);
    assert.deepStrictEqual(menuReturned.consumption, ['coxinha']);
    // TESTE 6:
    table1.order(['coxinha']);
    table1.order(['agua']);
    table1.order(['sopa']);
    table1.order(['sashimi']);
    assert.deepStrictEqual(table1.consumption, ["coxinha", "agua", "sopa", "sashimi"]);
    // TESTE 7:
    table2.order(['coxinha']);
    table2.order(["agua"]);
    table2.order(['coxinha']);
    assert.deepStrictEqual(table2.consumption, ['coxinha', 'agua', 'coxinha']);
    // TESTE 8:
    table3.order(['coxinha']);
    table3.order(['agua']);
    table3.order(['coxinha']);
    assert.deepStrictEqual(table3.pay(), 11.7);
  });
});
