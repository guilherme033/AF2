<template>
    <v-card class="mx-auto" max-width="344px">
        <v-img :src="src" height="500px"></v-img>

        <v-card-title class="d-flex justify-center">
            {{ title }}
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    props: ['frappeId', 'title',  'src'],

    data: () => ({
        show: false,
    }),
}
</script>