import{u as d,j as e,L as m}from"./app-CCx1_5AL.js";import{c as n,a as t}from"./createLucideIcon-97oO_UI0.js";import{S as u,H as h}from"./layout-ufqKwA8_.js";import{A as x}from"./app-layout-w90uDOo5.js";import"./index-D0LANlit.js";import"./index-DwheMYVf.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],k=n("Moon",g);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],b=n("Sun",y);function j({className:s="",...r}){const{appearance:c,updateAppearance:p}=d(),o=[{value:"light",icon:b,label:"Light"},{value:"dark",icon:k,label:"Dark"}];return e.jsx("div",{className:t("inline-flex gap-1 rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800",s),...r,children:o.map(({value:a,icon:i,label:l})=>e.jsxs("button",{onClick:()=>p(a),className:t("flex items-center rounded-md px-3.5 py-1.5 transition-colors",c===a?"bg-white shadow-xs dark:bg-neutral-700 dark:text-neutral-100":"text-neutral-500 hover:bg-neutral-200/60 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-700/60"),children:[e.jsx(i,{className:"-ml-1 h-4 w-4"}),e.jsx("span",{className:"ml-1.5 text-sm",children:l})]},a))})}const f=[{title:"Appearance settings",href:"/settings/appearance"}];function w(){return e.jsxs(x,{breadcrumbs:f,children:[e.jsx(m,{title:"Appearance settings"}),e.jsx(u,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(h,{title:"Appearance settings",description:"Update your account's appearance settings"}),e.jsx(j,{})]})})]})}export{w as default};
