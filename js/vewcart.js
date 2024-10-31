
var cartItems = [];
window.onload = () => {
  if (JSON.parse(localStorage.getItem("ProductList")) != null) {
    products = JSON.parse(localStorage.getItem("ProductList"));
    DisplayCart();
  }
}

function DisplayCart() {
  let cartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
  let cartItemsContainer = document.querySelector(".cart");
  let subtotal = 0;
  let quantity = 1;
  for (var i = 0; i < cartItems.length; i++) {
    let itemTotal = parseFloat(cartItems[i].price) * parseInt(quantity);
    subtotal += itemTotal;
    cartItemsContainer.innerHTML += `
      <div class="cart-item">
          <div class="row">
              <div class="col-md-7 center-item">
                  <img src="${cartItems[i].img}" alt="">
                  <h5>${cartItems[i].Name}($ ${cartItems[i].price} )</h5>
              </div>
              <div class="col-md-5 center-item">
                  <div class="input-group number-spinner">
                      <button id="phone-minus" class="btn btn-default"><i class="fas fa-minus"></i></button>
                      <input id="phone-number" type="number" min="0" class="form-control text-center" value="${quantity}">
                      <button id="phone-plus" class="btn btn-default"><i class="fas fa-plus"></i></button>
                  </div>
                  <h5>$ <span id="phone-total">${itemTotal}</span> </h5>
                  <button onclick="deleteCart(${i})" class="btn btn-danger"> delete </button>
              </div>
          </div>
      </div>
      `;
  };
  let tax = subtotal * 0.1; // Assuming tax rate is 10%
  let totalPrice = subtotal + tax;
  // Display subtotal, tax, and total price
  cartItemsContainer.innerHTML += `
  <div class="cart-item">
  <div class="row g-2">

     <div class="col-6">
        <h5>Subtotal: </h5>
        <h5>Tax(10%):</h5>
        <h5>Total:</h5>
     </div>
  <div class="col-6 status">
      <h4> $${subtotal.toFixed(2)}</h4>
      <h4> $${tax.toFixed(2)}</h4>
      <h3> $${totalPrice.toFixed(2)}</h3>
  </div>
  <div class="col-md-12 pt-4 pb-4">
                  <button type="button" class="btn btn-success check-out">Check Out</button>
               </div>
  </div>
  `;
}
function deleteCart(index) {
  console.log(index);
  let cartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem('CartItems', JSON.stringify(cartItems));
  DisplayCart();
  location.reload();
}

