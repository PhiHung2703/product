customElements.define("main-container", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return [];
    }
  
    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }
  
    connectedCallback() {
      this.renderHTML();
    }
  
    renderContainerCSS() {
      return `
      box-sizing: border-box;
      width:100%;
      height:100vh;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      `;
    }
  
    renderStyle() {
      return `
        <style>
          slot {
            box-sizing: border-box;
            width:100%;
            max-width: 75vw;
            height: 45vh;
            background-color:black;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            // align-items: center;
            align-self: center;
            
          }
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <slot>
        </slot>
      `;
      this.shadow.innerHTML = html;
    }
  });