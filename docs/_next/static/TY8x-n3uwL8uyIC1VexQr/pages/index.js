(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var a=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};a(e,"__esModule",{value:!0});var r=i(n("q1tI")),o=n("lwAK");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,a=t.hybrid,i=void 0!==a&&a,r=t.hasQuery;return n||i&&(void 0!==r&&r)}e.isInAmpMode=s,e.useAmp=function(){return s(r.default.useContext(o.AmpStateContext))}},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"16Al":function(t,e,n){"use strict";var a=n("WbBG");function i(){}function r(){}r.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,r,o){if(o!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:r,resetWarningCache:i};return n.PropTypes=n,n}},"17x9":function(t,e,n){t.exports=n("16Al")()},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var a=n("ttDY"),i=n("hfKm"),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};i(e,"__esModule",{value:!0});var o=r(n("q1tI")),s=r(n("Xuae")),c=n("lwAK"),l=n("FYa8"),u=n("/0+H");function d(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce(function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)},[])):t.concat(e)}e.defaultHead=d;var m=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce(function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)},[]).reduce(p,[]).reverse().concat(d(e.inAmpMode)).filter(function(){var t=new a,e=new a,n=new a,i={};return function(r){if(r.key&&"number"!==typeof r.key&&0===r.key.indexOf(".$"))return!t.has(r.key)&&(t.add(r.key),!0);if(t.has(".$".concat(r.key)))return!1;switch(r.type){case"title":case"base":if(e.has(r.type))return!1;e.add(r.type);break;case"meta":for(var o=0,s=m.length;o<s;o++){var c=m[o];if(r.props.hasOwnProperty(c))if("charSet"===c){if(n.has(c))return!1;n.add(c)}else{var l=r.props[c],u=i[c]||new a;if(u.has(l))return!1;u.add(l),i[c]=u}}}return!0}}()).reverse().map(function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})})}var h=s.default();function v(t){var e=t.children;return o.default.createElement(c.AmpStateContext.Consumer,null,function(t){return o.default.createElement(l.HeadManagerContext.Consumer,null,function(n){return o.default.createElement(h,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:u.isInAmpMode(t)},e)})})}v.rewind=h.rewind,e.default=v},B9jh:function(t,e,n){"use strict";var a=n("Wu5q"),i=n("n3ko");t.exports=n("raTm")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return a.def(i(this,"Set"),t=0===t?0:t,t)}},a)},IP1Z:function(t,e,n){"use strict";var a=n("2faE"),i=n("rr1i");t.exports=function(t,e,n){e in t?a.f(t,e,i(0,n)):t[e]=n}},MbLX:function(t,e,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("YFqc"),o=n.n(r),s=i.a.createElement;e.a=function(){return s("section",{className:"menu cid-rGcxRXmoaQ",id:"menu2-1"},s("nav",{className:"navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm box-shadow"},s("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s("div",{className:"hamburger"},s("span",null),s("span",null),s("span",null),s("span",null))),s("div",{className:"menu-logo"},s("div",{className:"navbar-brand"},s("span",{className:"navbar-logo"},s("a",{href:"https://hikaya.io"},s("img",{src:"assets/images/hikaya_logo.png",alt:"Hikaya",title:""}))))),s("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},s("div",null,s("ul",{className:"navbar-nav nav-dropdown","data-app-modern-menu":"true"},s("li",{className:"nav-item"},s("a",{className:"nav-link link nav-font",href:"index.html#content4-3"},"About")),s("li",{className:"nav-item"},s("a",{className:"nav-link link nav-font",href:"index.html#content4-8"},"Products")),s(o.a,{href:"/teamPage"},s("li",{className:"nav-item"},s("a",{className:"nav-link link nav-font"},"Team"))))),s("div",{className:"navbar-buttons mbr-section-btn"},s("a",{className:"btn btn-sm btn-primary-outline display-4 btn-nav",href:"https://activity.hikaya.app/accounts/login/",target:"_blank"},"Login"),s("a",{className:"btn btn-sm btn-primary display-4 btn-nav",href:"index.html#content4-8"},"Join")))))}},PQJW:function(t,e,n){var a=n("d04V"),i=n("yLu3");t.exports=function(t){if(i(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return a(t)}},RNiq:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),i=n.n(a),r=n("8Kt/"),o=n.n(r),s=n("MbLX"),c=i.a.createElement,l=function(){return c("section",{className:"header1 mbr-fullscreen mbr-parallax-background",id:"header1-2"},c("div",{className:"container d-flex justify-content-between header-image-container"},c("div",{className:"mbr-white d-flex flex-column justify-content-start col-md-4 header-content"},c("h1",{className:"mbr-section-title align-left mbr-bold pb-3 mbr-fonts-style display-1"},"Tell your story"),c("p",{className:"mbr-text align-left pb-3 mbr-fonts-style display-5 header-text"},"Hikaya helps organizations tell their stories through data and technology.")),c("img",{src:"./assets/images/header-image.png",alt:"",className:"col-md-7 header-image"})))},u=n("pLtp"),d=n.n(u),p=n("kOwS"),m=i.a.createElement,f=function(){return m("section",{className:"mbr-section content4 cid-rGcAx6PWdw",id:"content4-3"},m("div",{className:"container"},m("div",{className:"media-container-row"},m("div",{className:"title col-12 col-md-12"},m("h2",{className:"align-center pb-3 mbr-fonts-style display-5"},"Our story"),m("h3",{className:"mbr-section-subtitle align-center mbr-light mbr-fonts-style display-7"},"Hikaya, which means ",m("i",null,"story")," in Arabic works with nonprofit organizations to introduce a set of integrated tools that re-engineer how data are used within these organizations. By building open source solutions on common data standards, we help nonprofits worldwide improve their delivery of goods and services to those most in need while making reporting to funders more transparent.")))))},h=i.a.createElement,v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:props,e=t.icon,n=t.name,a=t.description;return h("div",{className:"card col-12 col-md-6 col-lg-6 about-text"},h("div",{className:"card-img pb-3"},h("img",{src:"assets/images/"+e,alt:n})),h("div",{className:"card-box"},h("h4",{className:"card-title py-3 mbr-fonts-style display-4"},h("strong",null,n)),h("p",{className:"mbr-text mbr-fonts-style display-7"},a)))},y=i.a.createElement,g={row1:[{icon:"ecosystem.png",name:"Data Ecosystem",description:"We believe the way to transform into a digital organization is\n                  through utilizing a set of integrated tools that promote\n                  sharing and consistency across the organization."},{icon:"standardization.png",name:"Data Standardization",description:"By investing in upfront system design, we build tools and\n\t\t\t\t\t\t\t\tprocesses that help standardize data and keep it up-to-date.\n\t\t\t\t\t\t\t\tThis helps us reap the benefits of our systems by making it\n\t\t\t\t\t\t\t\teasier to roll up data and answer common questions like \u201cWhere\n\t\t\t\t\t\t\t\tdo we work\u201d, \u201cWho do we work with?\u201d, and \u201cWhat did we\n\t\t\t\t\t\t\t\tachieve?\u201d"}],row2:[{icon:"data_collection.png",name:"Data Collection",description:"Digitizing the way we collect and process data has never been\n                  easier with access to affordable, rugged technology to operate\n                  in low connectivity settings. We can eliminate manual entry\n                  and data cleaning steps in record time while improving the\n                  flow of data through real-time monitoring."},{icon:"storage.png",name:"Data Storage",description:"By integrating data in a centralized and consistent manner, we\n                  can reduce duplication and encourage organizations to access\n                  more of their data for in depth analysis."}],row3:[{icon:"visualization.png",name:"Data Visualization",description:"Once data starts to work its way through our tools, it is\n                  coupled with automated and self-service reports and dashboards\n                  that give greater insight into all levels of the organization.\n                  By utilizing modern business intelligence and easy-to-use\n                  visualization tools, organizations can access relevant and\n                  timely information for informed decision making."},{icon:"visualization.png",name:"Commitment to Open Source",description:"Our team is committed to developing solutions using an\n                  iterative, human-centered design approach and support the use\n                  of open source software across the nonprofit community."}]},b=function(){var t=d()(g);return y("div",{className:"products"},y(f,null),function(t){return t.map(function(t){return y("section",{key:t,className:"features1 cid-rGcC0zE5vw",id:"features1-4"},y("div",{className:"container"},y("div",{className:"media-container-row products-approach__top"},g[t].map(function(t){return y(v,Object(p.a)({key:t.name},t))}))))})}(t))},k=i.a.createElement,w=function(){return k("section",{className:"mbr-section content4 cid-rGdb7vyXSO",id:"content4-8"},k("div",{className:"container"},k("div",{className:"media-container-row"},k("div",{className:"title col-12 col-md-8"},k("h2",{className:"align-center pb-3 mbr-fonts-style display-5"},"Products")))))},N=i.a.createElement,x=function(t){return i.a.createElement("span",{dangerouslySetInnerHTML:{__html:t}})},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:props,e=t.icon,n=t.id,a=t.name,i=t.headline,r=t.description,o=t.buttonText,s=t.buttonLink,c=t.itemClass,l=t.buttonStyle;return N("div",{className:c,id:n},N("div",{className:"card p-3 col-12 col-md-6 col-lg-6"},N("div",{className:"card-img pb-3"},N("span",{className:"mbr-iconfont"},N("img",{className:"product",src:"assets/images/"+e,alt:a}))),N("h4",{className:"card-title py-3 mbr-fonts-style display-4 product-title"},N("strong",null,a))),N("div",{className:"card p-3 col-12 col-md-6 col-lg-6"},N("div",{className:"card-box"},N("p",{className:"mbr-text mbr-fonts-style display-7"},N("span",{className:"product-header"},i),N("br",null),N("br",null),x(r),N("br",null),N("br",null)),N("div",{className:"product-btn-wrapper"},N("a",{className:l,href:s,target:"_blank"},o)))))},C=i.a.createElement,S={product1:[{itemClass:"media-container-row",icon:"activity.png",id:"product-activity",name:"Activity",headline:"Manage your activities and indicators with ease",description:'Activity is a tool that makes it easier for nonprofits to manage their project \n        activities and indicator results. Activity is based on an <a className="product-link" \n        href="https://github.com/mercycorps/TolaActivity" >open source project</a> started at \n        <a className="product-link" href="https://www.mercycorps.org/">Mercy Corps</a> in 2014. \n        Activity is hosted and maintained by Hikaya and can be used any nonprofit.',buttonText:"Join our beta",buttonLink:"https://activity.hikaya.app/accounts/register/user/none/",buttonStyle:"btn btn-sm btn-primary display-4 try-now-button"}],product2:[{itemClass:"media-container-row reverse-content dots-container",icon:"dots.png",id:"product-dots",name:"Dots",headline:"Connect and visualize your data from anywhere",description:'Built using open source tools like\n                <a className="product-link" href="https://airflow.apache.org/">Apache Airflow</a> and\n                <a className="product-link" href="https://metabase.com/">Metabase</a>, we\u2019re architecting\n                a common data pipeline for nonprofits to manage their\n                unstructured datasets by importing datasets from third-party\n                data collection tools while hosting a series of pre-built\n                connectors that let organizations integrate their ERP systems.\n                The application provides a workspace to perform cleaning and\n                join operations alongside scheduling imports and exports between\n                systems.',buttonText:"Contact us",buttonLink:"mailto:info@hikaya.io",buttonStyle:"product-contact-btn"}],product3:[{itemClass:"media-container-row",icon:"circles.png",id:"product-circles",name:"Circles",headline:"Standard form designer that automates KPI tracking",description:'We are building a progressive web application that\n                helps design, offline data collection forms that are\n                standardized and linked to key performance indicators so that\n                nonprofits can easily automate their reporting. This application\n                is based on a micro-service architecture for high performance,\n                scalability, and availability using\n                <a className="product-link" href="https://angular.io/">Angular 8</a>\n                and\n                <a className="product-link" href="https://www.python.org/">Python</a>\n                /\n                <a className="product-link" href="https://www.djangoproject.com/">Django</a>.',buttonText:"Contact us",buttonLink:"mailto:info@hikaya.io",buttonStyle:"product-contact-btn"}]},E=function(){var t=d()(S);return C("div",null,C(w,null),function(t){return t.map(function(t){return C("section",{key:t,className:"features1 cid-rGdb9qTnNd",id:"features1-9"},C("div",{className:"container"},S[t].map(function(t){return C(_,Object(p.a)({key:t.name},t))})))})}(t))},A=n("rCDY"),T=i.a.createElement;function O(){"shown"!=localStorage.getItem("cookieSeen")&&($(".cookie-banner").delay(2e3).fadeIn(),localStorage.setItem("cookieSeen","shown")),$(".cookie-banner").hide({duration:1e3})}function P(){$(".cookie-banner").hide({duration:1e3})}var D=function(){return T("div",{className:"cookie-banner"},T("p",{className:"cookie-text"},T("img",{src:"assets/images/cookie.png",width:"16",className:"cookie-image"}),"This website uses cookies to ensure you get the best experience."),T("button",{className:"btn btn-sm btn-primary display-6",onClick:O},"Accept"),T("a",{href:"/privacy",target:"_blank",className:"btn btn-sm btn-primary display-6",onClick:P},"Privacy Policy"))},I=i.a.createElement;e.default=function(){return I("div",null,I(o.a,null,I("title",null,"Home")),I(s.a,null),I(l,null),I(b,null),I(E,null),I(A.a,null),I(D,null))}},TbGu:function(t,e,n){var a=n("fGSI"),i=n("PQJW"),r=n("2PDY");t.exports=function(t){return a(t)||i(t)||r()}},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var a=n("2GTP"),i=n("Y7ZC"),r=n("JB68"),o=n("sNwI"),s=n("NwJ3"),c=n("tEej"),l=n("IP1Z"),u=n("fNZA");i(i.S+i.F*!n("TuGD")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,d,p=r(t),m="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,v=void 0!==h,y=0,g=u(p);if(v&&(h=a(h,f>2?arguments[2]:void 0,2)),void 0==g||m==Array&&s(g))for(n=new m(e=c(p.length));e>y;y++)l(n,y,v?h(p[y],y):p[y]);else for(d=g.call(p),n=new m;!(i=d.next()).done;y++)l(n,y,v?o(d,h,[i.value,y],!0):i.value);return n.length=y,n}})},WbBG:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},Xuae:function(t,e,n){"use strict";var a=n("/HRN"),i=n("ZDA2"),r=n("/+P4"),o=n("K47E"),s=n("WaGi"),c=n("N9n2"),l=n("TbGu"),u=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var d=n("q1tI"),p=!1;e.default=function(){var t,e=new u;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(l){function u(t){var s;return a(this,u),s=i(this,r(u).call(this,t)),p&&(e.add(o(s)),n(o(s))),s}return c(u,l),s(u,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),s(u,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(d.Component)}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var a=n("/HRN"),i=n("WaGi"),r=n("ZDA2"),o=n("/+P4"),s=n("N9n2"),c=n("5Uuq"),l=n("KI45");e.__esModule=!0,e.default=void 0;var u,d=l(n("LX0d")),p=n("CxY0"),m=c(n("q1tI")),f=(l(n("17x9")),l(n("nOHt"))),h=(n("P5f7"),n("g/15"));function v(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var y=new d.default,g=window.IntersectionObserver;function b(){return u||(g?u=new g(function(t){t.forEach(function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(u.unobserve(t.target),y.delete(t.target),e())}})},{rootMargin:"200px"}):void 0)}var k=function(t){function e(t){var n;return a(this,e),(n=r(this,o(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,a=null;return function(i,r){if(a&&i===e&&r===n)return a;var o=t(i,r);return e=i,n=r,a=o,o}}(function(t,e){return{href:v(t),as:e?v(e):e}}),n.linkClicked=function(t){var e=t.currentTarget,a=e.nodeName,i=e.target;if("A"!==a||!(i&&"_self"!==i||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var r=n.formatUrls(n.props.href,n.props.as),o=r.href,s=r.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(o)){var c=window.location.pathname;o=(0,p.resolve)(c,o),s=s?(0,p.resolve)(c,s):o,t.preventDefault();var l=n.props.scroll;null==l&&(l=s.indexOf("#")<0),f.default[n.props.replace?"replace":"push"](o,s,{shallow:n.props.shallow}).then(function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())})}}},n.p=!1!==t.prefetch,n}return s(e,t),i(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(t){var e=this;this.p&&g&&t&&t.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(t,e){var n=b();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,function(){e.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,n=(0,p.resolve)(t,e);f.default.prefetch(n)}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,i=n.as;"string"===typeof e&&(e=m.default.createElement("a",null,e));var r=m.Children.only(e),o={ref:function(e){t.handleRef(e),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(e):"object"===typeof r.ref&&(r.ref.current=e))},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),t.prefetch()},onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(o.href=i||a),m.default.cloneElement(r,o)}}]),e}(m.Component);k.propTypes=void 0;var w=k;e.default=w},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var a=n("Y7ZC");a(a.P+a.R,"Set",{toJSON:n("8iia")("Set")})},fGSI:function(t,e,n){var a=n("p0XB");t.exports=function(t){if(a(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},kOwS:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a=n("UXZV"),i=n.n(a);function r(){return(r=i.a||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}},lwAK:function(t,e,n){"use strict";var a=n("hfKm"),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};a(e,"__esModule",{value:!0});var r=i(n("q1tI"));e.AmpStateContext=r.createContext({})},rCDY:function(t,e,n){"use strict";var a=n("pLtp"),i=n.n(a),r=n("kOwS"),o=n("hfKm"),s=n.n(o);var c,l,u,d=n("q1tI"),p=n.n(d),m=p.a.createElement,f=function(){return m("div",{className:"row-copyright"},m("p",{className:"hikaya-co"},"\xa9 2019 Hikaya"),m("a",{className:"text-white",href:"terms.html",target:"_blank"},"Terms"),m("a",{className:"text-white",href:"privacy.html",target:"_blank"},"Privacy"))},h=p.a.createElement,v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:props,e=t.link,n=t.icon;return h("a",{href:e,target:"_blank"},h("span",{className:n+" mbr-iconfont mbr-iconfont-social social-icon"}))},y=p.a.createElement,g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:props,e=t.link,n=t.name;return y("a",{className:"mbr-text mbr-fonts-style text-muted font-weight-light",href:e},n)},b=p.a.createElement,k={social1:[{link:"mailto:info@hikaya.io",icon:"fas fa-envelope"}],social2:[{link:"https://github.com/hikaya-io",icon:"fab fa-github"}],social3:[{link:"https://angel.co/hikaya",icon:"fab fa-angellist"}],social4:[{link:"https://www.linkedin.com/company/hikaya-io/",icon:"fab fa-linkedin-in"}],social5:[{link:"https://twitter.com/hikaya_io",icon:"fab fa-twitter"}]},w={item1:[{id:"product_1",link:"#product-activity",name:"Activity"}],item2:[{id:"product_2",link:"#product-dots",name:"Dots"}],item3:[{id:"product_3",link:"#product-circles",name:"Circles"}]},N=(u=[{link:"",name:"Blog"}],(l="item3")in(c={item1:[{link:"index.html#content4-3",name:"About"}],item2:[{link:"",name:"Clients"}],item3:[{link:"",name:"Team"}],tem2:[{link:"",name:"Engineering"}]})?s()(c,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):c[l]=u,c),x={item1:[{link:"",name:"User knowledge base"}],item2:[{link:"",name:"API Documentation"}]};e.a=function(){var t=i()(w),e=i()(N),n=i()(x),a=i()(k);return b("section",{className:"mbr-section contacts3 background__light-blue",id:"contacts3-a"},b("div",{className:"footer-menu-container"},b("div",{className:"row footer-menu"},b("div",{className:"col-sm-4"},b("p",{className:"mbr-text mbr-fonts-style display-7 header"},"Products"),b("ul",{className:"list-group list-group-flush"},t.map(function(t,e){return b("li",{key:e,className:"list-group-item footer-menu-item"},w[t].map(function(t){return b(g,Object(r.a)({key:t.link},t))}))}))),b("div",{className:"col-sm-4"},b("p",{className:"mbr-text mbr-fonts-style display-7 header"},"Company"),b("ul",{className:"list-group list-group-flush"},function(t){return t.map(function(t,e){return b("li",{key:e,className:"list-group-item footer-menu-item"},N[t].map(function(t){return b(g,Object(r.a)({key:t.link},t))}))})}(e))),b("div",{className:"col-sm-4"},b("p",{className:"mbr-text mbr-fonts-style display-7 header"},"Support"),b("ul",{className:"list-group list-group-flush"},function(t){return t.map(function(t,e){return b("li",{key:e,className:"list-group-item footer-menu-item"},x[t].map(function(t){return b(g,Object(r.a)({key:t.link},t))}))})}(n))))),b("div",{className:"footer-socials-container"},b("div",{className:"footer-container"},b(f,null),b("div",{className:"social-container"},function(t){return t.map(function(t,e){return b("div",{key:e,className:"soc-item"},k[t].map(function(t){return b(v,Object(r.a)({key:t.link},t))}))})}(a)))))}},ttDY:function(t,e,n){t.exports=n("+iuc")},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xvv9:function(t,e,n){n("cHUd")("Set")}},[["vlRD",0,1]]]);