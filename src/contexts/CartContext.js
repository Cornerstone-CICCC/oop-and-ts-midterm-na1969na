export class CartContext {
  constructor() {
    this.cartItems = [];
    this.listeners = [];
  }

  getTodos() {
    return this.cartItems;
  }
  
  addProduct(product) {
    this.cartItems.push(product);
    console.log(this.todos);
    this.notifyListeners();
  }

  updateQuantity(id, quantity) {
    this.cartItems = this.cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });
    this.notifyListeners();
  }

  removeProduct(id) {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    this.notifyListeners();
  }

  addListener(listener) {
    this.listeners.push(listener);
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.todos));
  }
  
}

export const cartContext = new CartContext();