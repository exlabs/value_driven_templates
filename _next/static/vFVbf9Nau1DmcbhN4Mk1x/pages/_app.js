(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery;return n||o&&(void 0!==i&&i)}t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"3niX":function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,o=n("q1tI");var i=new(((r=n("SevZ"))&&r.__esModule?r:{default:r}).default),a=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return i.computeId(t,n)})).join(" ")};var o=r.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){i.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(o.Component);t.default=a},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),i=r(n("Xuae")),a=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=u;var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var s=0,c=p.length;s<c;s++){var u=p[s];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?i=!1:n.add(u);else{var l=o.props[u],f=r[u]||new Set;f.has(l)?i=!1:(f.add(l),r[u]=f)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var d=i.default();function h(e){var t=e.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}h.rewind=d.rewind,t.default=h},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},B5Ud:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),s=n("Nsbk"),c=n("o0o1");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("TqRt");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=m,t.default=void 0;var p=l(n("q1tI")),f=n("g/15");function d(e){var t,n,r;return c.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.Component,n=e.ctx,o.next=3,c.awrap((0,f.loadGetInitialProps)(t,n));case 3:return r=o.sent,o.abrupt("return",{pageProps:r});case 5:case"end":return o.stop()}}),null,null,null,Promise)}t.AppInitialProps=f.AppInitialProps;var h=function(e){i(c,e);var t,n=(t=c,function(){var e,n=s(t);if(u()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function c(){return r(this,c),n.apply(this,arguments)}return o(c,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,i=e.__N_SSP;return p.default.createElement(n,Object.assign({},r,o||i?{}:{url:m(t)}))}}]),c}(p.default.Component);function m(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=h,h.origGetInitialProps=d,h.getInitialProps=d},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("IlR1")}])},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},IlR1:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(e){return i(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)})(e)}function s(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.r(t),n.d(t,"default",(function(){return be}));var u=n("q1tI"),l=n.n(u),p=n("8Bbg"),f=n.n(p),d=n("8Kt/"),h=n.n(d),m=n("MX0m"),v=n.n(m),y=n("vOnD"),g=y.c.div.withConfig({displayName:"layoutstyles__Layout",componentId:"j1hzp4-0"})(["width:100%;height:100%;min-height:100vh;display:flex;flex-direction:column;justify-content:space-between;"]),_=y.c.div.withConfig({displayName:"layoutstyles__BodyContainer",componentId:"j1hzp4-1"})([""]),b=(y.c.div.attrs((function(e){var t=e.isMobile,n=void 0!==t&&t,r=e.isDesktop;return{isMobile:n,isDesktop:void 0!==r&&r}})).withConfig({displayName:"layoutstyles__LayoutBody",componentId:"j1hzp4-2"})(["padding:",";position:relative;& > .titled-content{position:",";bottom:80px;width:100%;overflow:scroll;height:100%;}"],(function(e){return e.isMobile?"20px 10px":"20px 40px"}),(function(e){return e.isDesktop?"relative":"initial"})),n("1iz9")),w=y.c.div.attrs((function(e){var t=e.isSticky;return{isSticky:void 0!==t&&t}})).withConfig({displayName:"headerstyles__HeaderContainer",componentId:"ffnmp5-0"})(["background-color:",";width:calc(100% - 40px);padding:15px 20px;display:flex;align-items:center;justify-content:space-between;color:#000;animation:none;",""],(function(e){var t=e.theme;return e.isSticky?t.color.primary:"inherit"}),(function(e){return e.isSticky&&"\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: calc(100% - 40px);\n      z-index: 999;\n  "})),S=y.c.div.withConfig({displayName:"headerstyles__MenuContainer",componentId:"ffnmp5-1"})(["& > .menu-btn{background-color:inherit;border:0;outline:none;}"]),x={isVisible:!1},k=l.a.createContext(x),O=function(){var e=l.a.useContext(k);if(!e)throw new Error("useMobileMenuState should be used within on MobileMenuContext");return e},C=n("rePB");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var R,I=function(e,t){switch(t.type){case"mobile-menu/toggle":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(C.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{isVisible:!e.isVisible});default:return e}},N=n("YFqc"),P=n.n(N),T=y.c.a.attrs((function(e){var t=e.themeType;return{themeType:void 0===t?"primary":t}})).withConfig({displayName:"logostyles__LogoLink",componentId:"ui1tly-0"})(["display:flex;align-items:center;text-decoration:none;& > .logo-img{width:30px;height:30px;}& > .logo-separator{width:2px;height:32px;background-color:",";margin:0 10px;}& > .logo-text{font-size:21px;margin:0;color:",";font-weight:700;}"],(function(e){var t=e.theme;return"primary"===e.themeType?t.color.white:t.color.black}),(function(e){var t=e.theme;return"primary"===e.themeType?t.color.white:t.color.black})),E=n("YBcu"),M=l.a.createElement,F=function(e){var t=e.theme,n=void 0===t?"primary":t,r=Object(b.a)().isMobile;return M(P.a,{href:"".concat("/value_driven_templates").concat(E.a.HOME)},M(T,{className:"logo-link",href:"".concat("/value_driven_templates").concat(E.a.HOME),themeType:n},M("img",{className:"logo-img",src:"".concat("/value_driven_templates","/").concat("primary"===n?"logo-small":"logo-small-black",".svg"),alt:"Logo"}),M("span",{className:"logo-separator"}),M("h1",{className:"logo-text"},r?"vde":"value driven engineering")))},z=y.c.button.attrs((function(e){var t=e.open,n=void 0!==t&&t,r=e.themeType;return{open:n,themeType:void 0===r?"primary":r}})).withConfig({displayName:"hamburgerstyles__StyledBurger",componentId:"sc-1suem20-0"})(["background-color:inherit;border:none;outline:none;padding:0;width:2rem;height:2rem;display:flex;flex-direction:column;justify-content:space-around;transform-origin:1px;cursor:pointer;& > div{width:32px;height:4px;background-color:",";border-radius:10px;transition:transform 0.3s ease,opacity 0.3s ease;position:relative;transform-origin:1px;&:first-child{transform:",";}&:nth-child(2){opacity:",";transform:",";}&:nth-child(3){transform:",";}}"],(function(e){var t=e.theme;return"primary"===e.themeType?t.color.white:t.color.black}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"translateX(20px)":"translateX(0)"}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),A=l.a.createElement,B=function(e){var t=e.isOpen,n=e.onClick,r=e.theme;return A(z,{name:"menu-button",open:t,onClick:n,themeType:void 0===r?"primary":r},A("div",null),A("div",null),A("div",null))},D=l.a.createElement,U=function(e){var t=e.isSticky,n=void 0!==t&&t,r=O(),o=r.state.isVisible,i=r.dispatch;return D(w,{isSticky:n},D(F,{theme:n?"primary":"secondary"}),D(S,null,D(B,{isOpen:o,onClick:function(){return i({type:"mobile-menu/toggle"})},theme:n?"primary":"secondary"})))},q=y.c.nav.withConfig({displayName:"menustyles__StyledNav",componentId:"sc-1amfo06-0"})(["width:100%;height:calc(100vh - 63px);border-top:1px solid #ededed;background-color:",";position:sticky;position:-webkit-sticky;top:62px;z-index:999;overflow:hidden;"],(function(e){return e.theme.color.primary})),H=y.c.ul.withConfig({displayName:"menustyles__StyledList",componentId:"sc-1amfo06-1"})(["list-style:none;padding:10px 20px;& > li:last-child{margin-bottom:0;}"]),L=y.c.li.withConfig({displayName:"menustyles__StyledListItem",componentId:"sc-1amfo06-2"})(["border-bottom:1px solid #ffffff;margin-bottom:30px;font-size:19px;padding-bottom:10px;& > a{color:",";text-decoration:none;}"],(function(e){return e.theme.color.white})),W=y.c.li.withConfig({displayName:"menustyles__SpecialListItem",componentId:"sc-1amfo06-3"})(["display:flex;justify-content:center;align-items:center;& > a{padding:10px 20px;background-color:",";color:",";text-decoration:none;border-radius:4px;transition:background-color 0.2s ease;&:hover{background-color:",";}}"],(function(e){return e.theme.color.red}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color["dark-red"]})),Y=l.a.createElement,V=function(){var e=O(),t=e.dispatch,n=e.state.isVisible,r=function(){t({type:"mobile-menu/toggle"})};return Y(l.a.Fragment,null,n&&Y(q,null,Y(H,null,E.b.map((function(e){return Y(L,{onClick:r,key:e.link},Y(P.a,{href:"".concat("/value_driven_templates").concat(e.link)},Y("a",{href:"".concat("/value_driven_templates").concat(e.link)},e.label)))})),Y(W,{onClick:r},Y(P.a,{href:"https://exlabs.com"},Y("a",{rel:"noopener noreferrer",target:"_blank",href:"https://exlabs.com"},"Get in touch"))))))},X={color:{primary:"#044aaf","dark-primary":"#03399e",red:"#ff3e5b",white:"#ffffff","dark-red":"#ee2d4a",black:"#3D3B3C"},fontFamily:{primary:"Montserrat",secondary:"Open Sans"},padding:{small:"20px",medium:"40px",big:"60px"},fontSize:{big:"31px",medium:"17px",small:"14px"},deviceBreakpoint:{mobile:"768px",tablet:"1100px",desktop:"1200px"},defaultRadius:"4px",transitionValue:function(e){return"".concat(e," 0.3s ease")}},J=n("QsUe"),K=y.c.footer.attrs((function(e){var t=e.isMobile;return{isMobile:void 0!==t&&t}})).withConfig({displayName:"footerstyles__StyledFooter",componentId:"th6fdd-0"})(["background:linear-gradient(90deg,#044aaf,#022558);color:",";padding:",";& > .about-container{font-size:",";}& > .copyright{font-size:",";margin-top:5px;}"],(function(e){return e.theme.color.white}),(function(e){return e.isMobile?"15px 20px":"20px 60px"}),(function(e){return e.isMobile?"15px":"19px"}),(function(e){return e.isMobile?"13px":"15px"})),G=Object(y.c)(J.a).withConfig({displayName:"footerstyles__StyledContainer",componentId:"th6fdd-1"})(["display:flex;justify-content:space-between;align-items:center;@media (max-width:","){flex-direction:column;& > .copyright{margin-top:10px;}}"],(function(e){return e.theme.deviceBreakpoint.desktop})),Z=y.c.div.withConfig({displayName:"footerstyles__AboutContainer",componentId:"th6fdd-2"})(["display:flex;align-items:center;& > .title{font-weight:700;margin-right:5px;}& > .link{margin-left:5px;color:",";text-decoration:none;display:flex;align-items:center;& > .logo-img{margin-right:5px;}}"],(function(e){return e.theme.color.white})),Q=l.a.createElement,$=function(){var e=Object(b.a)().isMobile;return Q(K,{isMobile:e},Q(G,null,Q(Z,{className:"about-container"},Q("span",{className:"title"},"Value Driven Engineering")," by",Q("a",{href:"https://exlabs.com",className:"link",rel:"noopener noreferrer",target:"_blank"},Q("img",{className:"logo-img",src:"".concat("/value_driven_templates","/logo-small.svg"),alt:"Logo"}),"exlabs")),Q("div",{className:"copyright"},"Copyright \xa9 2020 EXLABS Ltd.")))},ee=y.c.header.attrs((function(e){var t=e.themeType,n=void 0===t?"primary":t,r=e.isSticky;return{themeType:n,isSticky:void 0!==r&&r}})).withConfig({displayName:"desktop-navigationstyles__NavigationContainer",componentId:"sc-1cr38vd-0"})(["background-color:",";padding:15px ",";"," @keyframes moveDown{from{transform:translateY(-5rem);}to{transform:translateY(0rem);}}"],(function(e){var t=e.theme;return"primary"===e.themeType?t.color.primary:"inherit"}),(function(e){return e.theme.padding.small}),(function(e){return e.isSticky&&"\n      position: fixed;\n      top: 0;\n      left: 0;\n      width: calc(100% - 40px);\n      z-index: 999;\n      animation: moveDown 0.5s ease-in-out;\n  "})),te=Object(y.c)(J.a).withConfig({displayName:"desktop-navigationstyles__StyledContainer",componentId:"sc-1cr38vd-1"})(["display:flex;justify-content:space-between;align-items:center;"]),ne=y.c.nav.withConfig({displayName:"desktop-navigationstyles__StyledNav",componentId:"sc-1cr38vd-2"})([""]),re=y.c.ul.attrs((function(e){var t=e.themeType;return{themeType:void 0===t?"primary":t}})).withConfig({displayName:"desktop-navigationstyles__StyledList",componentId:"sc-1cr38vd-3"})(["list-style:none;display:flex;align-items:center;& .nav-item{margin-right:20px;&__link{color:",";text-decoration:none;font-size:",";font-weight:700;}}& > .nav-item:last-child{margin-right:0;}"],(function(e){var t=e.theme;return"primary"===e.themeType?t.color.white:t.color.black}),(function(e){return e.theme.fontSize.medium})),oe={primary:X.color.primary,red:X.color.red},ie={primary:X.color["dark-primary"],red:X.color["dark-red"]},ae=y.c.a.attrs((function(e){var t=e.color;return{color:void 0===t?"primary":t}})).withConfig({displayName:"special-linkstyles__StyledLink",componentId:"rjluy4-0"})(["background-color:",";color:",";text-decoration:none;padding:10px 20px;font-size:",";font-weight:500;border-radius:",";transition:",";&:hover{background-color:",";}"],(function(e){return oe[e.color]}),(function(e){return e.theme.color.white}),(function(e){return e.theme.fontSize.medium}),(function(e){return e.theme.defaultRadius}),(function(e){return e.theme.transitionValue("background-color")}),(function(e){return ie[e.color]})),se=l.a.createElement,ce=function(e){var t=e.color,n=void 0===t?"primary":t,r=e.target,o=void 0===r?"self":r,i=e.internal,a=void 0!==i&&i,s=e.label,c=e.href,u=se(l.a.Fragment,null,"self"===o&&se(ae,{className:"special-link",color:n,href:c},s),"blank"===o&&se(ae,{className:"special-link",color:n,href:c,target:"_blank",rel:"noopener noreferrer"},s));return se(l.a.Fragment,null,a?se(P.a,{href:c},u):se(l.a.Fragment,null,u))},ue=l.a.createElement,le=function(e){var t=e.theme,n=void 0===t?"primary":t,r=e.isSticky;return ue(ee,{className:"navigation",themeType:n,isSticky:void 0!==r&&r},ue(te,null,ue(F,{theme:n}),ue(ne,null,ue(re,{themeType:n},ue("li",{className:"nav-item"},ue(P.a,{href:"".concat("/value_driven_templates").concat(E.a.ABOUT)},ue("a",{className:"nav-item__link",href:"".concat("/value_driven_templates").concat(E.a.ABOUT)},"About"))),ue("li",{className:"nav-item"},ue(P.a,{href:"".concat("/value_driven_templates").concat(E.a.HOW_TO_CONTRIBUTE)},ue("a",{className:"nav-item__link",href:"".concat("/value_driven_templates").concat(E.a.HOW_TO_CONTRIBUTE)},"How to contribute?"))),ue("li",{className:"nav-item nav-item--primary"},ue(ce,{href:"https://exlabs.com",label:"Get in touch",target:"blank",color:"red"}))))))},pe=n("ODXe");!function(e){e.UP="up",e.DOWN="down"}(R||(R={}));function fe(){var e,t,n=(e=["\nhtml, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video, button {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: none;\n  }\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return fe=function(){return n},n}var de=Object(y.b)(fe()),he=l.a.createElement,me=function(e){var t=e.children,n=Object(b.a)().isMobile,r=O().state.isVisible,o=l.a.useRef(null),i=function(e){var t=e.initialDirection,n=void 0===t?R.DOWN:t,r=e.thresholdPixels,o=e.stickyRef,i=l.a.useState(n),a=Object(pe.a)(i,2),s=a[0],c=a[1],u=l.a.useState(!1),p=Object(pe.a)(u,2),f=p[0],d=p[1];return l.a.useEffect((function(){var e=null!==r&&void 0!==r?r:0,t=0,n=!1,i=function(){Math.abs(window.pageYOffset-t)<e?n=!1:(c(window.pageYOffset>t?R.DOWN:R.UP),d(!!(o.current&&window.pageYOffset>o.current.getBoundingClientRect().top)),t=window.pageYOffset>0?window.pageYOffset:0,n=!1)},a=function(){n||(window.requestAnimationFrame(i),n=!0)};return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}}),[n,r,o]),s===R.UP&&f}({stickyRef:o});return he(g,null,he(v.a,{id:"2400830014"},["html,body{margin:0;padding:0;font-family:'Montserrat','Open Sans',sans-serif;background-color:#f9f9f9;-webkit-overflow-scrolling:touch;}"]),he(de,null),he(y.a,{theme:X},he(l.a.Fragment,null,he(_,null,n?he(l.a.Fragment,null,i&&he("div",{style:{width:"100%",height:"62px"},className:"jsx-2400830014"}),he(U,{isSticky:!!r||i}),he("div",{ref:o,className:"jsx-2400830014"},r&&he(V,null),he("div",{className:"jsx-2400830014"},t))):he("div",{className:"jsx-2400830014"},i&&he("div",{style:{width:"100%",height:"72px"},className:"jsx-2400830014"}),he(le,{theme:i?"primary":"secondary",isSticky:i}),he("div",{ref:o,className:"jsx-2400830014"},t))),he($,null))))},ve=l.a.createElement,ye=function(e){var t=e.children,n=l.a.useReducer(I,x),r=Object(pe.a)(n,2),o=r[0],i=r[1];return ve(k.Provider,{value:{dispatch:i,state:o}},t)},ge=l.a.createElement;function _e(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var be=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(p,e);var t,n,i,a,u=(t=p,function(){var e,n=c(t);if(_e()){var r=c(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return s(this,e)});function p(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),u.apply(this,arguments)}return n=p,(i=[{key:"componentDidMount",value:function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode.removeChild(e)}},{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return ge(l.a.Fragment,null,ge(h.a,null,ge("title",null,"Exlabs | Value Driven Engineering")),ge(ye,null,ge(me,null,ge(t,n))))}}])&&r(n.prototype,i),a&&r(n,a),p}(f.a)},MX0m:function(e,t,n){e.exports=n("3niX")},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||i()}},SevZ:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=i(n("9kyW")),o=i(n("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,a=void 0!==i&&i,s=t.isBrowser,c=void 0===s?"undefined"!==typeof window:s;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:a}),this._sheet.inject(),r&&"boolean"===typeof a&&(this._sheet.setOptimizeForSpeed(a),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var o=String(n),i=t+o;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+o)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,o=e.id;if(r){var i=this.computeId(o,r);return{styleId:i,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,n)]}}return{styleId:this.computeId(o),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=a},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),i=n("W8MJ"),a=n("7W2i"),s=n("a1gu"),c=n("Nsbk"),u=n("RIqP");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var p=n("q1tI"),f=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(u(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(u){a(h,u);var p,d=(p=h,function(){var e,t=c(p);if(l()){var n=c(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function h(e){var i;return r(this,h),i=d.call(this,e),f&&(t.add(o(i)),n(o(i))),i}return i(h,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),i(h,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),h}(p.Component)}},YBcu:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),function(e){e.HOME="/",e.ABOUT="/about",e.HOW_TO_CONTRIBUTE="/how-to-contribute"}(r||(r={}));var o=[{link:r.HOME,label:"Home"},{link:r.ABOUT,label:"About"},{link:r.HOW_TO_CONTRIBUTE,label:"How to contribute?"}]},YFqc:function(e,t,n){e.exports=n("cTJO")},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,c=void 0===s?r:s,u=t.isBrowser,l=void 0===u?"undefined"!==typeof window:u;a(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var p=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=p?p.getAttribute("content"):null}var t,i,s,c=e.prototype;return c.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(a(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];a(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&a(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),s&&n(t,s),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n("8oxB"))},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),i=n("7W2i"),a=n("a1gu"),s=n("Nsbk");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var u=n("TqRt"),l=n("284h");t.__esModule=!0,t.default=void 0;var p,f=l(n("q1tI")),d=n("QmWs"),h=n("g/15"),m=u(n("nOHt"));function v(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var y=new Map,g=window.IntersectionObserver,_={};function b(){return p||(g?p=new g((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){i(u,e);var t,n=(t=u,function(){var e,n=s(t);if(c()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function u(e){var t;return r(this,u),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,i){if(r&&o===t&&i===n)return r;var a=e(o,i);return t=o,n=i,r=a,a}}((function(e,t){return{href:v(e),as:t?v(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=t.formatUrls(t.props.href,t.props.as),a=i.href,s=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var c=window.location.pathname;a=(0,d.resolve)(c,a),s=s?(0,d.resolve)(c,s):a,e.preventDefault();var u=t.props.scroll;null==u&&(u=s.indexOf("#")<0),m.default[t.props.replace?"replace":"push"](a,s,{shallow:t.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,d.resolve)(e,n);return[o,r?(0,d.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),_[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),_[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var i=f.Children.only(t),a={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),f.default.cloneElement(i,a)}}]),u}(f.Component);t.default=w},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[[0,0,1,2,3]]]);