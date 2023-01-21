<template>
  <v-app>
    <v-app-bar app color="primary" dark> 
      <v-toolbar-title>Most Used Words</v-toolbar-title>
    </v-app-bar>
      
    <v-main>
      <HomeComponent />
    </v-main>
  </v-app>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'


export default {
  name: "App",

  components: {
    HomeComponent
  },

  data: () => ({
    //
  }),
};
</script>
