(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{TBcf:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),o=n.n(i),a=n("Dx0c"),r=n("RLpo"),c=n("1iz9"),l=n("TuaF"),s=o.a.createElement,d=function(){var e=Object(c.a)().isMobile;return s(a.a,{imageUrl:"".concat("/value_driven_templates","/how-to-contribute/header.svg")},s(r.c,null,"Sharing is caring."),e&&s(r.a,{alt:"Header",src:"".concat("/value_driven_templates","/how-to-contribute/header.svg")}),s(r.b,null,"Want to share your knowledge? You can learn here how."),s(l.a,{href:"#how-to-contribute-content",label:"I\u2019m ready to share my knowledge!"}))},m=n("vOnD"),u=n("QsUe"),h=(m.c.h2.withConfig({displayName:"how-to-contribute-containerstyles__PageTitle",componentId:"xecm5c-0"})(["font-size:60px;margin-bottom:30px;"]),Object(m.c)(u.a).withConfig({displayName:"how-to-contribute-containerstyles__StyledContainer",componentId:"xecm5c-1"})(["display:flex;flex-direction:column;padding:0 ",";& > .styled-section:last-child{margin-bottom:20px;& > .section-number{&::after{display:none;}}}"],(function(e){return e.theme.padding.small}))),p=n("ODXe"),f=m.c.section.withConfig({displayName:"information-sectionstyles__StyledSection",componentId:"xkgp05-0"})(["width:100%;display:flex;justify-content:space-between;align-items:center;min-height:100vh;@media (max-width:","){flex-direction:row-reverse;align-items:flex-start;min-height:auto;padding-bottom:60px;}"],(function(e){return e.theme.deviceBreakpoint.mobile})),w=m.c.div.withConfig({displayName:"information-sectionstyles__TextContainer",componentId:"xkgp05-1"})(["flex:1;display:flex;flex-direction:column;justify-content:center;color:",";@media (max-width:","){flex:3;}@media (max-width:","){width:100%;justify-content:flex-start;}"],(function(e){return e.theme.color.black}),(function(e){return e.theme.deviceBreakpoint.tablet}),(function(e){return e.theme.deviceBreakpoint.tablet})),x=m.c.h2.withConfig({displayName:"information-sectionstyles__SectionTitle",componentId:"xkgp05-2"})(["font-size:49px;margin-bottom:20px;@media (max-width:","){font-size:34px;}@media (max-width:","){font-size:23px;}"],(function(e){return e.theme.deviceBreakpoint.tablet}),(function(e){return e.theme.deviceBreakpoint.mobile})),g=m.c.p.withConfig({displayName:"information-sectionstyles__SectionDescription",componentId:"xkgp05-3"})(["font-size:21px;@media (max-width:","){font-size:18px;}@media (max-width:","){font-size:15px;}"],(function(e){return e.theme.deviceBreakpoint.tablet}),(function(e){return e.theme.deviceBreakpoint.mobile})),b=m.c.img.withConfig({displayName:"information-sectionstyles__SectionImage",componentId:"xkgp05-4"})(["width:40%;@media (max-width:","){margin-bottom:30px;width:60%;}"],(function(e){return e.theme.deviceBreakpoint.mobile})),v=m.c.h3.attrs((function(e){var t=e.containerHeight,n=e.active;return{containerHeight:t,active:void 0!==n&&n}})).withConfig({displayName:"information-sectionstyles__SectionNumber",componentId:"xkgp05-5"})(["top:-300px;min-width:100px;min-height:100px;max-width:100px;max-height:100px;text-align:center;line-height:100px;color:",";background-color:",";border-radius:50%;margin:0 20px;position:relative;font-size:37px;@media (max-width:","){min-width:70px;min-height:70px;max-width:70px;max-height:70px;font-size:30px;line-height:70px;}@media (max-width:","){margin-left:0;top:0;min-width:50px;min-height:50px;max-width:50px;max-height:50px;font-size:23px;line-height:50px;}"," @keyframes setColor{0%{background:#ebebeb;}100%{background:#044aaf;}}&::after{content:'';display:block;width:6px;height:",";background-color:",";position:absolute;top:100px;left:50%;transform:translateX(-50%);transition:height 1s ease;@media (max-width:","){top:70px;height:",";}@media (max-width:","){top:50px;width:3px;height:",";}","}"],(function(e){return e.theme.color.white}),(function(e){var t=e.theme;return e.active?t.color.primary:"#EBEBEB"}),(function(e){return e.theme.deviceBreakpoint.tablet}),(function(e){return e.theme.deviceBreakpoint.mobile}),(function(e){return e.active&&"\n  animation: setColor 1.5s 1 0s linear;\n  "}),(function(e){return"".concat(e.active?e.containerHeight-100:0,"px")}),(function(e){var t=e.theme;return e.active?t.color.primary:"#EBEBEB"}),(function(e){return e.theme.deviceBreakpoint.tablet}),(function(e){return"".concat(e.active?e.containerHeight-70:0,"px")}),(function(e){return e.theme.deviceBreakpoint.tablet}),(function(e){return"".concat(e.active?e.containerHeight-50:0,"px")}),(function(e){return e.active&&"\n  animation: setColor 1.5s 1 0s linear;\n  "})),y=o.a.createElement,k=function(e){var t=e.title,n=e.description,i=e.image,a=e.sectionNumber,r=e.id,l=Object(c.a)().isMobile,s=o.a.createRef(),d=o.a.useState(0),m=Object(p.a)(d,2),u=m[0],h=m[1],k=o.a.useState(!1),_=Object(p.a)(k,2),B=_[0],E=_[1],N=o.a.useCallback((function(){var e;h(null===(e=s.current)||void 0===e?void 0:e.offsetHeight)}),[s]),C=o.a.useCallback((function(){var e;!B&&window.pageYOffset-a*(u/2)>(null===(e=s.current)||void 0===e?void 0:e.getBoundingClientRect().top)&&E(!0)}),[s,B,u,a]);return o.a.useEffect((function(){s.current&&h(s.current.offsetHeight)}),[s]),o.a.useEffect((function(){return window.addEventListener("resize",N),function(){return window.removeEventListener("resize",N)}}),[N]),o.a.useEffect((function(){return window.addEventListener("scroll",C),function(){return window.removeEventListener("scroll",C)}}),[C]),y(f,{ref:s,className:"styled-section",id:r},y(w,null,y(x,null,t),l&&y(b,{alt:"Section",src:"".concat("/value_driven_templates","/how-to-contribute/").concat(i,".svg")}),y(g,null,n)),y(v,{active:B,containerHeight:u,className:"section-number"},a),!l&&y(b,{alt:"Section",src:"".concat("/value_driven_templates","/how-to-contribute/").concat(i,".svg")}))},_=o.a.createElement,B=function(){return _(o.a.Fragment,null,_(d,null),_(h,null,_(k,{id:"how-to-contribute-content",title:"Create the content",description:"Inside src/content/articles directory create a new markdown file with the selected filename. Inside markdown file, You can write the content of Your article, remember article title, description, and image, will be added in the next step.",image:"workspace",sectionNumber:1}),_(k,{title:"Add article metadata",description:"Go to src/content/articles.json and add a new object with proper metadata for Your article, where fileName is just a plain name without extension of Your article content markdown file, imageUrl is a static file taken from the public directory or dynamic URL. Lastly, add Your nickname in the author field.",image:"content",sectionNumber:2}),_(k,{title:"Describe yourself",description:"If it is Your first time adding content, please go to src/content/authors.json and add a new entry without Your username used in article metadata, Your full name, and URL to Your avatar image.",image:"author",sectionNumber:3}),_(k,{title:"Pull Request",description:"That's it! Well done, now You can create a new Pull Request and wait for approval!",image:"approve",sectionNumber:4})))},E=o.a.createElement;t.default=function(){return E(B,null)}},c9on:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/how-to-contribute",function(){return n("TBcf")}])}},[["c9on",0,1,2,4]]]);