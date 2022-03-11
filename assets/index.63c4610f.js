var K=Object.defineProperty,P=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var R=(a,t,e)=>t in a?K(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,k=(a,t)=>{for(var e in t||(t={}))X.call(t,e)&&R(a,e,t[e]);if(w)for(var e of w(t))Y.call(t,e)&&R(a,e,t[e]);return a},T=(a,t)=>P(a,Q(t));import{bN as _,c2 as Z,d as G,bZ as J,ck as M,j as W,c7 as ee,cY as v,r as m,o as te,bP as oe,a as n,w as s,bR as l,c0 as f,b$ as x,bQ as ne,cd as ae,ce as le,c3 as ue,V as h}from"./vendor.00cdb3d8.js";import se from"./config.ffcc90b1.js";import{q as ie,_ as re}from"./index.705b3eb2.js";function ce(a){const t=_(a||""),e=_(!1),d=_(!1);return Z(t,i=>{ie(i)&&(d.value=!0,e.value=de(i))},{immediate:!!a,flush:"sync"}),{clipboardRef:t,isSuccessRef:e,copiedRef:d}}function de(a,{target:t=document.body}={}){const e=document.createElement("textarea"),d=document.activeElement;e.value=a,e.setAttribute("readonly",""),e.style.contain="strict",e.style.position="absolute",e.style.left="-9999px",e.style.fontSize="12pt";const i=document.getSelection();let p;i&&i.rangeCount>0&&(p=i.getRangeAt(0)),t.append(e),e.select(),e.selectionStart=0,e.selectionEnd=a.length;let b=!1;try{b=document.execCommand("copy")}catch(B){throw new Error(B)}return e.remove(),p&&i&&(i.removeAllRanges(),i.addRange(p)),d&&d.focus(),b}const me={class:"text-model"},fe=f("\u7F16\u8F91"),pe=f("\u65B0\u589E\u5B50\u7C7B\u578B"),_e=f("\u5B57\u5178\u914D\u7F6E"),be=f("\u5220\u9664"),ve={name:"dict"},xe=G(T(k({},ve),{setup(a){const{t}=J(),e=M({submitLoading:!1,showEdit:!1,selectRow:null,filterName:"",tableData:[{id:1,name:"\u72B6\u6001",model:"",children:[{id:"1-1",name:"\u670D\u52A1\u72B6\u6001",model:"serviceStatus"},{id:"1-2",name:"\u5728\u7EBF\u72B6\u6001",model:"onlienStatus"}]},{id:2,name:"\u64CD\u4F5C\u7CFB\u7EDF",model:"operatingSystem"}],formData:{name:"",model:""},formItems:[{field:"name",title:"\u5B57\u5178\u540D\u79F0",span:24,itemRender:{name:"$input",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0"}}},{field:"model",title:"\u5B57\u5178\u7C7B\u578B",span:24,itemRender:{name:"$input",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",disabled:!0}}},{align:"right",span:24,itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"\u63D0\u4EA4",status:"primary"}},{props:{type:"reset",content:"\u91CD\u7F6E"}}]}}]});let d=W(e.tableData);const i=ee("xTree",null),p=()=>{const o=v.toValueString(e.filterName).trim();if(o){const u={children:"children"},D=["name"];e.tableData=v.searchTree(d,c=>D.some(F=>v.toValueString(c[F]).indexOf(o)>-1),u),ue(()=>{i.value.setAllTreeExpand(!0)})}else e.tableData=d},b=v.debounce(function(){p()},100,{leading:!1,trailing:!0}),B=async()=>{await await h.modal.confirm("\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F")==="confirm"&&h.modal.message({content:"\u6D4B\u8BD5\u6570\u636E\uFF0C\u4E0D\u53EF\u5220\u9664",status:"error"})};function C(o,u){e.selectRow=o,e.showEdit=!0,e.formItems[1].itemRender.props.disabled=u}function $(){C(null,!1)}function A(o){C(null,!1)}function S(o){e.formData={name:o.name,model:o.model?o.model:"\u6682\u65E0\u5B57\u5178\u7C7B\u578B"},C(o,!0)}const{clipboardRef:V}=ce(),N=({row:o})=>{V.value=l(o).model},q=_({}),j=()=>{e.submitLoading=!0,setTimeout(()=>{const o=q.value;e.submitLoading=!1,e.showEdit=!1,e.selectRow?(h.modal.message({content:"\u4FDD\u5B58\u6210\u529F",status:"success"}),Object.assign(e.selectRow,e.formData)):(h.modal.message({content:"\u65B0\u589E\u6210\u529F",status:"success"}),o.insert(e.formData))},500)};let g=_(!1);function I(o){g.value=!0}function L(){g.value=!1}return(o,u)=>{const D=m("vxe-input"),c=m("vxe-button"),F=m("vxe-toolbar"),y=m("vxe-table-column"),z=m("el-tooltip"),O=m("vxe-table"),U=m("vxe-form"),H=m("vxe-modal");return te(),oe("div",null,[n(F,null,{buttons:s(()=>[n(D,{modelValue:l(e).filterName,"onUpdate:modelValue":u[0]||(u[0]=r=>l(e).filterName=r),placeholder:l(t)("buttons.hssearch"),onKeyup:l(b)},null,8,["modelValue","placeholder","onKeyup"])]),tools:s(()=>[n(c,{icon:"fa fa-plus-square-o",status:"primary",onClick:$},{default:s(()=>[f(x(l(t)("buttons.hsadd")),1)]),_:1}),n(c,{icon:"fa fa-folder-open-o",status:"primary",onClick:u[1]||(u[1]=r=>o.$refs.xTree.setAllTreeExpand(!0))},{default:s(()=>[f(x(l(t)("buttons.hsexpendAll")),1)]),_:1}),n(c,{icon:"fa fa-folder-o",status:"primary",onClick:u[2]||(u[2]=r=>o.$refs.xTree.clearTreeExpand())},{default:s(()=>[f(x(l(t)("buttons.hscollapseAll")),1)]),_:1})]),_:1}),n(O,{ref_key:"xTree",ref:i,border:"",resizable:"","tree-config":{children:"children",iconOpen:"fa fa-minus-square-o",iconClose:"fa fa-plus-square-o"},data:l(e).tableData,onCellDblclick:N},{default:s(()=>[n(y,{"tree-node":"",field:"name",title:"\u5B57\u5178\u540D\u79F0"}),n(y,{title:"\u5B57\u5178\u7C7B\u578B"},{default:s(({row:r})=>[n(z,{effect:"dark",content:"\u53CC\u51FB\u590D\u5236\uFF1A"+r.model,placement:"right"},{default:s(()=>[ne("span",me,x(r.model),1)]),_:2},1032,["content"])]),_:1}),n(y,{title:"\u64CD\u4F5C",width:"330",fixed:"right"},{default:s(({row:r})=>[n(c,{type:"text",icon:"fa fa-pencil-square-o",onClick:E=>S(r)},{default:s(()=>[fe]),_:2},1032,["onClick"]),n(c,{type:"text",icon:"fa fa-plus-square-o",onClick:E=>A()},{default:s(()=>[pe]),_:2},1032,["onClick"]),ae(n(c,{type:"text",icon:"fa fa-cog",onClick:E=>I()},{default:s(()=>[_e]),_:2},1032,["onClick"]),[[le,r.model]]),n(c,{type:"text",icon:"fa fa-trash-o",onClick:B},{default:s(()=>[be]),_:1})]),_:1})]),_:1},8,["data"]),n(H,{resize:"",width:"450",modelValue:l(e).showEdit,"onUpdate:modelValue":u[3]||(u[3]=r=>l(e).showEdit=r),title:l(e).selectRow?"\u7F16\u8F91":"\u65B0\u589E",loading:l(e).submitLoading,onHide:u[4]||(u[4]=r=>o.$refs.xForm.reset())},{default:s(()=>[n(U,{ref:"xForm",data:l(e).formData,items:l(e).formItems,"title-align":"right","title-width":"100",onSubmit:j},null,8,["data","items"])]),_:1},8,["modelValue","title","loading"]),n(se,{drawer:l(g),drawTitle:"\u5B57\u5178\u5217\u8868",onHandleClose:L},null,8,["drawer"])])}}}));var De=re(xe,[["__scopeId","data-v-60f9a9ec"]]);export{De as default};
