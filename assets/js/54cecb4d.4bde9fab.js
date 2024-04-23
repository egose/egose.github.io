"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1326],{2477:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var s=n(5893),r=n(1151),t=n(4866),i=n(5162);n(9286);const l={sidebar_label:"Quick Start",sidebar_position:1},o="Quick Start",c={id:"egose-adapter-js/quick-start",title:"Quick Start",description:"Installation",source:"@site/docs/egose-adapter-js/quick-start.md",sourceDirName:"egose-adapter-js",slug:"/egose-adapter-js/quick-start",permalink:"/docs/egose-adapter-js/quick-start",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Quick Start",sidebar_position:1},sidebar:"adapterjsSidebar",previous:{title:"Philosophy",permalink:"/docs/egose-adapter-js/philosophy"},next:{title:"Model Service",permalink:"/docs/egose-adapter-js/model-service/"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function u(e){const a={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"quick-start",children:"Quick Start"}),"\n","\n",(0,s.jsx)(a.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(i.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install @egose/adapter-js\n"})})}),(0,s.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @egose/adapter-js\n"})})}),(0,s.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @egose/adapter-js\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-ts",children:'import egoseAdapter from "@egose/adapter-js";\n\nconst adapter = egoseAdapter.createAdapter({\n  baseURL: "http://127.0.0.1:3000/api",\n});\n\ninterface User {\n  name?: string;\n  role?: string;\n  statusHistory?: any[];\n  public?: boolean;\n  [key: string]: any;\n}\n\ninterface Org {\n  name?: string;\n  locations?: any[];\n  [key: string]: any;\n}\n\nconst userService = adapter.createModelService<User>({\n  modelName: "User",\n  basePath: "users",\n});\n\nconst orgService = adapter.createModelService<Org>({\n  modelName: "Org",\n  basePath: "orgs",\n});\n\nuserService\n  .create({ name: "john", role: "user", public: false })\n  .then(console.log);\n\nuserService\n  .update(\n    "8cb91bde3464f1461893aca4",\n    { public: false },\n    { returningAll: false }\n  )\n  .then(console.log);\n'})})]})}function g(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);