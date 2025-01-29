import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footerElement = document.createElement("div");
    footerElement.className = "footer-container";
    footerElement.innerHTML = `
      <h1>QuickCart</h1>
    `;

    return footerElement;
  }
}