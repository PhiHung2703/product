customElements.define("container-card", class extends HTMLElement {
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
      background-color: white;
      display: flex;
      flex-direction: column;
      flex-wrap:wrap;
      justify-content: center;
      `;
    }
  
    renderStyle() {
      return `
        <style>
          slot {
            display:flex;
            flex-direction:row;
            flex-wrap: wrap;
            justify-content: center;
            margin:0;
            padding:0 60px;
            text-align: left;
            width:100%;
            max-width: 1024px;
            align-self: center;
            background-color: grey;
          }
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <slot></slot>
      `;
      this.shadow.innerHTML = html;
    }
  });
    