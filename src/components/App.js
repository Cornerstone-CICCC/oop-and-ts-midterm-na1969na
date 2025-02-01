import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { ProductList } from "./ProductList.js";
import { CartSidebar } from "./CartSidebar.js";
import { Footer } from "./Footer.js";
import { CartContext } from "../contexts/CartContext.js";

export class App extends Component {
  constructor() {
    super();
    this.cartContext = new CartContext();
    this.init();
  }

  init() {
    new Header({ cartContext: this.cartContext });
    new ProductList({ cartContext: this.cartContext });
    new CartSidebar({ cartContext: this.cartContext });
    new Footer();
  }

  render() {
    return document.body;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new App();
});
