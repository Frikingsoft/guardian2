<template>
<q-page class="flex flex-center">
     <q-card class="my-card">
        
        <q-card-section class="col-12 flex flex-center row coso">
            <q-scroll-area 
                :thumb-style="thumbStyle" 
                :bar-style="barStyle" 
                style="height: 400px;  overflow: hidden;" class="col-12 coso">
                <div class="scroll-content">
                    <q-input v-model="name" type="text"  placeholder="Ingrese su nombre" class="col-10 entradas" color="blue-9" :input-style="{ color: 'white' }"/>
                    <q-input v-model="lastname" type="text"  placeholder="Ingrese su apellido" class="col-10 entradas q-mt-md" color="blue-9" :input-style="{ color: 'white' }"/>
                    <q-input v-model="tel" type="text" placeholder="Ingrese su telefono" class="col-10 entradas q-mt-md" color="blue-9" :input-style="{ color: 'white' }"/>
                    <q-input v-model="address" type="text" placeholder="Ingrese su dirección" class="col-10 entradas q-mt-md" color="blue-9" :input-style="{ color: 'white' }"/>
                    <q-input v-model="email" type="email"  placeholder="Ingrese su correo" class="col-10 entradas q-mt-md" color="blue-9" :input-style="{ color: 'white' }"/>
                    <q-input v-model="password" type="password"  placeholder="Ingrese su contraseña" class="col-10 entradas q-mt-md" color="blue-9" :input-style="{ color: 'white' }"/>
                    <q-input v-model="password2" type="password"  placeholder="Repita su contraseña" class="col-10 entradas q-mt-md" color="blue-9" :input-style="{ color: 'white' }"/>
                </div>
            </q-scroll-area>
              <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="fas fa-exclamation" color="primary" text-color="white"  class="q-mb-md"/>
          <span class="q-ml-sm">{{ mensaje }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
          
        </q-card-actions>
      </q-card>
    </q-dialog>
        </q-card-section>
        <q-card-section class="col-12 flex justify-evenly row q-mt-md">
            <q-btn class="boton text-white" glossy label="Enviar" @click="enviar"/>
            <q-btn class="boton text-white q-ml-md" glossy label="Login" @click="login"/>
        </q-card-section>   
     </q-card>
</q-page>
</template>

<script setup>
import { ref } from "vue";
import {  useRouter } from "vue-router"
const router = useRouter()
const name = ref("")
const lastname = ref("")
const tel = ref("")
const address = ref("")
const email = ref("")
const password = ref("")
const password2 = ref("")
const confirm = ref(false)

let mensaje = ref("")
const thumbStyle = ref({
    right: '4px',
    borderRadius: '5px',
    backgroundColor: '#027be3',
    width: '5px',
    opacity: 0.75,
    
})
const barStyle = {
    right: '2px',
    borderRadius: '9px',
    backgroundColor: '#027be3',
    width: '9px',
    opacity: 0.2
}
const login = () => {
    router.push("/login")
}
const enviar =()=>{
    let empleado = ref({
        name: name.value,
        lastname: lastname.value,
        tel: tel.value,
        address: address.value,
        email: email.value,
        password: password.value,
        password2:password2.value
    })
    fetch("http://localhost/registro", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(empleado.value) 
      })
      .then(response => response.json())
      .then(data => {
        if(data.mensaje === "Empleado creado con exito"){
            router.push("/login")
        }
        else{
            confirm.value = true
            mensaje.value = data.mensaje
         
        }
      })
     
} 
</script>

<style scoped>
.q-card{
    box-shadow: none;
}
.my-card {
    width: 90%;
    max-width: 500px;
    height: 60vh;
    background-color: transparent;
 
  
}
.scroll-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
}
.entradas {
    border-bottom: 2px solid rgb(13, 104, 165);
    border-radius: 5%;
}
.entradas ::placeholder {
    color: white;
    font-weight: bold;
    padding-left: 20px;
}
.boton {
    width: 120px;
    height: 30px;
    box-shadow: 2px 2px 4px rgb(17, 139, 222), 3px 3px 5px rgb(13, 104, 165);
}

</style>
