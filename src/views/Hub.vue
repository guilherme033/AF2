<template>
    <div class="mt-4">
        <h1 class="text-center my-4">HUB</h1>

        <div class="container">
            <form>
                <v-text-field label="Name" v-model="input_name" hide-details="auto"></v-text-field>
                <v-row align="center mt-4" justify="space-around">
                    <v-btn type="submit" depressed color="success" v-on:click="submitForm">Changer</v-btn>
                </v-row>
            </form>
        </div>
    </div>
    
</template>

<script>

export default {
    name: "Hub",

    methods: {
        submitForm(e) {
            e.preventDefault();

            if(this.input_name != undefined && this.input_name != "") {
                this.$store.dispatch("setCoffeShop", this.input_name)
            }
        },
    },
}
</script>