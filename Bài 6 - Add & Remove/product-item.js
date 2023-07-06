customElements.define("product-item", class extends CoreElement {
    constructor() {
      super();
    }
    static get observedAttributes() {
        return ['image'];
    }
  
    state = {
      width: window.innerWidth
    }
  
    onWindowResize = () => {
      this.setState({ width: window.innerWidth });
    }
    attr(name){
        return this.getAttribute(name);
    }
  
    renderContainerCSS = () => {
      return `
      margin:10px;
      `;
    }
  
    renderStyle = () => {
      return `
        <style>
        ratio-column img{
            width:100%;
            height:100%;
            object-fit: cover;
        h3 {
            height:30px;
            overflow:hidden;
        }
        p{
            height:100px;
            overflow-y:scroll;
            margin:0;

        }
        </style>
      `;
    }
    renderHTML = () => {
      this.style.cssText = this.renderContainerCSS();
      if (this.state.width <= 480) {
        this.style.width = 'calc( 100% - 20px )';
      } else if (this.state.width <= 768) {
        this.style.width = 'calc( 50% - 20px )';
      } else {
        this.style.width = 'calc( 33% - 20px )';
      };
      let image = this.attr('image');
      if(!image){
        image='https://theperfectroundgolf.com/wp-content/uploads/2022/04/placeholder.png';
      }
      const html = `
        ${this.renderStyle()}
        <ratio-column ratio="4/3">
            <img src="${image}"/>
        </ratio-column>
        <h3>${this.attr('title')}</h3>
        <p>${this.attr('content')}</p>
      `;
      this.shadow.innerHTML = html;
    }
  });
    