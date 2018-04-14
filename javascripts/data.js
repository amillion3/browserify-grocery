const genericXHR = require('./departments');

let departmentsArray = [];

function loadFunction () {
  departmentsArray = JSON.parse(this.responseText).departments;
  console.log(departmentsArray);
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
