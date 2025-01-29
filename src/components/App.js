import { Component } from "../common/Component.js";
import { Header } from "./Header.js";
import { ProductList } from "./ProductList.js";
import { Footer } from "./Footer.js";

export class App extends Component {
  render() {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
      <header id="main-header"></header>
      <div id="wrapper-product-list"></div>
      <footer id="main-footer"></footer>
    `;

    const header = new Header().render()
    const productList = new ProductList().render()
    const footer = new Footer().render()

    container.querySelector('#main-header').appendChild(header)
    container.querySelector('#wrapper-product-list').appendChild(productList)
    container.querySelector('#main-footer').appendChild(footer)

    return container;
  }
}
