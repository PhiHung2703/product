customElements.define("product-item", class extends CoreElement {
    constructor() {
      super();
    }
  
    static get observedAttributes() {
        return ['logo', 'rank', 'name', 'content'];
      }
    
    attr(name){
          return this.getAttribute(name);
      }
    state = {
      width:window.innerWidth
    };
  
    onWindowResize = () => {
      this.setState({ width: window.innerWidth });
    }
    
    renderContainerCSS = () => {
    let cssWidth = '20%';
    if (this.state.width <= 480){
        cssWidth ='100%';
    } else if (this.state.width <= 768){
        cssWidth = '30%';
    }else{
        cssWidth = '20%';
    }
    console.log(cssWidth);
    console.log(this.state.width);
      return `
      width: ${cssWidth};
      margin:20px;
      display:flex;
      flex-direction:row;
      align-items: center;
      background-color:grey;
      `;
    }
  
    renderStyle = () => {
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
  
    renderHTML = () => {
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
    
    