<template>
  <v-card>
    <MenuOne/>
  <v-app> 
    <router-view/>
  </v-app>
</v-card>
</template>

<script>
import MenuOne from './components/MenuOne.vue'
export default {
  name: 'App',

  components: {
    MenuOne
    
},

  data: () => ({
    //
  }),
};
</script>
