let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");
let bodyInfo = document.querySelector(".bodyinfo");
var cartItems = [];

window.onload = () => {
   // DisplayCart()
   if (JSON.parse(localStorage.getItem("ProductList")) != null) {
      products = JSON.parse(localStorage.getItem("ProductList"));
      DisplayCard();
   }
  // DisplayCart();
}
function DisplayCard() {
   //console.log(cardMen);
   let Box = '';
   for (var i = 0; i < products.length; i++) {
      Box += ` <div class="card" id="item1">
               <div class="crd">
               <img src="${products[i].img}" alt="Product Image">
               <div class="txt">
                 <h3>${products[i].Name}</h3>
                 <h2>${products[i].price} $</h2>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star"></i>
                 <i class="fa-solid fa-star-half-stroke"></i><br>
                 <button onclick="addToCart(${i})">Add to Cart</button>
               </div>
             </div>
             </div>`;
   }
   document.querySelector('.card').innerHTML = Box; // Changed this line to use the previously defined variable cardMen
}

//  // Function to display items in the shopping cart
//   function DisplayCart() {
//    let cartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
//    let cartItemsContainer = document.getElementById("cartItems");
//    ///cartItemsContainer.innerHTML = ""; // Clear previous items
//    cartItems.forEach(item => {
//      cartItemsContainer.innerHTML += `
//        <div class="col-lg-4 col-md-6 mb-4">
//          <div class="card h-100">
//            <img class="card-img-top" src="${item.img}" alt="">
//            <div class="card-body">
//              <h4 class="card-title">${item.Name}</h4>
//              <h5>${item.price}</h5>
//            </div>
//          </div>
//        </div>
//      `;
//    });
//  }

 // Function to add an item to the shopping cart
 function addToCart(productId) {
   let productToAdd = products[productId];
   let cartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
   console.log(cartItems);
   cartItems.push(productToAdd);
   localStorage.setItem("CartItems", JSON.stringify(cartItems));
   location.reload();
 }
  
//    DisplayCart(); // Update the cart display
//  }
//  function addToCart(productId) {
//    let productToAdd = products[productId];
//    let cartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
//    cartItems.push(productToAdd);
//    console.log(cartItems);
//    localStorage.setItem("CartItems", JSON.stringify(cartItems));
//    location.reload();
// }

function home() {
   mainPage.style.display = "flex";
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   blogContent.style.display = "block"
   contactus.style.display = "none"

   document.getElementById("blog").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color = "black";
}


function shop() {
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   mainPage.style.display = "none"
   blogContent.style.display = "none";
   aboutPage.style.display = "none";
   contactus.style.display = "none"

   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "black"
   document.getElementById("contact").style.color = "black";


}


function blog() {

   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "block"
   aboutPage.style.display = "none";
   contactus.style.display = "none"

   document.getElementById("blog").style.color = "rgb(1, 190, 190)";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black"
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color = "black";

}


function about() {
   aboutPage.style.display = "block";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none";
   contactus.style.display = "none";

   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "rgb(1, 190, 190)"
   document.getElementById("contact").style.color = "black";


}


function contact() {
   contactus.style.display = "block";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"
   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color = "rgb(1, 190, 190)"

}

function showCard(img) {
   let newImg = document.getElementById("cartImg");
   newImg.src = img.src;
   document.querySelector(".fullPage").style.display = "flex";
   contactus.style.display = "none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"



}

// Add to Cart

function addItem() {
   document.querySelector(".addCart").style.display = "block";
   contactus.style.display = "none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"

}

