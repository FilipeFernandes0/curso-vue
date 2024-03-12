<script>
import flash from "@/mixins/flash"
//podemos utilizar os mixins para guardar codigo que 
//seja reutilizavel em varios componentes

export default{
  mixins: [flash]
}


</script>



<template>
    <div>
      <p>
        <button @click="flash('it works on  the about page')">Click me</button>
      </p>
    </div>
  </template>
  
  <style>

  </style>