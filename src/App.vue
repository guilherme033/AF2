<template>
<div>

  <!-- Sizes your content based upon application components -->

      <AppBar></AppBar>
    <!-- Provides the application the proper gutter -->
    <v-container>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
 

  <v-footer app>
    <!-- -->
  </v-footer>
</div>
</template>

<script>
import AppBar from "@/components/AppBar"

export default {
  name: 'App',
  components:{
  AppBar
  },

  data: () => ({
    //
  }),
};
</script>
