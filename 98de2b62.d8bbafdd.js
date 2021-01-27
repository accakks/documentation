(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{286:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),c=n(7),i=(n(0),n(411)),r=n(415),b=n(416),o={title:"http_client",type:"output",status:"stable",categories:["Network"]},l={unversionedId:"components/outputs/http_client",id:"components/outputs/http_client",isDocsHomePage:!1,title:"http_client",description:"\x3c!--",source:"@site/docs/components/outputs/http_client.md",slug:"/components/outputs/http_client",permalink:"/docs/components/outputs/http_client",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/http_client.md",version:"current",sidebar:"docs",previous:{title:"hdfs",permalink:"/docs/components/outputs/hdfs"},next:{title:"http_server",permalink:"/docs/components/outputs/http_server"}},p=[{value:"Propagating Responses",id:"propagating-responses",children:[]},{value:"Performance",id:"performance",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>url</code>",id:"url",children:[]},{value:"<code>verb</code>",id:"verb",children:[]},{value:"<code>headers</code>",id:"headers",children:[]},{value:"<code>oauth</code>",id:"oauth",children:[]},{value:"<code>oauth.enabled</code>",id:"oauthenabled",children:[]},{value:"<code>oauth.consumer_key</code>",id:"oauthconsumer_key",children:[]},{value:"<code>oauth.consumer_secret</code>",id:"oauthconsumer_secret",children:[]},{value:"<code>oauth.access_token</code>",id:"oauthaccess_token",children:[]},{value:"<code>oauth.access_token_secret</code>",id:"oauthaccess_token_secret",children:[]},{value:"<code>oauth.request_url</code>",id:"oauthrequest_url",children:[]},{value:"<code>oauth2</code>",id:"oauth2",children:[]},{value:"<code>oauth2.enabled</code>",id:"oauth2enabled",children:[]},{value:"<code>oauth2.client_key</code>",id:"oauth2client_key",children:[]},{value:"<code>oauth2.client_secret</code>",id:"oauth2client_secret",children:[]},{value:"<code>oauth2.token_url</code>",id:"oauth2token_url",children:[]},{value:"<code>basic_auth</code>",id:"basic_auth",children:[]},{value:"<code>basic_auth.enabled</code>",id:"basic_authenabled",children:[]},{value:"<code>basic_auth.username</code>",id:"basic_authusername",children:[]},{value:"<code>basic_auth.password</code>",id:"basic_authpassword",children:[]},{value:"<code>tls</code>",id:"tls",children:[]},{value:"<code>tls.enabled</code>",id:"tlsenabled",children:[]},{value:"<code>tls.skip_cert_verify</code>",id:"tlsskip_cert_verify",children:[]},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",children:[]},{value:"<code>tls.client_certs</code>",id:"tlsclient_certs",children:[]},{value:"<code>tls.client_certs[].cert</code>",id:"tlsclient_certscert",children:[]},{value:"<code>tls.client_certs[].key</code>",id:"tlsclient_certskey",children:[]},{value:"<code>tls.client_certs[].cert_file</code>",id:"tlsclient_certscert_file",children:[]},{value:"<code>tls.client_certs[].key_file</code>",id:"tlsclient_certskey_file",children:[]},{value:"<code>copy_response_headers</code>",id:"copy_response_headers",children:[]},{value:"<code>rate_limit</code>",id:"rate_limit",children:[]},{value:"<code>timeout</code>",id:"timeout",children:[]},{value:"<code>retry_period</code>",id:"retry_period",children:[]},{value:"<code>max_retry_backoff</code>",id:"max_retry_backoff",children:[]},{value:"<code>retries</code>",id:"retries",children:[]},{value:"<code>backoff_on</code>",id:"backoff_on",children:[]},{value:"<code>drop_on</code>",id:"drop_on",children:[]},{value:"<code>successful_on</code>",id:"successful_on",children:[]},{value:"<code>proxy_url</code>",id:"proxy_url",children:[]},{value:"<code>propagate_response</code>",id:"propagate_response",children:[]},{value:"<code>max_in_flight</code>",id:"max_in_flight",children:[]},{value:"<code>batching</code>",id:"batching",children:[]},{value:"<code>batching.count</code>",id:"batchingcount",children:[]},{value:"<code>batching.byte_size</code>",id:"batchingbyte_size",children:[]},{value:"<code>batching.period</code>",id:"batchingperiod",children:[]},{value:"<code>batching.check</code>",id:"batchingcheck",children:[]},{value:"<code>batching.processors</code>",id:"batchingprocessors",children:[]}]}],s={toc:p};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sends messages to an HTTP server."),Object(i.b)(r.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(b.a,{value:"common",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\noutput:\n  http_client:\n    url: http://localhost:4195/post\n    verb: POST\n    headers:\n      Content-Type: application/octet-stream\n    rate_limit: ""\n    timeout: 5s\n    max_in_flight: 1\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n'))),Object(i.b)(b.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\noutput:\n  http_client:\n    url: http://localhost:4195/post\n    verb: POST\n    headers:\n      Content-Type: application/octet-stream\n    oauth:\n      enabled: false\n      consumer_key: ""\n      consumer_secret: ""\n      access_token: ""\n      access_token_secret: ""\n      request_url: ""\n    oauth2:\n      enabled: false\n      client_key: ""\n      client_secret: ""\n      token_url: ""\n    basic_auth:\n      enabled: false\n      username: ""\n      password: ""\n    tls:\n      enabled: false\n      skip_cert_verify: false\n      root_cas_file: ""\n      client_certs: []\n    copy_response_headers: false\n    rate_limit: ""\n    timeout: 5s\n    retry_period: 1s\n    max_retry_backoff: 300s\n    retries: 3\n    backoff_on:\n      - 429\n    drop_on: []\n    successful_on: []\n    proxy_url: ""\n    propagate_response: false\n    max_in_flight: 1\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n      processors: []\n')))),Object(i.b)("p",null,"When the number of retries expires the output will reject the message, the\nbehaviour after this will depend on the pipeline but usually this simply means\nthe send is attempted again until successful whilst applying back pressure."),Object(i.b)("p",null,"The URL and header values of this type can be dynamically set using function\ninterpolations described ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"here"),"."),Object(i.b)("p",null,"The body of the HTTP request is the raw contents of the message payload. If the\nmessage has multiple parts (is a batch) the request will be sent according to\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.w3.org/Protocols/rfc1341/7_2_Multipart.html"}),"RFC1341"),". This\nbehaviour can be overridden by ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching#post-batch-processing"}),"archiving your batches"),"."),Object(i.b)("h3",{id:"propagating-responses"},"Propagating Responses"),Object(i.b)("p",null,"It's possible to propagate the response from each HTTP request back to the input\nsource by setting ",Object(i.b)("inlineCode",{parentName:"p"},"propagate_response")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),". Only inputs that\nsupport ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/sync_responses"}),"synchronous responses")," are able to make use of\nthese propagated responses."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"This output benefits from sending multiple messages in flight in parallel for\nimproved performance. You can tune the max number of in flight messages with the\nfield ",Object(i.b)("inlineCode",{parentName:"p"},"max_in_flight"),"."),Object(i.b)("p",null,"This output benefits from sending messages as a batch for improved performance.\nBatches can be formed at both the input and output level. You can find out more\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"in this doc"),"."),Object(i.b)("h2",{id:"fields"},"Fields"),Object(i.b)("h3",{id:"url"},Object(i.b)("inlineCode",{parentName:"h3"},"url")),Object(i.b)("p",null,"The URL to connect to.\nThis field supports ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"http://localhost:4195/post"'),"  "),Object(i.b)("h3",{id:"verb"},Object(i.b)("inlineCode",{parentName:"h3"},"verb")),Object(i.b)("p",null,"A verb to connect with"),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"POST"'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nverb: POST\n\nverb: GET\n\nverb: DELETE\n")),Object(i.b)("h3",{id:"headers"},Object(i.b)("inlineCode",{parentName:"h3"},"headers")),Object(i.b)("p",null,"A map of headers to add to the request.\nThis field supports ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'{"Content-Type":"application/octet-stream"}'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nheaders:\n  Content-Type: application/octet-stream\n")),Object(i.b)("h3",{id:"oauth"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth")),Object(i.b)("p",null,"Allows you to specify open authentication via OAuth version 1."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(i.b)("h3",{id:"oauthenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth.enabled")),Object(i.b)("p",null,"Whether to use OAuth version 1 in requests."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"oauthconsumer_key"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth.consumer_key")),Object(i.b)("p",null,"A value used to identify the client to the service provider."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"oauthconsumer_secret"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth.consumer_secret")),Object(i.b)("p",null,"A secret used to establish ownership of the consumer key."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"oauthaccess_token"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth.access_token")),Object(i.b)("p",null,"A value used to gain access to the protected resources on behalf of the user."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"oauthaccess_token_secret"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth.access_token_secret")),Object(i.b)("p",null,"A secret provided in order to establish ownership of a given access token."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"oauthrequest_url"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth.request_url")),Object(i.b)("p",null,"The URL of the OAuth provider."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"oauth2"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth2")),Object(i.b)("p",null,"Allows you to specify open authentication via OAuth version 2 using the client credentials token flow."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(i.b)("h3",{id:"oauth2enabled"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth2.enabled")),Object(i.b)("p",null,"Whether to use OAuth version 2 in requests."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"oauth2client_key"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth2.client_key")),Object(i.b)("p",null,"A value used to identify the client to the token provider."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"oauth2client_secret"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth2.client_secret")),Object(i.b)("p",null,"A secret used to establish ownership of the client key."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"oauth2token_url"},Object(i.b)("inlineCode",{parentName:"h3"},"oauth2.token_url")),Object(i.b)("p",null,"The URL of the token provider."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"basic_auth"},Object(i.b)("inlineCode",{parentName:"h3"},"basic_auth")),Object(i.b)("p",null,"Allows you to specify basic authentication."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(i.b)("h3",{id:"basic_authenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"basic_auth.enabled")),Object(i.b)("p",null,"Whether to use basic authentication in requests."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"basic_authusername"},Object(i.b)("inlineCode",{parentName:"h3"},"basic_auth.username")),Object(i.b)("p",null,"A username to authenticate as."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"basic_authpassword"},Object(i.b)("inlineCode",{parentName:"h3"},"basic_auth.password")),Object(i.b)("p",null,"A password to authenticate with."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"tls"},Object(i.b)("inlineCode",{parentName:"h3"},"tls")),Object(i.b)("p",null,"Custom TLS settings can be used to override system defaults."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(i.b)("h3",{id:"tlsenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.enabled")),Object(i.b)("p",null,"Whether custom TLS settings are enabled."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"tlsskip_cert_verify"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.skip_cert_verify")),Object(i.b)("p",null,"Whether to skip server side certificate verification."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"tlsroot_cas_file"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.root_cas_file")),Object(i.b)("p",null,"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nroot_cas_file: ./root_cas.pem\n")),Object(i.b)("h3",{id:"tlsclient_certs"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs")),Object(i.b)("p",null,"A list of client certificates to use. For each certificate either the fields ",Object(i.b)("inlineCode",{parentName:"p"},"cert")," and ",Object(i.b)("inlineCode",{parentName:"p"},"key"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"cert_file")," and ",Object(i.b)("inlineCode",{parentName:"p"},"key_file")," should be specified, but not both."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"array"),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nclient_certs:\n  - cert: foo\n    key: bar\n\nclient_certs:\n  - cert_file: ./example.pem\n    key_file: ./example.key\n")),Object(i.b)("h3",{id:"tlsclient_certscert"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].cert")),Object(i.b)("p",null,"A plain text certificate to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"tlsclient_certskey"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].key")),Object(i.b)("p",null,"A plain text certificate key to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"tlsclient_certscert_file"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].cert_file")),Object(i.b)("p",null,"The path to a certificate to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"tlsclient_certskey_file"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].key_file")),Object(i.b)("p",null,"The path of a certificate key to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"copy_response_headers"},Object(i.b)("inlineCode",{parentName:"h3"},"copy_response_headers")),Object(i.b)("p",null,"Sets whether to copy the headers from the response to the resulting payload."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"rate_limit"},Object(i.b)("inlineCode",{parentName:"h3"},"rate_limit")),Object(i.b)("p",null,"An optional ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/rate_limits/about"}),"rate limit")," to throttle requests by."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"timeout"},Object(i.b)("inlineCode",{parentName:"h3"},"timeout")),Object(i.b)("p",null,"A static timeout to apply to requests."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"5s"'),"  "),Object(i.b)("h3",{id:"retry_period"},Object(i.b)("inlineCode",{parentName:"h3"},"retry_period")),Object(i.b)("p",null,"The base period to wait between failed requests."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"1s"'),"  "),Object(i.b)("h3",{id:"max_retry_backoff"},Object(i.b)("inlineCode",{parentName:"h3"},"max_retry_backoff")),Object(i.b)("p",null,"The maximum period to wait between failed requests."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"300s"'),"  "),Object(i.b)("h3",{id:"retries"},Object(i.b)("inlineCode",{parentName:"h3"},"retries")),Object(i.b)("p",null,"The maximum number of retry attempts to make."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"number"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"3"),"  "),Object(i.b)("h3",{id:"backoff_on"},Object(i.b)("inlineCode",{parentName:"h3"},"backoff_on")),Object(i.b)("p",null,"A list of status codes whereby retries should be attempted but the period between them should be increased gradually."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"array"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"[429]"),"  "),Object(i.b)("h3",{id:"drop_on"},Object(i.b)("inlineCode",{parentName:"h3"},"drop_on")),Object(i.b)("p",null,"A list of status codes whereby the attempt should be considered failed but retries should not be attempted."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"array"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(i.b)("h3",{id:"successful_on"},Object(i.b)("inlineCode",{parentName:"h3"},"successful_on")),Object(i.b)("p",null,"A list of status codes whereby the attempt should be considered successful (allows you to configure non-2XX codes)."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"array"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(i.b)("h3",{id:"proxy_url"},Object(i.b)("inlineCode",{parentName:"h3"},"proxy_url")),Object(i.b)("p",null,"An optional HTTP proxy URL."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"propagate_response"},Object(i.b)("inlineCode",{parentName:"h3"},"propagate_response")),Object(i.b)("p",null,"Whether responses from the server should be ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/sync_responses"}),"propagated back")," to the input."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"max_in_flight"},Object(i.b)("inlineCode",{parentName:"h3"},"max_in_flight")),Object(i.b)("p",null,"The maximum number of messages to have in flight at a given time. Increase this to improve throughput."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"number"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"1"),"  "),Object(i.b)("h3",{id:"batching"},Object(i.b)("inlineCode",{parentName:"h3"},"batching")),Object(i.b)("p",null,"Allows you to configure a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"batching policy"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Examples\n\nbatching:\n  byte_size: 5000\n  count: 0\n  period: 1s\n\nbatching:\n  count: 10\n  period: 1s\n\nbatching:\n  check: this.contains("END BATCH")\n  count: 0\n  period: 1m\n')),Object(i.b)("h3",{id:"batchingcount"},Object(i.b)("inlineCode",{parentName:"h3"},"batching.count")),Object(i.b)("p",null,"A number of messages at which the batch should be flushed. If ",Object(i.b)("inlineCode",{parentName:"p"},"0")," disables count based batching."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"number"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(i.b)("h3",{id:"batchingbyte_size"},Object(i.b)("inlineCode",{parentName:"h3"},"batching.byte_size")),Object(i.b)("p",null,"An amount of bytes at which the batch should be flushed. If ",Object(i.b)("inlineCode",{parentName:"p"},"0")," disables size based batching."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"number"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(i.b)("h3",{id:"batchingperiod"},Object(i.b)("inlineCode",{parentName:"h3"},"batching.period")),Object(i.b)("p",null,"A period in which an incomplete batch should be flushed regardless of its size."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nperiod: 1s\n\nperiod: 1m\n\nperiod: 500ms\n")),Object(i.b)("h3",{id:"batchingcheck"},Object(i.b)("inlineCode",{parentName:"h3"},"batching.check")),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/bloblang/about/"}),"Bloblang query")," that should return a boolean value indicating whether a message should end a batch."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Examples\n\ncheck: this.type == "end_of_transaction"\n')),Object(i.b)("h3",{id:"batchingprocessors"},Object(i.b)("inlineCode",{parentName:"h3"},"batching.processors")),Object(i.b)("p",null,"A list of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/about"}),"processors")," to apply to a batch as it is flushed. This allows you to aggregate and archive the batch however you see fit. Please note that all resulting messages are flushed as a single batch, therefore splitting the batch into smaller batches using these processors is a no-op."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"array"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nprocessors:\n  - archive:\n      format: lines\n\nprocessors:\n  - archive:\n      format: json_array\n\nprocessors:\n  - merge_json: {}\n")))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),c=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),p=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,h=s["".concat(r,".").concat(d)]||s[d]||u[d]||i;return n?c.a.createElement(h,b(b({ref:t},l),{},{components:n})):c.a.createElement(h,b({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,r[1]=b;for(var l=2;l<i;l++)r[l]=n[l];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(c&&(c+=" "),c+=t);return c}},413:function(e,t,n){"use strict";var a=n(0),c=n(414);t.a=function(){var e=Object(a.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),c=Object(a.createContext)(void 0);t.a=c},415:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(413),r=n(412),b=n(56),o=n.n(b),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,b=e.defaultValue,s=e.values,u=e.groupId,d=e.className,h=Object(i.a)(),m=h.tabGroupChoices,O=h.setTabGroupChoices,j=Object(a.useState)(b),f=j[0],N=j[1],_=a.Children.toArray(e.children);if(null!=u){var y=m[u];null!=y&&y!==f&&s.some((function(e){return e.value===y}))&&N(y)}var g=function(e){N(e),null!=u&&O(u,e)},v=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},d)},s.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return g(t)},onClick:function(){g(t)}},n)}))),t?Object(a.cloneElement)(_.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},_.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},416:function(e,t,n){"use strict";var a=n(3),c=n(0),i=n.n(c);t.a=function(e){var t=e.children,n=e.hidden,c=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:c}),t)}}}]);