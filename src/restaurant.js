const createMenu = (menu) => {
  const register = {
    fetchMenu: () => menu,
    consumption: [],
    order(product) {
      this.consumption.push(product);
    },
    pay() {
      const consumptionList = this.consumption;
      let bill = 0;
      consumptionList.forEach((item) => {
        if (menu.food[item]) {
          bill += menu.food[item];
        } else if (menu.drink[item]) {
          bill += menu.drink[item];
        }
      });
      // * When adding floating number, JS does not behave as expected:
      // * Ex.: 0.1 + 0.2 != 0.3 (not expected)
      // ? source: https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
      bill = Math.round((bill) * 100) / 100;
      return bill;
    },
  };
  return register;
};

module.exports = createMenu;
