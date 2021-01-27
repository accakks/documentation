(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(7),o=(n(0),n(411)),s=n(415),c=n(416),u={title:"reject",type:"output",status:"beta",categories:["Utility"]},i={unversionedId:"components/outputs/reject",id:"components/outputs/reject",isDocsHomePage:!1,title:"reject",description:"\x3c!--",source:"@site/docs/components/outputs/reject.md",slug:"/components/outputs/reject",permalink:"/docs/components/outputs/reject",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/reject.md",version:"current",sidebar:"docs",previous:{title:"redis_streams",permalink:"/docs/components/outputs/redis_streams"},next:{title:"resource",permalink:"/docs/components/outputs/resource"}},l=[{value:"Examples",id:"examples",children:[]}],p={toc:l};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"BETA: This component is mostly stable but breaking changes could still be made outside of major version releases if a fundamental problem with the component is found."),Object(o.b)("p",null,"Rejects all messages, treating them as though the output destination failed to publish them."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# Config fields, showing default values\noutput:\n  reject: ""\n')),Object(o.b)("p",null,"The routing of messages after this output depends on the type of input it came from. For inputs that support propagating nacks upstream such as AMQP or NATS the message will be nacked. However, for inputs that are sequential such as files or Kafka the messages will simply be reprocessed from scratch."),Object(o.b)("p",null,"If you're still scratching your head as to when this output could be useful check out ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#examples"}),"the examples below"),"."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(s.a,{defaultValue:"Rejecting Failed Messages",values:[{label:"Rejecting Failed Messages",value:"Rejecting Failed Messages"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"Rejecting Failed Messages",mdxType:"TabItem"},Object(o.b)("p",null,"This input is particularly useful for routing messages that have failed during processing, where instead of routing them to some sort of dead letter queue we wish to push the error upstream. We can do this with a switch broker:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"output:\n  switch:\n    cases:\n      - check: '!errored()'\n        output:\n          amqp_1:\n            url: amqps://guest:guest@localhost:5672/\n            target_address: queue:/the_foos\n\n      - output:\n          reject: \"processing failed due to: ${! error() }\"\n")))))}f.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),l=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return n?a.a.createElement(b,c(c({ref:t},i),{},{components:n})):a.a.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},413:function(e,t,n){"use strict";var r=n(0),a=n(414);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},415:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(413),s=n(412),c=n(56),u=n.n(c),i=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,f=e.groupId,m=e.className,b=Object(o.a)(),d=b.tabGroupChoices,h=b.setTabGroupChoices,g=Object(r.useState)(c),j=g[0],v=g[1],y=r.Children.toArray(e.children);if(null!=f){var O=d[f];null!=O&&O!==j&&p.some((function(e){return e.value===O}))&&v(O)}var w=function(e){v(e),null!=f&&h(f,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(s.a)("tabs__item",u.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},416:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);