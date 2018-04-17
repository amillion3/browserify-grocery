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

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

module.exports = {
  getDepartments,
  setDepartments,
  getItems,
  setItems,
  getItemsByDepartment,
};
