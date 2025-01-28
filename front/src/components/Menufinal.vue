<template>
    <div class="menu">
        <div v-for="(boton, id) in botones" :key="id" class="botones q-mr-md">
            <q-icon :name="boton.icono" size="36px" class="icono"/>
        </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    const botones = ref([
        {id: 1, icono: "fas fa-home", ruta:"/"},
        {id: 2, icono: "fas fa-clipboard"},
        {id: 3, icono: "fas fa-walking"},
        {id: 4, icono: "fas fa-triangle-exclamation"},
        
        
    ])
</script>
<style scoped>
    .menu{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .botones{
        width: 60px;
        height: 60px;
       
        border-radius: 50%;
        background-color: rgb(3, 70, 125);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .botones::before{
        content: " ";
        position: absolute;
        width: 64px;
        height: 4px;
        border-radius: 50%;
        border-left:2px solid rgb(255, 255, 255);   
        box-shadow: 2px 2px 4px rgb(255, 255, 255);
        z-index: -1;
        animation: animar 2s linear infinite;
    }
     .botones::after{
        content: " ";
        position: absolute;
        width: 64px;
        height: 4px;
        border-radius: 50%;
        border-left:2px solid rgb(255, 255, 255);   
        box-shadow: 2px 2px 4px rgb(255, 255, 255);
        z-index: -1;
        animation: animar2 2s linear infinite;
    }
    .icono{
        color: rgba(10, 17, 50);
    }
    @keyframes animar {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }   

    }
      @keyframes animar2 {
        from{
            transform: rotate(360deg);
        }
        to{
            transform: rotate(0);
        }   

    }
</style>
