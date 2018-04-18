const dataGatekeeper = require('./dataGatekeeper');

const goToDepartments = document.getElementById('go-to-departments');
const goToCart = document.getElementById('go-to-cart');
const departmentsDiv = document.getElementById('departments');
const itemsDiv = document.getElementById('items');
const cartDiv = document.getElementById('cart');

const departmentsButton = () => {
  goToDepartments.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    dataGatekeeper.initializer();
  });
};

const cartButton = () => {
  goToCart.addEventListener('click', () => {
    departmentsDiv.innerHTML = '';
    itemsDiv.innerHTML = '';
    cartDiv.innerHTML = '';
    // print to cart DOM function
  });
};

module.exports = {
  departmentsButton,
  cartButton,
};
