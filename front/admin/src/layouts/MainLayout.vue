<template>
  <q-layout view="lHh Lpr lFf" class="fondo">
    <q-header elevated>
    
    <q-drawer
      v-model="abrir_menu"
      overlay
      bordered
      style="background: radial-gradient(circle,rgb(7, 48, 90) 0%,rgb(10, 17, 50) 50%, rgba(0, 4, 7, 0.9) 100%);
      background-size: 400% 400%; 
      animation: animar 20s ease-in-out infinite;"
    >
      <q-list>
        <q-item-label
          header
        >
          <q-avatar v-if="!usuario" color="red" text-color="white" icon="fas fa-user"/>
        </q-item-label>
        <q-item-label v-if="!usuario" class="row">
             <q-btn outline color="primary" label="Login" icon="cloud_upload" class="col-12" @click="login"/>
             <q-btn outline color="primary" label="Registro" icon="cloud_upload" class="col-12" @click="registro"/>
        </q-item-label>
        <template v-slot:default v-if="usuario">
          <q-item-label>
             <q-avatar size=64px color="primary" text-color="white">{{ inicial_usuario }}</q-avatar>
          </q-item-label>
          <q-item-label  v-for="opcion in opciones" :key="opcion.id">
                 <q-btn outline color="primary" :label="opcion.nombre" icon="cloud_upload"/>
          </q-item-label>
        </template>
      </q-list>
    </q-drawer>
    </q-header>
    <q-page-container>
      <div class="boton_menu">
           <q-btn class="boton text-white" glossy icon="fas fa-bars" round @click="abrir_menu = true" />
      </div>
      <div class="fondo_guardian">
        <img src="/imagenes/fondo.png" >
        <h2> Administrador </h2>
      </div>
     
      <router-view @click="abrir_menu = false"/>
      
    </q-page-container>
  </q-layout>
</template>

<script setup>

import { computed, provide, ref } from 'vue'
import { useRouter } from "vue-router"
const router = useRouter()
const abrir_menu = ref(false)
const mensaje = ref("")
const usuario = ref(null)
const opciones = ref([
  { id:0 , nombre:"Pefil" ,icono:"", ruta:"/perfil"},
  { id:1, nombre:"Próxima Guardia" ,icono:"", ruta:"/perfil"},
  
])
provide("usuario",usuario)
provide("mensaje",mensaje)
const inicial_usuario = computed(()=>{
  return usuario.value?.name ? usuario.value.name.charAt(0).toUpperCase() : '';
})
const login = () => {
  router.push("/login")
}
const registro = () => {
  router.push("/registro")
}
</script>
<style scoped>
 
  .fondo_guardian{
    position: absolute;
    width: 100%;
    height: 100%;
  
   flex-direction: column; 
    display: flex;
    align-items: center;
  }
  .fondo_guardian img{
    margin-top: 30px;
    width: 300px;
    height: 120px;
    
  }
  .fondo_guardian h2{
   font-weight: bold;
   color: white;
  }

  .fondo{ 
   
     background: radial-gradient(circle, 
    rgb(7, 48, 90) 0%,    
    rgb(10, 17, 50) 50%, 
    rgba(0, 4, 7, 0.9) 100% 
  );
  background-size: 400% 400%; /* Ampliar para un efecto más natural */
 animation: animar 20s ease-in-out infinite;
  
 }

 .boton{
  position: absolute;
  z-index: 1;
  width: 48px;
  height: 48px;
  margin: 10px;
  border: 2px solid rgb(13, 104, 165);
  box-shadow: 2px 2px 4px rgb(17, 139, 222), 3px 3px 3px rgb(13, 104, 165);
  display: flex;
  justify-content: center;
  align-items: center;
  
 }
  .boton::before{
        content: " ";
        position: absolute;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border-left:2px solid rgb(13, 104, 165);   
        box-shadow: 2px 2px 4px rgb(13, 104, 165);
        animation: animar3 2s linear infinite;
    }
    
  @keyframes animar {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 100%;
  }
}
 @keyframes animar3 {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }   

    }
      @keyframes animar4 {
        from{
            transform: rotate(360deg);
        }
        to{
            transform: rotate(0);
        }   

    }

</style>