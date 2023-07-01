customElements.define("product-item", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return ['image_item', 'logo_channel', 'title', 'name_channel', 'icon_tick', 'quatity_view', 'broadcast_time', 'timeline'];
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
      width:calc( 16% - 5px );
      margin: 5px;
      aspect-ratio: 6 / 5;
      position: relative;
      `
    }
  
    renderStyle() {
      return `
      <style>
    }
    .image-item{
        width:100%;
        aspect-ratio: 2 / 1;
        
    }
    .image{
      width:100%;
      aspect-ratio: 2 / 1;
      object-fit:cover;
    }
    .content_item{
        display: flex;
        flex-direction: row;
        width:100%;
        height:7.7vh;
    }
    .logo-channel{
        width:20px;
        height: 20px;
        flex-shrink: 0;
    }
  .image-logo{
    width:20px;
    height: 20px;
    flex-shrink: 0;
    object-fit:cover;
  }
    .content{
        margin-left: 5px;
        flex:1;
        overflow: hidden;
        display:flex;
        flex-direction:column;
        color:white;

    }
    .content-top{
        width:100%;
        height: 3vh;
        margin:0;
     
    }
    .content-bottom{
        width:100%;
        height: 3vh;
        margin-top: 5px;
        display:flex;
        flex-direction:column;

    }
    .title{
      white-space: normal;
      display: inline-block;
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size:5px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-decoration: none;
      color:white;
    }
    .chanel{
        display:flex;
        flex-direction:row;
        height:1.5vh;
    }
    .name-channel{
        height:1.5vh;
        font-size:5px;
    }
    .icon-tick img{
        width:5px;
        height:5px;
        object-fit:cover;
        margin-bottom:10px;
        margin-left:5px;
    }
    .view{
        display:flex;
        flex-direction:row;
        height:1.5vh;
        width:100%;
        margin-top: 1px;
        font-size:5px;
    }
    .quatity-view{
        width:40%;
        height:1.5vh;
        font-size:5px;
    }
    .broadcast-time{
        width:40%;
        height:1.5vh;
        // margin-left: 10px;
        font-size:5px;

    }
    .broadcast-time:not(:first-of-type):before{
      content: "•";
      margin: 0 4px;
    }
    .timeline{
      background: black;
      position: absolute;
      right: 0;
      bottom: 8svh;
      font-size:5px;
      color:white;
    }
      </style>
      `
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="image-item">
            <a id="image" href="">
                <div class="timeline">${this.attr('timeline')}</div>
                <img class="image" src="${this.attr('image_item')}"/>
            </a>
        </div>
        <div class="content_item">
            <a class="logo-channel" href="">
                <img class="image-logo" src="${this.attr('logo_channel')}"/>
            </a> 
            <div class="content">
                <h3 class="content-top">
                    <a class="title" href=""><span>${this.attr('title')}</span></a>
                </h3>
                <div class="content-bottom">
                    <div class="chanel">
                        <div class="name-channel"><span>${this.attr('name_channel')}<span></div>
                        <div class="icon-tick"><img src="${this.attr('icon_tick')}"/></div>
                    </div>
                    <div class="view">
                        <div class="quatity-view"><span>${this.attr('quatity_view')}<span></div>
                        <div class="broadcast-time"><span>${this.attr('broadcast_time')}<span></div>
                    </div>
                </div>
            </div>
        </div>
      `
      this.shadow.innerHTML = html;
    }
  });