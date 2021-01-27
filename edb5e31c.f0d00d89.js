(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{383:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(411)),c=(t(415),t(416),{title:"batch",type:"processor",status:"deprecated"}),i={unversionedId:"components/processors/batch",id:"components/processors/batch",isDocsHomePage:!1,title:"batch",description:"\x3c!--",source:"@site/docs/components/processors/batch.md",slug:"/components/processors/batch",permalink:"/docs/components/processors/batch",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/processors/batch.md",version:"current",sidebar:"docs",previous:{title:"xml",permalink:"/docs/components/processors/xml"},next:{title:"conditional",permalink:"/docs/components/processors/conditional"}},s=[],l={toc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"DEPRECATED")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This component is deprecated and will be removed in the next major version release. Please consider moving onto ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#alternatives"}),"alternative components"),"."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# Config fields, showing default values\nbatch:\n  byte_size: 0\n  condition:\n    all: {}\n    and: []\n    any: {}\n    bloblang: ""\n    bounds_check:\n      max_part_size: 1073741824\n      max_parts: 100\n      min_part_size: 1\n      min_parts: 1\n    check_field:\n      condition: {}\n      parts: []\n      path: ""\n    check_interpolation:\n      condition: {}\n      value: ""\n    count:\n      arg: 100\n    jmespath:\n      part: 0\n      query: ""\n    json:\n      arg: ""\n      operator: exists\n      part: 0\n      path: ""\n    json_schema:\n      part: 0\n      schema: ""\n      schema_path: ""\n    metadata:\n      arg: ""\n      key: ""\n      operator: equals_cs\n      part: 0\n    not: {}\n    number:\n      arg: 0\n      operator: equals\n      part: 0\n    or: []\n    processor_failed:\n      part: 0\n    resource: ""\n    static: false\n    text:\n      arg: ""\n      operator: equals_cs\n      part: 0\n    type: static\n    xor: []\n  count: 0\n  period: ""\n')),Object(o.b)("p",null,"DEPRECATED: This processor is no longer supported and has been replaced with\nimproved batching mechanisms. For more information about batching in Benthos\nplease check out ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"this document"),"."),Object(o.b)("p",null,"This processor is scheduled to be removed in Benthos V4"))}u.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,d=p["".concat(c,".").concat(b)]||p[b]||m[b]||o;return t?a.a.createElement(d,i(i({ref:n},l),{},{components:t})):a.a.createElement(d,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},412:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},413:function(e,n,t){"use strict";var r=t(0),a=t(414);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},415:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(413),c=t(412),i=t(56),s=t.n(i),l=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,i=e.defaultValue,p=e.values,m=e.groupId,b=e.className,d=Object(o.a)(),f=d.tabGroupChoices,h=d.setTabGroupChoices,v=Object(r.useState)(i),O=v[0],j=v[1],y=r.Children.toArray(e.children);if(null!=m){var g=f[m];null!=g&&g!==O&&p.some((function(e){return e.value===g}))&&j(g)}var w=function(e){j(e),null!=m&&h(m,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===n,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(x,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},416:function(e,n,t){"use strict";var r=t(3),a=t(0),o=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:a}),n)}}}]);