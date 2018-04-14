const genericXHR = require('./departments');
const printToDepartmentDom = require('./departmentDom');
const data = require('./data');

let departmentsArray = [];

function loadFunction () {
  departmentsArray = JSON.parse(this.responseText).departments;
  data.setDepartments(departmentsArray); // setter function
  printToDepartmentDom(departmentsArray);
}

function errorFunction () {
  console.error('Something broke');
}

const initializer = () => {
  genericXHR(loadFunction, errorFunction);
};

module.exports = {
  initializer,
};
