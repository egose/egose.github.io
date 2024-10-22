"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1817],{3652:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var r=n(5893),d=n(1151),t=n(4866),i=n(5162);n(9286);const c={sidebar_position:0},l="List",o={id:"egose-adapter-js/model-service/list",title:"List",description:"Basic",source:"@site/docs/egose-adapter-js/model-service/list.mdx",sourceDirName:"egose-adapter-js/model-service",slug:"/egose-adapter-js/model-service/list",permalink:"/docs/egose-adapter-js/model-service/list",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"adapterjsSidebar",previous:{title:"Model Service",permalink:"/docs/egose-adapter-js/model-service/"},next:{title:"Read",permalink:"/docs/egose-adapter-js/model-service/read"}},a={},h=[{value:"<code>Basic</code>",id:"basic",level:2},{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Response",id:"response",level:3},{value:"<code>Advanced</code>",id:"advanced",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Parameters",id:"parameters-1",level:3},{value:"Response",id:"response-1",level:3}];function x(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"list",children:"List"})}),"\n","\n",(0,r.jsx)(s.h2,{id:"basic",children:(0,r.jsx)(s.code,{children:"Basic"})}),"\n",(0,r.jsxs)(s.p,{children:["This method interacts with the ",(0,r.jsx)(s.a,{href:"/docs/egose-acl/api-endpoints/list#list-resources",children:"Basic List"})," endpoint to retrieve a set of resources."]}),"\n",(0,r.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const response = await userService.list();\n"})}),"\n",(0,r.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"args"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ListArgs"})," (optional)"]}),(0,r.jsx)(s.td,{children:"Optional arguments for controlling the list operation."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"options"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ListOptions"})," (optional)"]}),(0,r.jsx)(s.td,{children:"Additional options for customizing the list request."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"axiosRequestConfig"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"})," (optional)"]}),(0,r.jsx)(s.td,{children:"Axios request configuration for fine-tuning the HTTP request."})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"interface ListArgs {\n  skip?: number;      // Number of items to skip in the list.\n  limit?: number;     // Maximum number of items to include in the list.\n  page?: number;      // Current page number for paginated results.\n  pageSize?: number;  // Number of items per page for paginated results.\n}\n\ninterface ListOptions {\n  skim?: boolean;                 // Enable skim mode.\n  includePermissions?: boolean;   // Include permissions in the response.\n  includeCount?: boolean;         // Include the count of resources in the response.\n  includeExtraHeaders?: boolean;  // Include extra headers in the response.\n  ignoreCache?: boolean;          // Ignore cache and fetch fresh data.\n  sq?: sqOptions;                 // Options related to Sub-Query.\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Prop"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"success"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"boolean"})}),(0,r.jsx)(s.td,{children:"Indicates whether the request was successful."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"status"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{children:"HTTP status code of the response."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"message"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"A message providing additional information about the response, especially in case of errors."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"totalCount"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{children:"Total count of resources in the response."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"raw"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"array[object]"})}),(0,r.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"data"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"array[Model]"})}),(0,r.jsx)(s.td,{children:"Parsed data represented as an array of Model instances."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"headers"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"object[AxiosHeaders]"})}),(0,r.jsx)(s.td,{children:"Axios headers associated with the response."})]})]})]}),"\n",(0,r.jsxs)(t.Z,{className:"unique-tabs",children:[(0,r.jsx)(i.Z,{value:"200",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: true,\n  status: 200,\n  totalCount: 2,\n  raw: [\n    {\n      _id: '656cd57be338c0057899a597',\n      name: 'John',\n      role: 'user',\n      public: true,\n      _permissions: {}\n    },\n    {\n      _id: '656cd57be338c0057899a599',\n      name: 'Ella',\n      role: 'user',\n      public: true,\n      _permissions: {}\n    }\n  ],\n  data: [\n    Model {\n      _id: [Getter/Setter],\n      name: [Getter/Setter],\n      role: [Getter/Setter],\n      public: [Getter/Setter],\n      _permissions: [Getter/Setter]\n    },\n    Model {\n      _id: [Getter/Setter],\n      name: [Getter/Setter],\n      role: [Getter/Setter],\n      public: [Getter/Setter],\n      _permissions: [Getter/Setter]\n    }\n  ],\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,r.jsx)(i.Z,{value:"401",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: false,\n  status: 401,\n  message: 'Unauthorized',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,r.jsx)(i.Z,{value:"403",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Forbidden',\n  headers: Object [AxiosHeaders] {}\n}\n"})})})]}),"\n",(0,r.jsx)(s.h2,{id:"advanced",children:(0,r.jsx)(s.code,{children:"Advanced"})}),"\n",(0,r.jsxs)(s.p,{children:["This method interacts with the ",(0,r.jsx)(s.a,{href:"/docs/egose-acl/api-endpoints/list#list-resources---advanced",children:"Advanced List"})," endpoint to retrieve a set of resources with advanced options."]}),"\n",(0,r.jsx)(s.h3,{id:"usage-1",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const response = await userService.listAdvanced({ name: 'John' }, { select: ['name'] });\n"})}),"\n",(0,r.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"filter"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"FilterQuery"})}),(0,r.jsx)(s.td,{children:"Query to filter the resources."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"args"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ListAdvancedArgs"})," (optional)"]}),(0,r.jsx)(s.td,{children:"Advanced arguments for controlling the list operation."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"options"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ListAdvancedOptions"})," (optional)"]}),(0,r.jsx)(s.td,{children:"Additional options for customizing the advanced list request."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"axiosRequestConfig"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"AxiosRequestConfig"})," (optional)"]}),(0,r.jsx)(s.td,{children:"Axios request configuration for fine-tuning the HTTP request."})]})]})]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"interface ListAdvancedArgs {\n  select?: Projection;                        // Projection for selecting specific fields.\n  populate?: Populate[] | Populate | string;  // Data to populate in the response.\n  include?: Include | Include[];              // Additional resources to include in the response.\n  sort?: Sort;                                // Sorting options for the list.\n  skip?: string | number;                     // Number of items to skip in the list.\n  limit?: string | number;                    // Maximum number of items to include in the list.\n  page?: string | number;                     // Current page number for paginated results.\n  pageSize?: string | number;                 // Number of items per page for paginated results.\n}\n\ninterface ListAdvancedOptions {\n  skim?: boolean;                   // Enable skim mode.\n  includePermissions?: boolean;     // Include permissions in the response.\n  includeCount?: boolean;           // Include the count of resources in the response.\n  includeExtraHeaders?: boolean;    // Include extra headers in the response.\n  ignoreCache?: boolean;            // Ignore cache and fetch fresh data.\n  populateAccess?: PopulateAccess;  // Options for populating access-related data.\n  sq?: sqOptions;                   // Options related to Sub-Query.\n}\n"})}),"\n",(0,r.jsx)(s.h3,{id:"response-1",children:"Response"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Prop"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"success"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"boolean"})}),(0,r.jsx)(s.td,{children:"Indicates whether the request was successful."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"status"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{children:"HTTP status code of the response."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"message"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{children:"A message providing additional information about the response, especially in case of errors."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"totalCount"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{children:"Total count of resources in the response."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"raw"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"array[object]"})}),(0,r.jsx)(s.td,{children:"Raw data received from the server."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"data"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"array[Model]"})}),(0,r.jsx)(s.td,{children:"Parsed data represented as an array of Model instances."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"headers"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"object[AxiosHeaders]"})}),(0,r.jsx)(s.td,{children:"Axios headers associated with the response."})]})]})]}),"\n",(0,r.jsxs)(t.Z,{className:"unique-tabs",children:[(0,r.jsx)(i.Z,{value:"200",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: true,\n  status: 200,\n  totalCount: 2,\n  raw: [\n    {\n      _id: '656cd57be338c0057899a597',\n      name: 'John',\n      _permissions: {}\n    }\n  ],\n  data: [\n    Model {\n      _id: [Getter/Setter],\n      name: [Getter/Setter],\n      _permissions: [Getter/Setter]\n    }\n  ],\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,r.jsx)(i.Z,{value:"401",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: false,\n  status: 401,\n  message: 'Unauthorized',\n  headers: Object [AxiosHeaders] {}\n}\n"})})}),(0,r.jsx)(i.Z,{value:"403",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"{\n  success: false,\n  status: 403,\n  message: 'Forbidden',\n  headers: Object [AxiosHeaders] {}\n}\n"})})})]})]})}function j(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}}}]);