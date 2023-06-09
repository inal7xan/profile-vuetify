<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import BottomMenu from './components/BottomMenu.vue'
</script>
<template>
  <v-app id="inspire">
    <!-- nav menu  -->
    <NavBar />
    <v-main>
      <!-- body -->
      <RouterView />
    </v-main>
    <br />
    <br />
    <br />
    <br />
    <!-- aplication menu  -->
    <BottomMenu />
  </v-app>
</template>
