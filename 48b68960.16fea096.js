(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(411)),s=(n(415),n(416),{title:"split",type:"processor",status:"stable",categories:["Utility"]}),i={unversionedId:"components/processors/split",id:"components/processors/split",isDocsHomePage:!1,title:"split",description:"\x3c!--",source:"@site/docs/components/processors/split.md",slug:"/components/processors/split",permalink:"/docs/components/processors/split",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/processors/split.md",version:"current",sidebar:"docs",previous:{title:"sleep",permalink:"/docs/components/processors/sleep"},next:{title:"sql",permalink:"/docs/components/processors/sql"}},c=[{value:"Fields",id:"fields",children:[{value:"<code>size</code>",id:"size",children:[]},{value:"<code>byte_size</code>",id:"byte_size",children:[]}]}],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Breaks message batches (synonymous with multiple part messages) into smaller batches. The size of the resulting batches are determined either by a discrete size or, if the field ",Object(o.b)("inlineCode",{parentName:"p"},"byte_size")," is non-zero, then by total size in bytes (which ever limit is reached first)."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Config fields, showing default values\nsplit:\n  size: 1\n  byte_size: 0\n")),Object(o.b)("p",null,"This processor is for breaking batches down into smaller ones. In order to break a single message out into multiple messages use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/processors/unarchive"}),Object(o.b)("inlineCode",{parentName:"a"},"unarchive")," processor"),"."),Object(o.b)("p",null,"If there is a remainder of messages after splitting a batch the remainder is also sent as a single batch. For example, if your target size was 10, and the processor received a batch of 95 message parts, the result would be 9 batches of 10 messages followed by a batch of 5 messages."),Object(o.b)("p",null,"The functionality of this processor depends on being applied across messages\nthat are batched. You can find out more about batching ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"in this doc"),"."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"size"},Object(o.b)("inlineCode",{parentName:"h3"},"size")),Object(o.b)("p",null,"The target number of messages."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"1"),"  "),Object(o.b)("h3",{id:"byte_size"},Object(o.b)("inlineCode",{parentName:"h3"},"byte_size")),Object(o.b)("p",null,"An optional target of total message bytes."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"0"),"  "))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(s,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},413:function(e,t,n){"use strict";var r=n(0),a=n(414);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},415:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(413),s=n(412),i=n(56),c=n.n(i),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,b=e.groupId,f=e.className,d=Object(o.a)(),m=d.tabGroupChoices,h=d.setTabGroupChoices,O=Object(r.useState)(i),y=O[0],v=O[1],g=r.Children.toArray(e.children);if(null!=b){var j=m[b];null!=j&&j!==y&&p.some((function(e){return e.value===j}))&&v(j)}var w=function(e){v(e),null!=b&&h(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},416:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);