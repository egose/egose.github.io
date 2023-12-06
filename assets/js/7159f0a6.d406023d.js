"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1216],{240:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=d(5893),r=d(1151),t=d(4866),c=d(5162);d(9286);const i={sidebar_position:3},a="Update",l={id:"egose-adapter-js/model-service/update",title:"Update",description:"Basic",source:"@site/docs/egose-adapter-js/model-service/update.mdx",sourceDirName:"egose-adapter-js/model-service",slug:"/egose-adapter-js/model-service/update",permalink:"/docs/egose-adapter-js/model-service/update",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adapterjsSidebar",previous:{title:"Create",permalink:"/docs/egose-adapter-js/model-service/create"},next:{title:"Delete",permalink:"/docs/egose-adapter-js/model-service/delete"}},o={},h=[{value:"<code>Basic</code>",id:"basic",level:2},{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:3},{value:"<code>Advanced</code>",id:"advanced",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Response",id:"response-1",level:3}];function j(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"update",children:"Update"}),"\n","\n","\n",(0,n.jsx)(s.h2,{id:"basic",children:(0,n.jsx)(s.code,{children:"Basic"})}),"\n",(0,n.jsxs)(s.p,{children:["This method interacts with the ",(0,n.jsx)(s.a,{href:"/docs/egose-acl/api-endpoints/update#update-resource",children:"Basic Update"})," endpoint to update a resource."]}),"\n",(0,n.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const response = await userService.update('79c8c567b05e986509d55733a', { public: false });\n"})}),"\n",(0,n.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"identifier"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"Unique identifier of the resource to be updated."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"data"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"object"})}),(0,n.jsx)(s.td,{children:"Data for updating the resource."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"options"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"UpdateOptions"})," (optional)"]}),(0,n.jsx)(s.td,{children:"Additional options for customizing the update operation."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"axiosRequestConfig"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"})," (optional)"]}),(0,n.jsx)(s.td,{children:"Axios request configuration for fine-tuning the HTTP request."})]})]})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"interface UpdateOptions {\n  returningAll?: boolean;  // Set to `true` to return all fields in the response.\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Prop"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"success"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})}),(0,n.jsx)(s.td,{children:"Indicates whether the request was successful."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"status"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"number"})}),(0,n.jsx)(s.td,{children:"HTTP status code of the response."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"message"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"A message providing additional information about the response, especially in case of errors."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"raw"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"object"})}),(0,n.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"data"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Model"})}),(0,n.jsx)(s.td,{children:"Parsed data represented as an array of Model instances."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"headers"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"object[AxiosHeaders]"})}),(0,n.jsx)(s.td,{children:"Axios headers associated with the response."})]})]})]}),"\n",(0,n.jsxs)(t.Z,{className:"unique-tabs",children:[(0,n.jsx)(c.Z,{value:"200",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n  success: true,\n  status: 200,\n  raw: {\n    _id: '79c8c567b05e986509d55733a',\n    name: 'Lucy',\n    role: 'user',\n    public: false,\n    _permissions: {}\n  },\n  data: Model {\n    _id: [Getter/Setter],\n    name: [Getter/Setter],\n    role: [Getter/Setter],\n    public: [Getter/Setter],\n    _permissions: [Getter/Setter]\n  },\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,n.jsx)(c.Z,{value:"400",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n  success: false,\n  status: 400,\n  message: 'Bad Request',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,n.jsx)(c.Z,{value:"401",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n  success: false,\n  status: 401,\n  message: 'Unauthorized',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,n.jsx)(c.Z,{value:"403",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Forbidden',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,n.jsx)(c.Z,{value:"404",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Not Found',\n  headers: Object [AxiosHeaders] {}\n}\n"})})})]}),"\n",(0,n.jsx)(s.h2,{id:"advanced",children:(0,n.jsx)(s.code,{children:"Advanced"})}),"\n",(0,n.jsxs)(s.p,{children:["This method interacts with the ",(0,n.jsx)(s.a,{href:"/docs/egose-acl/api-endpoints/update#update-resource---advanced",children:"Advanced Update"})," endpoint to update a resource with advanced options."]}),"\n",(0,n.jsx)(s.h3,{id:"usage-1",children:"Usage"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"const response = await userService.update('79c8c567b05e986509d55733a', { public: false }, { select: ['name'] });\n"})}),"\n",(0,n.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"identifier"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"Unique identifier of the resource to be updated."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"data"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"object"})}),(0,n.jsx)(s.td,{children:"Data for updating the resource."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"args"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"UpdateAdvancedArgs"})," (optional)"]}),(0,n.jsx)(s.td,{children:"Advanced arguments for controlling the update operation."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"options"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"UpdateAdvancedOptions"})," (optional)"]}),(0,n.jsx)(s.td,{children:"Additional options for customizing the advanced update operation."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"axiosRequestConfig"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.code,{children:"AxiosRequestConfig"})," (optional)"]}),(0,n.jsx)(s.td,{children:"Axios request configuration for fine-tuning the HTTP request."})]})]})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"interface UpdateAdvancedArgs {\n  select?: Projection;                        // Projection for selecting specific fields.\n  populate?: Populate[] | Populate | string;  // Data to populate in the response.\n}\n\ninterface UpdateAdvancedOptions {\n  returningAll?: boolean;           // Set to `true` to return all updated fields in the response.\n  includePermissions?: boolean;     // Include permissions in the response.\n  populateAccess?: PopulateAccess;  // Options for populating access-related data.\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"response-1",children:"Response"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Prop"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"success"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"boolean"})}),(0,n.jsx)(s.td,{children:"Indicates whether the request was successful."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"status"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"number"})}),(0,n.jsx)(s.td,{children:"HTTP status code of the response."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"message"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"string"})}),(0,n.jsx)(s.td,{children:"A message providing additional information about the response, especially in case of errors."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"raw"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"object"})}),(0,n.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"data"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Model"})}),(0,n.jsx)(s.td,{children:"Parsed data represented as an array of Model instances."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"headers"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"object[AxiosHeaders]"})}),(0,n.jsx)(s.td,{children:"Axios headers associated with the response."})]})]})]}),"\n",(0,n.jsxs)(t.Z,{className:"unique-tabs",children:[(0,n.jsx)(c.Z,{value:"200",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n  success: true,\n  status: 200,\n  raw: {\n    _id: '79c8c567b05e986509d55733a',\n    name: 'Lucy',\n    _permissions: {}\n  },\n  data: Model {\n    _id: [Getter/Setter],\n    name: [Getter/Setter],\n    _permissions: [Getter/Setter]\n  },\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,n.jsx)(c.Z,{value:"400",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n  success: false,\n  status: 400,\n  message: 'Bad Request',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,n.jsx)(c.Z,{value:"401",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n  success: false,\n  status: 401,\n  message: 'Unauthorized',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,n.jsx)(c.Z,{value:"403",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Forbidden',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,n.jsx)(c.Z,{value:"404",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Not Found',\n  headers: Object [AxiosHeaders] {}\n}\n"})})})]})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}}}]);