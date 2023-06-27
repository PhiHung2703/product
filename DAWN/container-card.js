class MainContainer extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
      return [];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }

    connectedCallback() {
      this.renderHTML();
    }

    renderHTML() {
      const productList = [{
        img_logo:'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/react_native',
        logo:'React Native',
        img_content:'https://daily-now-res.cloudinary.com/image/upload/f_auto,q_auto/v1669894498/a/fallback/youtube_3d',
        time:'1 hours ago',
        content:'Subscribe to the daily.dev YouTube channel today',
        link:'daily.dev',
        number_heart:'15',
        number_comment:'5',
        number_upload:'20',
          },
        {img_logo:'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/b11bf37102384ac9983be701b2cf7cd5',
        logo:'JFrog',
        img_content:'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ff749d548af41095da8724da8d7ba5f9?_a=AQADKdt',
        time:'2 hours ago',
        content:'A Bootiful Podcast: Micrometer lead Tommy Ludwig',
        link:'daily.dev',
        number_heart:'45',
        number_comment:'50',
        number_upload:'100',
        },
        {img_logo:'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/82e21f28c59c499f9c47833c55500fd8',
        logo:'Code like a girl',
        img_content:'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/90c2c13e8e1d89a3fcd2cac7ce33c1a0?_a=AQADKdt',
        time:'3 hours ago',
        content:'Build a Beautiful CRUD App with Spring Boot and Angular',
        link:'daily.dev',
        number_heart:'1',
        number_comment:'1',
        number_upload:'0',
      },
      { img_logo:'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/itnext2',
        logo:'ITNEXT',
        img_content:'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/544ecc6b39270573c5e04fffce3db6fa?_a=AQADKdt',
        time:'4 hours ago',
        content:'Applying behavioural science in UX design',
        link:'daily.dev',
        number_heart:'21',
        number_comment:'12',
        number_upload:'30',
      },
      {
        img_logo:'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1655817725/logos/community',
        logo:'Community Picks',
        img_content:'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/f857c76ce8546a49b079203b0dc40a7d',
        time:'5 hours ago',
        content:'UI/UX Design Trends 2023',
        link:'daily.dev',
        number_heart:'11',
        number_comment:'50',
        number_upload:'30',
      },
      {
        img_logo:'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1655817725/logos/community',
        logo:'Mediums',
        img_content:'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/5e1767b59940e8e749f27f8b83056566',
        time:'6 hours ago',
        content:'6 Advanced TypeScript tricks for Clean Code',
        link:'daily.dev',
        number_heart:'59',
        number_comment:'120',
        number_upload:'60',
      },
    ];
    const listHTML = productList.map((item)=>{
      return `
      <item-section1
        img_logo="${item.img_logo}"
        logo="${item.logo}"
        img_content="${item.img_content}"
        time="${item.time}"
        content="${item.content}"
        link="${item.link}"
        number_heart="${item.number_heart}"
        number_comment="${item.number_comment}"
        number_upload="${item.number_upload}"
      ></item-section1>
      `
    });
    const joined = listHTML.join('\n');
      const html = `
      <style>
      div {
        display: flex;
        flex-direction: row;
        position: relative;
        flex-shrink: 0;
        box-sizing: border-box;
        background-color:black;
        flex-wrap:wrap;
        max-width:100%;
        align-items: center;
        justify-content:center;
        padding: 0 100px;
      }
      div {
        width: 100vw;
        align-items: center;
      }
      </style>
      <div>
        ${joined}
      </div>
      `
      this.shadow.innerHTML = html;
    }
  
  }
  customElements.define("container-section1", MainContainer);
  