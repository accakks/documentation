(window.webpackJsonp=window.webpackJsonp||[]).push([[332],{406:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(411),o=n(22),l=n(26),i=n(423),s=n(3),u=n(7),p=n(412),m=n(419),d=n(413),b=n(444),y=n(445),f=n(443),h=n(418),g=n(420),v=n(451),j=function(e){return r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},O=n(446),k=n(112),E=n.n(k);var C=function e(t,n){return"link"===t.type?Object(m.isSamePath)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function N(e){var t,n,c,o=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=o.items,y=o.label,f=C(o,m),h=(n=f,c=Object(a.useRef)(n),Object(a.useEffect)((function(){c.current=n}),[n]),c.current),g=Object(a.useState)((function(){return!!i&&(!f&&o.collapsed)})),v=g[0],j=g[1],O=Object(a.useRef)(null),k=Object(a.useState)(void 0),N=k[0],x=k[1],T=function(e){var t;void 0===e&&(e=!0),x(e?(null===(t=O.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(a.useEffect)((function(){f&&!h&&v&&j(!1)}),[f,h,v]);var S=Object(a.useCallback)((function(e){e.preventDefault(),N||T(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[N]);return 0===b.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:y},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[E.a.menuLinkText]=!i,t)),onClick:i?S:void 0,href:i?"#!":void 0},d),y),r.a.createElement("ul",{className:"menu__list",ref:O,style:{height:N},onTransitionEnd:function(){v||T(!1)}},b.map((function(e){return r.a.createElement(P,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function x(e){var t=e.item,n=e.onItemClick,a=e.activePath,c=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),o=t.href,l=t.label,i=C(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(h.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:o},Object(g.a)(o)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},c),l))}function P(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(x,e)}}var T=function(e){var t,n,c=e.path,o=e.sidebar,l=e.sidebarCollapsible,i=void 0===l||l,s=e.onCollapse,u=e.isHidden,h=Object(a.useState)(!1),g=h[0],k=h[1],C=Object(m.useThemeConfig)(),N=C.navbar.hideOnScroll,x=C.hideableSidebar,T=Object(d.a)().isAnnouncementBarClosed,S=Object(f.a)().scrollY;Object(b.a)(g);var w=Object(y.a)();return Object(a.useEffect)((function(){w===y.b.desktop&&k(!1)}),[w]),r.a.createElement("div",{className:Object(p.a)(E.a.sidebar,(t={},t[E.a.sidebarWithHideableNavbar]=N,t[E.a.sidebarHidden]=u,t))},N&&r.a.createElement(v.a,{tabIndex:-1,className:E.a.sidebarLogo}),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,(n={"menu--show":g},n[E.a.menuWithAnnouncementBar]=!T&&0===S,n))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!g)}},g?r.a.createElement("span",{className:Object(p.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(O.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},o.map((function(e){return r.a.createElement(P,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:i,activePath:c})})))),x&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(p.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:s},r.a.createElement(j,{className:E.a.collapseSidebarButtonIcon})))},S=n(433),w=n(438),_=n(425),I=n(113),D=n.n(I);function L(e){var t,n,l,s,u=e.currentDocRoute,d=e.versionMetadata,b=e.children,y=Object(o.default)(),f=y.siteConfig,h=y.isClient,g=d.pluginId,v=d.permalinkToSidebar,O=d.docsSidebars,k=d.version,E=v[u.path],C=O[E],N=Object(a.useState)(!1),x=N[0],P=N[1],w=Object(a.useState)(!1),_=w[0],I=w[1],L=Object(a.useCallback)((function(){_&&I(!1),P(!x)}),[_]);return r.a.createElement(i.a,{key:h,searchMetadatas:{version:k,tag:Object(m.docVersionSearchTag)(g,k)}},r.a.createElement("div",{className:D.a.docPage},C&&r.a.createElement("div",{className:Object(p.a)(D.a.docSidebarContainer,(t={},t[D.a.docSidebarContainerHidden]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(D.a.docSidebarContainer)&&x&&I(!0)},role:"complementary"},r.a.createElement(T,{key:E,sidebar:C,path:u.path,sidebarCollapsible:null===(n=null===(l=f.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===n||n,onCollapse:L,isHidden:_}),_&&r.a.createElement("div",{className:D.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:L,onClick:L},r.a.createElement(j,null))),r.a.createElement("main",{className:D.a.docMainContainer},r.a.createElement("div",{className:Object(p.a)("container padding-vert--lg",D.a.docItemWrapper,(s={},s[D.a.docItemWrapperEnhanced]=x,s))},r.a.createElement(c.a,{components:S.a},b)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,c=t.find((function(e){return Object(_.matchPath)(a.pathname,e)}));return c?r.a.createElement(L,{currentDocRoute:c,versionMetadata:n},Object(l.a)(t)):r.a.createElement(w.default,e)}},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||c;return n?r.a.createElement(b,l(l({ref:t},s),{},{components:n})):r.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},427:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(23),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c=n(0),o={Prism:a.a,theme:r};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var b=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,c=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(c.style=o.plain),void 0!==r&&(c.style=void 0!==c.style?i({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,c=t.getThemeDict(t.props);if(void 0!==c){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return c[n[0]];var o=a?{display:"inline-block"}:{},l=n.map((function(e){return c[e]}));return Object.assign.apply(Object,[o].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,c=e.token,o=i({},d(e,["key","className","style","token"]),{className:"token "+c.types.join(" "),children:c.content,style:t.getStyleForToken(c),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,c=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],c=0,o=0,l=[],i=[l];o>-1;){for(;(c=a[o]++)<r[o];){var m=void 0,d=t[o],b=n[o][c];if("string"==typeof b?(d=o>0?d:["plain"],m=b):(d=p(d,b.type),b.alias&&(d=p(d,b.alias)),m=b.content),"string"==typeof m){var y=m.split(s),f=y.length;l.push({types:d,content:y[0]});for(var h=1;h<f;h++)u(l),i.push(l=[]),l.push({types:d,content:y[h]})}else o++,t.push(d),n.push(m),a.push(0),r.push(m.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return u(l),i}(void 0!==o?t.tokenize(a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==c?c.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(c.Component);t.a=b},431:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let c=!1;r.rangeCount>0&&(c=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(l){}return n.remove(),c&&(r.removeAllRanges(),r.addRange(c)),a&&a.focus(),o};e.exports=a,e.exports.default=a},432:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,c]=t;if(a&&c){a=parseInt(a),c=parseInt(c);const e=a<c?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(c+=e);for(let t=a;t!==c;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},433:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r),o=n(418),l=n(412),i=n(427),s=n(431),u=n.n(s),p=n(432),m=n.n(p),d={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},b=n(428),y=n(419),f=function(){var e=Object(y.useThemeConfig)().prism,t=Object(b.a)().isDarkTheme,n=e.theme||d,a=e.darkTheme||n;return t?a:n},h=n(60),g=n.n(h),v=/{([\d,-]+)}/,j=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},O=/(?:title=")(.*)(?:")/,k=function(e){var t=e.children,n=e.className,o=e.metastring,s=Object(y.useThemeConfig)().prism,p=Object(r.useState)(!1),d=p[0],b=p[1],h=Object(r.useState)(!1),k=h[0],E=h[1];Object(r.useEffect)((function(){E(!0)}),[]);var C=Object(r.useRef)(null),N=[],x="",P=f(),T=Array.isArray(t)?t.join(""):t;if(o&&v.test(o)){var S=o.match(v)[1];N=m()(S).filter((function(e){return e>0}))}o&&O.test(o)&&(x=o.match(O)[1]);var w=n&&n.replace(/language-/,"");!w&&s.defaultLanguage&&(w=s.defaultLanguage);var _=T.replace(/\n$/,"");if(0===N.length&&void 0!==w){for(var I,D="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return j(["js","jsBlock"]);case"jsx":case"tsx":return j(["js","jsBlock","jsx"]);case"html":return j(["js","jsBlock","html"]);case"python":case"py":return j(["python"]);default:return j()}}(w),B=T.replace(/\n$/,"").split("\n"),M=0;M<B.length;){var A=M+1,R=B[M].match(L);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=A+",";break;case"highlight-start":I=A;break;case"highlight-end":D+=I+"-"+(A-1)+","}B.splice(M,1)}else M+=1}N=m()(D),_=B.join("\n")}var H=function(){u()(_),b(!0),setTimeout((function(){return b(!1)}),2e3)};return c.a.createElement(i.a,Object(a.a)({},i.b,{key:String(k),theme:P,code:_,language:w}),(function(e){var t,n=e.className,r=e.style,o=e.tokens,i=e.getLineProps,s=e.getTokenProps;return c.a.createElement(c.a.Fragment,null,x&&c.a.createElement("div",{style:r,className:g.a.codeBlockTitle},x),c.a.createElement("div",{className:g.a.codeBlockContent},c.a.createElement("div",{tabIndex:0,className:Object(l.a)(n,g.a.codeBlock,"thin-scrollbar",(t={},t[g.a.codeBlockWithTitle]=x,t))},c.a.createElement("div",{className:g.a.codeBlockLines,style:r},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=i({line:e,key:t});return N.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),c.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return c.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t})))})))})))),c.a.createElement("button",{ref:C,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(g.a.copyButton),onClick:H},d?"Copied":"Copy")))}))},E=n(7),C=(n(61),n(62)),N=n.n(C),x=function(e){return function(t){var n,a=t.id,r=Object(E.a)(t,["id"]),o=Object(y.useThemeConfig)().navbar.hideOnScroll;return a?c.a.createElement(e,r,c.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",(n={},n[N.a.enhancedAnchor]=!o,n)),id:a}),r.children,c.a.createElement("a",{className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):c.a.createElement(e,r)}},P=n(63),T=n.n(P),S={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?c.a.createElement(k,e):c.a.createElement("code",e):t},a:function(e){return c.a.createElement(o.a,e)},pre:function(e){return c.a.createElement("div",Object(a.a)({className:T.a.mdxCodeBlock},e))},h1:x("h1"),h2:x("h2"),h3:x("h3"),h4:x("h4"),h5:x("h5"),h6:x("h6")};t.a=S}}]);