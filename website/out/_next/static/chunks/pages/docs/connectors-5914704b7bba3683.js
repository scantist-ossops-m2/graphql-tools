(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2081],{52810:function(i,s,h){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/connectors",function(){return h(97629)}])},97629:function(i,s,h){"use strict";h.r(s),h.d(s,{default:function(){return k},useTOC:function(){return a}});var e=h(24246),n=h(25737),r=h(90946),t=h(20778),l=h(26801);function a(i){return[{value:"Basic Fetching",id:"basic-fetching",depth:2},{value:"Factoring Out Fetching Details",id:"factoring-out-fetching-details",depth:2},{value:"DataLoader and Caching",id:"dataloader-and-caching",depth:2},{value:"One Dataloader per Request",id:"one-dataloader-per-request",depth:3}]}let d=(0,n.c)(function(i){let{toc:s=a(i)}=i,h=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",pre:"pre",code:"code",span:"span",h3:"h3",em:"em"},(0,t.a)(),i.components);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(h.h1,{children:"Data Fetching"}),"\n",(0,e.jsx)(h.p,{children:"By this point in the documentation, you know how to generate a GraphQL.js schema from the GraphQL\nschema language, and how to add resolvers to that schema to call functions. How do you access your\nbackend from those resolvers? Well, it's quite easy, but as your app gets more complex it might make\nsense to add some structure. We'll start with the basics and then move on to more advanced\nconventions."}),"\n",(0,e.jsx)(h.h2,{id:s[0].id,children:s[0].value}),"\n",(0,e.jsxs)(h.p,{children:["As you have read on the ",(0,e.jsx)(h.a,{href:"/docs/resolvers/#resolver-result-format",children:"Resolvers"})," page, resolvers in\nGraphQL.js can return Promises. This means it's easy to fetch data using any library that returns a\npromise for the result:"]}),"\n",(0,e.jsx)(h.pre,{icon:l.Dr,"data-language":"js","data-copy":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { fetch } "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@whatwg-node/fetch'"})]}),"\n",(0,e.jsx)(h.span,{children:" "}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" resolverMap"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  Query: {"})}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"    async"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" gitHubRepository"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"root"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"args"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"context"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"      const"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" response"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" await"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" fetch"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"`https://api.github.com/repos/${"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"args"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"."}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"name"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"}`"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:")"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"      return"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" response."}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"json"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,e.jsx)(h.h2,{id:s[1].id,children:s[1].value}),"\n",(0,e.jsx)(h.p,{children:'As you start to have more different resolvers that need to access the GitHub API, the above approach\nbecomes unsustainable. It\'s good to abstract that away into a "repository" pattern. We call these\ndata fetching functions "connectors":'}),"\n",(0,e.jsx)(h.pre,{icon:l.Dr,"data-language":"js","data-filename":"github-connector.js","data-copy":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { fetch } "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@whatwg-node/fetch'"})]}),"\n",(0,e.jsx)(h.span,{children:" "}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// This gives you a place to put GitHub API keys, for example"})}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"GITHUB_API_KEY"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"GITHUB_API_SECRET"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" } "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" process.env"})]}),"\n",(0,e.jsx)(h.span,{children:" "}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" function"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" getRepositoryByName"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"name"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  const"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" response"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" fetch"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"    `https://api.github.com/repos/${"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"name"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"}?GITHUB_API_KEY=${"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"GITHUB_API_KEY"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"}&GITHUB_API_SECRET=${"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"GITHUB_API_SECRET"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"}`"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  )"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,e.jsx)(h.p,{children:"Now, we can use this function in several resolvers:"}),"\n",(0,e.jsx)(h.pre,{icon:l.Dr,"data-language":"js","data-copy":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { getRepositoryByName } "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" './github-connector.js'"})]}),"\n",(0,e.jsx)(h.span,{children:" "}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" resolverMap"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  Query: {"})}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    gitHubRepository"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"root"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"args"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"context"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"      return"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" getRepositoryByName"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(args.name)"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  },"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  Submission: {"})}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    repository"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"root"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"args"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"context"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"      return"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" getRepositoryByName"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(root.repositoryFullName)"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,e.jsx)(h.p,{children:"This means we no longer have to worry about the details of fetching from GitHub inside our\nresolvers, and we just need to put in the right repository name to fetch. We can improve our GitHub\nfetching logic over time."}),"\n",(0,e.jsx)(h.h2,{id:s[2].id,children:s[2].value}),"\n",(0,e.jsx)(h.p,{children:"At some point, you might get to a situation where you are fetching the same objects over and over\nduring the course of a single query. For example, you could have a list of repositories which each\nwant to know about their owner:"}),"\n",(0,e.jsx)(h.pre,{"data-language":"graphql","data-copy":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"query"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"  repositories"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"limit"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"10"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"    owner"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"      login"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"      avatar_url"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,e.jsxs)(h.p,{children:["Let's say this is our resolver for ",(0,e.jsx)(h.code,{children:"owner"}),":"]}),"\n",(0,e.jsx)(h.pre,{icon:l.Dr,"data-language":"js","data-copy":"",children:(0,e.jsxs)(h.code,{children:[(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { getAuthorByName } "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" './github-connector.js'"})]}),"\n",(0,e.jsx)(h.span,{children:" "}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"const"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" resolverMap"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  Repository: {"})}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    owner"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"("}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"root"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"args"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"context"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,e.jsxs)(h.span,{children:[(0,e.jsx)(h.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"      return"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" getAuthorByName"}),(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(root.owner)"})]}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})}),"\n",(0,e.jsx)(h.span,{children:(0,e.jsx)(h.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,e.jsxs)(h.p,{children:["If the list of repositories has several that were owned by the same user, the ",(0,e.jsx)(h.code,{children:"getAuthorByName"}),"\nfunction will be called once for each, doing unnecessary requests to the GitHub API, and running\ndown our API limit."]}),"\n",(0,e.jsxs)(h.p,{children:["You can improve the situation by adding a per-request cache with ",(0,e.jsx)(h.code,{children:"DataLoader"}),", Facebook's\n",(0,e.jsx)(h.a,{href:"https://github.com/facebook/dataloader",children:"helpful JavaScript library"})," for in-memory data caching."]}),"\n",(0,e.jsx)(h.h3,{id:s[3].id,children:s[3].value}),"\n",(0,e.jsxs)(h.p,{children:["One important thing to understand about ",(0,e.jsx)(h.code,{children:"DataLoader"})," is that it caches the results forever unless\ntold otherwise. So we want to make sure we create a new instance for ",(0,e.jsx)(h.em,{children:"every"})," request sent to our\nserver, so that we de-duplicate fetches in one query but not across multiple requests or, even\nworse, multiple users."]})]})},"/docs/connectors",{filePath:"src/pages/docs/connectors.mdx",timestamp:168924556e4,pageMap:r.v,frontMatter:{description:"How to fetch data from your GraphQL resolvers."},title:"Data Fetching"},"undefined"==typeof RemoteContent?a:RemoteContent.useTOC);function k(i){return d(i)}}},function(i){i.O(0,[9659,2888,9774,179],function(){return i(i.s=52810)}),_N_E=i.O()}]);