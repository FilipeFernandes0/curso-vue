<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    
      <HelloWorld msg="You did it!" />

      <nav>
        
        <RouterLink to="/">APP</RouterLink>


      </nav>
  
  </header>

  <RouterView />
</template>

<style >

</style>
