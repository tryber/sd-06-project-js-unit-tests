const createMenu = (menu) => {
  return {
    fetchMenu: () => menu,
    consumption: [],
    order(product) {
      this.consumption.push(product);
    },
    pay() {
      const consumptionList = this.consumption;
      let bill = 0;
      for (let i = 0; i < consumptionList.length; i += 1) {
        if (menu.food[consumptionList[i]]) {
          bill += menu.food[consumptionList[i]];
        } else if (menu.drink[consumptionList[i]]) {
          bill += menu.drink[consumptionList[i]];
        }
      }
      // * When adding floating number, JS does not behave as expected:
      // * Ex.: 0.1 + 0.2 != 0.3 (not expected)
      // ? source: https://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-only-if-necessary
      bill = Math.round((bill) * 100) / 100;
      return bill;
    },
  };
};

module.exports = createMenu;
