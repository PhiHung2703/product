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
            height: 50vh;
            background-color: black;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            padding-left:10px;
            padding-right:10px;
          }
          
          h1{
            background-color: black;
            width:100%;
            height:100px;
            color:white;
            margin:0;
            font-size:80px;
            display:flex;
            justify-content:center;
            align-items:center;
          } 
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <h1>Who's watching</h1>
        <slot>
     
        </slot>
      `;
      this.shadow.innerHTML = html;
    }
  });