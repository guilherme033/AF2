<template>
    <v-card class="mx-auto" max-width="344">
        <v-img :src="src" height="300px"></v-img>

        <v-card-title class="d-flex justify-center">
            {{ title }}
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    props: [ 'certificateId', 'title','src'],

    data: () => ({
        show: false,
    }),
}
</script>