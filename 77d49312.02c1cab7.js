(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{250:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(411)),c=n(415),l=n(416),s={title:"while",type:"processor",status:"stable",categories:["Composition"]},i={unversionedId:"components/processors/while",id:"components/processors/while",isDocsHomePage:!1,title:"while",description:"\x3c!--",source:"@site/docs/components/processors/while.md",slug:"/components/processors/while",permalink:"/docs/components/processors/while",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/processors/while.md",version:"current",sidebar:"docs",previous:{title:"unarchive",permalink:"/docs/components/processors/unarchive"},next:{title:"workflow",permalink:"/docs/components/processors/workflow"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>at_least_once</code>",id:"at_least_once",children:[]},{value:"<code>max_loops</code>",id:"max_loops",children:[]},{value:"<code>check</code>",id:"check",children:[]},{value:"<code>processors</code>",id:"processors",children:[]}]}],p={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"While is a processor that checks a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/bloblang/about/"}),"Bloblang query")," against messages and executes child processors on them for as long as the query resolves to true."),Object(o.b)(c.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"common",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\nwhile:\n  at_least_once: false\n  check: ""\n  processors: []\n'))),Object(o.b)(l.a,{value:"advanced",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\nwhile:\n  at_least_once: false\n  max_loops: 0\n  check: ""\n  processors: []\n')))),Object(o.b)("p",null,"The field ",Object(o.b)("inlineCode",{parentName:"p"},"at_least_once"),", if true, ensures that the child processors are always executed at least one time (like a do .. while loop.)"),Object(o.b)("p",null,"The field ",Object(o.b)("inlineCode",{parentName:"p"},"max_loops"),", if greater than zero, caps the number of loops for a message batch to this value."),Object(o.b)("p",null,"If following a loop execution the number of messages in a batch is reduced to zero the loop is exited regardless of the condition result. If following a loop execution there are more than 1 message batches the query is checked against the first batch only."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"at_least_once"},Object(o.b)("inlineCode",{parentName:"h3"},"at_least_once")),Object(o.b)("p",null,"Whether to always run the child processors at least one time."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"bool"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(o.b)("h3",{id:"max_loops"},Object(o.b)("inlineCode",{parentName:"h3"},"max_loops")),Object(o.b)("p",null,"An optional maximum number of loops to execute. Helps protect against accidentally creating infinite loops."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(o.b)("h3",{id:"check"},Object(o.b)("inlineCode",{parentName:"h3"},"check")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/bloblang/about/"}),"Bloblang query")," that should return a boolean value indicating whether the while loop should execute again."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\ncheck: errored()\n\ncheck: this.urls.unprocessed.length() > 0\n")),Object(o.b)("h3",{id:"processors"},Object(o.b)("inlineCode",{parentName:"h3"},"processors")),Object(o.b)("p",null,"A list of child processors to execute on each loop."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"array"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"[]"),"  "))}b.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},413:function(e,t,n){"use strict";var r=n(0),a=n(414);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},415:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(413),c=n(412),l=n(56),s=n.n(l),i=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(r.useState)(l),j=O[0],v=O[1],y=r.Children.toArray(e.children);if(null!=b){var g=f[b];null!=g&&g!==j&&p.some((function(e){return e.value===g}))&&v(g)}var w=function(e){v(e),null!=b&&h(b,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},416:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);