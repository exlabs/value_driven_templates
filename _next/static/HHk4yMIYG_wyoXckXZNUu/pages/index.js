(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+a34":function(e){e.exports=JSON.parse('[{"username":"john.doe","name":"John Doe","img":"https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}]')},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},"1iz9":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("ODXe"),i=n("vgmO"),o=n.n(i),a=n("q1tI"),c=n.n(a),l=function(){var e=function(){return{width:o.a.innerWidth,height:o.a.innerHeight}},t=c.a.useState(e),n=Object(r.a)(t,2),i=n[0],a=n[1],l=c.a.useState({isMobile:!1,isDesktop:!1,isTablet:!1}),s=Object(r.a)(l,2),u=s[0],p=s[1];return c.a.useEffect((function(){function t(){a(e())}return o.a.addEventListener("resize",t),function(){return o.a.removeEventListener("resize",t)}}),[]),c.a.useEffect((function(){i.width<=768?p({isMobile:!0,isDesktop:!1,isTablet:!1}):i.width>=768&&i.width<=1100?p({isMobile:!1,isDesktop:!1,isTablet:!0}):p({isMobile:!1,isDesktop:!0,isTablet:!1})}),[i.width]),u}},ODXe:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){i=!0,o=l}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return r}))},QeBL:function(e,t,n){"use strict";n.r(t);var r=n("rePB");function i(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=n("q1tI"),a=n.n(o),c=n("fV/m"),l=n("vOnD"),s=l.b.section.withConfig({displayName:"home-containerstyles__Home",componentId:"sc-1nprwnm-0"})(["padding:10px ",";& > .header-container{margin-top:40px;}& .article-list--big{margin-top:30px;}"],(function(e){return e.theme.padding.small})),u=n("QsUe"),p=n("wx14"),f=l.b.article.withConfig({displayName:"article-thumbnailstyles__StyledArticleThumbnail",componentId:"sc-16swbc2-0"})(["display:flex;flex-direction:column;box-shadow:0px 3px 6px rgba(0,0,0,0.2);border-radius:4px;max-width:450px;"]),d=l.b.div.withConfig({displayName:"article-thumbnailstyles__ThumbnailContent",componentId:"sc-16swbc2-1"})(["padding:30px 10px 20px;& > .article-title{margin:0 0 10px;font-size:21px;text-transform:uppercase;}& > .article-date{font-size:14px;font-weight:300;}& > .article-description{font-size:17px;padding:0;margin:10px 0 20px;}"]),m=l.b.div.withConfig({displayName:"article-thumbnailstyles__ThumbnailImage",componentId:"sc-16swbc2-2"})(["background-size:cover;background-position:center;width:100%;min-height:200px;max-height:40%;border-top-left-radius:4px;border-top-right-radius:4px;position:relative;& > .category{position:absolute;left:50%;transform:translateX(-50%);bottom:-15px;background-color:rgba(4,74,175,0.9);color:",";padding:5px 20px;border-radius:4px;font-size:16px;}"],(function(e){return e.theme.color.white})),h=l.b.div.withConfig({displayName:"article-thumbnailstyles__ThumbnailFooter",componentId:"sc-16swbc2-3"})(["display:flex;justify-content:space-between;align-items:center;"]),b=l.b.a.withConfig({displayName:"article-thumbnailstyles__ThumbnailButton",componentId:"sc-16swbc2-4"})(["background-color:",";color:",";text-decoration:none;padding:7px 30px;font-size:14px;font-weight:500;border-radius:4px;box-shadow:0px 3px 6px rgba(0,0,0,0.2);"],(function(e){return e.theme.color.red}),(function(e){return e.theme.color.white})),g=n("YFqc"),y=n.n(g),v=n("mYo8"),w=n("+a34"),x=a.a.createElement,k=function(e){var t=w.find((function(t){return t.username===e.author})),n=e.title,r=e.description,i=e.category,o=e.imageUrl,a=e.publishDate,c=e.url;return x(f,{className:"article-thumbnail"},x(m,{style:{backgroundImage:'url("'.concat(o,'")')}},x("div",{className:"category"},i)),x(d,null,x("h3",{className:"article-title"},n),x("div",{className:"article-date"},a.toDateString()),x("p",{className:"article-description"},r),x(h,null,x(v.a,t),x(y.a,{href:c},x(b,{href:c},"See details")))))},O=n("1iz9"),_=l.b.div.withConfig({displayName:"article-liststyles__MobileList",componentId:"sc-17o4md0-0"})(["display:flex;flex-direction:column;align-items:center;& > .article-thumbnail{max-width:90%;}& > .article-thumbnail{margin-bottom:20px;}& > .article-thumbnail:last-child{margin-bottom:0;}"]),j=l.b.div.withConfig({displayName:"article-liststyles__DesktopList",componentId:"sc-17o4md0-1"})(["display:flex;flex-wrap:wrap;& > .article-thumbnail{min-width:32%;max-width:32%;margin:0 1% 1%;}"]),N=a.a.createElement,E=function(e){var t=e.articles,n=N(a.a.Fragment,null,t.map((function(e,t){return N(k,Object(p.a)({key:"article-".concat(t)},e))}))),r=Object(O.a)().isMobile;return N(a.a.Fragment,null,r?N(_,{className:"article-list--small"},n):N(j,{className:"article-list--big"},n))},D=l.b.section.withConfig({displayName:"headerstyles__HeaderContainer",componentId:"c96k2x-0"})(["padding:10px ",";@media (min-width:","){height:calc(100vh - 112px);}"],(function(e){return e.theme.padding.small}),(function(e){return e.theme.deviceBreakpoint.desktop})),C=Object(l.b)(u.a).withConfig({displayName:"headerstyles__StyledContainer",componentId:"c96k2x-1"})(["display:flex;justify-content:space-between;align-items:center;"]),I=l.b.div.withConfig({displayName:"headerstyles__TextContainer",componentId:"c96k2x-2"})(["width:40%;color:",";& > .title{font-size:49px;margin:0;}& > .sub-title{margin:0;margin-top:5px;font-weight:500;font-size:21px;}& > .additional-info{display:block;margin:40px 0 50px;font-weight:500;max-width:85%;&::before{content:'';display:inline-block;margin-right:10px;height:2px;width:30px;background-color:",";margin-bottom:5px;}}& > .special-link{display:inline-block;}"],(function(e){return e.theme.color.black}),(function(e){return e.theme.color.black})),P=l.b.img.withConfig({displayName:"headerstyles__HeaderImage",componentId:"c96k2x-3"})(["width:60%;"]),S=n("ng6f"),T=a.a.createElement,z=function(){return T(D,{className:"header-container"},T(C,null,T(I,null,T("h2",{className:"title"},"Value Driven Engineering"),T("h3",{className:"sub-title"},"Powered by Exlabs"),T("p",{className:"additional-info"},"We deliver high-level consultancy & flexible, complex data-driven software solutions for the companies of the future"),T(S.a,{href:"#",label:"Explore Resources"})),T(P,{alt:"Header",src:"".concat("/value_driven_templates","/header-img.svg")})))},M=a.a.createElement,L=function(e){var t=e.articles,n=Object(O.a)().isMobile;return M(s,null,!n&&M(z,null),M(u.a,null,M(E,{articles:t})))},R=a.a.createElement;function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.default=function(){var e=a.a.useMemo((function(){return c.sort((function(e,t){return Number(new Date(t.updatedAt))-Number(new Date(e.updatedAt))})).map((function(e){var t=e.updatedAt,n=e.fileName;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i(e,["updatedAt","fileName"]),{publishDate:new Date(t),url:"/articles/".concat(n)})}))}),[]);return R(L,{articles:e})}},QsUe:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=n("vOnD").b.div.withConfig({displayName:"containerstyles__Container",componentId:"sc-16wrb8n-0"})(["max-width:1440px;margin:0 auto;"])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),i=n("W8MJ"),o=n("7W2i"),a=n("a1gu"),c=n("Nsbk");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var s=n("TqRt"),u=n("284h");t.__esModule=!0,t.default=void 0;var p,f=u(n("q1tI")),d=n("QmWs"),m=n("g/15"),h=s(n("nOHt"));function b(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var g=new Map,y=window.IntersectionObserver,v={};function w(){return p||(y?p=new y((function(e){e.forEach((function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),g.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){o(s,e);var t,n=(t=s,function(){var e,n=c(t);if(l()){var r=c(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function s(e){var t;return r(this,s),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(i,o){if(r&&i===t&&o===n)return r;var a=e(i,o);return t=i,n=o,r=a,a}}((function(e,t){return{href:b(e),as:t?b(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,i=n.target;if("A"!==r||!(i&&"_self"!==i||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),a=o.href,c=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(a)){var l=window.location.pathname;a=(0,d.resolve)(l,a),c=c?(0,d.resolve)(l,c):a,e.preventDefault();var s=t.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](a,c,{shallow:t.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return i(s,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,i=(0,d.resolve)(e,n);return[i,r?(0,d.resolve)(e,r):i]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),v[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),g.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}g.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),v[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,i=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var o=f.Children.only(t),a={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=i||r),f.default.cloneElement(o,a)}}]),s}(f.Component);t.default=x},"fV/m":function(e){e.exports=JSON.parse('[{"fileName":"architecture-decision-record","title":"Architecture Decision Record","description":"Learn how to document important architectural decisions in your development team.","category":"Architecture","imageUrl":"/articles/architecture-decision-record/adr-img.jpeg","author":"john.doe","createdAt":"2020-04-21T06:59:40.101Z","updatedAt":"2020-04-21T06:59:40.101Z"}]')},mYo8:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),i=n.n(r),o=n("vOnD").b.div.withConfig({displayName:"authorstyles__AuthorContainer",componentId:"sc-1f30oc4-0"})(["display:flex;align-items:center;& > .author__img{width:30px;height:30px;background-position:center;background-size:cover;border-radius:50%;background-color:",";}& > .author__name{margin-left:10px;font-weight:500;font-size:14px;}"],(function(e){return e.theme.color.primary})),a=i.a.createElement,c=function(e){var t=e.name,n=e.img;return a(o,null,a("div",{className:"author__img",style:{backgroundImage:'url("'.concat(n,'")')}}),a("div",{className:"author__name"},t))}},ng6f:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),i=n.n(r),o=n("YFqc"),a=n.n(o),c=n("vOnD"),l=n("vXWQ"),s={primary:l.a.color.primary,red:l.a.color.red},u={primary:l.a.color["dark-primary"],red:l.a.color["dark-red"]},p=c.b.a.attrs((function(e){var t=e.color;return{color:void 0===t?"primary":t}})).withConfig({displayName:"special-linkstyles__StyledLink",componentId:"rjluy4-0"})(["background-color:",";color:",";text-decoration:none;padding:10px 20px;font-size:",";font-weight:500;border-radius:",";transition:",";&:hover{background-color:",";}"],(function(e){return s[e.color]}),(function(e){return e.theme.color.white}),(function(e){return e.theme.fontSize.medium}),(function(e){return e.theme.defaultRadius}),(function(e){return e.theme.transitionValue("background-color")}),(function(e){return u[e.color]})),f=i.a.createElement,d=function(e){var t=e.color,n=void 0===t?"primary":t,r=e.target,o=void 0===r?"self":r,c=e.label,l=e.href;return f(a.a,{href:l},f(i.a.Fragment,null,"self"===o&&f(p,{className:"special-link",color:n,href:l},c),"blank"===o&&f(p,{className:"special-link",color:n,href:l,target:"_blank",rel:"noopener noreferrer"},c)))}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vXWQ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={color:{primary:"#044aaf","dark-primary":"#03399e",red:"#ff3e5b",white:"#ffffff","dark-red":"#ee2d4a",black:"#3D3B3C"},fontFamily:{primary:"Montserrat",secondary:"Open Sans"},padding:{small:"20px",medium:"40px",big:"60px"},fontSize:{big:"31px",medium:"17px",small:"14px"},deviceBreakpoint:{mobile:"768px",tablet:"1100px",desktop:"1200px"},defaultRadius:"4px",transitionValue:function(e){return"".concat(e," 0.3s ease")}}},vgmO:function(e,t,n){(function(t){var n;n="undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},e.exports=n}).call(this,n("yLpj"))},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["/EDR",0,1,2,3]]]);