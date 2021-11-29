<template
template>
    <v-card class="mx-auto" max-width="345">
        <v-img :src="src" height="400px"></v-img>

        <v-card-title class="d-flex justify-center">
            {{ title }}
        </v-card-title>
        
    </v-card>
</template>

<script>
export default {
    props: ['latteId', 'title', 'color', 'size', 'glass', 'src'],

    data: () => ({
        show: false,
    }),
}
</script>