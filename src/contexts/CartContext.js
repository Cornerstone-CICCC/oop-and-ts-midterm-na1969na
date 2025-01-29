export class CartContext {
  constructor() {
    this.cartItems = [];
    this.listeners = [];
  }

  getCartList() {
    return this.cartItems;
  }
  
  addProduct(product) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    console.log(this.cartItems);
    this.notifyListeners();
  }

  increaseProductQuantity(id) {
    this.cartItems = this.cartItems.map((item) => {
      if (item.id === id) {
        item.quantity += 1;
      }
      return item;
    });
    this.notifyListeners();
  }

  decreaseProductQuantity(id) {
    this.cartItems = this.cartItems.map((item) => {
      if (item.id === id) {
        item.quantity -= 1;
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
    this.listeners.forEach((listener) => listener(this.cartItems));
  }
  
}

export const cartContext = new CartContext();