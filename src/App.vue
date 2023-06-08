<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import NavBar from "./components/NavBar.vue"
  import BottomMenu from "./components/BottomMenu.vue"
</script>
<template>
<v-app id="inspire">
  <NavBar/>
  <v-main>
    <RouterView/>
  </v-main>
  <BottomMenu/>
</v-app>
</template>