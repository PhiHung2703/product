customElements.define("product-item", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return ['image_background','image_index1','name','content','preferential'];
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
      width: calc( 25% - 20px );
      margin:20px;
      display:flex;
      flex-direction: column;
      border-radius: 10px;
      `;
    }
  
    renderStyle() {
      return `
        <style>
        .image{
            display:flex;
            flex-direction: row;
          }
          .image-index1{
            width: 48px;
            height: 48px;
            margin-left: calc( -50% - 24px );
            margin-top: calc( 25% - 24px );
            
          }
          .image-background{
            width:100%;
            aspect-ratio: 2 / 1;
            opacity: 0.5;
          }
          .content{
            width:100%;
            height:10vh;
            overflow: hidden;
          }
          .footer{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }
          .footer-left{
            flex:1;
          }
          .footer-right{
            display:flex;
            flex-direction: row;
          }
          .icon{
            margin-top: 10px;
            width:10px;
            height:10px;
            margin-right: 10px;
          }
          .icon-button{
            width:20px;
            height:20px;
          }
          .button{
            height:30px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding:5px;
            background: red;
            border: 0.5px solid black;
            border-radius: 5px;
          }
          .button p{
            margin-left: 10px;
          }
    
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="product-item">
                <div class="image">
                    <img class="image-background" src="${this.attr('image_background')}"/>
                    <img class="image-index1" src="${this.attr('image_index1')}"/>
                </div>
                <div class="name"><p>${this.attr('name')}</p></div>
                <div class="content">${this.attr('content')}</div>
                <div class="footer">
                    <div class="footer-left">
                        <p>${this.attr('preferential')}</p>
                    </div>
                    <div class="footer-right">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#292D32"></path> <path d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" fill="#292D32"></path> </g></svg>
                        <button class="button">
                            <svg class="icon-button" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.15" d="M5 11H19V21H5V11Z" fill="#000000"></path> <path d="M8 11V7C8 5.66667 8.8 3 12 3C15.2 3 16 5.66667 16 7V11M8 11H5V21H19V11H16M8 11H16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <p>Join</p>
                        </button>
                    </div>
                </div>
            </div>
      `;
      this.shadow.innerHTML = html;
    }
  });
    