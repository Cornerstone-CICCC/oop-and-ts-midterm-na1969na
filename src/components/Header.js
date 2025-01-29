import { Component } from "../common/Component.js";
import { CartList } from "./CartList.js";
import { cartContext } from "../contexts/CartContext.js";

export class Header extends Component {
  constructor() {
    super();
    this.isCartListVisible = false;
    this.cartList = new CartList();
  }

  toggleCartList() {
    const cartListElement = document.querySelector(".cart-list");

    if (!this.isCartListVisible) {
      const cartListItems = cartContext.getCartList();
      this.cartList.updateItems(cartListItems);
      cartListElement.style.display = "block";
    } else {
      cartListElement.style.display = "none";
    }

    this.isCartListVisible = !this.isCartListVisible;
  }

  render() {
    const headerElement = document.createElement("div");
    headerElement.className = "header-container";
    headerElement.innerHTML = `
      <h1>QuickCart</h1>
      <button id="cart-btn">Cart</button>
    `;

    const cartButton = headerElement.querySelector("#cart-btn");
    cartButton.addEventListener("click", () => {
      this.toggleCartList()
    });
    
    const container = document.querySelector("#app");
    container.appendChild(this.cartList.render());

    return headerElement;
  }
}
