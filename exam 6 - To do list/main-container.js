customElements.define("main-container", class extends CoreElement {
    constructor() {
      super();
    }
  
    state = {
      width: window.innerWidth
    }
  
    onWindowResize = () => {
      this.setState({ width: window.innerWidth });
    }
  
    renderContainerCSS = () => {
      return `
        display:flex;
        flex-direction:column;
      `;
    }
  
    renderStyle = () => {
      return `
        <style>
          slot {
            display:flex;
            flex-direction:column;
            overflew:
          }
        </style>
      `;
    }
    renderHTML = () => {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
            <slot></slot>
       
      `;
      this.shadow.innerHTML = html;
    }
  });
    