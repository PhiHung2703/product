customElements.define("main-container", class extends CoreElement {
  constructor() {
    super();
  }

  renderContainerCSS = () => {
    return `
      width:100%;
      background-color: white;
      display: flex;
      flex-direction: column;
      flex-wrap:wrap;
      justify-content: center;
    `;
  }

  renderStyle = () => {
    return `
    <style>
    .title{
        display: flex;
        align-items: center;
      }
      .title::before,
      .title::after {
        content: '';
        height: 1px;
        background-color: #333;
        flex: 1;
      }
      .title::before {
        margin-right: 1rem;
      }
     .title::after {
        margin-left: 1rem;
        }
    slot {
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: center;
    margin:0;
    width:100%;
    align-self: center;
      }
    </style>
    `;
  }

  renderHTML = () => {
    this.style.cssText = this.renderContainerCSS();
    const html = `
      ${this.renderStyle()}
      <h3 class="title">Trending launches</h3>
      <slot></slot>
    `;
    this.shadow.innerHTML = html;
  }
});

  
  