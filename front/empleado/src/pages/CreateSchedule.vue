<template>
    <q-page class="flex flex-center">
        <q-card class="my-card">
            <q-card-section class="col-12 flex flex-center row">
                <q-avatar size="64px" font-size="48px" class="avatar" text-color="blue-9"
                    icon="mdi-account-check-outline" />
            </q-card-section>
            <q-card-section class="col-12 flex flex-center row">
                <q-input v-model="id_employee" type="text" text-color="white" placeholder="Ingrese el id del empleado"
                    class="col-10 entradas" color="blue-9" :input-style="{ color: 'white' }" />
                <q-input v-model="id_local" type="text" text-color="white" placeholder="Ingrese el id del local"
                    class="col-10 entradas" color="blue-9" :input-style="{ color: 'white' }" />
                <q-input v-model="date" type="text" text-color="white" placeholder="Ingrese la fecha"
                    class="col-10 entradas" color="blue-9" :input-style="{ color: 'white' }" />
                <q-input v-model="schedule_start" type="text" text-color="white" placeholder="Ingrese la hora inicio"
                    class="col-10 entradas" color="blue-9" :input-style="{ color: 'white' }" />
                <q-input v-model="schedule_end" type="text" text-color="white"
                    placeholder="Ingrese el la hora de finalizacion" class="col-10 entradas" color="blue-9"
                    :input-style="{ color: 'white' }" />
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
const id_employee = ref("")
const id_local = ref("")
const date = ref("")
const schedule_start = ref("")
const schedule_end = ref("")
const router = useRouter()
const enviar = () => {
    let schedule = ref({
        id_employee: id_employee.value,
        id_local: id_local.value,
        date: date.value,
        schedule_start: schedule_start.value,
        schedule_end: schedule_end.value
    })
    fetch("http://localhost/schedules", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(schedule.value)
    })
        .then(response => response.json())
        .then(data => console.log(data.mensaje))
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