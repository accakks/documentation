(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{344:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(411)),c=t(415),o=t(416),b={title:"kinesis_balanced",type:"input",status:"deprecated",categories:["Services","AWS"]},l={unversionedId:"components/inputs/kinesis_balanced",id:"components/inputs/kinesis_balanced",isDocsHomePage:!1,title:"kinesis_balanced",description:"\x3c!--",source:"@site/docs/components/inputs/kinesis_balanced.md",slug:"/components/inputs/kinesis_balanced",permalink:"/docs/components/inputs/kinesis_balanced",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/inputs/kinesis_balanced.md",version:"current",sidebar:"docs",previous:{title:"kafka_balanced",permalink:"/docs/components/inputs/kafka_balanced"},next:{title:"tcp",permalink:"/docs/components/inputs/tcp"}},d=[{value:"Alternatives",id:"alternatives",children:[{value:"Metadata",id:"metadata",children:[]}]},{value:"Fields",id:"fields",children:[{value:"<code>stream</code>",id:"stream",children:[]},{value:"<code>dynamodb_table</code>",id:"dynamodb_table",children:[]},{value:"<code>dynamodb_billing_mode</code>",id:"dynamodb_billing_mode",children:[]},{value:"<code>dynamodb_read_provision</code>",id:"dynamodb_read_provision",children:[]},{value:"<code>dynamodb_write_provision</code>",id:"dynamodb_write_provision",children:[]},{value:"<code>start_from_oldest</code>",id:"start_from_oldest",children:[]},{value:"<code>region</code>",id:"region",children:[]},{value:"<code>endpoint</code>",id:"endpoint",children:[]},{value:"<code>credentials</code>",id:"credentials",children:[]},{value:"<code>credentials.profile</code>",id:"credentialsprofile",children:[]},{value:"<code>credentials.id</code>",id:"credentialsid",children:[]},{value:"<code>credentials.secret</code>",id:"credentialssecret",children:[]},{value:"<code>credentials.token</code>",id:"credentialstoken",children:[]},{value:"<code>credentials.role</code>",id:"credentialsrole",children:[]},{value:"<code>credentials.role_external_id</code>",id:"credentialsrole_external_id",children:[]},{value:"<code>batching</code>",id:"batching",children:[]},{value:"<code>batching.count</code>",id:"batchingcount",children:[]},{value:"<code>batching.byte_size</code>",id:"batchingbyte_size",children:[]},{value:"<code>batching.period</code>",id:"batchingperiod",children:[]},{value:"<code>batching.check</code>",id:"batchingcheck",children:[]},{value:"<code>batching.processors</code>",id:"batchingprocessors",children:[]}]}],s={toc:d};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"DEPRECATED")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This component is deprecated and will be removed in the next major version release. Please consider moving onto ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#alternatives"}),"alternative components"),"."))),Object(r.b)("p",null,"Receives messages from a Kinesis stream and automatically balances shards across\nconsumers."),Object(r.b)(c.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"common",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\ninput:\n  kinesis_balanced:\n    stream: ""\n    dynamodb_table: ""\n    start_from_oldest: true\n    region: eu-west-1\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n'))),Object(r.b)(o.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\ninput:\n  kinesis_balanced:\n    stream: ""\n    dynamodb_table: ""\n    dynamodb_billing_mode: ""\n    dynamodb_read_provision: 0\n    dynamodb_write_provision: 0\n    start_from_oldest: true\n    region: eu-west-1\n    endpoint: ""\n    credentials:\n      profile: ""\n      id: ""\n      secret: ""\n      token: ""\n      role: ""\n      role_external_id: ""\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n      processors: []\n')))),Object(r.b)("h2",{id:"alternatives"},"Alternatives"),Object(r.b)("p",null,"This input is being replaced with the shiny new ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/inputs/aws_kinesis"}),Object(r.b)("inlineCode",{parentName:"a"},"aws_kinesis")," input"),", which has improved features, consider trying it out instead."),Object(r.b)("h3",{id:"metadata"},"Metadata"),Object(r.b)("p",null,"This input adds the following metadata fields to each message:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"- kinesis_shard\n- kinesis_partition_key\n- kinesis_sequence_number\n")),Object(r.b)("p",null,"You can access these metadata fields using\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#metadata"}),"function interpolation"),"."),Object(r.b)("h2",{id:"fields"},"Fields"),Object(r.b)("h3",{id:"stream"},Object(r.b)("inlineCode",{parentName:"h3"},"stream")),Object(r.b)("p",null,"The Kinesis stream to consume from."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"dynamodb_table"},Object(r.b)("inlineCode",{parentName:"h3"},"dynamodb_table")),Object(r.b)("p",null,"A DynamoDB table to use for offset storage."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"dynamodb_billing_mode"},Object(r.b)("inlineCode",{parentName:"h3"},"dynamodb_billing_mode")),Object(r.b)("p",null,"A billing mode to set for the offset DynamoDB table."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"dynamodb_read_provision"},Object(r.b)("inlineCode",{parentName:"h3"},"dynamodb_read_provision")),Object(r.b)("p",null,"The read capacity of the offset DynamoDB table."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(r.b)("h3",{id:"dynamodb_write_provision"},Object(r.b)("inlineCode",{parentName:"h3"},"dynamodb_write_provision")),Object(r.b)("p",null,"The write capacity of the offset DynamoDB table."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(r.b)("h3",{id:"start_from_oldest"},Object(r.b)("inlineCode",{parentName:"h3"},"start_from_oldest")),Object(r.b)("p",null,"Whether to consume from the oldest message when an offset does not yet exist for the stream."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"bool"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"  "),Object(r.b)("h3",{id:"region"},Object(r.b)("inlineCode",{parentName:"h3"},"region")),Object(r.b)("p",null,"The AWS region to target."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"eu-west-1"'),"  "),Object(r.b)("h3",{id:"endpoint"},Object(r.b)("inlineCode",{parentName:"h3"},"endpoint")),Object(r.b)("p",null,"Allows you to specify a custom endpoint for the AWS API."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentials"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials")),Object(r.b)("p",null,"Optional manual configuration of AWS credentials to use. More information can be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/aws"}),"in this document"),"."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(r.b)("h3",{id:"credentialsprofile"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.profile")),Object(r.b)("p",null,"A profile from ",Object(r.b)("inlineCode",{parentName:"p"},"~/.aws/credentials")," to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentialsid"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.id")),Object(r.b)("p",null,"The ID of credentials to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentialssecret"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.secret")),Object(r.b)("p",null,"The secret for the credentials being used."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentialstoken"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.token")),Object(r.b)("p",null,"The token for the credentials being used, required when using short term credentials."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentialsrole"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.role")),Object(r.b)("p",null,"A role ARN to assume."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentialsrole_external_id"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.role_external_id")),Object(r.b)("p",null,"An external ID to provide when assuming a role."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"batching"},Object(r.b)("inlineCode",{parentName:"h3"},"batching")),Object(r.b)("p",null,"Allows you to configure a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"batching policy"),"."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Examples\n\nbatching:\n  byte_size: 5000\n  count: 0\n  period: 1s\n\nbatching:\n  count: 10\n  period: 1s\n\nbatching:\n  check: this.contains("END BATCH")\n  count: 0\n  period: 1m\n')),Object(r.b)("h3",{id:"batchingcount"},Object(r.b)("inlineCode",{parentName:"h3"},"batching.count")),Object(r.b)("p",null,"A number of messages at which the batch should be flushed. If ",Object(r.b)("inlineCode",{parentName:"p"},"0")," disables count based batching."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(r.b)("h3",{id:"batchingbyte_size"},Object(r.b)("inlineCode",{parentName:"h3"},"batching.byte_size")),Object(r.b)("p",null,"An amount of bytes at which the batch should be flushed. If ",Object(r.b)("inlineCode",{parentName:"p"},"0")," disables size based batching."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(r.b)("h3",{id:"batchingperiod"},Object(r.b)("inlineCode",{parentName:"h3"},"batching.period")),Object(r.b)("p",null,"A period in which an incomplete batch should be flushed regardless of its size."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nperiod: 1s\n\nperiod: 1m\n\nperiod: 500ms\n")),Object(r.b)("h3",{id:"batchingcheck"},Object(r.b)("inlineCode",{parentName:"h3"},"batching.check")),Object(r.b)("p",null,"A ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/bloblang/about/"}),"Bloblang query")," that should return a boolean value indicating whether a message should end a batch."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Examples\n\ncheck: this.type == "end_of_transaction"\n')),Object(r.b)("h3",{id:"batchingprocessors"},Object(r.b)("inlineCode",{parentName:"h3"},"batching.processors")),Object(r.b)("p",null,"A list of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/about"}),"processors")," to apply to a batch as it is flushed. This allows you to aggregate and archive the batch however you see fit. Please note that all resulting messages are flushed as a single batch, therefore splitting the batch into smaller batches using these processors is a no-op."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"array"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nprocessors:\n  - archive:\n      format: lines\n\nprocessors:\n  - archive:\n      format: json_array\n\nprocessors:\n  - merge_json: {}\n")))}p.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),d=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=d(t),u=a,m=s["".concat(c,".").concat(u)]||s[u]||p[u]||r;return t?i.a.createElement(m,o(o({ref:n},l),{},{components:t})):i.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=u;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=t[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},412:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},413:function(e,n,t){"use strict";var a=t(0),i=t(414);n.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,n,t){"use strict";var a=t(0),i=Object(a.createContext)(void 0);n.a=i},415:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(413),c=t(412),o=t(56),b=t.n(o),l=37,d=39;n.a=function(e){var n=e.lazy,t=e.block,o=e.defaultValue,s=e.values,p=e.groupId,u=e.className,m=Object(r.a)(),O=m.tabGroupChoices,j=m.setTabGroupChoices,h=Object(a.useState)(o),f=h[0],g=h[1],y=a.Children.toArray(e.children);if(null!=p){var N=O[p];null!=N&&N!==f&&s.some((function(e){return e.value===N}))&&g(N)}var v=function(e){g(e),null!=p&&j(p,e)},_=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},u)},s.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===n,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":f===n}),key:n,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case d:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(_,e.target,e)},onFocus:function(){return v(n)},onClick:function(){v(n)}},t)}))),n?Object(a.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},416:function(e,n,t){"use strict";var a=t(3),i=t(0),r=t.n(i);n.a=function(e){var n=e.children,t=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:i}),n)}}}]);