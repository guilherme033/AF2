<template>
    <div class="mt-4">
        <h1 class="text-center my-4">Videos</h1>
        <v-row>
            <v-col v-for="(data, i) in Videos" :key="data" cols="12" sm="6" md="4" lg="3" xl="2">
                <Video :videoId="i" :title="data.title" :link="data.link" :views="data.views" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Video from '@/components/Video.vue'

export default {
    name: "Videos",

    components: {
        Video
    },

    computed: {
        Videos(){
            return this.$store.state.videos
        },
    }
}
</script>