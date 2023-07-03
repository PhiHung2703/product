customElements.define("container-card1", class extends HTMLElement {
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
            display:flex;
            flex-direction:column;
            flex-wrap: wrap;
            justify-content: center;
            margin:0;
            padding:0 60px;
            text-align: left;
            width:100%;
            max-width: 1024px;
            height:50vh;
            background-color: grey;
            align-self: center;
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
    