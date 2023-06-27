class ProductOne extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  // khai báo biến vào để render
  static get observedAttributes() {
    return ['img_logo', 'logo', 'img_content', 'content', 'time', 'link', 'number_heart', 'numbet_comment', 'number_upload'];
  }
  // cách 2
  // get abc(){
  //   return this.getAttribute('abc');
  // }
  // bên dưới gọi ${this.abc}
  
  // cách 3
  attr(name){
  return this.getAttribute(name);
  }
  // bên dưới gọi ${this.att('abc')}

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.renderHTML();
  }

  connectedCallback() {
    this.renderHTML();
  }

  renderHTML() { 
    // this.style.width="100%"; style cho cai bao ngoai cung
    // const content=this.getAttribute('content')
    const html = `
    <style>
      div {
        display: flex;
        flex-direction: column;
        position: relative;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }

      span {
        background-color: yellow;
      }
      .container{
        background-color:grey;
        width:300px;
        height:400px;
        border-radius:10px;
        display:flex;
        flex-direction:column;
        padding: 0;
        margin: 0;

      }
      .row1{
        max-width:300px;  
        max-height:40px;
        margin: 0px 10px;
        display:flex;
        flex-direction:row;
        align-items:center;
      }
      .img_row1{
        width:30px;
        margin: 10px 0;
      }
      .content_row1{
        width: 200px;
        margin: 0 5px;
      }
      .row2{
        max-width:300px;
        height:200px;
        margin: 0px 0px;
        object-fit: contain;
      }
      .row3{
        max-width:300px;
        margin:0 10px;
        font-size:10px;
        height:20px;
      }
      .row4{
        max-width:300px;
        height: 150px;
        margin: 0px 10px;
      }
      .p{
        word-wrap: break-word;
        word-break: keep-all;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .row5{
        max-width:300px;
        margin: 0px 10px;
        font-size:10px;
      }
      .row6{
        margin:0px 10px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
      }
      .media{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
      }
      .icon{
        width:15px;
        height:15px;
        margin:2px
      }
      .number{
   
        width:20px;
        height:15px;
        margin:5px 2px;
        font-size:10px;
      }

    </style>
<div class="container">
  <div class="row1">
    <div class="img_row1">
      <img src="${this.attr('img_logo')}">
    </div>
    <div class="content_row1"><p>${this.attr('logo')}</p></div>
  </div>
  <div class="row2">
    <img src="${this.attr('img_content')}"/>
  </div>
  <div class="row3">
    <p>${this.attr('time')}<p>
  </div>
  <div class="row4">
    <p>${this.attr('content')}</p>
  </div>
  <div class="row5">
    <p>${this.attr('link')}</p>
  </div>
  <div class="row6">
    <div class="media">
      <div class="icon">
        <svg viewBox="0 0 48 48" id="b" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.c{fill:none;stroke:#000000;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path class="c" d="m43,17.0766c0-5.6539-4.5835-10.2373-10.2374-10.2373-3.7223,0-6.9708,1.9932-8.7626,4.964-1.7919-2.9708-5.0403-4.964-8.7626-4.964-5.6539,0-10.2373,4.5834-10.2373,10.2373,0,1.2925.2496,2.524.6866,3.6627,3.3851,9.7368,18.3134,20.4215,18.3134,20.4215,0,0,14.9282-10.6847,18.3134-20.4215.437-1.1386.6867-2.3702.6867-3.6627Z"></path></g></svg>
      </div>
      <div class="number">${this.attr('number_heart')}</div>
    </div>
     <div class="media">
      <div class="icon">
        <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#000000;} </style> <g> <path class="st0" d="M410.431,63.966C370.965,24.479,316.251-0.015,256,0c-60.237-0.015-114.958,24.479-154.416,63.966 c-39.487,39.458-63.98,94.18-63.966,154.416c-0.014,57.076,21.986,109.21,57.881,148.053 c31.947,34.609,75.062,58.846,123.588,67.118v58.59c0,7.724,4.469,14.738,11.468,18c7,3.262,15.257,2.164,21.159-2.802 l144.725-121.715l-0.036,0.022c27.36-22.878,47.239-48.146,59.914-76.195c12.711-28.041,18.087-58.437,18.065-91.071 C474.397,158.146,449.91,103.424,410.431,63.966z M420.151,293.078c-10.006,22.029-25.562,42.266-49.237,62.13l-0.029,0.029 l-112.091,94.267v-33.373c0-10.304-7.906-18.913-18.167-19.784c-45.741-3.898-86.515-24.991-115.953-56.85 C95.258,307.61,77.339,265.19,77.325,218.382c0.014-49.404,19.974-93.945,52.338-126.346C162.054,59.672,206.603,39.714,256,39.706 c49.404,0.008,93.945,19.966,126.345,52.33c32.371,32.4,52.316,76.942,52.33,126.346 C434.661,246.781,430.111,271.026,420.151,293.078z"></path> <path class="st0" d="M151.771,191.906c-14.62,0-26.476,11.856-26.476,26.476c0,14.62,11.856,26.476,26.476,26.476 c14.613,0,26.469-11.856,26.469-26.476C178.24,203.762,166.385,191.906,151.771,191.906z"></path> <path class="st0" d="M256,191.906c-14.613,0-26.469,11.856-26.469,26.476c0,14.62,11.856,26.476,26.469,26.476 c14.62,0,26.476-11.856,26.476-26.476C282.476,203.762,270.62,191.906,256,191.906z"></path> <path class="st0" d="M360.236,191.906c-14.62,0-26.469,11.856-26.469,26.476c0,14.62,11.848,26.476,26.469,26.476 c14.62,0,26.476-11.856,26.476-26.476C386.712,203.762,374.856,191.906,360.236,191.906z"></path> </g> </g></svg>
      </div>
      <div class="number">${this.attr('number_comment')}</div>
    </div>
     <div class="media">
      <div class="icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
      </div>
      <div class="number">${this.attr('number_upload')}</div>
    </div>
     <div class="media">
      <div class="icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="upload"> <g> <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.9 6.7 12 2.7 16.1 6.7" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline> <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="16.3" y2="4.8"></line> </g> </g> </g> </g> </g></svg>
      </div>
    </div>
  </div>
    `

    this.shadow.innerHTML = html;
  }

}
customElements.define("item-section1", ProductOne);
