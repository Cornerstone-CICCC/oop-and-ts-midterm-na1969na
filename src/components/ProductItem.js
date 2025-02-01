import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.product = props.product;
    this.cartContext = props.cartContext;
  }

  render() {
    const element = document.createElement("div");
    element.className = "product-card";
    element.innerHTML = `
            <img src="${this.product.image}" alt="${this.product.name}">
            <h3>${this.product.name}</h3>
            <div class="product-actions">
                <p class="price">$${this.product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;

    element.querySelector("button").addEventListener("click", () => {
      this.cartContext.addItem(this.product);
    });

    return element;
  }
}
