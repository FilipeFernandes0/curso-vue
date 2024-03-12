<template>
<section class="flex gap-8">

<assignment-list :assignments = "filters.inProgress" title="In progress">
<assignment-create @add="add" ></assignment-create> 


</assignment-list>

<assignment-list :assignments = "filters.completed" title="Completed" can-toggle></assignment-list>



</section>


</template>


<script>

import AssignmentList from "@/components/AssignmentList.vue";
import AssignmentCreate from "@/components/AssignmentCreate.vue";

export default{
    components:{AssignmentList, AssignmentCreate},

data() {
    return {
        assignments: [
            // { name: 'Finish project', complete: false, id: 1, tag:'math' },
            // { name: 'Read Chapter 4', complete: false, id: 2,tag:'science' },
            // { name: 'Turn in Homework', complete: false, id: 3,tag:'math' },
        ],

      
}
},

computed: {

    filters(){
        return{
            inProgress:this.assignments.filter(assignment => ! assignment.complete),
            completed: this.assignments.filter(assignment => assignment.complete)
        }
    }
},

//lifecycle hooks com o fetch
//basciamente este fetch vai prometer buscar os dados 
//por isso se usa depois o then

created(){
    fetch('http://localhost:3001/assignments')
        .then(response => response.json()) // estamos a dizer que queremos a resposta em json
        .then(assignments => { // este data pode ser o nome que quiser vou meter assignments
            console.log(assignments)
             // aqui estamos a dizer que quando tiveres os dados faz console.log desses dados
            this.assignments = assignments // quando o pedido for completado adicionamos há lista
        })
},



methods: {
    add(name){
        // e.preventDefault();
        //usa se este prevent default para nao dar refresh na pagina
        // este prevent e o mesmo que se usa no Submit.prevent
        this.assignments.push({
            name:name,
            completed:false,
            id: this.assignments.length + 1
        })

        

        //neste metodo estamos a utilizar o v-model para este pereceber o que vamos fazer
        //para estes dados irem para a lista temos de usar o push para os meter na lista
        //e depois popular os atributos do nome com o nome que escrevemos no input
        //o completed false porque nao esta completada e o id e o tamanho da lista mais um
        // this.newAssignment = ''
        //utiliza se para quando os dados forem submetidos ele limpar automaticamente
    }
}
}

</script>