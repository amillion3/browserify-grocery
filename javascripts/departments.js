// XHR Call for departments.json

const genericXHR = (loadFunction, errorFunction) => {
  const request = new XMLHttpRequest();
  request.addEventListener('load', loadFunction);
  request.addEventListener('error', errorFunction);
  request.open('GET', '../db/departments.json');
  request.send();
};

module.exports = genericXHR;
