import { Component } from "../common/Component.js";
import { CartItem } from "./CartItem.js";

export class CartSidebar extends Component {
  constructor(props) {
    super(props);
    this.cartContext = props.cartContext;
    this.element = document.getElementById("cartSidebar");
    this.cartItems = document.getElementById("cartItems");
    this.totalPrice = document.getElementById("totalPrice");
    this.closeBtn = document.getElementById("closeCart");

    this.init();
  }

  init() {
    this.cartContext.addListener(() => this.updateCart());
    this.closeBtn.addEventListener("click", () => this.close());
  }

  updateCart() {
    this.cartItems.innerHTML = "";
    this.cartContext.cart.forEach((item) => {
      const cartItem = new CartItem({
        item,
        cartContext: this.cartContext,
      });
      this.cartItems.appendChild(cartItem.render());
    });
    this.totalPrice.textContent = this.cartContext.getTotal().toFixed(2);
  }

  render() {
    return this.element;
  }

  open() {
    this.element.classList.add("open");
  }

  close() {
    this.element.classList.remove("open");
  }
}
