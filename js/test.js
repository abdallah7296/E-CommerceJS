var productNameinput = document.getElementById("productName");
var productPriceinput = document.getElementById("productPrice");
var productCategoryinput = document.getElementById("productCategory");
var productDescinput = document.getElementById("productDesc");
var searchInput = document.getElementById("searshInput");
var AddpBtn = document.getElementById("AddpBtn");
var inputs = document.getElementsByClassName("form-control");
var inputfile = document.getElementById("inputFile")
var cardMen = document.querySelector(".cardMen")
var currentIndex = 0;
var products = [];
let productimage;
//event
inputfile.addEventListener('change', uploadImage)



if(JSON.parse(localStorage.getItem("ProductList")) !=  null ){
  products=JSON.parse(localStorage.getItem("ProductList"));
  DisplayProduct();
}

AddpBtn.onclick =function() {
if(AddpBtn.innerHTML == 'add product' ) 
{
AddProduct();
} 
else
{
  updateProduct();
} 

DisplayProduct();
ClearForm();
}
function AddProduct(){
  var product ={
    Name : productNameinput.value,
    price : productPriceinput.value,
    category : productCategoryinput.value,
    desc : productDescinput.value,
    img: productimage

 }
  products.push(product);
 localStorage.setItem("ProductList" ,JSON.stringify(products) );
}
//uploadimage
function uploadImage() {
  let file = this.files[0];
  console.log(file);
  if (!file.type.includes("image")) {
    alert('Only image files are supported');
    return;
  }
  if (file.size > 10 * 1024 * 1024) { 
    alert("Image size should not exceed 10MB");
    return;
  }
  getImagePase64(file);
}

function getImagePase64(file) {
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = function () {
    productimage = reader.result;
  };
  reader.onerror = function () { 
    alert("Error occurred while reading the image file");
  };
}
function DisplayProduct(){
  var Box ='';
    for(var i=0 ;i<products.length; i++) {
    Box+=`<tr> 
            <td> ${products[i].Name}</td> 
             <td> ${products[i].price} </td> 
             <td> ${products[i].category} </td> 
             <td> ${products[i].desc} </td> 
             <td> <img src="${products[i].img}"  alt="img" width="50px" height="50px"> </td>             
             <td><button onclick="Productinfo(${i})" class="btn btn-warning " > Update </button></td> 
            <td><button  onclick="deleteProduct(${i})" class="btn btn-danger " > delete </button></td>
        </tr> `; 
    }
    document.getElementById("bodyinfo").innerHTML = Box
}



function deleteProduct(index) {
  console.log(index);
  products.splice(index, 1);
  DisplayProduct();
  localStorage.setItem('ProductList', JSON.stringify(products))
}
function ClearForm() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = ''
  }
}
searchInput.onkeyup = function () {
  var Box = '';
  for (var i = 0; i < products.length; i++) {
    if (products[i].Name.toLowerCase().includes(searchInput.value.toLowerCase())) {
      Box += `<tr> 
      <td> ${products[i].Name}</td> 
       <td> ${products[i].price} </td> 
       <td> ${products[i].category} </td> 
       <td> ${products[i].desc} </td> 
       <td> <img src="${products[i].img}"  alt="img" width="50px" height="50px"> </td>
       <td><button onclick="Productinfo(${i})" class="btn btn-warning " > Update </button></td> 
      <td><button  onclick="deleteProduct(${i})" class="btn btn-danger " > delete </button></td> 
     </tr> `;
    }
  }
  document.getElementById("bodyinfo").innerHTML = Box
}
function Productinfo(index){
  currentIndex = index;
 var currentproduct = products[index];
  productNameinput.value  = currentproduct.Name;
  productPriceinput.value  = currentproduct.price;
  productCategoryinput.value  = currentproduct.category;
  productDescinput.value  = currentproduct.desc;
  AddpBtn.innerHTML = ' Update ';
} 
function updateProduct(){
  var product ={
    Name : productNameinput.value,
    price : productPriceinput.value,
    category : productCategoryinput.value,
    desc : productDescinput.value,
    img: productimage 
 }
 products[currentIndex] = product;
 localStorage.setItem("ProductList" ,JSON.stringify(products) );
}
