<template>
  <v-app class="app">
    <NavBar></NavBar>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import NavBar from "./components/layouts/NavBar.vue";
export default {
  name: 'App',
  components: {NavBar},
  data: () => ({
    //
  }),
}
</script>

<style scoped>
.app {
  background: rgb(2,0,36);
  background: linear-gradient(320deg, rgba(2,0,36,1) 0%, rgba(64,7,94,1) 53%, rgba(18,8,147,1) 100%);
}
</style>