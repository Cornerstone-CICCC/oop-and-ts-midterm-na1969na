import { Component } from "../common/Component.js";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.cartContext = props.cartContext;
    this.element = document.querySelector("header");
    this.cartButton = document.getElementById("cartButton");
    this.cartCount = document.getElementById("cartCount");
    this.cartSidebar = document.getElementById("cartSidebar");

    this.init();
  }

  init() {
    this.cartContext.addListener(() => this.updateCartCount());
    this.cartButton.addEventListener("click", () => this.openCart());
  }

  updateCartCount() {
    this.cartCount.textContent = this.cartContext.getItemCount();
  }

  openCart() {
    this.cartSidebar.classList.add("open");
  }

  render() {
    return this.element;
  }
}
