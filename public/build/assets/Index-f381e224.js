import{q as o,j as t,a as e,b as h,d}from"./app-fa353b48.js";import{A as m}from"./AuthenticatedLayout-09ccbc68.js";import"./ApplicationLogo-72d29aa9.js";import"./transition-a91977b1.js";function y(s){const{posts:a}=o().props;function l(r){confirm("Are you sure you want to delete this user?")&&Inertia.delete(route("posts.destroy",r.currentTarget.id))}return t(m,{auth:s.auth,errors:s.errors,header:e("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Posts"}),children:[e(h,{title:"Posts"}),e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:t("div",{className:"p-6 bg-white border-b border-gray-200",children:[e("div",{className:"flex items-center justify-between mb-6",children:e(d,{className:"px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none",href:route("posts.create"),children:"Create Post"})}),t("table",{className:"table-fixed w-full",children:[e("thead",{children:t("tr",{className:"bg-gray-100",children:[e("th",{className:"px-4 py-2 w-20",children:"No."}),e("th",{className:"px-4 py-2",children:"Title"}),e("th",{className:"px-4 py-2",children:"Image"}),e("th",{className:"px-4 py-2",children:"Body"}),e("th",{className:"px-4 py-2",children:"Action"})]})}),t("tbody",{children:[a.map(({id:r,title:c,body:n,image:i})=>t("tr",{children:[e("td",{className:"border px-4 py-2",children:r}),e("td",{className:"border px-4 py-2",children:c}),e("td",{className:"border px-4 py-2 flex justify-center",children:e("img",{src:`storage/${i}`,className:"w-32 rounded"})}),e("td",{className:"border px-4 py-2",children:n}),t("td",{className:"border px-4 py-2",children:[e(d,{tabIndex:"1",className:"px-4 py-2 text-sm text-white bg-blue-500 rounded",href:route("posts.edit",r),children:"Edit"}),e("button",{onClick:l,id:r,tabIndex:"-1",type:"button",className:"mx-1 px-4 py-2 text-sm text-white bg-red-500 rounded",children:"Delete"})]})]},r)),a.length===0&&e("tr",{children:e("td",{className:"px-6 py-4 border-t",colSpan:"4",children:"No contacts found."})})]})]})]})})})})]})}export{y as default};