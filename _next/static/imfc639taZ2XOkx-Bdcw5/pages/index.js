(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+a34":function(e){e.exports=JSON.parse('[{"username":"john.doe","name":"John Doe","img":"https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}]')},"/EDR":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("QeBL")}])},QeBL:function(e,t,r){"use strict";r.r(t);var n=r("rePB");function i(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=r("q1tI"),o=r.n(a),c=r("1iz9"),l=r("m7j5"),s=r("wx14"),u=r("vOnD"),p=u.b.article.withConfig({displayName:"article-thumbnailstyles__StyledArticleThumbnail",componentId:"sc-16swbc2-0"})(["display:flex;flex-direction:column;box-shadow:0px 3px 6px rgba(0,0,0,0.2);border-radius:4px;max-width:450px;"]),d=u.b.div.withConfig({displayName:"article-thumbnailstyles__ThumbnailContent",componentId:"sc-16swbc2-1"})(["padding:30px 10px 20px;& > .article-title{margin:0 0 10px;font-size:21px;text-transform:uppercase;}& > .article-date{font-size:14px;font-weight:300;}& > .article-description{font-size:17px;padding:0;margin:10px 0 20px;}"]),m=u.b.div.withConfig({displayName:"article-thumbnailstyles__ThumbnailImage",componentId:"sc-16swbc2-2"})(["background-size:cover;background-position:center;width:100%;min-height:200px;max-height:40%;border-top-left-radius:4px;border-top-right-radius:4px;position:relative;& > .category{position:absolute;left:50%;transform:translateX(-50%);bottom:-15px;background-color:rgba(4,74,175,0.9);color:",";padding:5px 20px;border-radius:4px;font-size:16px;}"],(function(e){return e.theme.color.white})),f=u.b.div.withConfig({displayName:"article-thumbnailstyles__ThumbnailFooter",componentId:"sc-16swbc2-3"})(["display:flex;justify-content:space-between;align-items:center;"]),b=u.b.a.withConfig({displayName:"article-thumbnailstyles__ThumbnailButton",componentId:"sc-16swbc2-4"})(["background-color:",";color:",";text-decoration:none;padding:7px 30px;font-size:14px;font-weight:500;border-radius:4px;box-shadow:0px 3px 6px rgba(0,0,0,0.2);"],(function(e){return e.theme.color.red}),(function(e){return e.theme.color.white})),h=r("YFqc"),g=r.n(h),x=r("mYo8"),w=r("+a34"),y=o.a.createElement,O=function(e){var t=w.find((function(t){return t.username===e.author})),r=e.title,n=e.description,i=e.category,a=e.imageUrl,o=e.publishDate,c=e.url;return y(p,{className:"article-thumbnail"},y(m,{style:{backgroundImage:'url("'.concat(a,'")')}},y("div",{className:"category"},i)),y(d,null,y("h3",{className:"article-title"},r),y("div",{className:"article-date"},o.toDateString()),y("p",{className:"article-description"},n),y(f,null,y(x.a,t),y(g.a,{href:c},y(b,{href:c},"See details")))))},v=u.b.div.withConfig({displayName:"article-liststyles__MobileList",componentId:"sc-17o4md0-0"})(["display:flex;flex-direction:column;align-items:center;& > .article-thumbnail{max-width:90%;}& > .article-thumbnail{margin-bottom:20px;}& > .article-thumbnail:last-child{margin-bottom:0;}"]),_=u.b.div.withConfig({displayName:"article-liststyles__DesktopList",componentId:"sc-17o4md0-1"})(["display:flex;flex-wrap:wrap;& > .article-thumbnail{min-width:32%;max-width:32%;margin:0 1% 1%;}"]),j=o.a.createElement,N=function(e){var t=e.articles,r=j(o.a.Fragment,null,t.map((function(e,t){return j(O,Object(s.a)({key:"article-".concat(t)},e))}))),n=Object(c.a)().isMobile;return j(o.a.Fragment,null,j(n?v:_,null,r))},D=r("E7sC"),P=r("fV/m"),k=o.a.createElement;function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.default=function(){var e=Object(c.a)().isMobile,t=o.a.useMemo((function(){return P.sort((function(e,t){return Number(new Date(t.updatedAt))-Number(new Date(e.updatedAt))})).map((function(e){var t=e.updatedAt,r=e.fileName;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},i(e,["updatedAt","fileName"]),{publishDate:new Date(t),url:"/articles/".concat(r)})}))}),[]);return k(o.a.Fragment,null,!e&&k(D.a,{image:"header-img"}),k(l.c,{isMobile:e},k(N,{articles:t})))}},"fV/m":function(e){e.exports=JSON.parse('[{"fileName":"architecture-decision-record","title":"Architecture Decision Record","description":"Learn how to document important architectural decisions in your development team.","category":"Architecture","imageUrl":"/articles/architecture-decision-record/adr-img.jpeg","author":"john.doe","createdAt":"2020-04-21T06:59:40.101Z","updatedAt":"2020-04-21T06:59:40.101Z"}]')},mYo8:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("q1tI"),i=r.n(n),a=r("vOnD").b.div.withConfig({displayName:"authorstyles__AuthorContainer",componentId:"sc-1f30oc4-0"})(["display:flex;align-items:center;& > .author__img{width:30px;height:30px;background-position:center;background-size:cover;border-radius:50%;background-color:",";}& > .author__name{margin-left:10px;font-weight:500;font-size:14px;}"],(function(e){return e.theme.color.primary})),o=i.a.createElement,c=function(e){var t=e.name,r=e.img;return o(a,null,o("div",{className:"author__img",style:{backgroundImage:'url("'.concat(r,'")')}}),o("div",{className:"author__name"},t))}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},wx14:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))}},[["/EDR",0,1,2,3,4]]]);