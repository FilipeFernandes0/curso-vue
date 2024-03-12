export default{
    template: ` 
<form @submit.prevent='add'>
    <div class='border border-gray-600 text-black flex'>
        <input v-model="newAssignment" placeholder = 'new assignemnt...' class='p-2' />
        <button type='submit' class='bg-white p-2 border-l'>Add</button> 
    </div>
</form>`,

    // props:{
    //     assignments:Array
    // },
    //uma maneira de ligar os containers e pelo props
    //onde passamos um array nas props e depois 
    //metemos na tag do container assignemnts-create :assignments="assignments"
    //para ele perceber que queremos adicionar ao array
    data(){
        return{
            newAssignment:''
        }
    },
    methods:{
        add(){
            this.$emit('add', this.newAssignment)
            //$emit e um metodo especifico do vue por causa do dollar sign
            //o 'add' e um custom event e utilizase na tag do create 
            //este this.newAssignment esta a ser chamado na funcao add
            //no assignments

            //the parent component comunica com o child por props
            //the child comunica com o parent emitindo um evento



            // e.preventDefault();
            // this.assignments.push({
            //     name:this.newAssignment,
            //     completed:false,
            //     id: this.assignments.length + 1
            // })

            this.newAssignment = ''
    
    }
}
}
