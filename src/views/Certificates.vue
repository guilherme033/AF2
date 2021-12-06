<template>
    <div class="mt-4">
        <h1 class="text-center my-4">Certificates</h1>
        <v-row>
            <v-col v-for="(data, i) in Certificates" :key="data" cols="12" sm="6" md="4" lg="3" xl="2">
                <Certificate :certificateId="i" :title="data.title" :link="data.link" :views="data.views" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Certificate from '../components/Certificate.vue'

export default {
    name: "Certificates",

    components: {
        Certificate
    },

    computed: {
        Certificates(){
            return this.$store.state.certificates
        },
    }
}
</script>