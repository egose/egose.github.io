"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4123],{4743:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var n=i(5893),c=i(1151);i(4866),i(5162),i(9286);const r={sidebar_position:1},o="Read",l={id:"egose-acl/crud-lifecycle/read",title:"Read",description:"Read operation executes hook methods in the following sequence:",source:"@site/docs/egose-acl/crud-lifecycle/read.mdx",sourceDirName:"egose-acl/crud-lifecycle",slug:"/egose-acl/crud-lifecycle/read",permalink:"/docs/egose-acl/crud-lifecycle/read",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"aclSidebar",previous:{title:"List",permalink:"/docs/egose-acl/crud-lifecycle/list"},next:{title:"Create",permalink:"/docs/egose-acl/crud-lifecycle/create"}},d={},t=[{value:"Configuration Example",id:"configuration-example",level:3}];function a(e){const s={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"read",children:"Read"}),"\n","\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Read"})," operation executes hook methods in the following sequence:"]}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Hook"}),(0,n.jsx)("th",{children:"Parameters"}),(0,n.jsx)("th",{children:"Description"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"docPermissions"})}),(0,n.jsx)("td",{children:(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"Mongoose document / plain document object"}),(0,n.jsx)("li",{children:"global permissions"})]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["skips if option ",(0,n.jsx)("code",{children:"includePermissions"})," set to ",(0,n.jsx)("code",{children:"false"})]}),(0,n.jsx)("li",{children:"called after Mongoose execute the query"})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:"decorate"})}),(0,n.jsx)("td",{children:(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:"plain document object"}),(0,n.jsx)("li",{children:"global permissions"})]})}),(0,n.jsx)("td",{children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:"runs on each document object"})})})]})]}),"\n",(0,n.jsx)(s.h3,{id:"configuration-example",children:"Configuration Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"modelRouter.docPermissions('read', function (docOrObject, globalPermissions) {\n  const isMe = String(docOrObject._id) === String(this.user._id);\n\n  return {\n    'edit.name': globalPermissions.isAdmin || isMe,\n    'edit.role': globalPermissions.isAdmin,\n  };\n});\n\nmodelRouter.decorate('read', function (docObject, globalPermissions) {\n  docObject.timestamp = new Date();\n  return docObject;\n});\n"})})]})}function h(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}}}]);