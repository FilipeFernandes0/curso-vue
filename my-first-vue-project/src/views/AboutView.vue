<script setup>
// import flash from "@/mixins/flash"

import {useFlash} from "@/composables/useFlash"

let {flash} = useFlash()
//em vez de fazer aquilo tudo no export posso simplesmente fazer
//isto com o script setup

// export default{
//   // mixins:[flash]
//   setup(){
//     let {flash} = useFlash()

//     return {flash} 
//   }
// }
//alternativa a mixins

</script>



<template>
  <div>
    <p>
      <button @click="flash('test', 'it works')">Click me</button>
    </p>
  </div>
</template>

<style>

</style>
