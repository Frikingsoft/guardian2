<template>
    <q-page class="flex flex-center">
        <q-card class="my-card">
                    <q-card-section class="col-12 flex flex-center row">
                        <q-avatar size="64px" font-size="48px"  class="avatar" text-color="blue-9" icon="mdi-account-check-outline" />
                    </q-card-section>
                    <q-card-section class="col-12 flex flex-center row">
                        <q-input v-model="email" type="text"  text-color="white" placeholder="Ingrese el correo" class="col-10 entradas" color="blue-9"/>
                        <q-input v-model="password" type="password" placeholder="Ingrese la contraseña" class="col-10 entradas q-mt-md" color="blue-9"/>
                    </q-card-section>
                    <q-card-section class="col-12 flex justify-evenly row q-mt-xl">
                        <q-btn class="boton text-white" glossy label="Enviar"/>
                        <q-btn class="boton text-white q-ml-md" glossy label="Registro" @click="registro"/>
                    </q-card-section>   
        </q-card>
    </q-page>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"    
    const email = ref("")
    const password = ref("")
    const router = useRouter()
    const registro = () => {
        router.push("/registro")
    }
</script>
<style scoped>
   
    .my-card{
        width: 90%;
        max-width: 500px;
        height: 50vh;
        max-height: 400px;
        background-color: transparent;
        border-radius: 3%;
        box-shadow: 2px 2px 4px rgb(17, 139, 222), 3px 3px 5px rgb(13, 104, 165);
        border: 1px solid rgb(13, 104, 165);
    }
    .entradas{
        border-bottom: 2px solid rgb(13, 104, 165);
        border-radius: 5%;
        display: flex;
    }
  
.entradas ::placeholder {
       color: white;
        font-weight: bold;
        padding-left:20px ;
        
    }
.boton{
    width: 120px;
    height: 30px;
     box-shadow: 2px 2px 4px rgb(17, 139, 222), 3px 3px 5px rgb(13, 104, 165);
}
</style>