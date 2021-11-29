<template>
    <div>
        <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition">
            </v-carousel-item>
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
                src:"https://s2.glbimg.com/4he57nbBRyVkzBuc9tDIDaKMI0s=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_b3309463db95468aa275bd532137e960/internal_photos/bs/2021/n/U/Hu2GiqTGqqkICLOsvhFA/belleville.jpg", 
            },
            {
                src: "https://culturepassport.co/wp-content/uploads/2020/01/La-Fontaine-de-Belleville_IMG_1290.jpg",
            },
            {
                src: "http://www.latrentaineparisienne.com/wp-content/uploads/2018/03/LaFontaineDeBelleville_01.jpeg",
            },
        ],
    }),
}
</script>