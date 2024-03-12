<template>
     <div class = "grid gap-6">


            <assignments></assignments>

            <panel>
              
                this is my default content
            
            </panel>

            <panel>
                <template v-slot:heading>
                    Hi there
                </template>
                
                    this is my default content
               
            </panel>

        <panel>
            <template v-slot:heading>
                Hi there
            </template>
            
                this is my default content

                <template v-slot:footer>
                    click here to learn more
                </template>
           
        </panel>

    <panel theme="light">
        <template v-slot:heading>
            Hi there
        </template>
        
            this is my default content

            <template v-slot:footer>
                click here to learn more
            </template>
       
    </panel> 



          
        </div>
</template>

<script>


import Assignments from "@/components/Assignments.vue"
import Panel from "@/components/Panel.vue"


export default{
    components: {Assignments, Panel},
    

    // se for default nao precisamos do slot default ele vai saber


}

</script>