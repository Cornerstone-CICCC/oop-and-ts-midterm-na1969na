import { Component } from "../common/Component.js";
import { ProductItem } from "../components/ProductItem.js";

export class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.getProducts();
  }

  async getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
        this.render();
      });
  }

  handleAddToCart(product) {
    console.log(`Product added to cart: ${product.title}`);
  }

  render() {
    const productListElement = document.createElement("div");
    productListElement.className = "product-list";

    const listElement = document.createElement("ul");
    listElement.id = "product-list-ul";

    productListElement.appendChild(listElement);

    // listElement.innerHTML = "";
    // this.state.products.forEach((product) => {
    //   const productItem = new ProductItem(product);
    //   listElement.appendChild(productItem.render());
    // });

    return productListElement;
  }
}
