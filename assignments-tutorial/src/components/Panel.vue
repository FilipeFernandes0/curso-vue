<template>
<div :class="{  
            'p-4 border border-gray-600 rounded-lg':true,
            'bg-white border-gray-300':theme === 'light',

            'bg-gray-700 border-gray-600':theme === 'dark',
        }">
                <h2 v-if="$slots.heading" class="font-bold mb-2">
                    <slot name = "heading"></slot>
                </h2>

                <slot></slot>


            <footer v-if="$slots.footer" class = "border-gray-600 border-t mt-4 pt-4 text-sm">
                <slot name = "footer"></slot>
            </footer>

        </div>
</template>



<script>

export default {


//usamos o if para as slots que estao a usar um heading e nao meter nas que nao tem heading

//em vez de fazermos com as chavetas e depois e que definimos usamos o slot para ficar mais dinamico

props: {
    theme:{type:String, default:"dark"}
}

}

</script>