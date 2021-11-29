<template>
    <v-card class="mx-auto" max-width="500">
        <v-img :src="src" height="500px"></v-img>

        <v-card-title class="d-flex justify-center">
            {{ title }}
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    props: ['mochaId', 'title', 'color', 'size', 'sheets', 'src'],

    data: () => ({
        show: false,
    }),
}
</script>