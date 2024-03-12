import Assignment from "./Assignment.js"
import AssignmentTags from "./AssignmentTags.js"
import Panel from "./Panel.js"


export default {
    components:{Assignment, AssignmentTags, Panel},
    template: `



        <Panel v-show = " show && assignments.length" class="w-60">
        <div class = " flex justify-between items-start">
            <h2 class="font-bold mb-2">
                {{title}}
                <span>({{assignments.length}})</span>
            </h2>

            <button v-show = "canToggle" @click="show= false">&times;</button>

        </div>
        <assignment-tags 
            v-model:currentTag= "currentTag"
            :initial-tags="assignments.map(a => a.tag)"
            
           
             @change = "currentTag = $event"
        />
        <ul>
            <assignment 
                v-for = "assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"

            ></assignment>
        </ul>

        <slot></slot>

        <template #footer>
            click here to learn more
        </template>

        </Panel>


`,
//em vez de se usar v-slot:footer usase o #
    props: {
        assignments: Array,
        title:String,
        canToggle:{type: Boolean, default:false}


    },

    data(){
        return {
            currentTag:'all',
            show:true,
        }

    },
    computed:{
        filteredAssignments(){
            if(this.currentTag === 'all'){
                return this.assignments
            }
            return this.assignments.filter(a => a.tag===this.currentTag)
        },
        // tags(){
        //     // return['science', 'math','reading']
        //     return ['all', ...new Set(this.assignments.map(a => a.tag))]
            //o map cria um array com as tags da tag list
            //aqui usamos o set ppara tornar estes itens unicos porque se deixasemos assim
            //ele iria meter math duas vezes 
        }
    }
