const genericXHR = require('./departments');
const printToDepartmentDom = require('./departmentDom');

let departmentsArray = [];

function loadFunction () {
  departmentsArray = JSON.parse(this.responseText).departments;
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
