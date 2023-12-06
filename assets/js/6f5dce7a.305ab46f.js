"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9418],{5471:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=s(5893),n=s(1151),i=(s(4866),s(5162),s(9286),s(2991));const c={},a="Sub-Documents",o={id:"egose-adapter-js/model-service/sub/index",title:"Sub-Documents",description:"The model service supports CRUD operations against sub-documents.",source:"@site/docs/egose-adapter-js/model-service/sub/index.mdx",sourceDirName:"egose-adapter-js/model-service/sub",slug:"/egose-adapter-js/model-service/sub/",permalink:"/docs/egose-adapter-js/model-service/sub/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"adapterjsSidebar",previous:{title:"Distinct",permalink:"/docs/egose-adapter-js/model-service/distinct"},next:{title:"List",permalink:"/docs/egose-adapter-js/model-service/sub/list"}},d={},l=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"sub-documents",children:"Sub-Documents"}),"\n","\n",(0,r.jsx)(t.p,{children:"The model service supports CRUD operations against sub-documents."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import egoseAdapter from '@egose/adapter-js';\n\nconst adapter = egoseAdapter.createAdapter({ baseURL: 'http://127.0.0.1:3000/api' });\n\ninterface Status {\n  name: string;\n  active: boolean;\n}\n\ninterface User {\n  name: string;\n  statusHistory: Status[];\n  [key: string]: any;\n}\n\nconst userService = adapter.createModelService<User>({ modelName: 'User', basePath: 'users' });\nconst sub = services.userService.id('79c8c567b05e986509d55733a').subs('statusHistory');\n"})}),"\n","\n","\n",(0,r.jsx)(i.Z,{})]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2991:(e,t,s)=>{s.d(t,{Z:()=>j});s(7294);var r=s(512),n=s(3438),i=s(9960),c=s(3919),a=s(5999),o=s(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=s(5893);function u(e){let{href:t,children:s}=e;return(0,l.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:s})}function m(e){let{href:t,icon:s,title:n,description:i}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(o.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:n,children:[s," ",n]}),i&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const s=(0,n.LM)(t);return s?(0,l.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const s=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.xz)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:s,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(h,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const s=(0,n.jA)();return(0,l.jsx)(j,{items:s.items,className:t})}function j(e){const{items:t,className:s}=e;if(!t)return(0,l.jsx)(g,{...e});const i=(0,n.MN)(t);return(0,l.jsx)("section",{className:(0,r.Z)("row",s),children:i.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}}}]);