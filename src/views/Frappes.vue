<template>
    <div class="mt-4">
        <h1 class="text-center my-4">Frappes</h1>
        <v-row>
            <v-col v-for="(data, i) in Frappes" :key="data" cols="12" sm="6" md="4" lg="3" xl="2">
                <Frappe :frappeId="i" :title="data.title" :color="data.color" :size="data.size" :src="data.src" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Frappe from '@/components/Frappe.vue'

export default {
    name: "Frappes",

    components: {
        Frappe
    },

    computed: {
        Frappes(){
            return this.$store.state.frappes
        }
    }
}
</script>