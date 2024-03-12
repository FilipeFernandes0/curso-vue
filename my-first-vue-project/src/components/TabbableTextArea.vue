<template>
    
    <textarea @keydown.tab.prevent = "onTabDown"
    @keyup = "update"
    v-text ="modelValue"></textarea>
       
</template>

<script setup>

defineProps({
    modelValue:String
})

let emit = defineEmits(['update:modelValue']) // este emit e preciso para um v model funcionar num componente

function onTabDown(e){
   
    
    let t = e.target


    let val = t.value,
     start = t.selectionStart,
     end = t.selectionEnd


     t.value = val.substring(0, start) + "\t" + val.substring(end)


     t.selectionStart = t.selectionEnd = start + 1

     function update(e){
        
        emit('update:modelValue', e.target.value)

     }

    


 }


</script>