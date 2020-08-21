const createMenu = (menu) => {
  const MENUOBJ = {
    fetchMenu: () => menu,
    consumption: [],
    order: items => items.forEach(item => MENUOBJ.consumption.push(item)),
    getItemPrice: (acc, current) => (MENUOBJ.fetchMenu.food[current]),
    pay: () => {
      let sum = 0;
      const { consumption } = MENUOBJ;
      const FOOD_MENU = MENUOBJ.fetchMenu().food;
      const DRINK_MENU = MENUOBJ.fetchMenu().drink;
      consumption.forEach((item) => {
        if (item in FOOD_MENU) {
          sum += FOOD_MENU[item];
          return sum;
        }
        sum += DRINK_MENU[item];
        return sum;
      });
      return sum;
    },
  };
  return MENUOBJ;
};

module.exports = createMenu;
