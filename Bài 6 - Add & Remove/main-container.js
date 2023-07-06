customElements.define("main-container", class extends CoreElement {
    constructor() {
      super();
    }
  
    state = {
      width: window.innerWidth
    }
  
    onWindowResize = () => {
    //   this.setState({ width: window.innerWidth });
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
            flex-direction:row;
            flex-wrap:wrap;
          }
        </style>
      `;
    }
    renderHTML = () => {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="container">
            <slot></slot>
        </div>
       
      `;
      this.shadow.innerHTML = html;
    }
  });
    