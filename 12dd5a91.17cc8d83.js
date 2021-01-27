(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(411)),i=(n(415),n(416),{title:"dynamic",type:"output",status:"stable",categories:["Utility"]}),c={unversionedId:"components/outputs/dynamic",id:"components/outputs/dynamic",isDocsHomePage:!1,title:"dynamic",description:"\x3c!--",source:"@site/docs/components/outputs/dynamic.md",slug:"/components/outputs/dynamic",permalink:"/docs/components/outputs/dynamic",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/dynamic.md",version:"current",sidebar:"docs",previous:{title:"drop_on",permalink:"/docs/components/outputs/drop_on"},next:{title:"elasticsearch",permalink:"/docs/components/outputs/elasticsearch"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>outputs</code>",id:"outputs",children:[]},{value:"<code>prefix</code>",id:"prefix",children:[]},{value:"<code>timeout</code>",id:"timeout",children:[]},{value:"<code>max_in_flight</code>",id:"max_in_flight",children:[]}]}],l={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A special broker type where the outputs are identified by unique labels and can\nbe created, changed and removed during runtime via a REST API."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# Config fields, showing default values\noutput:\n  dynamic:\n    outputs: {}\n    prefix: ""\n    timeout: 5s\n    max_in_flight: 1\n')),Object(o.b)("p",null,"The broker pattern used is always ",Object(o.b)("inlineCode",{parentName:"p"},"fan_out"),", meaning each message will\nbe delivered to each dynamic output."),Object(o.b)("p",null,"To GET a JSON map of output identifiers with their current uptimes use the\n'/outputs' endpoint."),Object(o.b)("p",null,"To perform CRUD actions on the outputs themselves use POST, DELETE, and GET\nmethods on the ",Object(o.b)("inlineCode",{parentName:"p"},"/outputs/{output_id}")," endpoint. When using POST the\nbody of the request should be a YAML configuration for the output, if the output\nalready exists it will be changed."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"outputs"},Object(o.b)("inlineCode",{parentName:"h3"},"outputs")),Object(o.b)("p",null,"A map of outputs to statically create."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"object"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"{}"),"  "),Object(o.b)("h3",{id:"prefix"},Object(o.b)("inlineCode",{parentName:"h3"},"prefix")),Object(o.b)("p",null,"A path prefix for HTTP endpoints that are registered."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(o.b)("h3",{id:"timeout"},Object(o.b)("inlineCode",{parentName:"h3"},"timeout")),Object(o.b)("p",null,"The server side timeout of HTTP requests."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'"5s"'),"  "),Object(o.b)("h3",{id:"max_in_flight"},Object(o.b)("inlineCode",{parentName:"h3"},"max_in_flight")),Object(o.b)("p",null,"The maximum number of messages to dispatch across child outputs at any given time."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"1"),"  "))}s.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},413:function(e,t,n){"use strict";var r=n(0),a=n(414);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},415:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(413),i=n(412),c=n(56),u=n.n(c),l=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,h=Object(r.useState)(c),y=h[0],j=h[1],v=r.Children.toArray(e.children);if(null!=b){var g=f[b];null!=g&&g!==y&&p.some((function(e){return e.value===g}))&&j(g)}var w=function(e){j(e),null!=b&&O(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},416:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);