(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8347],{70469:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/introduction",function(){return a(79720)}])},79720:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return c},useTOC:function(){return i}});var o=a(24246),t=a(25737),r=a(90946),s=a(20778);function i(e){return[{value:"Using GraphQL with HTTP",id:"using-graphql-with-http",depth:2},{value:"The GraphQL-First Philosophy",id:"the-graphql-first-philosophy",depth:2}]}let h=(0,t.c)(function(e){let{toc:n=i(e)}=e,a=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",strong:"strong",ol:"ol",li:"li"},(0,s.a)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{children:"Introduction"}),"\n",(0,o.jsxs)(a.p,{children:["GraphQL Tools is a set of npm packages(",(0,o.jsx)(a.code,{children:"@graphql-tools/*"}),") and an opinionated structure for how to\nbuild a GraphQL schema and resolvers in JavaScript, following the GraphQL-first development\nworkflow."]}),"\n",(0,o.jsxs)(a.p,{children:["Functions in the ",(0,o.jsx)(a.code,{children:"@graphql-tools/*"})," packages are not only useful for building servers. They can also\nbe used in the browser. For example, to mock a backend during development or testing."]}),"\n",(0,o.jsx)(a.p,{children:"Even though we recommend a specific way of building GraphQL servers, you can use these tools even if\nyou don't follow our structure; they work with any GraphQL-JS schema, and each tool can be useful on\nits own."}),"\n",(0,o.jsx)(a.h2,{id:n[0].id,children:n[0].value}),"\n",(0,o.jsxs)(a.p,{children:["If you want to bind your JavaScript GraphQL schema to an HTTP server, you can use\n",(0,o.jsx)(a.a,{href:"https://graphql-yoga.com",children:"GraphQL Yoga"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["You can develop your JavaScript-based GraphQL API with ",(0,o.jsx)(a.strong,{children:"GraphQL Tools"})," and ",(0,o.jsx)(a.strong,{children:"GraphQL Yoga"}),"\ntogether: One to write the schema and resolver code, and the other to connect it to a web server."]}),"\n",(0,o.jsx)(a.h2,{id:n[1].id,children:n[1].value}),"\n",(0,o.jsx)(a.p,{children:"This package enables a specific workflow for developing a GraphQL server, where the GraphQL schema\nis the first thing you design, and acts as the contract between your frontend and backend. It's not\nnecessarily for everyone, but it can be a great way to get a server up and running with a very clear\nseparation of concerns. These concerns are aligned with Facebook's direction about the best way to\nuse GraphQL, and our own findings after thinking about the best way to architect a JavaScript\nGraphQL API codebase."}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Use the GraphQL schema language."})," The\n",(0,o.jsx)(a.a,{href:"http://graphql.org/learn/schema",children:"official GraphQL documentation"})," explains schema concepts using\na concise and easy-to-read language. The ",(0,o.jsx)(a.a,{href:"http://graphql.org/graphql-js",children:"getting started guide"}),"\nfor GraphQL.js now uses the schema to introduce new developers to GraphQL. ",(0,o.jsx)(a.code,{children:"graphql-tools"}),"\nenables you to use this language alongside with all the features of GraphQL including resolvers,\ninterfaces, custom scalars, and more so that you can have a seamless flow from design to mocking\nto implementation. For a more complete overview of the benefits, check out Nick Nance's talk,\n",(0,o.jsx)(a.a,{href:"https://youtube.com/watch?v=XOM8J4LaYFg",children:"Managing GraphQL Development at Scale"}),"."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Separate business logic from the schema."})," As Dan Schafer covered in his talk,\n",(0,o.jsx)(a.a,{href:"https://medium.com/apollo-stack/graphql-at-facebook-by-dan-schafer-38d65ef075af#.jduhdwudr",children:"GraphQL at Facebook"}),",\nit's a good idea to treat GraphQL as a thin API and routing layer. This means that your actual\nbusiness logic, permissions, and other concerns should not be part of your GraphQL schema. For\nlarge apps, we suggest splitting your GraphQL server code into 4 components: Schema, Resolvers,\nModels, and Connectors, which each handle a specific part of the work."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.strong,{children:"Use standard libraries for auth and other special concerns."})," There's no need to reinvent the\nlogin process in GraphQL. Every server framework already has a wealth of technologies for auth,\nfile uploads, and more. It's prudent to use those standard solutions even if your data is being\nserved through a GraphQL endpoint, and it is okay to have non-GraphQL endpoints on your server\nwhen it's the most practical solution."]}),"\n"]})]})},"/docs/introduction",{filePath:"src/pages/docs/introduction.mdx",timestamp:168924556e4,pageMap:r.v,frontMatter:{description:"A set of utilities to build your JavaScript GraphQL schema in a concise and powerful way."},title:"Introduction"},"undefined"==typeof RemoteContent?i:RemoteContent.useTOC);function c(e){return h(e)}}},function(e){e.O(0,[9659,2888,9774,179],function(){return e(e.s=70469)}),_N_E=e.O()}]);