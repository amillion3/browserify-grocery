const genericXHR = require('./departments');
const printToDom = require('./dom');

let departmentsArray = [];

function loadFunction () {
  departmentsArray = JSON.parse(this.responseText).departments;
  printToDom(departmentsArray);
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
