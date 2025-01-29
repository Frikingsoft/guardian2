<template>
    <q-page class="flex flex-center">
        <q-card class="my-card">
            <q-card-section class="col-12 flex flex-center row">
                <q-avatar size="64px" font-size="48px" class="avatar" text-color="blue-9"
                    icon="mdi-account-check-outline" />
            </q-card-section>
            <q-card-section class="col-12 flex flex-center row">
                <q-input v-model="name" type="text" text-color="white" placeholder="Ingrese el nombre"
                    class="col-10 entradas" color="blue-9" :input-style="{ color: 'white' }" />
            </q-card-section>
            <q-card-section class="col-12 flex justify-evenly row q-mt-xl">
                <q-btn class="boton text-white" glossy label="Enviar" @click="enviar" />
            </q-card-section>
        </q-card>
    </q-page>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
const schedules = ref([])
const router = useRouter()
const enviar = () => {
    fetch("http://localhost/schedules", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => schedules.value = data)
    console.log(schedules.value)
}
</script>
<style scoped>
.my-card {
    width: 90%;
    max-width: 500px;
    height: 50vh;
    max-height: 400px;
    background-color: transparent;
    border-radius: 3%;
    box-shadow: 2px 2px 4px rgb(17, 139, 222), 3px 3px 5px rgb(13, 104, 165);
    border: 1px solid rgb(13, 104, 165);
}

.entradas {
    border-bottom: 2px solid rgb(13, 104, 165);
    border-radius: 5%;
    display: flex;
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