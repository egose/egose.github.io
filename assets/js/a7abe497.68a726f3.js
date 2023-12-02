"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6188],{6797:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>u,toc:()=>m});var r=n(5893),i=n(1151),o=n(4866),t=n(5162),l=n(9286);const d="import mongoose from 'mongoose';\nimport express from 'express';\nimport egose from '@egose/acl';\n\nconst app = express();\nconst router = express.Router();\n\nconst UserSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  role: { type: String, enum: ['admin', 'user'] },\n  public: { type: Boolean, default: false },\n});\n\nmongoose.model('User', UserSchema);\n\negose.set('globalPermissions', function (req) {\n  const user = req.user;\n\n  if (!user) return { isGuest: true };\n\n  return {\n    isGuest: false,\n    isUser: true,\n    isAdmin: user.role === 'admin',\n  };\n});\n\nconst userRouter = egose.createRouter('User', { basePath: '/users' });\n\nuserRouter.routeGuard({\n  list: true,\n  read: ['isAdmin', 'isUser'],\n  update: 'isAdmin',\n  create: function (globalPermissions) {\n    if (globalPermissions.isAdmin) return true;\n    return false;\n  },\n  delete: false,\n});\n\nuserRouter.baseFilter({\n  list: function (globalPermissions) {\n    return true;\n  },\n  read: function (globalPermissions) {\n    if (globalPermissions.isAdmin) return {};\n    else return { $or: [{ _id: this.user._id }, { public: true }] };\n  },\n  update: function (globalPermissions) {\n    if (globalPermissions.isAdmin) return {};\n    else return { _id: this.user._id };\n  },\n  delete: function (globalPermissions) {\n    return globalPermissions.isAdmin;\n  },\n});\n\nuserRouter.docPermissions(function (docOrObject, globalPermissions) {\n  const isMe = String(docOrObject._id) === String(this.user._id);\n\n  return {\n    'edit.name': globalPermissions.isAdmin || isMe,\n    'edit.role': globalPermissions.isAdmin,\n  };\n});\n\nuserRouter.permissionSchema({\n  name: { list: true, read: true, update: 'edit.name', create: true },\n  role: {\n    list: ['isAdmin', 'isUser'],\n    read: 'isAdmin',\n    update: function (globalPermissions, docPermissions) {\n      if (docPermissions['edit.role']) return true;\n      return false;\n    },\n    create: 'isAdmin',\n  },\n});\n\nrouter.use('/', userRouter.routes);\napp.use('/api', router);\napp.listen(3000);\n",a={sidebar_label:"Quick Start",sidebar_position:1},c="Quick Start",u={id:"egose-acl/quick-start",title:"Quick Start",description:"Before proceeding, make sure to install express and mongoose as peer dependencies. These packages are required for the proper functioning of the application and must be installed prior to running the code. You can install them using the npm package manager.",source:"@site/docs/egose-acl/quick-start.mdx",sourceDirName:"egose-acl",slug:"/egose-acl/quick-start",permalink:"/docs/egose-acl/quick-start",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Quick Start",sidebar_position:1},sidebar:"aclSidebar",previous:{title:"Philosophy",permalink:"/docs/egose-acl/philosophy"},next:{title:"Options",permalink:"/docs/egose-acl/options/"}},h={},m=[{value:"Installation",id:"installation",level:2},{value:"Backend Configuration",id:"backend-configuration",level:2},{value:"Mongoose Models",id:"mongoose-models",level:3},{value:"Global Permissions",id:"global-permissions",level:3},{value:"Model Router",id:"model-router",level:3},{value:"Route Guard",id:"route-guard",level:3},{value:"Base Filter",id:"base-filter",level:3},{value:"Document Permissions",id:"document-permissions",level:3},{value:"Permission Schema",id:"permission-schema",level:3},{value:"Binding the model router routes to the Express router",id:"binding-the-model-router-routes-to-the-express-router",level:3},{value:"Source Code",id:"source-code",level:3},{value:"Frontend Usage",id:"frontend-usage",level:2},{value:"Querying selected user list",id:"querying-selected-user-list",level:3},{value:"Querying a selected user",id:"querying-a-selected-user",level:3}];function p(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"quick-start",children:"Quick Start"}),"\n","\n",(0,r.jsxs)(s.p,{children:["Before proceeding, make sure to install ",(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/express",children:(0,r.jsx)(s.code,{children:"express"})})," and ",(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/mongoose",children:(0,r.jsx)(s.code,{children:"mongoose"})})," as peer dependencies. These packages are required for the proper functioning of the application and must be installed prior to running the code. You can install them using the npm package manager."]}),"\n",(0,r.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(t.Z,{value:"npm",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"npm install express mongoose @egose/deco --save\nnpm install @types/express --save-dev\n"})})}),(0,r.jsx)(t.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"yarn add express mongoose @egose/deco\nyarn add @types/express --dev\n"})})}),(0,r.jsx)(t.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"pnpm add express mongoose @egose/deco\npnpm add @types/express --save-dev\n"})})})]}),"\n",(0,r.jsx)(s.h2,{id:"backend-configuration",children:"Backend Configuration"}),"\n",(0,r.jsx)(s.h3,{id:"mongoose-models",children:"Mongoose Models"}),"\n",(0,r.jsxs)(s.p,{children:["The creation and retrieval of documents from the MongoDB database are handled by the ",(0,r.jsx)(s.code,{children:"mongoose models"}),". In turn, ",(0,r.jsx)(s.code,{children:"@egose/acl"})," relies on obtaining model details from these mongoose model objects."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"import mongoose from 'mongoose';\n\nconst UserSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  role: { type: String, enum: ['admin', 'user'] },\n  public: { type: Boolean, default: false },\n});\n\nexport default mongoose.model('User', UserSchema);\n"})}),"\n",(0,r.jsx)(s.h3,{id:"global-permissions",children:"Global Permissions"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Role-based access control (RBAC)"})," for the backend API endpoints relies on ",(0,r.jsx)(s.code,{children:"Global Permissions"})," as a foundational component. These permissions are utilized to ascertain the requester's access level for each request."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"import egose from '@egose/acl';\n\negose.set('globalPermissions', function (req) {\n  const user = req.user;\n\n  if (!user) return { isGuest: true };\n\n  return {\n    isGuest: false,\n    isUser: true,\n    isAdmin: user.role === 'admin',\n  };\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Upon execution, the global permission object will be assigned to the Express request object with the field name ",(0,r.jsx)(s.code,{children:"_permissions"}),".\nTo modify the name of the permission field, the ",(0,r.jsx)(s.code,{children:"permissionField"})," global option can be adjusted as shown below:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"egose.set('permissionField', 'mypermissions');\n"})}),"\n",(0,r.jsx)(s.h3,{id:"model-router",children:"Model Router"}),"\n",(0,r.jsx)(s.p,{children:"To generate predefined Express routes that bind to a Mongoose model, a model router can be established as follows:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const userRouter = egose.createRouter('User', { basePath: '/users' });\n"})}),"\n",(0,r.jsx)(s.p,{children:"The first argument provided must match a previously established Mongoose model name."}),"\n",(0,r.jsx)(s.h3,{id:"route-guard",children:"Route Guard"}),"\n",(0,r.jsxs)(s.p,{children:["The Route Guard function implements ",(0,r.jsx)(s.code,{children:"role-based security"})," and restricts access to the backend API endpoints based on global permissions. It permits only the defined routes, which include ",(0,r.jsx)(s.code,{children:"Create"}),", ",(0,r.jsx)(s.code,{children:"Read"}),", ",(0,r.jsx)(s.code,{children:"Update"}),", ",(0,r.jsx)(s.code,{children:"Delete"}),", and ",(0,r.jsx)(s.code,{children:"List"})," (CRUDL), and excludes any omitted routes. There are several methods to validate access:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"boolean"}),": ",(0,r.jsx)(s.code,{children:"true"})," or ",(0,r.jsx)(s.code,{children:"false"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"string"}),": considered valid if the key returns ",(0,r.jsx)(s.code,{children:"true"})," in the global permissions"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"array"}),": considered valid if any of the keys return ",(0,r.jsx)(s.code,{children:"true"})," in the global permissions"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"function"}),": considered valid if the function returns ",(0,r.jsx)(s.code,{children:"true"})]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"userRouter.routeGuard({\n  // the `list` route is available for any requesters including guests\n  list: true,\n  // the `read` route is available for requesters whose global permissions includes `isAdmin` or `isUser`\n  read: ['isAdmin', 'isUser'],\n  // the `update` route is available for requesters whose global permissions includes `isAdmin`\n  update: 'isAdmin',\n  // the `update` route is available for requesters whose global permissions includes `isAdmin`\n  create: function (globalPermissions) {\n    // `this` refers to Express request object\n    if (globalPermissions.isAdmin) return true;\n    return false;\n  },\n  // the `delete` route is not available for any requesters\n  delete: false,\n});\n"})}),"\n",(0,r.jsx)(s.h3,{id:"base-filter",children:"Base Filter"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"Base Filter"})," feature applies ",(0,r.jsx)(s.code,{children:"document-level security"})," to control access to individual documents in a collection. It achieves this by decorating the Mongoose Query object to define the permission guardrails based on the global permissions."]}),"\n",(0,r.jsxs)(s.p,{children:["To implement Base Filter, you can use the ",(0,r.jsx)(s.code,{children:"baseFilter"})," method on a model router, passing in an object with functions that define the filters for each CRUD operation like in the code snippet below:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"userRouter.baseFilter({\n  // the list operation allows all requests\n  list: function (globalPermissions) {\n    return true;\n  },\n  // the read operation returns the document if the requester is an admin or if the document is public\n  read: function (globalPermissions) {\n    if (globalPermissions.isAdmin) return {};\n    else return { $or: [{ _id: this.user._id }, { public: true }] };\n  },\n  // the update operation allows updates only if the requester is an admin or the document belongs to the requester\n  update: function (globalPermissions) {\n    if (globalPermissions.isAdmin) return {};\n    else return { _id: this.user._id };\n  },\n  // the delete operation allows deletion only if the requester is an admin\n  delete: function (globalPermissions) {\n    return globalPermissions.isAdmin;\n  },\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Suppose a non-admin user tries to update the user with ID ",(0,r.jsx)(s.code,{children:"123456"})," by providing the filter object ",(0,r.jsx)(s.code,{children:"{ _id: '123456' }"}),".\nTo fetch the document, the backend security boundary generates the following Mongoose filter object behind the scenes:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"const filter = { $and: [{ _id: this.user._id }, { _id: '123456' }] };\nconst result = await mongoose.model('User').findOne(filter);\n"})}),"\n",(0,r.jsx)(s.h3,{id:"document-permissions",children:"Document Permissions"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Document permissions"})," are essential for implementing ",(0,r.jsx)(s.code,{children:"field-level security"})," and can be accessed through applicable middleware hooks.\nAdditionally, document permissions can be retrieved in the frontend application and used to implement business logic in the user interface based on the user's permissions."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"userRouter.docPermissions(function (docOrObject, globalPermissions) {\n  const isMe = String(docOrObject._id) === String(this.user._id);\n\n  return {\n    'edit.name': globalPermissions.isAdmin || isMe,\n    'edit.role': globalPermissions.isAdmin,\n  };\n});\n"})}),"\n",(0,r.jsx)(s.h3,{id:"permission-schema",children:"Permission Schema"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"Permission schema"})," maps global and optional document permissions to resources, allowing for fine-grained control.\nIt provides ",(0,r.jsx)(s.code,{children:"field-level security"})," to restrict access to individual fields in a document, while ",(0,r.jsx)(s.code,{children:"Base Filter"})," provides ",(0,r.jsx)(s.code,{children:"document-level security"}),".\nIf no field-level security rule is defined for a field, by default, the field is protected for all actions (list, read, update, and create)."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"userRouter.permissionSchema({\n  name: { list: true, read: true, update: 'edit.name', create: true },\n  role: {\n    list: ['isAdmin', 'isUser'],\n    read: 'isAdmin',\n    update: function (globalPermissions, docPermissions) {\n      // `this` refers to Express request object\n      if (docPermissions['edit.role']) return true;\n      return false;\n    },\n    create: 'isAdmin',\n  },\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Note that global permissions are available for all actions, and document permissions are available for ",(0,r.jsx)(s.code,{children:"update"})," and ",(0,r.jsx)(s.code,{children:"create"})," actions.\nFor example, ",(0,r.jsx)(s.code,{children:"edit.name"})," is a document permission generated by the router option ",(0,r.jsx)(s.code,{children:"docPermissions"}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"binding-the-model-router-routes-to-the-express-router",children:"Binding the model router routes to the Express router"}),"\n",(0,r.jsx)(s.p,{children:"After configuring the model router, you can bind its routes to an Express router as shown below:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"import express from 'express';\n\nconst app = express();\nconst router = express.Router();\n\n// create a model router for the User model\nconst userRouter = egose.createRouter('User', { basePath: '/users' });\n\n// bind the User model router routes to the Express router\nrouter.use('/', userRouter.routes);\napp.use('/api', router);\n"})}),"\n",(0,r.jsx)(s.p,{children:"The above code will expose the following API endpoints:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"GET"})," /api/users"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POST"})," /api/users/__query"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POST"})," /api/users"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POST"})," /api/users/__mutation"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"GET"})," /api/users/new"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"GET"})," /api/users/",":id"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POST"})," /api/users/__query/",":id"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"PATCH"})," /api/users/",":id"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"PATCH"})," /api/users/__mutation/",":id"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"DELETE"})," /api/users/",":id"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"GET"})," /api/users/distinct/",":field"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POST"})," /api/users/distinct/",":field"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"GET"})," /api/users/count"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"POST"})," /api/users/count"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"These endpoints correspond to various CRUD operations for the User model, and also include routes for querying and manipulating data using Mongoose-like syntax."}),"\n",(0,r.jsx)(s.h3,{id:"source-code",children:"Source Code"}),"\n","\n","\n",(0,r.jsx)(l.Z,{language:"ts",children:d}),"\n",(0,r.jsx)(s.h2,{id:"frontend-usage",children:"Frontend Usage"}),"\n",(0,r.jsx)(s.h3,{id:"querying-selected-user-list",children:"Querying selected user list"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"const listQueryUrl = '/api/users/__query';\n\nconst data = {\n  filter: { role: 'user' },\n  select: ['name', 'role'],\n  sort: '-name',\n  populate: [],\n  page: 1,\n  limit: 2,\n};\n\nconst response = await fetch(listQueryUrl, {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify(data),\n});\n\nconst result = response.json();\n"})}),"\n",(0,r.jsx)(s.h3,{id:"querying-a-selected-user",children:"Querying a selected user"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"const targetUserId = 8;\nconst readQueryUrl = `/api/users/__query/${targetUserId}`;\n\nconst data = {\n  select: ['name', 'role'],\n  populate: [],\n  options: { includePermissions: true, tryList: true },\n};\n\nconst response = await fetch(readQueryUrl, {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify(data),\n});\n\nconst result = response.json();\n"})})]})}function g(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}}}]);