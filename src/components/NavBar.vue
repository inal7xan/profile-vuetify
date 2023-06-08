<script>

</script>

<template>
<v-app-bar scroll-behavior="hide" scroll-threshold="238" title="arswave">
  <v-list class="d-flex">
    <v-list-item>
      <RouterLink to="/">FAQ</RouterLink>
    </v-list-item>
    <v-list-item>
      <RouterLink to="/about">About</RouterLink>
    </v-list-item>
  </v-list>
</v-app-bar>
</template> 

<style lang="less">
  a {
    text-decoration: none;
    font-weight: bold;
    color: #000;
  }
  a:hover{
    text-decoration: underline;
  }
</style>