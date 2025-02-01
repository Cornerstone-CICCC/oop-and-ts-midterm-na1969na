import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.cartContext = props.cartContext;
    this.products = [];
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      this.products = data.map(product => ({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      }));
      const productContainer = document.getElementById("products")
      productContainer.innerHTML = "";
      this.mount(productContainer);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  render() {
    const productsGrid = document.createElement("div");
    productsGrid.className = "products-grid";

    this.products.forEach((product) => {
      const productItem = new ProductItem({
        product,
        cartContext: this.cartContext,
      });
      productsGrid.appendChild(productItem.render());
    });

    return productsGrid;
  }
}
