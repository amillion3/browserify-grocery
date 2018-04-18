let departments = [];
let items = [];
const cart = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = departmentsArray => {
  departments = departmentsArray;
};

const getItems = () => {
  return items;
};

const setItems = itemsArray => {
  items = itemsArray;
};

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

const setCart = (itemId, numberToAdd) => {
  const itemPosition = items.map(function (item) {
    return item.id; // return an array of item Ids
  }).indexOf(itemId); // which array of item ids matches the one passed in?
  const newItem = items[itemPosition]; // gets the item object then...
  newItem.purchaseNum = numberToAdd; // adds the new key/value pair (quantity added to cart)
  cart.push(newItem); // pushes item to cart
  console.log(cart);
};

const getCart = () => {
  return cart;
};

module.exports = {
  getDepartments,
  setDepartments,
  getItems,
  setItems,
  getItemsByDepartment,
  setCart,
  getCart,
};
