<template>
  <q-layout view="lHh Lpr lFf" class="fondo">
    <q-page-container>
      <div class="fondo_guardian">
        <img src="/imagenes/fondo.png">
      </div>
      <router-view/>
      
    </q-page-container>
  </q-layout>
</template>




<style scoped>
 
  .fondo_guardian{
    position: absolute;
    width: 100%;
    height: 100%;
   
    display: flex;
    justify-content: center;
  }
  .fondo_guardian img{
    margin-top: 30px;
    width: 300px;
    height: 120px;
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
 

</style>