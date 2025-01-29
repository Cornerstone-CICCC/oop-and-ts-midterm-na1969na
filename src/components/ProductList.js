import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor() {
    super();
    this.products = [];
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.products = data;
      this.products = data.map(product => ({
        ...product,
        quantity: 0,
      }));
      console.log("Products fetched:", this.products);
      this.render();
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  render() {
    const productListElement = document.createElement("div");
    productListElement.classList.add("product-list");

    this.products.forEach(product => {
      const productItem = new ProductItem(product);
      productListElement.appendChild(productItem.render());
    });

    const wrapperProductList = document.querySelector("#wrapper-product-list");
    if (wrapperProductList) {
      wrapperProductList.innerHTML = "";
      wrapperProductList.appendChild(productListElement);
    } else {
      console.error("Element #wrapper-product-list not found in the DOM");
    }

    return productListElement;
  }
}
