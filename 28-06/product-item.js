customElements.define("product-item", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return ['image_item', 'name_item'];
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
      box-sizing: border-box;
      width: calc( 20% );
      height: 50vh;
      padding-left:10px;
      padding-right:10px;
      padding-top:10px;
      `
    }
  
    renderStyle() {
      return `
      <style>
      .image-item{
          width: 100%;
          height: calc( 35vh - 20px );
          object-fit:cover;
      }
      .image-item img{
        width:100%;
        height: calc( 35vh - 20px );
        object-fit:cover;
      }
      .name_item{
          width:100%;
          height:5vh;
          text-align:center;
          color:grey;
      }
      </style>
      `
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="product-item">
            <div class="image-item">
            
            <img src="${this.attr('image_item')}"/>
            </div>
            <div class="name_item">${this.attr('name_item')}</div>
        </div>
      `
      this.shadow.innerHTML = html;
    }
  });