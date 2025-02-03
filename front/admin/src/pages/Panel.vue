<template>
    <q-page class="row">
        <!--q-card class="calendario col-3 flex flex-center">
            <q-date v-model="fecha" minimal today-btn :events="eventos" event-color="orange"/>
        </q-card-->
        <q-card class="row col-12 tarjetas justify-center">
            <q-card class="col-4  locales q-pa-xl" v-for="(datos,index) in local" :key="index">
                <q-card-section>{{ datos.name }}</q-card-section>
            </q-card>
        </q-card>
    </q-page>
</template>
<script setup>
    import { ref } from 'vue'
    const fecha = ref(new Date)
    const eventos = ['2025-01-02', '2025-04-02']
    const local = ref([]) 
    const locales = async()=>{
        await fetch("http://localhost/panel")
        .then(respuesta => respuesta.json())
        .then(data => local.value = data.locales )
    }
    locales()
</script>

<style scoped>
    .calendario{
        height: 400px;
        
    }
    .tarjetas{
        margin-top:200px ;
        
        height: 40vh;
    }
    .locales{
        background-color: brown;
    }
</style>