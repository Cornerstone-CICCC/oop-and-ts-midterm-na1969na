import { Component } from "../common/Component.js";

export class CartItem extends Component {
  constructor(props) {
    super(props);
    this.item = props.item;
    this.cartContext = props.cartContext;
  }

  render() {
    const element = document.createElement("div");
    element.className = "cart-item";
    element.innerHTML = `
            <img src="${this.item.image}" alt="${this.item.name}">
            <div class="cart-item-details">
                <h4>${this.item.name}</h4>
                <p>$${this.item.price}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn minus">-</button>
                    <span class="quantity-display">${this.item.quantity}</span>
                    <button class="quantity-btn plus">+</button>
                </div>
                <button class="remove-btn">Remove</button>
            </div>
        `;

    this.addEventListeners(element);
    return element;
  }

  addEventListeners(element) {
    const minusBtn = element.querySelector(".minus");
    const plusBtn = element.querySelector(".plus");
    const removeBtn = element.querySelector(".remove-btn");

    minusBtn.addEventListener("click", () => {
      this.cartContext.updateQuantity(this.item.id, -1);
    });

    plusBtn.addEventListener("click", () => {
      this.cartContext.updateQuantity(this.item.id, 1);
    });

    removeBtn.addEventListener("click", () => {
      this.cartContext.removeItem(this.item.id);
    });
  }
}
