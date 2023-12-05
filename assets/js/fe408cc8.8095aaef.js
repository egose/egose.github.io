"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23],{3146:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>x,frontMatter:()=>c,metadata:()=>l,toc:()=>h});var d=n(5893),r=n(1151),i=n(4866),t=n(5162);n(9286);const c={sidebar_position:1},a="Read",l={id:"egose-adapter-js/model-service/read",title:"Read",description:"Basic",source:"@site/docs/egose-adapter-js/model-service/read.mdx",sourceDirName:"egose-adapter-js/model-service",slug:"/egose-adapter-js/model-service/read",permalink:"/docs/egose-adapter-js/model-service/read",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"adapterjsSidebar",previous:{title:"List",permalink:"/docs/egose-adapter-js/model-service/list"},next:{title:"Create",permalink:"/docs/egose-adapter-js/model-service/create"}},o={},h=[{value:"<code>Basic</code>",id:"basic",level:2},{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:3},{value:"<code>Advanced</code>",id:"advanced",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Response",id:"response-1",level:3},{value:"<code>Advanced Filter</code>",id:"advanced-filter",level:2},{value:"Usage",id:"usage-2",level:3},{value:"Parameters",id:"parameters-2",level:3},{value:"Response",id:"response-2",level:3}];function j(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{id:"read",children:"Read"}),"\n","\n","\n",(0,d.jsx)(s.h2,{id:"basic",children:(0,d.jsx)(s.code,{children:"Basic"})}),"\n",(0,d.jsxs)(s.p,{children:["This method interacts with the ",(0,d.jsx)(s.a,{href:"/docs/egose-acl/api-endpoints/read#read-resources",children:"Basic Read"})," endpoint to retrieve a single resource by its identifier."]}),"\n",(0,d.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:"const response = await userService.read('656cd57be338c0057899a597');\n"})}),"\n",(0,d.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"identifier"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Unique identifier of the resource to be retrieved."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"options"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"ReadOptions"})," (optional)"]}),(0,d.jsx)(s.td,{children:"Additional options for customizing the read operation."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"axiosRequestConfig"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"AxiosRequestConfig"})," (optional)"]}),(0,d.jsx)(s.td,{children:"Axios request configuration for fine-tuning the HTTP request."})]})]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:"interface ReadOptions {\n    includePermissions?: boolean;  // Include permissions in the response.\n    tryList?: boolean;             // Attempt to retrieve the resource using the list operation.\n    ignoreCache?: boolean;         // Ignore cache and fetch fresh data.\n    sq?: sqOptions;                // Options related to Sub-Query.\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Prop"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"success"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"boolean"})}),(0,d.jsx)(s.td,{children:"Indicates whether the request was successful."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"status"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"number"})}),(0,d.jsx)(s.td,{children:"HTTP status code of the response."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"message"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"A message providing additional information about the response, especially in case of errors."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"raw"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object"})}),(0,d.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"data"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"Model"})}),(0,d.jsx)(s.td,{children:"Parsed data represented as an array of Model instances."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"headers"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object[AxiosHeaders]"})}),(0,d.jsx)(s.td,{children:"Axios headers associated with the response."})]})]})]}),"\n",(0,d.jsxs)(i.Z,{className:"unique-tabs",children:[(0,d.jsx)(t.Z,{value:"200",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: true,\n  status: 200,\n  raw: {\n    _id: '656cd57be338c0057899a597',\n    name: 'John',\n    role: 'user',\n    public: true,\n    _permissions: {}\n  },\n  data: Model {\n    _id: [Getter/Setter],\n    name: [Getter/Setter],\n    role: [Getter/Setter],\n    public: [Getter/Setter],\n    _permissions: [Getter/Setter]\n  },\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(t.Z,{value:"401",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 401,\n  message: 'Unauthorized',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(t.Z,{value:"403",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Forbidden',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(t.Z,{value:"404",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Not Found',\n  headers: Object [AxiosHeaders] {}\n}\n"})})})]}),"\n",(0,d.jsx)(s.h2,{id:"advanced",children:(0,d.jsx)(s.code,{children:"Advanced"})}),"\n",(0,d.jsxs)(s.p,{children:["This method interacts with the ",(0,d.jsx)(s.a,{href:"/docs/egose-acl/api-endpoints/read#read-resource---advanced",children:"Advanced Read"})," endpoint to retrieve a single resource by its identifier with advanced options."]}),"\n",(0,d.jsx)(s.h3,{id:"usage-1",children:"Usage"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:"const response = await userService.readAdvanced('656cd57be338c0057899a597', { select: ['name'] });\n"})}),"\n",(0,d.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"identifier"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Unique identifier of the resource to be retrieved."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"args"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"ReadAdvancedArgs"})," (optional)"]}),(0,d.jsx)(s.td,{children:"Advanced arguments for controlling the read operation."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"options"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"ReadAdvancedOptions"})," (optional)"]}),(0,d.jsx)(s.td,{children:"Additional options for customizing the advanced read operation."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"axiosRequestConfig"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"AxiosRequestConfig"})," (optional)"]}),(0,d.jsx)(s.td,{children:"Axios request configuration for fine-tuning the HTTP request."})]})]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:"interface ReadAdvancedArgs {\n  select?: Projection;                        // Projection for selecting specific fields.\n  populate?: Populate[] | Populate | string;  // Data to populate in the response.\n  include?: Include | Include[];              // Additional resources to include in the response.\n}\n\ninterface ReadAdvancedOptions {\n  includePermissions?: boolean;     // Include permissions in the response.\n  tryList?: boolean;                // Attempt to retrieve the resource using the list operation.\n  populateAccess?: PopulateAccess;  // Options for populating access-related data.\n  ignoreCache?: boolean;            // Ignore cache and fetch fresh data.\n  sq?: sqOptions;                   // Options related to Sub-Query.\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"response-1",children:"Response"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Prop"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"success"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"boolean"})}),(0,d.jsx)(s.td,{children:"Indicates whether the request was successful."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"status"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"number"})}),(0,d.jsx)(s.td,{children:"HTTP status code of the response."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"message"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"A message providing additional information about the response, especially in case of errors."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"raw"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object"})}),(0,d.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"data"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"Model"})}),(0,d.jsx)(s.td,{children:"Parsed data represented as an array of Model instances."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"headers"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object[AxiosHeaders]"})}),(0,d.jsx)(s.td,{children:"Axios headers associated with the response."})]})]})]}),"\n",(0,d.jsxs)(i.Z,{className:"unique-tabs",children:[(0,d.jsx)(t.Z,{value:"200",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: true,\n  status: 200,\n  raw: {\n    _id: '656cd57be338c0057899a597',\n    name: 'John',\n    _permissions: {}\n  },\n  data: Model {\n    _id: [Getter/Setter],\n    name: [Getter/Setter],\n    _permissions: [Getter/Setter]\n  },\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(t.Z,{value:"401",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 401,\n  message: 'Unauthorized',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(t.Z,{value:"403",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Forbidden',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(t.Z,{value:"404",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Not Found',\n  headers: Object [AxiosHeaders] {}\n}\n"})})})]}),"\n",(0,d.jsx)(s.h2,{id:"advanced-filter",children:(0,d.jsx)(s.code,{children:"Advanced Filter"})}),"\n",(0,d.jsxs)(s.p,{children:["This method interacts with the ",(0,d.jsx)(s.a,{href:"/docs/egose-acl/api-endpoints/read#read-resource---advanced-filter",children:"Advanced Read Filter"})," endpoint to retrieve a single resource by filter."]}),"\n",(0,d.jsx)(s.h3,{id:"usage-2",children:"Usage"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:"const response = await userService.readAdvancedFilter({ name: 'John' }, { select: ['name'] });\n"})}),"\n",(0,d.jsx)(s.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"filter"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"FilterQuery"})}),(0,d.jsx)(s.td,{children:"Query to filter the resources."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"args"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"ReadAdvancedArgs"})," (optional)"]}),(0,d.jsx)(s.td,{children:"Advanced arguments for controlling the read operation."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"options"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"ReadAdvancedOptions"})," (optional)"]}),(0,d.jsx)(s.td,{children:"Additional options for customizing the advanced read operation."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"axiosRequestConfig"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"AxiosRequestConfig"})," (optional)"]}),(0,d.jsx)(s.td,{children:"Axios request configuration for fine-tuning the HTTP request."})]})]})]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-ts",children:"interface ReadAdvancedArgs {\n  select?: Projection;                        // Projection for selecting specific fields.\n  populate?: Populate[] | Populate | string;  // Data to populate in the response.\n  include?: Include | Include[];              // Additional resources to include in the response.\n}\n\ninterface ReadAdvancedOptions {\n  includePermissions?: boolean;     // Include permissions in the response.\n  tryList?: boolean;                // Attempt to retrieve the resource using the list operation.\n  populateAccess?: PopulateAccess;  // Options for populating access-related data.\n  ignoreCache?: boolean;            // Ignore cache and fetch fresh data.\n  sq?: sqOptions;                   // Options related to Sub-Query.\n}\n"})}),"\n",(0,d.jsx)(s.h3,{id:"response-2",children:"Response"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Prop"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"success"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"boolean"})}),(0,d.jsx)(s.td,{children:"Indicates whether the request was successful."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"status"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"number"})}),(0,d.jsx)(s.td,{children:"HTTP status code of the response."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"message"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"A message providing additional information about the response, especially in case of errors."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"raw"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object"})}),(0,d.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"data"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"Model"})}),(0,d.jsx)(s.td,{children:"Parsed data represented as an array of Model instances."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"headers"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object[AxiosHeaders]"})}),(0,d.jsx)(s.td,{children:"Axios headers associated with the response."})]})]})]}),"\n",(0,d.jsxs)(i.Z,{className:"unique-tabs",children:[(0,d.jsx)(t.Z,{value:"200",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: true,\n  status: 200,\n  raw: {\n    _id: '656cd57be338c0057899a597',\n    name: 'John',\n    _permissions: {}\n  },\n  data: Model {\n    _id: [Getter/Setter],\n    name: [Getter/Setter],\n    _permissions: [Getter/Setter]\n  },\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(t.Z,{value:"401",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 401,\n  message: 'Unauthorized',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(t.Z,{value:"403",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Forbidden',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,d.jsx)(t.Z,{value:"404",children:(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Not Found',\n  headers: Object [AxiosHeaders] {}\n}\n"})})})]})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}}}]);