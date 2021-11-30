<template>
    <div class="mt-4">
        <h1 class="text-center my-4">Lattes</h1>
        <v-row>
            <v-col v-for="(data, i) in Lattes" :key="data" cols="12" sm="6" md="4" lg="3" xl="2">
                <Latte :latteId="i" :title="data.title" :src="data.src" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Latte from '@/components/Latte.vue'

export default {
    name: "Lattes",

    components: {
        Latte
    },

    computed: {
        Lattes(){
            return this.$store.state.lattes
        }
    }
}
</script>