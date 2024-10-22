"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2499],{6947:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>h,contentTitle:()=>a,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var r=d(5893),n=d(1151),c=d(4866),i=d(5162);d(9286);const t={sidebar_position:1},a="Read",l={id:"egose-adapter-js/model-service/sub/read",title:"Read",description:"Basic",source:"@site/docs/egose-adapter-js/model-service/sub/read.mdx",sourceDirName:"egose-adapter-js/model-service/sub",slug:"/egose-adapter-js/model-service/sub/read",permalink:"/docs/egose-adapter-js/model-service/sub/read",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"adapterjsSidebar",previous:{title:"List",permalink:"/docs/egose-adapter-js/model-service/sub/list"},next:{title:"Create",permalink:"/docs/egose-adapter-js/model-service/sub/create"}},h={},o=[{value:"<code>Basic</code>",id:"basic",level:2},{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:3},{value:"<code>Advanced</code>",id:"advanced",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Response",id:"response-1",level:3}];function j(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"read",children:"Read"})}),"\n","\n",(0,r.jsx)(s.h2,{id:"basic",children:(0,r.jsx)(s.code,{children:"Basic"})}),"\n",(0,r.jsx)(s.p,{children:"This method retrieves a single resource sub-document resource by its identifier."}),"\n",(0,r.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:'const response = await services.userService\n  .id("79c8c567b05e986509d55733a")\n  .subs("statusHistory")\n  .read(\'95ac058c573be9879d059c663\');\n'})}),"\n",(0,r.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"subId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"The ID of the sub-document resource to be retrieved."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"axiosRequestConfig"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"})," (optional)"]}),(0,r.jsx)(s.td,{children:"Axios request configuration for fine-tuning the HTTP request."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Prop"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"success"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"boolean"})}),(0,r.jsx)(s.td,{children:"Indicates whether the request was successful."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"status"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{children:"HTTP status code of the response."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"message"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"A message providing additional information about the response, especially in case of errors."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"raw"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"object"})}),(0,r.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"data"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"object"})}),(0,r.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"headers"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"object[AxiosHeaders]"})}),(0,r.jsx)(s.td,{children:"Axios headers associated with the response."})]})]})]}),"\n",(0,r.jsxs)(c.Z,{className:"unique-tabs",children:[(0,r.jsx)(i.Z,{value:"200",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: true,\n  status: 200,\n  raw: {\n    _id: '95ac058c573be9879d059c663',\n    name: 'premium',\n    active: true\n  },\n  data: {\n    _id: '95ac058c573be9879d059c663',\n    name: 'premium',\n    active: true\n  },\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,r.jsx)(i.Z,{value:"401",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: false,\n  status: 401,\n  message: 'Unauthorized',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,r.jsx)(i.Z,{value:"403",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Forbidden',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,r.jsx)(i.Z,{value:"404",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Not Found',\n  headers: Object [AxiosHeaders] {}\n}\n"})})})]}),"\n",(0,r.jsx)(s.h2,{id:"advanced",children:(0,r.jsx)(s.code,{children:"Advanced"})}),"\n",(0,r.jsx)(s.p,{children:"This method retrieves a single resource sub-document resource by its identifier with advanced options."}),"\n",(0,r.jsx)(s.h3,{id:"usage-1",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const response = await services.userService\n  .id(\"79c8c567b05e986509d55733a\")\n  .subs(\"statusHistory\")\n  .readAdvanced('95ac058c573be9879d059c663', { select: ['name'] });\n"})}),"\n",(0,r.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"subId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"The ID of the sub-document resource to be retrieved."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"args"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"{ select?: string[]; populate?: any }"}),"  (optional)"]}),(0,r.jsx)(s.td,{children:"Advanced arguments for controlling the resource retrieval."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"axiosRequestConfig"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"})," (optional)"]}),(0,r.jsx)(s.td,{children:"Axios request configuration for fine-tuning the HTTP request."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"response-1",children:"Response"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Prop"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"success"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"boolean"})}),(0,r.jsx)(s.td,{children:"Indicates whether the request was successful."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"status"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{children:"HTTP status code of the response."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"message"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"A message providing additional information about the response, especially in case of errors."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"raw"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"object"})}),(0,r.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"data"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"object"})}),(0,r.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"headers"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"object[AxiosHeaders]"})}),(0,r.jsx)(s.td,{children:"Axios headers associated with the response."})]})]})]}),"\n",(0,r.jsxs)(c.Z,{className:"unique-tabs",children:[(0,r.jsx)(i.Z,{value:"200",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: true,\n  status: 200,\n  raw: {\n    _id: '95ac058c573be9879d059c663',\n    name: 'premium'\n  },\n  data: {\n    _id: '95ac058c573be9879d059c663',\n    name: 'premium'\n  },\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,r.jsx)(i.Z,{value:"401",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: false,\n  status: 401,\n  message: 'Unauthorized',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,r.jsx)(i.Z,{value:"403",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Forbidden',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,r.jsx)(i.Z,{value:"404",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Not Found',\n  headers: Object [AxiosHeaders] {}\n}\n"})})})]})]})}function x(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}}}]);