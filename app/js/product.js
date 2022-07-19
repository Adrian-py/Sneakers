/*
JSON of the Currently Viewed Product
*/
const currentProduct = {
  id: 0,
  name: "Fall Limited Edition Sneakers",
  price: 125,
  amount: 0,
  totalPrice: 0,
};

/*
Changing main product image using the prev/next button(mobile only) or clicking one of the thumbnails
*/
const productThumbnails = document.querySelectorAll(
    ".pictures__thumbnails__pic-container__pic"
  ),
  currentProductImage = document.getElementById("pictures__current"),
  currentProductNextBtn = document.getElementById("pictures__current__next"),
  currentProductPrevBtn = document.getElementById("pictures__current__prev"),
  chosenClassName = "pictures__thumbnails__pic-container__chosen";

let currentImageIndex = 1;

function changeToNewImage(newCurrentImage) {
  currentProductImage.src = `./images/image-product-${newCurrentImage.getAttribute(
    "data-picture"
  )}.jpg`;
  document
    .getElementsByClassName(chosenClassName)[0]
    .classList.remove(chosenClassName);
  newCurrentImage.classList.add(chosenClassName);
}

function changeProductImage(e) {
  currentImageIndex = e.target.getAttribute("data-picture");
  changeToNewImage(e.target);
}

function prevMainImage() {
  currentImageIndex--;
  if (currentImageIndex < 1) currentImageIndex = 4;
  changeToNewImage(
    document.getElementById(
      `pictures__thumbnails__pic-container__${currentImageIndex}`
    )
  );
}

function nextMainImage() {
  currentImageIndex--;
  if (currentImageIndex < 1) currentImageIndex = 4;
  changeToNewImage(
    document.getElementById(
      `pictures__thumbnails__pic-container__${currentImageIndex}`
    )
  );
}

// Event listener for each thumbnail
productThumbnails.forEach((img) => {
  img.addEventListener("click", changeProductImage);
});

currentProductPrevBtn.addEventListener("click", prevMainImage);
currentProductNextBtn.addEventListener("click", nextMainImage);

/*
Increase or decrease the amount of the current product
*/
const incAmount = document.getElementById("amount-inc"),
  decAmount = document.getElementById("amount-dec"),
  amountDOM = document.getElementById("amount-curr");

let currAmount = 0;

// Updating the DOM and current product JSON
function updateAmount() {
  currentProduct.amount = currAmount;
  amountDOM.innerHTML = currAmount;
}

function increaseAmount() {
  if (currAmount < 30) {
    currAmount++;
    updateAmount();
  }
}

function decreaseAmount() {
  if (currAmount > 0) {
    currAmount--;
    updateAmount();
  }
}

incAmount.addEventListener("click", increaseAmount);
decAmount.addEventListener("click", decreaseAmount);

/*
Adding current product to shopping cart
*/
const addToCartButton = document.getElementById("add-to-cart-button");

addToCartButton.addEventListener("click", (e) => {
  e.preventDefault();
  currentProduct.imageURL = currentProductImage.src;
  // Calling function on shoppingCart.js for insertion to shopping cart
  if (currentProduct.amount === 0) {
    alert("Amount can't be zero!");
    return;
  }
  addToShoppingCart(currentProduct);
  alert("Added to Cart!");
});
