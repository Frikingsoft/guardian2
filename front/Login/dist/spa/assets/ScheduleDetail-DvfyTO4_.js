import{Q as u}from"./use-dark-BlgWiEnv.js";import{Q as o,a as i,b as d}from"./QCard-DgkdhdQI.js";import{a as f}from"./QBtn-DZvrkRBU.js";import{Q as m}from"./QPage-BDM0L7Pq.js";import{r as p,q as x,v as h,x as a,y as _,H as v,u as e}from"./index-DzRVY70d.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./render-wEgRYB86.js";const y={__name:"ScheduleDetail",setup(w){const l=p([]);_();const{params:r}=v(),c=()=>{fetch(`http://localhost/schedules/${r.id}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>l.value=t),console.log(l.value)};return(t,s)=>(x(),h(m,{class:"flex flex-center"},{default:a(()=>[e(d,{class:"my-card"},{default:a(()=>[e(o,{class:"col-12 flex flex-center row"},{default:a(()=>[e(u,{size:"64px","font-size":"48px",class:"avatar","text-color":"blue-9",icon:"mdi-account-check-outline"})]),_:1}),e(o,{class:"col-12 flex flex-center row"},{default:a(()=>[e(i,{modelValue:t.name,"onUpdate:modelValue":s[0]||(s[0]=n=>t.name=n),type:"text","text-color":"white",placeholder:"Ingrese el nombre",class:"col-10 entradas",color:"blue-9","input-style":{color:"white"}},null,8,["modelValue"])]),_:1}),e(o,{class:"col-12 flex justify-evenly row q-mt-xl"},{default:a(()=>[e(f,{class:"boton text-white",glossy:"",label:"Enviar",onClick:c})]),_:1})]),_:1})]),_:1}))}},I=Q(y,[["__scopeId","data-v-4ea56a6f"]]);export{I as default};
