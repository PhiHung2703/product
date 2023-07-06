customElements.define("ratio-column", class extends CoreElement {
    constructor() {
      super();
    }
    static get observedAttributes() {
        return ['ratio'];
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
         display:flex;
         flex-direction:column;
      `;
    }
  
    renderStyle = () => {
        const ratioString = this.attr('ratio'); // -> "16/9"
        const size = ratioString.split('/'); // -> ["16","9"]
        const ratio = Number(size[0]) / Number(size[1]); // . -> 16/9
        const paddingRatio = 1 / ratio;
      return `
        <style>
          .ratio-container{
            position:relative;
            padding-bottom: ${paddingRatio * 100}%;
            display:flex;
            flex-direction:column;
            overflow:hidden;
            background-color:pink;
          }
          slot {
            display:flex;
            flex-direction:column;
            position:absolute;
            top:0;
            right:0;
            left:0;
            bottom:0;
            overflow-y:scroll;
          }
        </style>
      `;
    }
    renderHTML = () => {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="ratio-container">
        <slot></slot>
        </div>
       
      `;
      this.shadow.innerHTML = html;
    }
  });
    