<script setup>
import {ref, watch} from 'vue'
import {useStorage} from '@/composables/useStorage'


let food = useStorage('food', 'tacos') // aqui estamos a ver se encotramos referencias a food
let age = useStorage('age', 10)

// watch(food, (val) =>{
//     write('food', val)
// })

// function write(key, val){
//     localStorage.setItem(key,val)
// }





</script>

<template>
    <main>
        <p>
            What is your favorite food <input type="text" v-model="food" />
        </p>
        <p>
            how old are you <input type="text" v-model="age" />
        </p>

    </main>
</template>