<template>
    <div class="mt-4">
        <h1 class="text-center my-4">Mochas</h1>
        <v-row>
            <v-col v-for="(data, i) in Mochas" :key="data" cols="12" sm="6" md="4" lg="3" xl="2">
                <Mocha :mochaId="i" :title="data.title" :color="data.color" :size="data.size" :sheets="data.sheets" :src="data.src" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Mocha from '@/components/Mocha.vue'

export default {
    name: "Mochas",

    components: {
        Mocha
    },

    computed: {
        Mochas(){
            return this.$store.state.mochas
        }
    }
}
</script>