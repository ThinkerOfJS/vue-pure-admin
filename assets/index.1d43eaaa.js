var p=Object.defineProperty,D=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var i=(s,e,o)=>e in s?p(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,r=(s,e)=>{for(var o in e||(e={}))F.call(e,o)&&i(s,o,e[o]);if(c)for(var o of c(e))b.call(e,o)&&i(s,o,e[o]);return s},d=(s,e)=>D(s,h(e));import{b as n}from"./index.705b3eb2.js";import{u as E}from"./hooks.71498ef0.js";import{d as x,bN as C,r as l,o as w,c as y,w as u,bQ as t,b$ as B,bR as a,a as k,c0 as _}from"./vendor.00cdb3d8.js";const I={class:"card-header"},J=_(" \u5F53\u524D\u89D2\u8272\uFF1A "),g={style:{"font-size":"26px"}},v=t("p",{style:{color:"#ffa500"}}," \u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316(\u7CFB\u7EDF\u7BA1\u7406)\uFF0C\u6A21\u62DF\u540E\u53F0\u6839\u636E\u4E0D\u540C\u89D2\u8272\u8FD4\u56DE\u5BF9\u5E94\u8DEF\u7531 ",-1),A=_("\u5207\u6362\u89D2\u8272"),N={name:"permissionPage"},G=x(d(r({},N),{setup(s){let e=C(n.getItem("info").username);function o(){a(e)==="admin"?(n.setItem("info",{username:"test",accessToken:"eyJhbGciOiJIUzUxMiJ9.test"}),window.location.reload()):(n.setItem("info",{username:"admin",accessToken:"eyJhbGciOiJIUzUxMiJ9.admin"}),window.location.reload())}return(U,j)=>{const f=l("el-button"),m=l("el-card");return w(),y(m,null,{header:u(()=>[t("div",I,[t("span",null,[J,t("span",g,B(a(e)),1),v])])]),default:u(()=>[k(f,{type:"primary",onClick:o,icon:a(E)("user",{color:"#fff"})},{default:u(()=>[A]),_:1},8,["icon"])]),_:1})}}}));export{G as default};
