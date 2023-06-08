<template>
  <v-app>
    <!-- intro -->
    <v-content>
      <v-container fluid  class="d-flex justify-center">
        <v-layout style="box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px; "
         class="d-flex justify-center align-center">
          <h1 class="text-">Welcome arwave</h1>
        </v-layout>
      </v-container>

      <!-- Comments -->
      <h1 class="header"> Comments </h1>
      <v-divider></v-divider>
      <v-container class="d-flex justify-center">
  <v-card
  v-for="cardItem in cardItems"
  :key="cardItem"
  style="box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
    class="mx-auto pa-4 rounded-xl rounded-be-0"
    theme="light"
    max-width="400"
    :title="cardItem.comment"
  >
    <template v-slot:prepend>
      <ion-icon name="pricetags-outline"></ion-icon>
    </template>

    <v-card-text class="text-medium-emphasis py-2">
      {{ cardItem.content }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="w-100">
        <template v-slot:prepend>
          <v-avatar
            color="grey-darken-3"
            :image="cardItem.cardImg"
          ></v-avatar>
        </template>

        <v-list-item-title> {{ cardItem.user }} </v-list-item-title>

        <v-list-item-subtitle> {{ cardItem.subtitle }} </v-list-item-subtitle>
      </v-list-item>
    </v-card-actions>
  </v-card>
      </v-container>
    </v-content>
<!-- service -->


  </v-app>
</template>

<style lang="less">
  .v-layout {
    width: 100%;
    height: 70vh;
    background-image: url('https://images.unsplash.com/photo-1686019539035-d034ab44a075?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80');
    background-size: 100% 100%;
    background-position: center;
    box-shadow: ;
    border-radius: 40px;
  }
  .header {
    font-size: 2.5rem;
    font-weight: bolder;
    text-align: center;
    padding: 50px;
    text-decoration: underline;
    text-shadow: 3px 3px 3px #6A1B9A;
  }
</style>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,

      cardItems: [
      {comment: '#1',cardImg: `https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`, user: 'Evan You', content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quo, voluptas. Ipsum officia nobis laudantium necessitatibus quia voluptate soluta porro.",subtitle: 'Vue Creator'},
      {comment: '#2',cardImg: `https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg`, user: 'Evan You', content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quo, voluptas. Ipsum officia nobis laudantium necessitatibus quia voluptate soluta porro.",subtitle: 'Vue Creator'},
      {comment: '#3',cardImg: `https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light`, user: 'Evan You', content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quo, voluptas. Ipsum officia nobis laudantium necessitatibus quia voluptate soluta porro.",subtitle: 'Vue Creator'}
      ]
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>