let departments = [];
let items = [];

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

module.exports = {
  getDepartments,
  setDepartments,
  getItems,
  setItems,
};
