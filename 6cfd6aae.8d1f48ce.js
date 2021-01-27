(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(411)),c={id:"enrichments",title:"Enrichment Workflows",description:"How to configure Benthos to process a workflow of enrichment services."},s={permalink:"/cookbooks/enrichments",source:"@site/cookbooks/enrichments.md",description:"How to configure Benthos to process a workflow of enrichment services.",date:"2021-01-26T21:21:33.000Z",featured:!1,title:"Enrichment Workflows"},i=[{value:"Meet the Enrichments",id:"meet-the-enrichments",children:[{value:"Claims Detector",id:"claims-detector",children:[]},{value:"Hyperbole Detector",id:"hyperbole-detector",children:[]},{value:"Fake News Detector",id:"fake-news-detector",children:[]}]},{value:"Combining into a Workflow",id:"combining-into-a-workflow",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This cookbook demonstrates how to enrich a stream of JSON documents with HTTP services. This method also works with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/aws_lambda"}),"AWS Lambda functions"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/subprocess"}),"subprocesses"),", etc."),Object(o.b)("p",null,"We will start off by configuring a single enrichment, then we will move onto a workflow of enrichments with a network of dependencies using the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/workflow"}),Object(o.b)("inlineCode",{parentName:"a"},"workflow")," processor"),"."),Object(o.b)("p",null,"Each enrichment will be performed in parallel across a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"pre-batched")," stream of documents. Workflow enrichments that do not depend on each other will also be performed in parallel, making this orchestration method very efficient."),Object(o.b)("p",null,"The imaginary problem we are going to solve is applying a set of NLP based enrichments to a feed of articles in order to detect fake news. We will be consuming and writing to Kafka, but the example works with any ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/inputs/about"}),"input")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/outputs/about"}),"output")," combination."),Object(o.b)("p",null,"Articles are received over the topic ",Object(o.b)("inlineCode",{parentName:"p"},"articles")," and look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "article",\n  "article": {\n    "id": "123foo",\n    "title": "Dogs Stop Barking",\n    "content": "The world was shocked this morning to find that all dogs have stopped barking."\n  }\n}\n')),Object(o.b)("h2",{id:"meet-the-enrichments"},"Meet the Enrichments"),Object(o.b)("h3",{id:"claims-detector"},"Claims Detector"),Object(o.b)("p",null,"To start us off we will configure a single enrichment, which is an imaginary 'claims detector' service. This is an HTTP service that wraps a trained machine learning model to extract claims that are made within a body of text."),Object(o.b)("p",null,"The service expects a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request with JSON payload of the form:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "text": "The world was shocked this morning to find that all dogs have stopped barking."\n}\n')),Object(o.b)("p",null,"And returns a JSON payload of the form:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "claims": [\n    {\n      "entity": "world",\n      "claim": "shocked"\n    },\n    {\n      "entity": "dogs",\n      "claim": "NOT barking"\n    }\n  ]\n}\n')),Object(o.b)("p",null,"Since each request only applies to a single document we will make this enrichment scale by deploying multiple HTTP services and hitting those instances in parallel across our document batches."),Object(o.b)("p",null,"In order to send a mapped request and map the response back into the original document we will use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/branch"}),Object(o.b)("inlineCode",{parentName:"a"},"branch")," processor"),", with a child ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/http"}),Object(o.b)("inlineCode",{parentName:"a"},"http"))," processor."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"input:\n  kafka:\n    addresses: [ TODO ]\n    topics: [ articles ]\n    consumer_group: benthos_articles_group\n    batching:\n      count: 20 # Tune this to set the size of our document batches.\n      period: 1s\n\npipeline:\n  processors:\n    - branch:\n        request_map: 'root.text = this.article.content'\n        processors:\n          - http:\n              parallel: true\n              url: http://localhost:4197/claims\n              verb: POST\n        result_map: 'root.tmp.claims = this.claims'\n\noutput:\n  kafka:\n    addresses: [ TODO ]\n    topic: comments_hydrated\n")),Object(o.b)("p",null,"With this pipeline our documents will come out looking something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "article",\n  "article": {\n    "id": "123foo",\n    "title": "Dogs Stop Barking",\n    "content": "The world was shocked this morning to find that all dogs have stopped barking."\n  },\n  "tmp": {\n    "claims": [\n      {\n        "entity": "world",\n        "claim": "shocked"\n      },\n      {\n        "entity": "dogs",\n        "claim": "NOT barking"\n      }\n    ]\n  }\n}\n')),Object(o.b)("h3",{id:"hyperbole-detector"},"Hyperbole Detector"),Object(o.b)("p",null,"Next up is a 'hyperbole detector' that takes a ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request containing the article contents and returns a hyperbole score between 0 and 1. This time the format is array-based and therefore supports calculating multiple documents in a single request, making better use of the host machines GPU."),Object(o.b)("p",null,"A request should take the following form:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "text": "The world was shocked this morning to find that all dogs have stopped barking."\n  }\n]\n')),Object(o.b)("p",null,"And the response looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "hyperbole_rank": 0.73\n  }\n]\n')),Object(o.b)("p",null,"In order to create a single request from a batch of documents, and subsequently map the result back into our batch, we will use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/archive"}),Object(o.b)("inlineCode",{parentName:"a"},"archive"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/unarchive"}),Object(o.b)("inlineCode",{parentName:"a"},"unarchive"))," processors in our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/branch"}),Object(o.b)("inlineCode",{parentName:"a"},"branch"))," flow, like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  processors:\n    - branch:\n        request_map: 'root.text = this.article.content'\n        processors:\n          - archive:\n              format: json_array\n          - http:\n              url: http://localhost:4198/hyperbole\n              verb: POST\n          - unarchive:\n              format: json_array\n        result_map: 'root.tmp.hyperbole_rank = this.hyperbole_rank'\n")),Object(o.b)("p",null,"The purpose of the ",Object(o.b)("inlineCode",{parentName:"p"},"json_array")," format ",Object(o.b)("inlineCode",{parentName:"p"},"archive")," processor is to take a batch of JSON documents and place them into a single document as an array. Subsequently, we then send one single request for each batch."),Object(o.b)("p",null,"After the request is made we do the opposite with the ",Object(o.b)("inlineCode",{parentName:"p"},"unarchive")," processor in order to convert it back into a batch of the original size."),Object(o.b)("h3",{id:"fake-news-detector"},"Fake News Detector"),Object(o.b)("p",null,"Finally, we are going to use a 'fake news detector' that takes the article contents as well as the output of the previous two enrichments and calculates a fake news rank between 0 and 1."),Object(o.b)("p",null,"This service behaves similarly to the claims detector service and takes a document of the form:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "text": "The world was shocked this morning to find that all dogs have stopped barking.",\n  "hyperbole_rank": 0.73,\n  "claims": [\n    {\n      "entity": "world",\n      "claim": "shocked"\n    },\n    {\n      "entity": "dogs",\n      "claim": "NOT barking"\n    }\n  ]\n}\n')),Object(o.b)("p",null,"And returns an object of the form:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "fake_news_rank": 0.893\n}\n')),Object(o.b)("p",null,"We then wish to map the field ",Object(o.b)("inlineCode",{parentName:"p"},"fake_news_rank")," from that result into the original document at the path ",Object(o.b)("inlineCode",{parentName:"p"},"article.fake_news_score"),". Our ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/branch"}),Object(o.b)("inlineCode",{parentName:"a"},"branch"))," block for this enrichment would look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  processors:\n    - branch:\n        request_map: |\n          root.text = this.article.content\n          root.claims = this.tmp.claims\n          root.hyperbole_rank = this.tmp.hyperbole_rank\n        processors:\n          - http:\n              parallel: true\n              url: http://localhost:4199/fakenews\n              verb: POST\n        result_map: 'root.article.fake_news_score = this.fake_news_rank'\n")),Object(o.b)("p",null,"Note that in our ",Object(o.b)("inlineCode",{parentName:"p"},"request_map")," we are targeting fields that are populated from the previous two enrichments."),Object(o.b)("p",null,"If we were to execute all three enrichments in a sequence we'll end up with a document looking like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "article",\n  "article": {\n    "id": "123foo",\n    "title": "Dogs Stop Barking",\n    "content": "The world was shocked this morning to find that all dogs have stopped barking.",\n    "fake_news_rank": 0.76\n  },\n  "tmp": {\n    "hyperbole_rank": 0.34,\n    "claims": [\n      {\n        "entity": "world",\n        "claim": "shocked"\n      },\n      {\n        "entity": "dogs",\n        "claim": "NOT barking"\n      }\n    ]\n  }\n}\n')),Object(o.b)("p",null,"Great! However, as a streaming pipeline this set up isn't ideal as our first two enrichments are independent and could potentially be executed in parallel in order to reduce processing latency."),Object(o.b)("h2",{id:"combining-into-a-workflow"},"Combining into a Workflow"),Object(o.b)("p",null,"If we configure our enrichments within a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/workflow"}),Object(o.b)("inlineCode",{parentName:"a"},"workflow")," processor")," we can use Benthos to automatically detect our dependency graph, giving us two key benefits:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Enrichments at the same level of a dependency graph (claims and hyperbole) will be executed in parallel."),Object(o.b)("li",{parentName:"ol"},"When introducing more enrichments to our pipeline the added complexity of resolving the dependency graph is handled automatically by Benthos.")),Object(o.b)("p",null,"Placing our branches within a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/workflow"}),Object(o.b)("inlineCode",{parentName:"a"},"workflow")," processor")," makes our final pipeline configuration look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"input:\n  kafka:\n    addresses: [ TODO ]\n    topics: [ articles ]\n    consumer_group: benthos_articles_group\n    batching:\n      count: 20 # Tune this to set the size of our document batches.\n      period: 1s\n\npipeline:\n  processors:\n    - workflow:\n        meta_path: '' #\xa0Don't bother storing branch metadata.\n        branches:\n          claims:\n            request_map: 'root.text = this.article.content'\n            processors:\n              - http:\n                  parallel: true\n                  url: http://localhost:4197/claims\n                  verb: POST\n            result_map: 'root.tmp.claims = this.claims'\n\n          hyperbole:\n            request_map: 'root.text = this.article.content'\n            processors:\n              - archive:\n                  format: json_array\n              - http:\n                  url: http://localhost:4198/hyperbole\n                  verb: POST\n              - unarchive:\n                  format: json_array\n            result_map: 'root.tmp.hyperbole_rank = this.hyperbole_rank'\n\n          fake_news:\n            request_map: |\n              root.text = this.article.content\n              root.claims = this.tmp.claims\n              root.hyperbole_rank = this.tmp.hyperbole_rank\n            processors:\n              - http:\n                  parallel: true\n                  url: http://localhost:4199/fakenews\n                  verb: POST\n            result_map: 'root.article.fake_news_score = this.fake_news_rank'\n\n    - catch:\n        - log:\n            fields:\n              content: \"${!content()}\"\n            message: \"Enrichments failed due to: ${!error()}\"\n\n    - bloblang: |\n        root = this\n        root.tmp = deleted()\n\noutput:\n  kafka:\n    addresses: [ TODO ]\n    topic: comments_hydrated\n")),Object(o.b)("p",null,"Since the contents of ",Object(o.b)("inlineCode",{parentName:"p"},"tmp")," won't be required downstream we remove it after our enrichments using a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/bloblang"}),Object(o.b)("inlineCode",{parentName:"a"},"bloblang")," processor"),"."),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/catch"}),Object(o.b)("inlineCode",{parentName:"a"},"catch"))," processor was added at the end of the pipeline which catches documents that failed enrichment. You can replace the log event with a wide range of recovery actions such as sending to a dead-letter/retry queue, dropping the message entirely, etc. You can read more about error handling ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/error_handling"}),"in this article"),"."))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||h[m]||o;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);