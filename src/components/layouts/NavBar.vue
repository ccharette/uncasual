<template>
  <v-app-bar class="w-100">
<!--    <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
    <ul class="w-50 justify-space-between">
      <li>
        <router-link to="{name: 'games'}">Games</router-link>
        <router-link to="{name: 'series'}">Series</router-link>
      </li>
    </ul>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>