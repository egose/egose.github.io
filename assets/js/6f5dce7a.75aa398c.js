"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9418],{6117:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=s(5893),n=s(1151),o=(s(4866),s(5162),s(9286),s(2991));const c={},a="Sub-Documents",i={id:"egose-adapter-js/model-service/sub/index",title:"Sub-Documents",description:"The model service supports CRUD operations against sub-documents.",source:"@site/docs/egose-adapter-js/model-service/sub/index.mdx",sourceDirName:"egose-adapter-js/model-service/sub",slug:"/egose-adapter-js/model-service/sub/",permalink:"/docs/egose-adapter-js/model-service/sub/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"adapterjsSidebar",previous:{title:"Distinct",permalink:"/docs/egose-adapter-js/model-service/distinct"},next:{title:"List",permalink:"/docs/egose-adapter-js/model-service/sub/list"}},l={},d=[];function u(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"sub-documents",children:"Sub-Documents"})}),"\n","\n",(0,r.jsx)(t.p,{children:"The model service supports CRUD operations against sub-documents."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import egoseAdapter from '@egose/adapter-js';\n\nconst adapter = egoseAdapter.createAdapter({ baseURL: 'http://127.0.0.1:3000/api' });\n\ninterface Status {\n  name: string;\n  active: boolean;\n}\n\ninterface User {\n  name: string;\n  statusHistory: Status[];\n  [key: string]: any;\n}\n\nconst userService = adapter.createModelService<User>({ modelName: 'User', basePath: 'users' });\nconst sub = services.userService.id('79c8c567b05e986509d55733a').subs('statusHistory');\n"})}),"\n","\n",(0,r.jsx)(o.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2991:(e,t,s)=>{s.d(t,{Z:()=>x});s(7294);var r=s(512),n=s(9690),o=s(3692),c=s(8824),a=s(3919),i=s(5999),l=s(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(5893);function m(e){let{href:t,children:s}=e;return(0,u.jsx)(o.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:s})}function p(e){let{href:t,icon:s,title:n,description:o}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:n,children:[s," ",n]}),o&&(0,u.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const s=(0,n.LM)(t),r=function(){const{selectMessage:e}=(0,c.c)();return t=>e(t,(0,i.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return s?(0,u.jsx)(p,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const s=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.xz)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:s,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const s=(0,n.jA)();return(0,u.jsx)(x,{items:s.items,className:t})}function x(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(j,{...e});const o=(0,n.MN)(t);return(0,u.jsx)("section",{className:(0,r.Z)("row",s),children:o.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},8824:(e,t,s)=>{s.d(t,{c:()=>l});var r=s(7294),n=s(2263);const o=["zero","one","two","few","many","other"];function c(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=i();return{selectMessage:(t,s)=>function(e,t,s){const r=e.split("|");if(1===r.length)return r[0];r.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=s.select(t),o=s.pluralForms.indexOf(n);return r[Math.min(o,r.length-1)]}(s,t,e)}}}}]);