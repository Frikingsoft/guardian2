import{Q as n}from"./use-dark-BlgWiEnv.js";import{Q as a,a as u,b as d}from"./QCard-DgkdhdQI.js";import{a as f}from"./QBtn-DZvrkRBU.js";import{Q as i}from"./QPage-BDM0L7Pq.js";import{r as m,q as p,v as x,x as o,y as h,u as e}from"./index-DzRVY70d.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./render-wEgRYB86.js";const v={__name:"Schedules",setup(Q){const l=m([]);h();const r=()=>{fetch("http://localhost/schedules",{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>l.value=t),console.log(l.value)};return(t,s)=>(p(),x(i,{class:"flex flex-center"},{default:o(()=>[e(d,{class:"my-card"},{default:o(()=>[e(a,{class:"col-12 flex flex-center row"},{default:o(()=>[e(n,{size:"64px","font-size":"48px",class:"avatar","text-color":"blue-9",icon:"mdi-account-check-outline"})]),_:1}),e(a,{class:"col-12 flex flex-center row"},{default:o(()=>[e(u,{modelValue:t.name,"onUpdate:modelValue":s[0]||(s[0]=c=>t.name=c),type:"text","text-color":"white",placeholder:"Ingrese el nombre",class:"col-10 entradas",color:"blue-9","input-style":{color:"white"}},null,8,["modelValue"])]),_:1}),e(a,{class:"col-12 flex justify-evenly row q-mt-xl"},{default:o(()=>[e(f,{class:"boton text-white",glossy:"",label:"Enviar",onClick:r})]),_:1})]),_:1})]),_:1}))}},j=_(v,[["__scopeId","data-v-e5d7fa5a"]]);export{j as default};
