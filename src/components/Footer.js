import { Component } from "../common/Component.js";

export class Footer extends Component {
  constructor(props = {}) {
    super(props);

    const footerContainer = document.querySelector("footer");
    if (footerContainer) {
      footerContainer.innerHTML = "";
      this.mount(footerContainer);
    } else {
      console.error("Footer container not found in the DOM.");
    }
  }

  render() {
    const footer = document.createElement("div");
    footer.innerHTML = `
            <p>&copy; ${new Date().getFullYear()} Shpping Site. All rights reserved.</p>
        `;
    return footer;
  }
}
