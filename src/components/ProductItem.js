import { Component } from "../common/Component.js";
import { cartContext } from "../contexts/CartContext.js";

export class ProductItem extends Component {
  constructor(product) {
    super();
    this.product = product;
  }

  addProductToCart() {
    if (this.product){
      cartContext.addProduct(this.product);
    }
  }

  render() {
    const productElement = document.createElement("div");
    productElement.classList.add("product-item");

    const productTitle = document.createElement("h2");
    productTitle.textContent = this.product.title;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${this.product.price.toFixed(2)}`;

    const productImage = document.createElement("img");
    productImage.src = this.product.image;
    productImage.alt = this.product.title;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.addEventListener("click", () => {
      this.addProductToCart();
    });

    productElement.appendChild(productTitle);
    productElement.appendChild(productPrice);
    productElement.appendChild(productImage);
    productElement.appendChild(button);

    return productElement;
  }
}
