import { Component } from "../common/Component.js";
import { cartContext } from "../contexts/CartContext.js";
import { CartItem } from "./CartItem.js";

export class CartList extends Component {
  constructor() {
    super();
    this.cartItems = [];
  }

  updateItems(items) {
    this.cartItems = items;
    this.render();
  }

  render() {
    const cartListElement = document.createElement("div");
    cartListElement.className = "cart-list";
    cartListElement.style.display = "none";

    const cartTitle = document.createElement("h2");
    cartTitle.textContent = "Cart";
    cartListElement.appendChild(cartTitle);

    const container = document.createElement("div");
    container.className = "cart-list-container";
    cartListElement.appendChild(container);

    const listElement = document.createElement("ul");
    listElement.id = "cart-list-ul";

    const cartTotalElement = document.createElement("div");
    cartTotalElement.className = "cart-total";
    cartTotalElement.textContent = "Total: $0";
    cartListElement.appendChild(cartTotalElement);
    
    const renderCartList = (cartList) => {
      container.innerHTML = "";
      listElement.innerHTML = "";

      if (cartList.length === 0) {
        const emptyCartElement = document.createElement("p");
        emptyCartElement.textContent = "Cart is empty";
        container.appendChild(emptyCartElement);
        cartTotalElement.textContent = "Total: $0";
      } else {
        let totalAmount = 0;
        cartList.forEach((item) => {
          const cartItem = new CartItem(item);
          listElement.appendChild(cartItem.render());
          totalAmount += item.price * item.quantity;
        });
        container.appendChild(listElement);
        cartTotalElement.textContent = `Total: $${totalAmount.toFixed(2)}`;
      }
    };

    renderCartList(cartContext.getCartList());

    cartContext.addListener(renderCartList);

    return cartListElement;
  }
}
