"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9229],{4436:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var t=n(5893),r=n(1151),d=n(4866),l=n(5162);n(9286);const a={sidebar_position:4},i="Delete",c={id:"egose-acl/api-endpoints/delete",title:"Delete",description:"Delete Resource",source:"@site/docs/egose-acl/api-endpoints/delete.mdx",sourceDirName:"egose-acl/api-endpoints",slug:"/egose-acl/api-endpoints/delete",permalink:"/docs/egose-acl/api-endpoints/delete",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"aclSidebar",previous:{title:"Update",permalink:"/docs/egose-acl/api-endpoints/update"},next:{title:"New",permalink:"/docs/egose-acl/api-endpoints/new"}},o={},h=[{value:"Delete Resource",id:"delete-resource",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3},{value:"request",id:"request",level:4},{value:"response",id:"response",level:4}];function p(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"delete",children:"Delete"})}),"\n","\n",(0,t.jsx)(s.h2,{id:"delete-resource",children:"Delete Resource"}),"\n",(0,t.jsx)(s.p,{children:"This entrypoint deletes a target resource."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"DELETE /{base_url}/:id"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Name"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{children:"In"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.code,{children:"id"})}),(0,t.jsx)(s.td,{children:"string"}),(0,t.jsx)(s.td,{children:"param"}),(0,t.jsxs)(s.td,{children:["Resource identifier; ",(0,t.jsx)(s.code,{children:"required"})]})]})})]}),"\n",(0,t.jsx)(s.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.h4,{id:"request",children:"request"}),"\n",(0,t.jsxs)(d.Z,{className:"unique-tabs",children:[(0,t.jsx)(l.Z,{value:"cURL",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:'curl \\\n  -X DELETE \\\n  -H "Accept: application/json" \\\n  https://example.com/users/5d6ede6a0ba62570afcedd3b\n'})})}),(0,t.jsx)(l.Z,{value:"Javascript",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const targetId = '5d6ede6a0ba62570afcedd3b';\n\nconst url = 'https://example.com/users/' + targetId;\n\nconst response = await fetch(url, {\n  method: 'DELETE',\n  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },\n});\n\nconst result = response.json();\n"})})})]}),"\n",(0,t.jsx)(s.h4,{id:"response",children:"response"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",metastring:'title="Status: 200"',children:'"5d6ede6a0ba62570afcedd3b"\n'})})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);