import { Component } from "../common/Component.js";
import { cartContext } from "../contexts/CartContext.js";

export class CartItem extends Component {
  constructor(cartItem) {
    super();
    this.cartItem = cartItem;
  }

  render() {
    const { id, title, quantity, price } = this.cartItem;

    const cartItemElement = document.createElement('li')
    cartItemElement.className = `cart-item`;
    cartItemElement.innerHTML = `
      <h3>${title}</h3>
      <p>$${price * quantity}</p>
      <button class="decrease-btn">-</button>
      <span>${quantity}</span>
      <button class="increase-btn">+</button>
      <button class="delete-btn">Delete</button>
    `;

    if (quantity === 1) {
      const decreaseButton = cartItemElement.querySelector('.decrease-btn');
      decreaseButton.disabled = true;
    }

    cartItemElement.querySelector('.decrease-btn').addEventListener('click', () => {
      cartContext.decreaseProductQuantity(id);
    });

    cartItemElement.querySelector('.increase-btn').addEventListener('click', () => {
      cartContext.increaseProductQuantity(id);
    });

    cartItemElement.querySelector('.delete-btn').addEventListener('click', () => {
      cartContext.removeProduct(id);
    });

    return cartItemElement;
  }
}