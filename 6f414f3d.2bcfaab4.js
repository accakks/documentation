(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{235:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(411)),c=n(415),s=n(416),i={title:"jmespath",type:"processor",status:"stable",categories:["Mapping"]},l={unversionedId:"components/processors/jmespath",id:"components/processors/jmespath",isDocsHomePage:!1,title:"jmespath",description:"\x3c!--",source:"@site/docs/components/processors/jmespath.md",slug:"/components/processors/jmespath",permalink:"/docs/components/processors/jmespath",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/processors/jmespath.md",version:"current",sidebar:"docs",previous:{title:"insert_part",permalink:"/docs/components/processors/insert_part"},next:{title:"jq",permalink:"/docs/components/processors/jq"}},p=[{value:"Fields",id:"fields",children:[{value:"<code>query</code>",id:"query",children:[]},{value:"<code>parts</code>",id:"parts",children:[]}]},{value:"Examples",id:"examples",children:[]}],b={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Executes a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://jmespath.org/"}),"JMESPath query")," on JSON documents and replaces\nthe message with the resulting document."),Object(o.b)(c.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"common",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\njmespath:\n  query: ""\n'))),Object(o.b)(s.a,{value:"advanced",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\njmespath:\n  query: ""\n  parts: []\n')))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Try out Bloblang")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For better performance and improved capabilities try out native Benthos mapping with the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/bloblang"}),"bloblang processor"),"."))),Object(o.b)("p",null,"It is possible to create boolean queries with JMESPath, in order to filter\nmessages with boolean queries please instead use the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/conditions/jmespath"}),Object(o.b)("inlineCode",{parentName:"a"},"jmespath"))," condition."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"query"},Object(o.b)("inlineCode",{parentName:"h3"},"query")),Object(o.b)("p",null,"The JMESPath query to apply to messages."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(o.b)("h3",{id:"parts"},Object(o.b)("inlineCode",{parentName:"h3"},"parts")),Object(o.b)("p",null,"An optional array of message indexes of a batch that the processor should apply to.\nIf left empty all messages are processed. This field is only applicable when\nbatching messages ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"at the input level"),"."),Object(o.b)("p",null,"Indexes can be negative, and if so the part will be selected from the end\ncounting backwards starting from -1."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"array"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(c.a,{defaultValue:"Mapping",values:[{label:"Mapping",value:"Mapping"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"Mapping",mdxType:"TabItem"},Object(o.b)("p",null,"When receiving JSON documents of the form:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "locations": [\n    {"name": "Seattle", "state": "WA"},\n    {"name": "New York", "state": "NY"},\n    {"name": "Bellevue", "state": "WA"},\n    {"name": "Olympia", "state": "WA"}\n  ]\n}\n')),Object(o.b)("p",null,"We could collapse the location names from the state of Washington into a field ",Object(o.b)("inlineCode",{parentName:"p"},"Cities"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"Cities": "Bellevue, Olympia, Seattle"}\n')),Object(o.b)("p",null,"With the following config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  processors:\n    - jmespath:\n        query: \"locations[?state == 'WA'].name | sort(@) | {Cities: join(', ', @)}\"\n")))))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},413:function(e,t,n){"use strict";var a=n(0),r=n(414);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(413),c=n(412),s=n(56),i=n.n(s),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,b=e.values,u=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,j=d.setTabGroupChoices,O=Object(a.useState)(s),h=O[0],v=O[1],g=a.Children.toArray(e.children);if(null!=u){var y=f[u];null!=y&&y!==h&&b.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=u&&j(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},416:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);