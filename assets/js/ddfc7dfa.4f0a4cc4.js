"use strict";(self.webpackChunkmiro_open_api_docs=self.webpackChunkmiro_open_api_docs||[]).push([[4457],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,l=t.originalType,p=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),u=s(n),f=i,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(y,o(o({ref:e},c),{},{components:n})):r.createElement(y,o({ref:e},c))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=n.length,o=new Array(l);o[0]=u;var a={};for(var p in e)hasOwnProperty.call(e,p)&&(a[p]=e[p]);a.originalType=t,a.mdxType="string"==typeof t?t:i,o[1]=a;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59621:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const l={},o="Info for a specific pet",a={type:"api",id:"info-for-a-specific-pet",unversionedId:"info-for-a-specific-pet",title:"Info for a specific pet",description:"",slug:"/info-for-a-specific-pet",frontMatter:{},api:{operationId:"showPetById",tags:["pets"],parameters:[{name:"petId",in:"path",required:!0,description:"The id of the pet to retrieve",schema:{type:"string"}}],responses:{200:{description:"Expected response to a valid request",content:{"application/json":{schema:{type:"object",required:["id","name"],properties:{id:{type:"integer",format:"int64"},name:{type:"string"},tag:{type:"string"}}}}}},default:{description:"unexpected error",content:{"application/json":{schema:{type:"object",required:["code","message"],properties:{code:{type:"integer",format:"int32"},message:{type:"string"}}}}}}},description:"Info for a specific pet",method:"get",path:"/pets/{petId}",servers:[{url:"http://petstore.swagger.io/v1"}],info:{version:"1.0.0",title:"Swagger Petstore",license:{name:"MIT"}},postman:{name:"Info for a specific pet",description:{type:"text/plain"},url:{path:["pets",":petId"],host:["{{baseUrl}}"],query:[],variable:[{description:{content:"(Required) The id of the pet to retrieve",type:"text/plain"},type:"any",value:"<string>",key:"petId"}]},method:"GET"}},source:"@site/openapi.json",sourceDirName:".",permalink:"/miro-open-api-docs/api/info-for-a-specific-pet",previous:{title:"Create a pet",permalink:"/miro-open-api-docs/api/create-a-pet"}},p=[],s={toc:p};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"info-for-a-specific-pet"},"Info for a specific pet"),(0,i.kt)("p",null,"Info for a specific pet"),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"petId"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,i.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,i.kt)("p",null,"The id of the pet to retrieve")))))),(0,i.kt)("table",{style:{display:"table",width:"100%"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"200")),(0,i.kt)("div",null,(0,i.kt)("p",null,"Expected response to a valid request"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"id"),(0,i.kt)("span",{style:{opacity:"0.6"}}," int64"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"name"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"tag"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string")))))))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{display:"flex"}},(0,i.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,i.kt)("code",null,"default")),(0,i.kt)("div",null,(0,i.kt)("p",null,"unexpected error"))),(0,i.kt)("div",null,(0,i.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,i.kt)("div",null)))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"code"),(0,i.kt)("span",{style:{opacity:"0.6"}}," int32"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("code",null,"message"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"),(0,i.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))}c.isMDXComponent=!0}}]);