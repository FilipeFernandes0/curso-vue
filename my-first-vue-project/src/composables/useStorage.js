
import {ref, watch} from 'vue'


export function useStorage(key, val=null){
    let storedVal = read() //estamos  a ver no local storage se temos


    if(storedVal){
        val = ref(storedVal)

    }else{
        val = ref(val)

        write()
    }


    // let val = ref(storedVal) // se temos fica reativo

    watch(val, write)

    function read(){
        return JSON.parse(localStorage.getItem(key))
        
    }

    function write(){
        if(val.value === null || val.value === ''){
            localStorage.removeItem(key)
        }else {

 
        localStorage.setItem(key, JSON.stringify(val.value)) //temos a funcao que escreve para o local storage
    }                               // se estivermos a lidar com json e melhor fazer assim para passar
                                    //ler os valores em json
}

    return val
}