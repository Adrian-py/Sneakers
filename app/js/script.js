const shoppingCartDOM = document.getElementById("shopping-cart-list");

let shoppingCart = [];

function updateShoppingCartDOM() {
  shoppingCartDOM.innerHTML = "";
  shoppingCart.forEach((item) => {
    let newItemDOM = `
          <li class="nav__cart__popup__content__list__item">
              <form action="" id="cart__item">
              <img
                  src="${item.imageURL}"
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
                      $${item.price} x ${item.amount}
                  </span>
                  <span
                      class="nav__cart__popup__content__list__item__desc__total__sum"
                  >
                      $${item.totalPrice}
                  </span>
                  </div>
              </div>

              <button
                  type="submit"
                  data-item="${item.id}"
                  class="nav__cart__popup__content__list__item__del"
                  id="cart__item__del"
              >
                  <img src="./images/icon-delete.svg" alt="" />
              </button>
              </form>
          </li>
      `;
    shoppingCartDOM.innerHTML += newItemDOM;
  });
}

function addToShoppingCart(newItem) {
  newItem.id = shoppingCart.length + 1;
  newItem.totalPrice = newItem.price * newItem.amount;
  shoppingCart.push([...shoppingCart, newItem]);
  console.log(shoppingCart);
  updateShoppingCartDOM();
}

function removeFromShoppingCart(removedItem) {}
