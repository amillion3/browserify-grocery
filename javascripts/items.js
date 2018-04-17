// XHR Call for items.json

const genericXHRItems = (loadItems, errorFunction) => {
  const request = new XMLHttpRequest();
  request.addEventListener('load', loadItems);
  request.addEventListener('error', errorFunction);
  request.open('GET', '../db/items.json');
  request.send();
};

module.exports = genericXHRItems;
