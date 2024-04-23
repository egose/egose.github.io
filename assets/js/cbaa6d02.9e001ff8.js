"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2436],{550:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var d=r(5893),c=r(1151),t=r(4866),n=r(5162);r(9286);const i={sidebar_position:2},a="Create",l={id:"egose-adapter-js/model-service/sub/create",title:"Create",description:"Basic",source:"@site/docs/egose-adapter-js/model-service/sub/create.mdx",sourceDirName:"egose-adapter-js/model-service/sub",slug:"/egose-adapter-js/model-service/sub/create",permalink:"/docs/egose-adapter-js/model-service/sub/create",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"adapterjsSidebar",previous:{title:"Read",permalink:"/docs/egose-adapter-js/model-service/sub/read"},next:{title:"Update",permalink:"/docs/egose-adapter-js/model-service/sub/update"}},h={},o=[{value:"<code>Basic</code>",id:"basic",level:2},{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:3}];function j(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"create",children:"Create"}),"\n","\n",(0,d.jsx)(s.h2,{id:"basic",children:(0,d.jsx)(s.code,{children:"Basic"})}),"\n",(0,d.jsx)(s.p,{children:"This method creates a single resource sub-document resource."}),"\n",(0,d.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:'const response = await services.userService\n  .id("79c8c567b05e986509d55733a")\n  .subs("statusHistory")\n  .create({ name: \'free\', status: true });\n'})}),"\n",(0,d.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"data"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object"})}),(0,d.jsx)(s.td,{children:"Data for creating the resource."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"axiosRequestConfig"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"AxiosRequestConfig"})," (optional)"]}),(0,d.jsx)(s.td,{children:"Axios request configuration for fine-tuning the HTTP request."})]})]})]}),"\n",(0,d.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Prop"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"success"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"boolean"})}),(0,d.jsx)(s.td,{children:"Indicates whether the request was successful."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"status"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"number"})}),(0,d.jsx)(s.td,{children:"HTTP status code of the response."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"message"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"A message providing additional information about the response, especially in case of errors."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"raw"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object"})}),(0,d.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"data"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object"})}),(0,d.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"headers"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object[AxiosHeaders]"})}),(0,d.jsx)(s.td,{children:"Axios headers associated with the response."})]})]})]}),"\n",(0,d.jsxs)(t.Z,{className:"unique-tabs",children:[(0,d.jsx)(n.Z,{value:"201",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: true,\n  status: 201,\n  raw: {\n    _id: '5e9553c0d09768056739c8cb7',\n    name: 'free',\n    active: true\n  },\n  data: {\n    _id: '5e9553c0d09768056739c8cb7',\n    name: 'free',\n    active: true\n  },\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(n.Z,{value:"400",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 400,\n  message: 'Bad Request',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(n.Z,{value:"401",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 401,\n  message: 'Unauthorized',\n  headers: Object [AxiosHeaders] {}\n}\n"})})})]})]})}function x(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}}}]);