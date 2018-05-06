const data = require('./data');

const cartOutputDiv = document.getElementById('cart');

const cartDomString = (items) => {
  let domString = '<h2 class="text-center">Your Cart</h2>';
  domString += `<div class="col-xs-8 col-xs-offset-2">`;
  domString += `<table class="table table-striped">`;
  domString +=   `<tr>`;
  domString +=     `<th>Name</th>`;
  domString +=     `<th>Price</th>`;
  domString +=     `<th>Quantity</th>`;
  domString +=     `<th></th>`;
  domString +=   `</tr>`;
  items.forEach((item) => {
    domString +=   `<tr>`;
    domString +=     `<td>${item.name}</td>`;
    domString +=     `<td>$${item.price.toFixed(2)}</td>`;
    domString +=     `<td>${item.purchaseNum}</td>`;
    domString +=     `<td><button class="btn btn-danger"><span class="glyphicon glyphicon-trash"></span></button></td>`;
    domString +=   `</tr>`;
  });
  domString += `</table>`;
  domString += getTotals(items);
  domString += `</div>`;
  return domString;
};

const getTotals = (items) => {
  let itemTotal = 0;
  let priceTotal = 0;
  items.forEach((item) => {
    itemTotal += (item.purchaseNum * 1); // convert string to number
    priceTotal += (item.purchaseNum * item.price);
  });
  return totalsString(itemTotal, priceTotal);
};

const totalsString = (itemNum, total) => {
  let domString = '';
  domString += `
    <h4>Total number of items: ${itemNum}</h4>
    <h4>Total price: $${total.toFixed(2)}</h4>
  `;
  return domString;
};

const printCartToDom = () => {
  const cartItems = data.getCart();
  cartOutputDiv.innerHTML = cartDomString(cartItems);
};

// delete button _-_-_-_-_-_
// remove item from cart array -- deleteCartItem(itemIdToDelete)  -- data attribute?
// in data.js, find the matching position, splice it
// then reload cart page  --

module.exports = printCartToDom;
