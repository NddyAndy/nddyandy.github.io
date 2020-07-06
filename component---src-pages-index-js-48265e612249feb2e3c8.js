(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(146),i=a(148),c=a(151);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"About | Ndifreke Friday (ndiecodes)"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"heading mt"},r.a.createElement("span",{className:"heading-primary"}," ",r.a.createElement("span",{className:"hi"},"Hi"),r.a.createElement("span",{className:"dot"})),r.a.createElement("span",{className:"heading-secondary"},"I'm Ndifreke Friday"),r.a.createElement("span",{className:"heading-tertiary mt"},"A Software Developer currently living in Lagos, Nigeria. I build responsive websites and scalable APIs. I am problem solving and always excited when it comes to mentoring aspiring developers."),r.a.createElement("span",{className:"heading-tertiary"},"My core skills are  ",r.a.createElement("b",null,"Javascript")," ","(",r.a.createElement("b",null,"Nodejs"),", React, Vue) , ",r.a.createElement("b",null,"PHP"),"(Laravel), ",r.a.createElement("b",null,"Go ")," and HTML/CSS (SASS). I also have experience with DBMS [ ",r.a.createElement("b",null,"Mysql")," / NoSql (",r.a.createElement("b",null,"mongoDB"),")], ",r.a.createElement("b",null,"Nginx Web Server")," and ",r.a.createElement("b",null,"Jenkins Automation Server"),"."),r.a.createElement("span",{className:"heading-tertiary"},"I have completed ",r.a.createElement(l.a,{to:"projects"},"projects")," alone and also worked with different teams. Some of the projects I am allowed to showcase are in my"," ",r.a.createElement("a",{href:"https://github.com/ndiecodes",target:"_blank",rel:"noopener noreferrer"},"github repository"),". Also checkout my     ",r.a.createElement("a",{href:"https://gist.github.com/ndiecodes",target:"_blank",rel:"noopener noreferrer"},"code dumpster")," because why not :)."))))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(147);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},148:function(e,t,a){"use strict";var n=a(149),r=a(0),l=a.n(r),i=a(152),c=a(4),o=a.n(c),s=a(146),m=function(e){var t=e.title,a=e.description,r=e.keywords,c=e.image,o=e.pathname,m=e.article;return l.a.createElement(s.b,{query:d,render:function(e){var n=e.site.siteMetadata,s=n.defaultTitle,d=n.titleTemplate,u=n.defaultDescription,p=n.defaultKeywords,E=n.siteUrl,g=n.defaultImage,f=n.twitterUsername,v={title:t||s,description:a||u,image:""+E+(c||g),url:""+E+(o||"/"),keywords:r||p};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.Helmet,{title:v.title,titleTemplate:d},l.a.createElement("meta",{name:"description",content:v.description}),l.a.createElement("meta",{name:"image",content:v.image}),l.a.createElement("meta",{name:"keywords",content:v.keywords.join(", ")}),v.url&&l.a.createElement("meta",{property:"og:url",content:v.url}),!m?null:l.a.createElement("meta",{property:"og:type",content:"article"}),v.title&&l.a.createElement("meta",{property:"og:title",content:v.title}),v.description&&l.a.createElement("meta",{property:"og:description",content:v.description}),v.image&&l.a.createElement("meta",{property:"og:image",content:v.image}),l.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),f&&l.a.createElement("meta",{name:"twitter:creator",content:f}),v.title&&l.a.createElement("meta",{name:"twitter:title",content:v.title}),v.description&&l.a.createElement("meta",{name:"twitter:description",content:v.description}),v.image&&l.a.createElement("meta",{name:"twitter:image",content:v.image})))},data:n})};t.a=m;var d="409009470";m.propTypes={title:o.a.string,description:o.a.string,keywords:o.a.array,image:o.a.string,pathname:o.a.string,article:o.a.bool},m.defaultProps={title:null,description:null,keywords:null,image:null,pathname:null,article:!1}},149:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Ndifreke Friday",titleTemplate:"%s · Software Developer",defaultDescription:"Hi. I'm Ndie a Software Developer based out of Port Harcourt, Nigeria.",defaultKeywords:["ndiecodes","portfolio","software developer","developer","web developer"],siteUrl:"https://ndiecodes.github.io",defaultImage:"/images/ndie.jpg",twitterUsername:"@ndiecodes"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},151:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(146),i=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container navflex"},r.a.createElement(l.a,{to:"/",className:"logo-text"},r.a.createElement("i",null,"Ndie ")),r.a.createElement("div",{className:"navigation"},r.a.createElement("input",{type:"checkbox",class:"nav-checkbox",id:"nav-toggle"}),r.a.createElement("label",{className:"nav-button",for:"nav-toggle"},r.a.createElement("span",{className:"nav-icon"},"  ")),r.a.createElement("div",{className:"nav-bg"}," "),r.a.createElement("nav",{className:"nav-nav"},r.a.createElement("ul",{className:"navlinks"},r.a.createElement("li",null,r.a.createElement(l.a,{to:"/",activeClassName:"active"},"About")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/projects",activeClassName:"active"},"Projects")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/contact",activeClassName:"active"},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://ndiecodes.com",target:"_blank"},"Blog")))))))},c=function(){return r.a.createElement("footer",{className:"container footer"},r.a.createElement("p",{className:"copy"},"Made with ",r.a.createElement("span",null,"♥")," by"," ",r.a.createElement("a",{href:"https://twitter.com/ndiecodes",target:"_blank",rel:"noopener noreferrer"},"ndiecodes"),"."))};a(153),t.a=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(i,null),e.children,r.a.createElement(c,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-48265e612249feb2e3c8.js.map