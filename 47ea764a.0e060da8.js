(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(411)),c=n(415),l=n(416),o={title:"redis_pubsub",type:"output",status:"stable",categories:["Services"]},s={unversionedId:"components/outputs/redis_pubsub",id:"components/outputs/redis_pubsub",isDocsHomePage:!1,title:"redis_pubsub",description:"\x3c!--",source:"@site/docs/components/outputs/redis_pubsub.md",slug:"/components/outputs/redis_pubsub",permalink:"/docs/components/outputs/redis_pubsub",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/redis_pubsub.md",version:"current",sidebar:"docs",previous:{title:"redis_list",permalink:"/docs/components/outputs/redis_list"},next:{title:"redis_streams",permalink:"/docs/components/outputs/redis_streams"}},b=[{value:"Performance",id:"performance",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>url</code>",id:"url",children:[]},{value:"<code>kind</code>",id:"kind",children:[]},{value:"<code>master</code>",id:"master",children:[]},{value:"<code>tls</code>",id:"tls",children:[]},{value:"<code>tls.enabled</code>",id:"tlsenabled",children:[]},{value:"<code>tls.skip_cert_verify</code>",id:"tlsskip_cert_verify",children:[]},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",children:[]},{value:"<code>tls.client_certs</code>",id:"tlsclient_certs",children:[]},{value:"<code>tls.client_certs[].cert</code>",id:"tlsclient_certscert",children:[]},{value:"<code>tls.client_certs[].key</code>",id:"tlsclient_certskey",children:[]},{value:"<code>tls.client_certs[].cert_file</code>",id:"tlsclient_certscert_file",children:[]},{value:"<code>tls.client_certs[].key_file</code>",id:"tlsclient_certskey_file",children:[]},{value:"<code>channel</code>",id:"channel",children:[]},{value:"<code>max_in_flight</code>",id:"max_in_flight",children:[]}]}],p={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Publishes messages through the Redis PubSub model. It is not possible to\nguarantee that messages have been received."),Object(i.b)(c.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"common",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Common config fields, showing default values\noutput:\n  redis_pubsub:\n    url: tcp://localhost:6379\n    channel: benthos_chan\n    max_in_flight: 1\n"))),Object(i.b)(l.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\noutput:\n  redis_pubsub:\n    url: tcp://localhost:6379\n    kind: simple\n    master: ""\n    tls:\n      enabled: false\n      skip_cert_verify: false\n      root_cas_file: ""\n      client_certs: []\n    channel: benthos_chan\n    max_in_flight: 1\n')))),Object(i.b)("p",null,"This output will interpolate functions within the channel field, you\ncan find a list of functions ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"here"),"."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"This output benefits from sending multiple messages in flight in parallel for\nimproved performance. You can tune the max number of in flight messages with the\nfield ",Object(i.b)("inlineCode",{parentName:"p"},"max_in_flight"),"."),Object(i.b)("h2",{id:"fields"},"Fields"),Object(i.b)("h3",{id:"url"},Object(i.b)("inlineCode",{parentName:"h3"},"url")),Object(i.b)("p",null,"The URL of the target Redis server. Database is optional and is supplied as the URL path. ",Object(i.b)("inlineCode",{parentName:"p"},"tcp")," scheme is the same as ",Object(i.b)("inlineCode",{parentName:"p"},"redis")),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"tcp://localhost:6379"'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nurl: :6397\n\nurl: localhost:6397\n\nurl: redis://localhost:6379\n\nurl: redis://localhost:6379/1\n\nurl: redis://localhost:6379/1,redis://localhost:6380/1\n")),Object(i.b)("h3",{id:"kind"},Object(i.b)("inlineCode",{parentName:"h3"},"kind")),Object(i.b)("p",null,"Specifies a simple, cluster-aware, or failover-aware redis client."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"simple"'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nkind: simple\n\nkind: cluster\n\nkind: failover\n")),Object(i.b)("h3",{id:"master"},Object(i.b)("inlineCode",{parentName:"h3"},"master")),Object(i.b)("p",null,"Name of the redis master when ",Object(i.b)("inlineCode",{parentName:"p"},"kind")," is ",Object(i.b)("inlineCode",{parentName:"p"},"failover")),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nmaster: mymaster\n")),Object(i.b)("h3",{id:"tls"},Object(i.b)("inlineCode",{parentName:"h3"},"tls")),Object(i.b)("p",null,"Custom TLS settings can be used to override system defaults."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(i.b)("h3",{id:"tlsenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.enabled")),Object(i.b)("p",null,"Whether custom TLS settings are enabled."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"tlsskip_cert_verify"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.skip_cert_verify")),Object(i.b)("p",null,"Whether to skip server side certificate verification."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"tlsroot_cas_file"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.root_cas_file")),Object(i.b)("p",null,"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nroot_cas_file: ./root_cas.pem\n")),Object(i.b)("h3",{id:"tlsclient_certs"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs")),Object(i.b)("p",null,"A list of client certificates to use. For each certificate either the fields ",Object(i.b)("inlineCode",{parentName:"p"},"cert")," and ",Object(i.b)("inlineCode",{parentName:"p"},"key"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"cert_file")," and ",Object(i.b)("inlineCode",{parentName:"p"},"key_file")," should be specified, but not both."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"array"),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nclient_certs:\n  - cert: foo\n    key: bar\n\nclient_certs:\n  - cert_file: ./example.pem\n    key_file: ./example.key\n")),Object(i.b)("h3",{id:"tlsclient_certscert"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].cert")),Object(i.b)("p",null,"A plain text certificate to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"tlsclient_certskey"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].key")),Object(i.b)("p",null,"A plain text certificate key to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"tlsclient_certscert_file"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].cert_file")),Object(i.b)("p",null,"The path to a certificate to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"tlsclient_certskey_file"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].key_file")),Object(i.b)("p",null,"The path of a certificate key to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"channel"},Object(i.b)("inlineCode",{parentName:"h3"},"channel")),Object(i.b)("p",null,"The channel to publish messages to.\nThis field supports ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"benthos_chan"'),"  "),Object(i.b)("h3",{id:"max_in_flight"},Object(i.b)("inlineCode",{parentName:"h3"},"max_in_flight")),Object(i.b)("p",null,"The maximum number of messages to have in flight at a given time. Increase this to improve throughput."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"number"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"1"),"  "))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},413:function(e,t,n){"use strict";var a=n(0),r=n(414);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(413),c=n(412),l=n(56),o=n.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(l),h=j[0],y=j[1],v=a.Children.toArray(e.children);if(null!=u){var _=f[u];null!=_&&_!==h&&p.some((function(e){return e.value===_}))&&y(_)}var g=function(e){y(e),null!=u&&O(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},416:function(e,t,n){"use strict";var a=n(3),r=n(0),i=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);