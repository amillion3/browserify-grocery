const genericXHR = require('./departments');
const genericXHRItems = require('./items');
const printToDepartmentDom = require('./departmentDom');
const data = require('./data');

let departmentsArray = [];

function loadFunction () {
  departmentsArray = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsArray); // setter function
  printToDepartmentDom(departmentsArray);
}

function loadItems () {
  const itemsArray = JSON.parse(this.responseText).items;
  data.setItems(itemsArray); // setter function
  console.log(itemsArray);
}

function errorFunction () {
  console.error('Something broke');
}

const initializer = () => {
  genericXHR(loadFunction, errorFunction);
  genericXHRItems(loadItems, errorFunction);
};

module.exports = {
  initializer,
};
