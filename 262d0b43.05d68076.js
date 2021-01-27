(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(411)),c=n(415),i=n(416),l={title:"json",type:"processor",status:"deprecated"},s={unversionedId:"components/processors/json",id:"components/processors/json",isDocsHomePage:!1,title:"json",description:"\x3c!--",source:"@site/docs/components/processors/json.md",slug:"/components/processors/json",permalink:"/docs/components/processors/json",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/processors/json.md",version:"current",sidebar:"docs",previous:{title:"hash_sample",permalink:"/docs/components/processors/hash_sample"},next:{title:"lambda",permalink:"/docs/components/processors/lambda"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>operator</code>",id:"operator",children:[]},{value:"<code>path</code>",id:"path",children:[]},{value:"<code>value</code>",id:"value",children:[]},{value:"<code>parts</code>",id:"parts",children:[]}]},{value:"Alternatives",id:"alternatives",children:[]}],b={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"DEPRECATED")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This component is deprecated and will be removed in the next major version release. Please consider moving onto ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#alternatives"}),"alternative components"),"."))),Object(o.b)(c.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"common",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\njson:\n  operator: clean\n  path: ""\n  value: ""\n'))),Object(o.b)(i.a,{value:"advanced",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\njson:\n  operator: clean\n  path: ""\n  value: ""\n  parts: []\n')))),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"operator"},Object(o.b)("inlineCode",{parentName:"h3"},"operator")),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#operators"}),"operator")," to apply to messages."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'"clean"'),Object(o.b)("br",{parentName:"p"}),"\n","Options: ",Object(o.b)("inlineCode",{parentName:"p"},"append"),", ",Object(o.b)("inlineCode",{parentName:"p"},"clean"),", ",Object(o.b)("inlineCode",{parentName:"p"},"copy"),", ",Object(o.b)("inlineCode",{parentName:"p"},"delete"),", ",Object(o.b)("inlineCode",{parentName:"p"},"explode"),", ",Object(o.b)("inlineCode",{parentName:"p"},"flatten"),", ",Object(o.b)("inlineCode",{parentName:"p"},"flatten_array"),", ",Object(o.b)("inlineCode",{parentName:"p"},"fold_number_array"),", ",Object(o.b)("inlineCode",{parentName:"p"},"fold_string_array"),", ",Object(o.b)("inlineCode",{parentName:"p"},"move"),", ",Object(o.b)("inlineCode",{parentName:"p"},"select"),", ",Object(o.b)("inlineCode",{parentName:"p"},"set"),", ",Object(o.b)("inlineCode",{parentName:"p"},"split"),"."),Object(o.b)("h3",{id:"path"},Object(o.b)("inlineCode",{parentName:"h3"},"path")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/field_paths"}),"dot path")," specifying the target within the document to the apply the chosen operator to."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\npath: foo.bar\n\npath: .\n\npath: some_array.0.id\n")),Object(o.b)("h3",{id:"value"},Object(o.b)("inlineCode",{parentName:"h3"},"value")),Object(o.b)("p",null,"A value to use with the chosen operator (sometimes not applicable). This is a generic field that can be any type."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nvalue: foo\n\nvalue: ${!metadata:kafka_key}\n\nvalue: false\n\nvalue: 10\n\nvalue:\n  key: ${!metadata:kafka_key}\n  topic: ${!metadata:kafka_topic}\n")),Object(o.b)("h3",{id:"parts"},Object(o.b)("inlineCode",{parentName:"h3"},"parts")),Object(o.b)("p",null,"An optional array of message indexes of a batch that the processor should apply to.\nIf left empty all messages are processed. This field is only applicable when\nbatching messages ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"at the input level"),"."),Object(o.b)("p",null,"Indexes can be negative, and if so the part will be selected from the end\ncounting backwards starting from -1."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"array"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(o.b)("h2",{id:"alternatives"},"Alternatives"),Object(o.b)("p",null,"All functionality of this processor has been superseded by the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/bloblang"}),"bloblang")," processor."))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},s),{},{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},413:function(e,t,n){"use strict";var a=n(0),r=n(414);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(413),c=n(412),i=n(56),l=n.n(i),s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(i),v=j[0],h=j[1],y=a.Children.toArray(e.children);if(null!=u){var g=f[u];null!=g&&g!==v&&b.some((function(e){return e.value===g}))&&h(g)}var N=function(e){h(e),null!=u&&O(u,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},416:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);