customElements.define("product-card1", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return ['content', 'service', 'department'];
    }
  
    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }
  
    connectedCallback() {
      this.renderHTML();
    }
    attr(name){
        return this.getAttribute(name);
    }
    renderContainerCSS() {
      return `
        width: calc( 25% - 20px );
        margin: 10px;
        flex:1;
      `;
    }
  
    renderStyle() {
      return `
        <style>
        .icon{
            margin-bottom: 16px;
            width: 48px;
            height: 48px;
          }
          .footer{
            margin-top: 16px;
            padding-top: 10px;
            border-top:solid 1px black;
            display: inline-block;
          }
    
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="product-item">
        <svg aria-hidden="true" class="icon" width="48" height="48" viewBox="0 0 48 48"><path d="M5.01 14.71a5.64 5.64 0 0 1 5.62-5.65h8.75c3.1 0 5.62 2.53 5.62 5.65v19.8l-4.94 8.01a1 1 0 0 1-.85.48h-4.03a1 1 0 0 1-.86-1.5l4.04-6.99h-7.73a5.64 5.64 0 0 1-5.62-5.65V14.7Zm22.99 0a5.61 5.61 0 0 1 5.6-5.65h7.72c3.1 0 5.63 2.53 5.63 5.65v19.8L43 42.45a1 1 0 0 1-.9.55h-4.02a1 1 0 0 1-.88-1.47l3.77-7.02h-7.38A5.61 5.61 0 0 1 28 28.86V14.7Z" opacity=".2"></path><path d="M1 11.66A6.64 6.64 0 0 1 7.62 5h8.79a6.64 6.64 0 0 1 6.62 6.66v19.29a2.8 2.8 0 0 1-.42 1.47l-4.47 7.25A2.8 2.8 0 0 1 15.75 41h-2.09a2.8 2.8 0 0 1-2.39-4.27l1.54-2.5a.8.8 0 0 0-.68-1.23h-4.5c-1.9 0-3.57-.94-4.73-2.27A7.59 7.59 0 0 1 1 25.8V11.66ZM7.62 7A4.64 4.64 0 0 0 3 11.66V25.8c0 1.3.53 2.62 1.4 3.61A4.34 4.34 0 0 0 7.62 31h4.5a2.8 2.8 0 0 1 2.4 4.27l-1.54 2.5a.8.8 0 0 0 .68 1.23h2.1a.8.8 0 0 0 .68-.38l4.47-7.25a.8.8 0 0 0 .12-.42v-19.3A4.64 4.64 0 0 0 16.41 7H7.62ZM24 11.66A6.64 6.64 0 0 1 30.63 5h7.75A6.64 6.64 0 0 1 45 11.66V31.5c0 .5-.14 1-.4 1.44l-3.96 6.69A2.8 2.8 0 0 1 38.22 41h-2.07a2.8 2.8 0 0 1-2.39-4.27l1.54-2.5a.8.8 0 0 0-.68-1.23h-4c-1.9 0-3.55-.94-4.72-2.27A7.59 7.59 0 0 1 24 25.8V11.66ZM30.63 7A4.64 4.64 0 0 0 26 11.66V25.8c0 1.3.53 2.62 1.4 3.61A4.34 4.34 0 0 0 30.63 31h3.99A2.8 2.8 0 0 1 37 35.27l-1.54 2.5a.8.8 0 0 0 .68 1.23h2.07a.8.8 0 0 0 .7-.4l3.97-6.68a.8.8 0 0 0 .11-.42V11.66A4.64 4.64 0 0 0 38.38 7h-7.76Z"></path></svg>
                <div class="content">${this.attr('content')}</div>
                <div class="footer"><p>
                <strong>${this.attr('service')}</strong>
                    <br>
                    ${this.attr('department')}
                </p></div>
      `;
      this.shadow.innerHTML = html;
    }
  });
    