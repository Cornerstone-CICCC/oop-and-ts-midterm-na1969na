export class CartContext {
  constructor() {
    this.cart = [];
    this.listeners = [];
  }

  addItem(product) {
    const existingItem = this.cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
    this.notifyListeners();
  }

  removeItem(productId) {
    this.cart = this.cart.filter((item) => item.id !== productId);
    this.notifyListeners();
  }

  updateQuantity(productId, change) {
    const item = this.cart.find((item) => item.id === productId);
    if (item) {
      item.quantity = Math.max(1, item.quantity + change);
      this.notifyListeners();
    }
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getItemCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  notifyListeners() {
    this.listeners.forEach((callback) => callback());
  }
}
