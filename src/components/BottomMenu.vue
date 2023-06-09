<script>
export default {
  data: () => ({ value: 0 }),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return 'black'
        case 1:
          return 'teal-darken-4'
        case 2:
          return 'brown'
        case 3:
          return 'deep-purple-darken-4'
        case 4:
          return 'teal-lighten-1'
        default:
          return 'orange-darken-1'
      }
    }
  }
}
</script>
<template>
  <v-bottom-navigation fixed>
    <v-layout class="overflow-visible" style="height: 56px">
      <v-bottom-navigation v-model="value" :bg-color="color" mode="shift">
        <v-btn to="/">
          <ion-icon name="home-outline"></ion-icon>

          <span>Home</span>
        </v-btn>

        <v-btn to="/player">
          <ion-icon name="radio-outline"></ion-icon>

          <span>Music</span>
        </v-btn>

        <v-btn to="/book">
          <ion-icon name="book-outline"></ion-icon>

          <span>Book</span>
        </v-btn>

        <v-btn to="/post">
          <ion-icon name="add-circle-outline"></ion-icon>

          <span>Post</span>
        </v-btn>

        <v-btn to="/profile">
          <ion-icon name="person-outline"></ion-icon>

          <span>Profile</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </v-bottom-navigation>
</template>

<style lang="less">
ion-icon {
  font-size: 1.3rem;
}
.sticky-top {
  position: sticky;
  top: 0;
}
</style>
