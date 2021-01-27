(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(411)),s={title:"Powered Up Workflows",author:"Ashley Jeffs",author_url:"https://github.com/Jeffail",author_image_url:"/img/ash.jpg",description:"Available in v3.26.0",keywords:["benthos","workflows","go","golang","stream processor","enrichments"],tags:["Workflows"]},l={permalink:"/blog/2020/08/30/improved-workflows",source:"@site/blog/2020-08-30-improved-workflows.md",description:"Available in v3.26.0",date:"2020-08-30T00:00:00.000Z",tags:[{label:"Workflows",permalink:"/blog/tags/workflows"}],title:"Powered Up Workflows",readingTime:3.38,truncated:!0,prevItem:{title:"First Look at the V4 Roadmap",permalink:"/blog/2021/01/04/v4-roadmap"},nextItem:{title:"Bloblang Beta",permalink:"/blog/2020/05/10/bloblang-beta"}},i=[{value:"The Motivation",id:"the-motivation",children:[]},{value:"Leaning into Bloblang",id:"leaning-into-bloblang",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For the last few weeks I've been working on improving the workflow story in Benthos. That means reducing the number of processors, simplifying them, and at the same time making them more powerful than before. The new functionality outlined here can be used in the latest release ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/Jeffail/benthos/releases/tag/v3.26.0"}),"v3.26.0"),"."),Object(r.b)("h2",{id:"the-motivation"},"The Motivation"),Object(r.b)("p",null,"After similar efforts to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/blog/2020/05/10/bloblang-beta/"}),"improve the mapping story")," in Benthos it seemed sensible to target workflows. Specifically, I've added a new ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/components/processors/branch/"}),Object(r.b)("inlineCode",{parentName:"a"},"branch")," processor")," for wrapping child processors in request/result maps, and have reworked the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/components/processors/workflow/"}),Object(r.b)("inlineCode",{parentName:"a"},"workflow")," processor")," to use them."),Object(r.b)("p",null,"If you haven't used workflows in Benthos then there's a section in the new ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/components/processors/workflow/#why-use-a-workflow"}),Object(r.b)("inlineCode",{parentName:"a"},"workflow")," processor")," page outlining why they're useful. In short, when performing multiple integrations within a pipeline such as hitting HTTP services, lambdas, caches, etc, it's best to perform them in parallel when possible in order to reduce the processing latency of messages, organizing these integrations into a topology with a workflow makes it easier to manage their interdependencies and ensure they're executed in the right order."),Object(r.b)("p",null,"In the old world you could use the ",Object(r.b)("inlineCode",{parentName:"p"},"process_dag")," processor which has child ",Object(r.b)("inlineCode",{parentName:"p"},"process_map")," processors, where the mappings were a series of clunky to/from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/configuration/field_paths/"}),"dot paths"),", separated into optional and non-optional mappings. There was no way to manually specify the dependency tree, and conditional flows required a separate list of conditions which didn't factor into dependency resolution."),Object(r.b)("p",null,"Having such complex and brittle mapping capabilities meant these processors were difficult to document and more so to understand and use."),Object(r.b)("h2",{id:"leaning-into-bloblang"},"Leaning into Bloblang"),Object(r.b)("p",null,"Thankfully, with ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/guides/bloblang/about/"}),"Bloblang")," now finished it was pretty easy to replace most of the complexity of the workflow mappings for the language itself."),Object(r.b)("p",null,"For example, when mapping the request payload for an integration you can express a bunch of different patterns..."),Object(r.b)("p",null,"Empty request body:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'request_map: root = ""\n')),Object(r.b)("p",null,"Sub-object (",Object(r.b)("inlineCode",{parentName:"p"},"foo"),") as request body, if the sub-object doesn't exist (or is null) the integration is abandoned:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"request_map: root = this.foo.not_null()\n")),Object(r.b)("p",null,"Sub-object as request body which can be obtained from one of a number of possible paths:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"request_map: root = this.(foo | bar | baz).doc.not_null()\n")),Object(r.b)("p",null,"Conditional integration applies when the ",Object(r.b)("inlineCode",{parentName:"p"},"type")," is ",Object(r.b)("inlineCode",{parentName:"p"},"foo"),", with an unmodified message as request body:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'request_map: |\n  root = if this.type != "foo" {\n    deleted()\n  }\n')),Object(r.b)("p",null,"Conditional integration applies when the ",Object(r.b)("inlineCode",{parentName:"p"},"type")," is ",Object(r.b)("inlineCode",{parentName:"p"},"foo"),", with a sub-object as the request body:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'request_map: |\n  root = if this.type == "foo" {\n    this.foo.not_null()\n  } else {\n    deleted()\n  }\n')),Object(r.b)("p",null,"Similarly, it's possible to express a bunch of things in the result mapping..."),Object(r.b)("p",null,"Discard the result (the original message is unchanged):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),'result_map: ""\n')),Object(r.b)("p",null,"Place the entire result at a path:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"result_map: root.foo = this\n")),Object(r.b)("p",null,"Place the result in a metadata field:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"result_map: meta foo = this\n")),Object(r.b)("p",null,"If you want to see what it looks like there is an ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/cookbooks/enrichments/"}),"enrichment cookbook")," that demonstrates workflows in action, but there are also smaller examples on the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/components/processors/workflow/#examples"}),"workflow page")," such as the following snippet:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  processors:\n    - workflow:\n        meta_path: meta.workflow\n        branches:\n          foo:\n            request_map: 'root = \"\"'\n            processors:\n              - http:\n                  url: TODO\n            result_map: 'root.foo = this'\n\n          bar:\n            request_map: 'root = this.body'\n            processors:\n              - lambda:\n                  function: TODO\n            result_map: 'root.bar = this'\n\n          baz:\n            request_map: |\n              root.fooid = this.foo.id\n              root.barstuff = this.bar.content\n            processors:\n              - cache:\n                  resource: TODO\n                  operator: set\n                  key: ${! json(\"fooid\") }\n                  value: ${! json(\"barstuff\") }\n")),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"The docs have been updated to use these new goodies. Obviously the old processors are still being maintained but in a mostly dormant state. The workflow and branch processors are currently labelled as ",Object(r.b)("inlineCode",{parentName:"p"},"beta"),", but their general behavior is stable with the only exceptions being odd edge cases that might arise."),Object(r.b)("p",null,"With the behavior of these processors being dramatically simplified I've also been able to simplify the documentation for them, which also means using more space on the page for example configs."),Object(r.b)("p",null,"If you have feedback then ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/community/"}),"get the absolute heck in the chat you utter recluse"),"."))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,h=b["".concat(s,".").concat(m)]||b[m]||u[m]||r;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<r;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);