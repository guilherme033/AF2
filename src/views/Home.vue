<template>
    <div>
        <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

        <v-alert class="mt-5 text-center" color="grey darken-4" text-center dark dense>
            Environnements
        </v-alert>

        <v-row>
            <v-col v-for="(data, i) in Affiliates" :key="data" cols="12" sm="6" md="4" lg="3" xl="2">
                <Affiliate :affiliateId="i" :title="data.title" :src="data.src" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Affiliate from '@/components/Affiliate.vue'

export default {
    name: "Home",

    components: {
        Affiliate
    },

    computed: {
        Affiliates(){
            return this.$store.state.affiliates
        }
    },

    data: () => ({
        items: [
            {
                src:"https://uk.luberoncoeurdeprovence.com/image/45857-normal.jpg", 
            },
           
        ],
    }),
}
</script>