<template>
    <div id="app">
        <v-app>
            <v-card id="myBody" class="mx-auto">
                <v-system-bar color="grey darken-3"></v-system-bar>
                <v-app-bar color="grey darken-4grey darken-4" prominent>
                    <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                    <v-toolbar-title id="name">>{{ coffeShop }}</v-toolbar-title>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon color="white">mdi-plus-outline</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon color="white">mdi-filter</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon color="white">mdi-account</v-icon>
                    </v-btn>

                    <template v-slot:extension>
                        <v-tabs color="white" align-with-title>
                            <v-tab @click="goHome">         Début</v-tab>
                            <v-tab @click="goFrappes">      Frappes ({{ countFrappes }})</v-tab>
                            <v-tab @click="goLattes">       Lattes  ({{ countLattes }})</v-tab>
                            <v-tab @click="goMochas">       Mochas  ({{ countMochas }})</v-tab>
                            <v-tab @click="goVideos">       Videos</v-tab>
                            <v-tab @click="goHub">          Hub</v-tab>
                        </v-tabs>
                    </template>
                </v-app-bar>

                <v-navigation-drawer v-model="drawer" absolute bottom temporary>
                    <v-list nav dense>
                        <v-list-item-group v-model="group" active-class="deep-blue--text text--accent-4">
                            <v-list-item @click="goHome">
                                <v-list-item-title>Début</v-list-item-title>
                            </v-list-item>

                            <v-list-item @click="goFrappes">
                                <v-list-item-title>Frappes</v-list-item-title>
                            </v-list-item>

                            <v-list-item @click="goLattes">
                                <v-list-item-title>Lattes</v-list-item-title>
                            </v-list-item>

                            <v-list-item @click="goMochas">
                                <v-list-item-title>Mochas</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="goVideos">
                                <v-list-item-title>Videos</v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="goHub">
                                <v-list-item-title>Hub</v-list-item-title>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-navigation-drawer>

                <div id="content" class="pb-10">
                    <router-view></router-view>
                </div>
            </v-card>

            <v-footer blue padless>
                <v-card flat tile class="black white--text text-center">
                    <v-card-text>
                        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                            <v-icon size="24px">
                                {{ icon }}
                            </v-icon>

                        </v-btn>
                        </v-card-text>

                    <v-card-text class="white--text pt-0">
                        Ceci est le « footer » du site, comme dans footer, il y a foot, il y a donc chaussette! Nous sommes donc persuadés que l’Internet a été créé en buvant un jus de chaussette… Cependant nous ne savons pas s’il était bon ou non… Si vous avez des indices dans notre quête, envoyez nous un Tweet à @cafesbelleville! envoyez nous un Tweet à @cafesbelleville.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text class="white--text">
                        2021
                    </v-card-text>
                </v-card>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        drawer: false,
        group: null,

        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-instagram',
            'mdi-youtube',
        ],
    }),

    watch: {
        group () {
            this.drawer = false
        },
    },

     computed: {
        coffeShop() {
            return this.$store.state.hub.coffeShop
        },
        countFrappes() {
            return this.$store.getters.countFrappes
        },
        countLattes() {
            return this.$store.getters.countLattes
        },
        countMochas() {
            return this.$store.getters.countMochas
        }
    },

     methods: {
        goHome(){
           this.$router.push('/') 
        },
        goFrappes(){
           this.$router.push('/frappes') 
        },
        goLattes(){
            this.$router.push('/lattes') 
        },
        goMochas(){
            this.$router.push('/mochas') 
        },
        goVideos(){
            this.$router.push('/videos') 
        },
        goHub(){
            this.$router.push('/hub') 
        }
    },

     created(){
        this.$store.dispatch("getYoutube", "lNTXA7KZoMA")
        this.$store.dispatch("getYoutube", "FNHf1gJSJyg")
        this.$store.dispatch("getYoutube", "4StCwLWU2tg")
        this.$store.dispatch("getYoutube", "7RzdhbIx5zI&")
        this.$store.dispatch("getYoutube", "fdQqDl_edFc")
        this.$store.dispatch("getYoutube", "ntupNMWQk94")
    
    }

}
</script>