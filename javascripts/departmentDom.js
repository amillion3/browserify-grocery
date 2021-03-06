const events = require('./events');

const buildDomString = (input) => {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    output += `
      <div class="col-sm-3 department">
        <h4 class="department-title hide" data-department-id="${input[i].id}">${input[i].name}</h4>
        <img class="department-image" src="${input[i].img}">
      </div>`;
  }
  return output;
};

const printToDepartmentDom = (departmentsArray) => {
  const domString = buildDomString(departmentsArray);
  const divHolder = document.getElementById('departments');
  divHolder.innerHTML = domString;
  events.addDepartmentEvents();
};

module.exports = printToDepartmentDom;
