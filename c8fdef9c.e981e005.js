(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{338:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(411)),l=n(415),c=n(416),o={title:"redis_list",type:"output",status:"stable",categories:["Services"]},s={unversionedId:"components/outputs/redis_list",id:"components/outputs/redis_list",isDocsHomePage:!1,title:"redis_list",description:"\x3c!--",source:"@site/docs/components/outputs/redis_list.md",slug:"/components/outputs/redis_list",permalink:"/docs/components/outputs/redis_list",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/redis_list.md",version:"current",sidebar:"docs",previous:{title:"redis_hash",permalink:"/docs/components/outputs/redis_hash"},next:{title:"redis_pubsub",permalink:"/docs/components/outputs/redis_pubsub"}},b=[{value:"Performance",id:"performance",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>url</code>",id:"url",children:[]},{value:"<code>kind</code>",id:"kind",children:[]},{value:"<code>master</code>",id:"master",children:[]},{value:"<code>tls</code>",id:"tls",children:[]},{value:"<code>tls.enabled</code>",id:"tlsenabled",children:[]},{value:"<code>tls.skip_cert_verify</code>",id:"tlsskip_cert_verify",children:[]},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",children:[]},{value:"<code>tls.client_certs</code>",id:"tlsclient_certs",children:[]},{value:"<code>tls.client_certs[].cert</code>",id:"tlsclient_certscert",children:[]},{value:"<code>tls.client_certs[].key</code>",id:"tlsclient_certskey",children:[]},{value:"<code>tls.client_certs[].cert_file</code>",id:"tlsclient_certscert_file",children:[]},{value:"<code>tls.client_certs[].key_file</code>",id:"tlsclient_certskey_file",children:[]},{value:"<code>key</code>",id:"key",children:[]},{value:"<code>max_in_flight</code>",id:"max_in_flight",children:[]}]}],p={toc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Pushes messages onto the end of a Redis list (which is created if it doesn't\nalready exist) using the RPUSH command."),Object(r.b)(l.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"common",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Common config fields, showing default values\noutput:\n  redis_list:\n    url: tcp://localhost:6379\n    key: benthos_list\n    max_in_flight: 1\n"))),Object(r.b)(c.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\noutput:\n  redis_list:\n    url: tcp://localhost:6379\n    kind: simple\n    master: ""\n    tls:\n      enabled: false\n      skip_cert_verify: false\n      root_cas_file: ""\n      client_certs: []\n    key: benthos_list\n    max_in_flight: 1\n')))),Object(r.b)("p",null,"The field ",Object(r.b)("inlineCode",{parentName:"p"},"key")," supports\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions"),", allowing\nyou to create a unique key for each message."),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"This output benefits from sending multiple messages in flight in parallel for\nimproved performance. You can tune the max number of in flight messages with the\nfield ",Object(r.b)("inlineCode",{parentName:"p"},"max_in_flight"),"."),Object(r.b)("h2",{id:"fields"},"Fields"),Object(r.b)("h3",{id:"url"},Object(r.b)("inlineCode",{parentName:"h3"},"url")),Object(r.b)("p",null,"The URL of the target Redis server. Database is optional and is supplied as the URL path. ",Object(r.b)("inlineCode",{parentName:"p"},"tcp")," scheme is the same as ",Object(r.b)("inlineCode",{parentName:"p"},"redis")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"tcp://localhost:6379"'),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nurl: :6397\n\nurl: localhost:6397\n\nurl: redis://localhost:6379\n\nurl: redis://localhost:6379/1\n\nurl: redis://localhost:6379/1,redis://localhost:6380/1\n")),Object(r.b)("h3",{id:"kind"},Object(r.b)("inlineCode",{parentName:"h3"},"kind")),Object(r.b)("p",null,"Specifies a simple, cluster-aware, or failover-aware redis client."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"simple"'),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nkind: simple\n\nkind: cluster\n\nkind: failover\n")),Object(r.b)("h3",{id:"master"},Object(r.b)("inlineCode",{parentName:"h3"},"master")),Object(r.b)("p",null,"Name of the redis master when ",Object(r.b)("inlineCode",{parentName:"p"},"kind")," is ",Object(r.b)("inlineCode",{parentName:"p"},"failover")),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nmaster: mymaster\n")),Object(r.b)("h3",{id:"tls"},Object(r.b)("inlineCode",{parentName:"h3"},"tls")),Object(r.b)("p",null,"Custom TLS settings can be used to override system defaults."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(r.b)("h3",{id:"tlsenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.enabled")),Object(r.b)("p",null,"Whether custom TLS settings are enabled."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"bool"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(r.b)("h3",{id:"tlsskip_cert_verify"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.skip_cert_verify")),Object(r.b)("p",null,"Whether to skip server side certificate verification."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"bool"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(r.b)("h3",{id:"tlsroot_cas_file"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.root_cas_file")),Object(r.b)("p",null,"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nroot_cas_file: ./root_cas.pem\n")),Object(r.b)("h3",{id:"tlsclient_certs"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.client_certs")),Object(r.b)("p",null,"A list of client certificates to use. For each certificate either the fields ",Object(r.b)("inlineCode",{parentName:"p"},"cert")," and ",Object(r.b)("inlineCode",{parentName:"p"},"key"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"cert_file")," and ",Object(r.b)("inlineCode",{parentName:"p"},"key_file")," should be specified, but not both."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"array"),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nclient_certs:\n  - cert: foo\n    key: bar\n\nclient_certs:\n  - cert_file: ./example.pem\n    key_file: ./example.key\n")),Object(r.b)("h3",{id:"tlsclient_certscert"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].cert")),Object(r.b)("p",null,"A plain text certificate to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"tlsclient_certskey"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].key")),Object(r.b)("p",null,"A plain text certificate key to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"tlsclient_certscert_file"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].cert_file")),Object(r.b)("p",null,"The path to a certificate to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"tlsclient_certskey_file"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].key_file")),Object(r.b)("p",null,"The path of a certificate key to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"key"},Object(r.b)("inlineCode",{parentName:"h3"},"key")),Object(r.b)("p",null,"The key for each message, function interpolations can be optionally used to create a unique key per message.\nThis field supports ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions"),"."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"benthos_list"'),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Examples\n\nkey: benthos_list\n\nkey: ${!meta("kafka_key")}\n\nkey: ${!json("doc.id")}\n\nkey: ${!count("msgs")}\n')),Object(r.b)("h3",{id:"max_in_flight"},Object(r.b)("inlineCode",{parentName:"h3"},"max_in_flight")),Object(r.b)("p",null,"The maximum number of messages to have in flight at a given time. Increase this to improve throughput."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"1"),"  "))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},413:function(e,t,n){"use strict";var a=n(0),i=n(414);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},415:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(413),l=n(412),c=n(56),o=n.n(c),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(r.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(c),h=j[0],y=j[1],v=a.Children.toArray(e.children);if(null!=u){var _=f[u];null!=_&&_!==h&&p.some((function(e){return e.value===_}))&&y(_)}var g=function(e){y(e),null!=u&&O(u,e)},N=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},416:function(e,t,n){"use strict";var a=n(3),i=n(0),r=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),t)}}}]);