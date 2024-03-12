<script setup> //beneficios do composition nao precisamos de estar a importar componentes

//esta maneira e a do options api no vue existe outra maneira de fazer as coisas chamada composition API

//com este api exportamos um objeto que consiste com todas as opcoes 
import TheWelcome from '../components/TheWelcome.vue'
import Quiz from "@/components/Quiz/Quiz.vue";
import {state} from "@/stores/quizStore"

import { onMounted, ref } from 'vue';
import swal from 'sweetalert'



// onMounted(() => {
//       swal('hi world')
//     })

//     let message = ref("hello world") 

//     setTimeout(() => {
//       message.value = 'I have been changed' 
//     }, 2000);


//2 beneficio nao precisamos do export default a area todas do script funciona e nao precisamos
//return pois so referenciar a message funciona
  









//no composition api nos vamos precisar de dar import das coisas que precisamos
// export default{

  // components:{TheWelcome},

  // setup(){



  //   onMounted(() => {
  //     alert('hi world')
  //   })

    // let message = ref("hello world") // este ref utiliza a reatividade 
    //para puder mudar o input da message
    //nos para utilizarmos reatividade nao basta usar  o v-model tem de se exportar o ref

    // setTimeout(() => {
    //   message.value = 'I have been changed' //para acesaar a data por exemplo message lembra te de usar o value
    //   //pois ele nao vai funcionar sem  o value 
    // }, 2000);

  //   return{message,}
    
  // }

  // data(){

  //   return{
  //     message: 'hello world'
  //   }

  //  },

  //  mounted(){

  //   alert('i am mounted')

  //  },

// }

</script>

<template>
  <main>
    <TheWelcome />
    <!-- usavase - este simbolo para as tagas para o browser 
      perceber mas como e um compilador 
    ele percebe -->
    <!-- porque tem o the? 
    se so vai ser usado uma vez pode ser feito com o the -->

    <!-- <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message"/>
    </p> -->

    <Quiz :quiz="state" />


  </main>
</template>
