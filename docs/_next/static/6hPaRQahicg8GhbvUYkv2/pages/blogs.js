(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"16Al":function(e,n,t){"use strict";var a=t("WbBG");function o(){}function r(){}r.resetWarningCache=o,e.exports=function(){function e(e,n,t,o,r,i){if(i!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r,resetWarningCache:o};return t.PropTypes=t,t}},"17x9":function(e,n,t){e.exports=t("16Al")()},GIHZ:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),r=t("oTOh"),i=t("xQn5"),s=o.a.createElement,l=function(){return s("div",{className:"blog-page"},s("h1",{className:"display-5"},"Blogs"))};t.d(n,"BlogsPage",function(){return u});var c=o.a.createElement,u=function(){return c(o.a.Fragment,null,c(r.a,null),c(l,null),c(i.a,null))};n.default=u},LLLT:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return t("GIHZ")}])},WbBG:function(e,n,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var a=t("/HRN"),o=t("WaGi"),r=t("ZDA2"),i=t("/+P4"),s=t("N9n2"),l=t("5Uuq"),c=t("KI45");n.__esModule=!0,n.default=void 0;var u,p=c(t("LX0d")),f=t("CxY0"),m=l(t("q1tI")),d=(c(t("17x9")),c(t("nOHt"))),h=(t("P5f7"),t("g/15"));function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var b=new p.default,g=window.IntersectionObserver;function y(){return u||(g?u=new g(function(e){e.forEach(function(e){if(b.has(e.target)){var n=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),b.delete(e.target),n())}})},{rootMargin:"200px"}):void 0)}var k=function(e){function n(e){var t;return a(this,n),(t=r(this,i(n).call(this,e))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var n=null,t=null,a=null;return function(o,r){if(a&&o===n&&r===t)return a;var i=e(o,r);return n=o,t=r,a=i,i}}(function(e,n){return{href:v(e),as:n?v(n):n}}),t.linkClicked=function(e){var n=e.currentTarget,a=n.nodeName,o=n.target;if("A"!==a||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=t.formatUrls(t.props.href,t.props.as),i=r.href,s=r.as;if(function(e){var n=(0,f.parse)(e,!1,!0),t=(0,f.parse)((0,h.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(i)){var l=window.location.pathname;i=(0,f.resolve)(l,i),s=s?(0,f.resolve)(l,s):i,e.preventDefault();var c=t.props.scroll;null==c&&(c=s.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](i,s,{shallow:t.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})}}},t.p=!1!==e.prefetch,t}return s(n,e),o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var n=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,n){var t=y();return t?(t.observe(e),b.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}b.delete(e)}):function(){}}(e,function(){n.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as).href,t=(0,f.resolve)(e,n);d.default.prefetch(t)}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),a=t.href,o=t.as;"string"===typeof n&&(n=m.default.createElement("a",null,n));var r=m.Children.only(n),i={ref:function(n){e.handleRef(n),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(n):"object"===typeof r.ref&&(r.ref.current=n))},onMouseEnter:function(n){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(n),e.prefetch()},onClick:function(n){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(i.href=o||a),m.default.cloneElement(r,i)}}]),n}(m.Component);k.propTypes=void 0;var N=k;n.default=N},kOwS:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var a=t("UXZV"),o=t.n(a);function r(){return(r=o.a||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}},oTOh:function(e,n,t){"use strict";var a=t("q1tI"),o=t.n(a),r=t("YFqc"),i=t.n(r),s=o.a.createElement;n.a=function(){return s("section",{className:"menu cid-rGcxRXmoaQ",id:"menu2-1"},s("nav",{className:"navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm box-shadow"},s("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s("div",{className:"hamburger"},s("span",null),s("span",null),s("span",null),s("span",null))),s("div",{className:"menu-logo"},s("div",{className:"navbar-brand"},s("span",{className:"navbar-logo"},s("a",{href:"https://hikaya.io"},s("img",{src:"assets/images/hikaya_logo.png",alt:"Hikaya",title:""}))))),s("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s("div",null,s("ul",{className:"navbar-nav nav-dropdown"},s("li",{className:"nav-item dropdown"},s("a",{className:"nav-link link nav-font dropdown-toggle","data-toggle":"dropdown-submenu",role:"button","aria-expanded":"false"},"About",s("i",{className:"fas fa-chevron-down nav-arrow"})),s("div",{className:"dropdown-menu about-dropdown"},s("a",{className:"dropdown-item",href:"/#content4-3"},s("img",{className:"book-icon",src:"assets/images/book.png",alt:"book icon"}),"Our story"),s(i.a,{href:"/team"},s("a",{className:"dropdown-item"},s("i",{className:"far fa-user team-icon"}),"Team")),s("a",{className:"dropdown-item",href:"#"},s("img",{className:"cogs-icon",src:"assets/images/cogs.png",alt:"cogs icon"}),"Engineering"))),s("li",{className:"nav-item"},s("a",{className:"nav-link link nav-font",href:"index#content4-8"},"Products")),s(i.a,{href:"/blogs"},s("li",{className:"nav-item"},s("a",{className:"nav-link link nav-font"},"Blogs"))))),s("div",{className:"navbar-buttons mbr-section-btn"},s("a",{className:"btn btn-sm btn-primary-outline display-4 btn-nav",href:"https://activity.hikaya.app/accounts/login/",target:"_blank"},"Login"),s("a",{className:"btn btn-sm btn-primary display-4 btn-nav",href:"index#content4-8"},"Join")))))}},vYYK:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var a=t("hfKm"),o=t.n(a);function r(e,n,t){return n in e?o()(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}},xQn5:function(e,n,t){"use strict";var a=t("pLtp"),o=t.n(a),r=t("kOwS"),i=t("vYYK"),s=t("q1tI"),l=t.n(s),c=l.a.createElement,u=function(){return c("div",{className:"row-copyright"},c("p",{className:"hikaya-co"},"\xa9 2019 Hikaya"),c("a",{className:"text-white",href:"/terms",target:"_blank"},"Terms"),c("a",{className:"text-white",href:"/privacy",target:"_blank"},"Privacy"))},p=l.a.createElement,f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:props,n=e.link,t=e.icon;return p("a",{href:n,target:"_blank"},p("span",{className:t+" mbr-iconfont mbr-iconfont-social social-icon"}))},m=l.a.createElement,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:props,n=e.link,t=e.name;return m("a",{className:"mbr-text mbr-fonts-style text-muted font-weight-light",href:n,target:"_blank"},t)},h=l.a.createElement,v={social1:[{link:"mailto:info@hikaya.io",icon:"fas fa-envelope"}],social2:[{link:"https://github.com/hikaya-io",icon:"fab fa-github"}],social3:[{link:"https://angel.co/hikaya",icon:"fab fa-angellist"}],social4:[{link:"https://www.linkedin.com/company/hikaya-io/",icon:"fab fa-linkedin-in"}],social5:[{link:"https://twitter.com/hikaya_io",icon:"fab fa-twitter"}]},b={item1:[{id:"product_1",link:"#product-activity",name:"Activity"}],item2:[{id:"product_2",link:"#product-dots",name:"Dots"}],item3:[{id:"product_3",link:"#product-circles",name:"Circles"}]},g=Object(i.a)({item1:[{link:"index.html#content4-3",name:"About"}],item2:[{link:"",name:"Clients"}],item3:[{link:"/team",name:"Team"}],tem2:[{link:"",name:"Engineering"}]},"item3",[{link:"",name:"Blog"}]),y={item1:[{link:"https://help.hikaya.io/",name:"User knowledge base"}],item2:[{link:"",name:"API Documentation"}]};n.a=function(){var e=o()(b),n=o()(g),t=o()(y),a=o()(v);return h("section",{className:"mbr-section contacts3 background__light-blue",id:"contacts3-a"},h("div",{className:"footer-menu-container"},h("div",{className:"row footer-menu"},h("div",{className:"col-sm-4"},h("p",{className:"mbr-text mbr-fonts-style display-7 header"},"Products"),h("ul",{className:"list-group list-group-flush"},e.map(function(e,n){return h("li",{key:n,className:"list-group-item footer-menu-item"},b[e].map(function(e){return h(d,Object(r.a)({key:e.link},e))}))}))),h("div",{className:"col-sm-4"},h("p",{className:"mbr-text mbr-fonts-style display-7 header"},"Company"),h("ul",{className:"list-group list-group-flush"},function(e){return e.map(function(e,n){return h("li",{key:n,className:"list-group-item footer-menu-item"},g[e].map(function(e){return h(d,Object(r.a)({key:e.link},e))}))})}(n))),h("div",{className:"col-sm-4"},h("p",{className:"mbr-text mbr-fonts-style display-7 header"},"Support"),h("ul",{className:"list-group list-group-flush"},function(e){return e.map(function(e,n){return h("li",{key:n,className:"list-group-item footer-menu-item"},y[e].map(function(e){return h(d,Object(r.a)({key:e.link},e))}))})}(t))))),h("div",{className:"footer-socials-container"},h("div",{className:"footer-container"},h(u,null),h("div",{className:"social-container"},function(e){return e.map(function(e,n){return h("div",{key:n,className:"soc-item"},v[e].map(function(e){return h(f,Object(r.a)({key:e.link},e))}))})}(a)))))}}},[["LLLT",0,1]]]);