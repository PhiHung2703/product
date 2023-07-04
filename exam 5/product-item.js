customElements.define("product-item", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return ['logo', 'rank', 'name', 'content'];
    }
  
    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }
    attr(name){
        return this.getAttribute(name);
    }
    connectedCallback() {
      this.renderHTML();
    }
  
    renderContainerCSS() {
      return `
      width: calc( 30% - 20px );
      margin:20px;
      display:flex;
      flex-direction: row   ;
      align-items: center;
      `;
    }
  
    renderStyle() {
      return `
        <style>
            .logo img{
                width:60px;
                height:60px;
              }
              .content{
                margin-left: 10px;
                display:flex;
                flex-direction: column;
                justify-content: space-between;
              }
              .content-top{
                display: flex;
                flex-direction: row;
              }
              .content-bottom{
                margin-top: 20px;
              }
              .rank{
                color:pink;
              }
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
            <div class="logo">
                <img src="${this.attr('logo')}"/>
            </div>
            <div class="content">
                <div class="content-top">
                    <span class="rank">${this.attr('rank')}</span>
                    <div class="name"><strong>${this.attr('name')}</strong></div>
                </div>
                <div class="content-bottom">${this.attr('content')}</div>
            </div>
      `;
      this.shadow.innerHTML = html;
    }
  });
    