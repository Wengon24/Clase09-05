<script setup >

defineProps({
    message:String,
    itsMine:Boolean,
    image: String
})



</script>




<template>
     <!-- Example Message -->
            <div class="flex justify-end" v-if="itsMine">
                <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
                   {{ message }}
                </div>
            </div>
            
            <!-- Example Received Message -->
            <div class="flex" v-else>
                <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
                        {{ message }}

                        <img v-if ="image" :src="image" alt="imagen">           
                     </div>
    
            </div>
</template>