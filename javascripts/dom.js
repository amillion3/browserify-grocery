// printToDom function
// calls domString function
// 2 rows of 4
// make a card with class of department
// each card should have an image tag and an h3 tag
// h3 should have class 'hide'

const buildDomString = (input) => {
  let output = '';
  for (let i = 0; i < input.length; i++) {
    output += `
            <div class = "col-sm-3 department">
              <div class='panel panel-default department'>
                <div class='panel-body'>
                  <h3 class='hide'>${input[i].name}</h3>
                  <img src='${input[i].img}'>
                </div>
              </div>
            </div>`;
  }
  return output;
};

const printToDom = (departmentsArray) => {
  const domString = buildDomString(departmentsArray);
  const divHolder = document.getElementById('departments');
  divHolder.innerHTML = domString;
};

module.exports = printToDom;
