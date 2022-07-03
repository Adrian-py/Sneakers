// Current Product
const currentProduct = {
  id: 0,
  name: "Fall Limited Edition Sneakers",
  price: 125,
  amount: 0,
  totalPrice: 0,
};

// Product Images
const productThumbnails = document.querySelectorAll(
    ".pictures__thumbnails__pic-container__pic"
  ),
  currentProductImage = document.getElementById("pictures__current"),
  currentProductNextBtn = document.getElementById("pictures__current__next"),
  currentProductPrevBtn = document.getElementById("pictures__current__prev"),
  chosenClassName = "pictures__thumbnails__pic-container__chosen";

let currentImageIndex = 1;

function changeMainImage(newCurrentImage) {
  console.log(newCurrentImage.getAttribute("data-picture"));
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
  changeMainImage(e.target);
}

function prevMainImage() {
  currentImageIndex--;
  if (currentImageIndex < 1) currentImageIndex = 4;
  changeMainImage(
    document.getElementById(
      `pictures__thumbnails__pic-container__${currentImageIndex}`
    )
  );
}

function nextMainImage() {
  currentImageIndex--;
  if (currentImageIndex < 1) currentImageIndex = 4;
  changeMainImage(
    document.getElementById(
      `pictures__thumbnails__pic-container__${currentImageIndex}`
    )
  );
}

productThumbnails.forEach((img) => {
  img.addEventListener("click", changeProductImage);
});
currentProductPrevBtn.addEventListener("click", prevMainImage);
currentProductNextBtn.addEventListener("click", nextMainImage);

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
