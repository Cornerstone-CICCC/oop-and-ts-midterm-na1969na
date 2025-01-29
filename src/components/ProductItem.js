import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(product) {
    super();
    this.product = product;
  }

  render() {
    const { title, description, price, image } = this.product;

    const handleAddToCart = () => {
      console.log(`${title} added to cart`);
    };

    const itemElement = document.createElement("li");
    itemElement.className = "product-item";

    // 商品名の表示
    const productTitle = document.createElement("h3");
    title.textContent = this.product.title;
    itemElement.appendChild(productTitle);

    // 商品画像の表示
    const productImage = document.createElement("img");
    image.src = this.product.image;
    image.alt = this.product.title;
    image.className = "product-image";
    itemElement.appendChild(productImage);

    // カート追加ボタンの作成
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.className = "add-to-cart";
    itemElement.appendChild(addToCartButton);

    return itemElement;

    productElement.querySelector(".add-btn").addEventListener("click", () => {
      cartContext.addProduct(this.product);
    });

    return productElement;
  }
}
