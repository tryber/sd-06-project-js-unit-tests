const assert = require('assert');

const teste2 = {
  food: {},
  drink: {},
};

let myRestaurant = {};

// req 1
const createMenu = (obj) => {
  myRestaurant = {
    fetchMenu: obj,
    consumption: [],
    order: createOrder,
    pay: paymentCalc,
  }
  return myRestaurant;
};

// req 3
const createOrder = (string) => {
  myRestaurant.consumption.push(string);
}

// Req 4
const paymentCalc = () => {
  let bill = 0;
  let checkedItem = "";
  for (index = 0; index < myRestaurant.consumption.length; index += 1) {
    checkedItem = myRestaurant.consumption[index];
    bill += prices[checkedItem];
  }
  bill += bill / 10;
  return bill;
};

const prices = {
  coxinha: 3.90,
  agua: 2.00,
  sopa: 5.30,
  sashimi: 9.90,
}

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