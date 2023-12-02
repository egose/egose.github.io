"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[176],{2628:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=o(5893),i=o(1151);o(4866),o(5162),o(9286);const s={sidebar_position:1},d="Default Model Router Options",r={id:"egose-acl/options/default-model-options",title:"Default Model Router Options",description:"Options for Default Model Routers",source:"@site/docs/egose-acl/options/default-model-options.mdx",sourceDirName:"egose-acl/options",slug:"/egose-acl/options/default-model-options",permalink:"/docs/egose-acl/options/default-model-options",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"aclSidebar",previous:{title:"Global Options",permalink:"/docs/egose-acl/options/global-options"},next:{title:"Model Router Options",permalink:"/docs/egose-acl/options/model-options"}},a={},l=[{value:"Options for Default Model Routers",id:"options-for-default-model-routers",level:2},{value:"permissionField",id:"permissionfield",level:3},{value:"idParam",id:"idparam",level:3},{value:"identifier",id:"identifier",level:3},{value:"parentPath",id:"parentpath",level:3},{value:"queryPath",id:"querypath",level:3},{value:"mutationPath",id:"mutationpath",level:3},{value:"listHardLimit",id:"listhardlimit",level:3},{value:"routeGuard",id:"routeguard",level:3}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"default-model-router-options",children:"Default Model Router Options"}),"\n","\n","\n",(0,n.jsx)(t.h2,{id:"options-for-default-model-routers",children:"Options for Default Model Routers"}),"\n",(0,n.jsx)(t.p,{children:"The default model router options are applied to a router when a specific option is not provided. In these cases, the default options are used."}),"\n",(0,n.jsx)(t.h3,{id:"permissionfield",children:"permissionField"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"permissionField"})," option specifies the name of the object field that is used to set the model permissions in the Mongoose document or document object. By default, it is set to ",(0,n.jsx)(t.code,{children:"_permissions"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import egose from '@egose/acl';\n\nconst permissionField = '__access';\n\negose.setDefaultModelOption('permissionField', permissionField);\n\n// or\n\negose.setDefaultModelOptions({ permissionField });\n"})}),"\n",(0,n.jsx)(t.h3,{id:"idparam",children:"idParam"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"idParam"})," option is used to specify the ",(0,n.jsx)(t.code,{children:"Express Route Parameter"})," that is used to capture the ",(0,n.jsx)(t.code,{children:"Document ID"})," value. This option is only applicable when creating the model router and is set to ",(0,n.jsx)(t.code,{children:"id"})," by default."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import egose from '@egose/acl';\n\nconst idParam = 'doc_id';\n\negose.setDefaultModelOption('idParam', idParam);\n\n// or\n\negose.setDefaultModelOptions({ idParam });\n"})}),"\n",(0,n.jsx)(t.h3,{id:"identifier",children:"identifier"}),"\n",(0,n.jsxs)(t.p,{children:["The option ",(0,n.jsx)(t.code,{children:"identifier"})," defines how ",(0,n.jsx)(t.code,{children:"id param"})," is used to find the target document, defaults to ",(0,n.jsx)(t.code,{children:"_id"})," field; there is more than one way to define the relation:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"string"}),": Mongoose document field key"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"function"}),": Function returns a Mongoose query to find the target document."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import egose from '@egose/acl';\n\nconst identifier = function (id) {\n  return { $or: [{ _id: id }, { code: id }] };\n};\n\negose.setDefaultModelOption('identifier', identifier);\n\n// or\n\negose.setDefaultModelOptions({ identifier });\n"})}),"\n",(0,n.jsx)(t.h3,{id:"parentpath",children:"parentPath"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"parentPath"})," option is a configuration setting that allows you to specify the path name between the ",(0,n.jsx)(t.code,{children:"host"})," and the ",(0,n.jsx)(t.code,{children:"basePath"})," for each model router. This option is used to build the full path for each router. If no other value is provided, it defaults to ",(0,n.jsx)(t.code,{children:"''"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import egose from '@egose/acl';\n\nconst parentPath = '/api';\n\negose.setDefaultModelOption('parentPath', parentPath);\n\n// or\n\negose.setDefaultModelOptions({ parentPath });\n"})}),"\n",(0,n.jsx)(t.h3,{id:"querypath",children:"queryPath"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"queryPath"})," option is used to set the path name (suffix) for ",(0,n.jsx)(t.code,{children:"Advanced View Routes"}),". If no other value is provided, it defaults to ",(0,n.jsx)(t.code,{children:"__query"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import egose from '@egose/acl';\n\nconst queryPath = '__q__';\n\negose.setDefaultModelOption('queryPath', queryPath);\n\n// or\n\negose.setDefaultModelOptions({ queryPath });\n"})}),"\n",(0,n.jsx)(t.h3,{id:"mutationpath",children:"mutationPath"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"mutationPath"})," option is used to set the path name (suffix) for ",(0,n.jsx)(t.code,{children:"Advanced Write Routes"}),". If no other value is provided, it defaults to ",(0,n.jsx)(t.code,{children:"__mutation"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import egose from '@egose/acl';\n\nconst mutationPath = '__m__';\n\negose.setDefaultModelOption('mutationPath', mutationPath);\n\n// or\n\negose.setDefaultModelOptions({ mutationPath });\n"})}),"\n",(0,n.jsx)(t.h3,{id:"listhardlimit",children:"listHardLimit"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"listHardLimit"})," option specifies the maximum number of documents to return from a query. It is useful for limiting the amount of data that is retrieved from the database, which can improve performance and reduce the risk of overloading the server or client."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import egose from '@egose/acl';\n\nconst listHardLimit = 100;\n\negose.setDefaultModelOption('listHardLimit', listHardLimit);\n\n// or\n\negose.setDefaultModelOptions({ listHardLimit });\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If the ",(0,n.jsx)(t.code,{children:"listHardLimit"})," option is set to ",(0,n.jsx)(t.code,{children:"100"})," and a request is made with a limit parameter that exceeds ",(0,n.jsx)(t.code,{children:"100"}),", the number of returned documents will be capped at ",(0,n.jsx)(t.code,{children:"100"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"routeguard",children:"routeGuard"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"routeGuard"})," option enables you to control access to the backend API endpoints based on the requester's global permissions. With this option, you can specify which routes are allowed and which ones are excluded, using the familiar CRUDL model (Create, Read, Update, Delete, and List)."]}),"\n",(0,n.jsxs)(t.p,{children:["By using ",(0,n.jsx)(t.code,{children:"routeGuard"}),", you can ensure that only authorized users can access and modify your data, helping to protect the confidentiality and integrity of your information."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import egose from '@egose/acl';\n\nconst listDef = true;\nconst readDef = ['isAdmin', 'isUser'];\nconst updateDef = 'isAdmin';\nconst createDef = function (globalPermissions) {\n  if (globalPermissions.isAdmin) return true;\n  return false;\n};\nconst deleteDef = false;\n\nconst routeGuard = {\n  list: listDef,\n  read: readDef,\n  create: createDef,\n  update: updateDef,\n  delete: deleteDef,\n};\n\negose.setDefaultModelOption('routeGuard', routeGuard);\negose.setDefaultModelOption('routeGuard.list', listDef);\negose.setDefaultModelOption('routeGuard.read', readDef);\negose.setDefaultModelOption('routeGuard.create', createDef);\negose.setDefaultModelOption('routeGuard.update', updateDef);\negose.setDefaultModelOption('routeGuard.delete', deleteDef);\n\n// or\n\negose.setDefaultModelOptions({ routeGuard });\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);