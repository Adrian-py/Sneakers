// Current Product
const currentProduct = {
  id: 0,
  name: "Fall Limited Edition Sneakers",
  price: 125,
  amount: 0,
  totalPrice: 0,
  imageURL: "",
};

// Product Images
const productThumbnails = document.querySelectorAll(
    ".pictures__thumbnails__pic-container__pic"
  ),
  currentProductImage = document.querySelector(".pictures__current"),
  chosenClassName = "pictures__thumbnails__pic-container__chosen";

function changeProductImage(e) {
  let newPic = e.target.getAttribute("data-picture");
  document
    .getElementsByClassName(chosenClassName)[0]
    .classList.remove(chosenClassName);
  e.target.classList.add(chosenClassName);
  currentProductImage.src = `./images/image-product-${newPic}.jpg`;
  currentProduct.imageURL = currentProductImage.src;
}

productThumbnails.forEach((img) => {
  img.addEventListener("click", changeProductImage);
});

// Product Amount
const incAmount = document.getElementById("amount-inc"),
  decAmount = document.getElementById("amount-dec"),
  amountDOM = document.getElementById("amount-curr");

let currAmount = 0;

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

// Add to Cart
const addToCartButton = document.getElementById("add-to-cart-button");

addToCartButton.addEventListener("click", (e) => {
  e.preventDefault();
  currentProduct.imageURL = currentProductImage.src;
  addToShoppingCart(currentProduct);
  alert("Added to Cart!");
});
