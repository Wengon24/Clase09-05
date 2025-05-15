<script setup>
import{useCounter} from '@/composables/useCounter'

const {count, countCuadrado} = useCounter(100)

defineEmits('Send');


const props = defineProps({
  value: {
    type: Number, 
   // required: true,
    //default: 'Hola'
  }
}
)

</script>

<template>

  <h1>count: {{count}}</h1>

  <h2>count cuadrado: {{countCuadrado}}</h2>

  <button @click="count++">++</button>
  <button @click="count--">--</button>
   <button @click= "$emit('send','hola para el counter')">Enviar info al padre</button>

  
</template>