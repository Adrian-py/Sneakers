/*

*/
const shoppingCartDOM = document.getElementById("shopping-cart-list"),
  shoppingCartEmpty = document.getElementById("shopping-cart-empty"),
  checkoutButton = document.getElementById("shopping-cart-checkout"),
  shoppingCartNotif = document.getElementById("shopping-cart-notifications");

// Current shopping cart (simulating real database)
let shoppingCart = [];

// Updating the shopping cart list
function updateShoppingCartDOM() {
  shoppingCartDOM.innerHTML = "";
  shoppingCart.forEach((item) => {
    item = JSON.parse(item);
    let newItemDOM = `
            <li class="nav__cart__popup__content__list__item">
                <form id="cart__item">
                <img
                    src="./images/image-product-1.jpg"
                    alt="Product Thumbnail"
                    class="nav__cart__popup__content__list__item__image"
                />
                <div class="nav__cart__popup__content__list__item__desc">
                    <h3
                    class="nav__cart__popup__content__list__item__desc__name"
                    >
                    ${item.name}
                    </h3>
                    <div
                    class="nav__cart__popup__content__list__item__desc__total"
                    >
                    <span
                        class="nav__cart__popup__content__list__item__desc__total__price"
                    >
                        $${item.price}.00 x ${item.amount}
                    </span>
                    <span
                        class="nav__cart__popup__content__list__item__desc__total__sum"
                    >
                        $${item.totalPrice}.00
                    </span>
                    </div>
                </div>
                <button
                    type="button"
                    data-item="${item.id}"
                    class="nav__cart__popup__content__list__item__del"
                    id="cart__item__del"
                    onclick="removeFromShoppingCart(this)"
                >
                    <img src="./images/icon-delete.svg" alt="" />
                </button>
                </form>
            </li>
        `;
    shoppingCartDOM.innerHTML += newItemDOM;
  });
  checkShoppingCart();
}

// Checking whether the shopping cart is empty
function checkShoppingCart() {
  if (shoppingCart.length != 0) {
    shoppingCartEmpty.style.display = "none";
    shoppingCartDOM.style.display = "flex";
    checkoutButton.style.display = "flex";
    shoppingCartNotif.style.display = "flex";
    shoppingCartNotif.innerHTML = shoppingCart.length;
  } else {
    shoppingCartEmpty.style.display = "block";
    shoppingCartDOM.style.display = "none";
    checkoutButton.style.display = "none";
    shoppingCartNotif.style.display = "none";
  }
}

function addToShoppingCart(newItem) {
  newItem.id = shoppingCart.length + 1;
  newItem.totalPrice = newItem.price * newItem.amount;
  // Changing the JSON to string format to push to the array
  shoppingCart.push(JSON.stringify(newItem));
  updateShoppingCartDOM();
}

function removeFromShoppingCart(removedItem) {
  removedID = removedItem.getAttribute("data-item");
  shoppingCart = shoppingCart.filter((item) => {
    item = JSON.parse(item);
    return item.id != removedID;
  });
  updateShoppingCartDOM();
}

checkShoppingCart();
