
import {computed, ref} from 'vue'; 
//varible global(Estado) compartida
//const count = ref(60);

export const useCounter =(initValue =20) =>{


const count = ref(initValue);

const countCuadrado = computed(() => count.value * count.value) 



    return{
        //lo que va aca es visible por el otro archuvo 
        count, 
        countCuadrado
    }
}