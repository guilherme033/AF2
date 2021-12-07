<template>
    <v-card class="mx-auto" max-width="344">
        <v-img :src="'https://i.ytimg.com/vi/'+ link + '/default.jpg'" height="400px"></v-img>

        <v-card-title class="d-flex justify-center">
            {{ title }}
        </v-card-title>

        <v-card-subtitle class="d-flex justify-center text-center">
            Views: {{ views }}
        </v-card-subtitle>
        
    </v-card>
</template>

<script>
export default {
    props: ['videoId', 'title', 'link', 'views'],

    data: () => ({
        show: false,
    }),
}
</script>