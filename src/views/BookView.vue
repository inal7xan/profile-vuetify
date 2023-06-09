<template>
  <v-card max-width="1200" class="mx-auto" v-for="bookList in bookLists" :key="bookList">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card color="#1F7087" theme="dark">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  {{ bookList.name }}
                </v-card-title>

                <v-card-subtitle> {{ bookList.content }} </v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ms-2" variant="outlined" size="small"> Read Now </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" rounded="0">
                <v-img :src="bookList.image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      bookLists: [
        {
          image: `https://m.media-amazon.com/images/I/91BEWZ527dL._AC_UF1000,1000_QL80_.jpg`,
          name: 'Sherlock Holmes',
          content: 'Dedective Book'
        },
        {
          image: `https://m.media-amazon.com/images/I/71874ZB82WL._AC_UF1000,1000_QL80_.jpg`,
          name: 'Plutarx',
          content: 'History Book'
        },
        {
          image: `https://static.insales-cdn.com/images/products/1/7081/425098153/0000000198743-1.jpg`,
          name: 'Omar Hayyam',
          content: 'History Book'
        },
        {
          image: `https://m.media-amazon.com/images/I/51DT+-h9oxL.jpg`,
          name: 'Meteors',
          content: 'Cosmos Book'
        },
        {
          image: `https://m.media-amazon.com/images/I/41oIkCyjSHL._AC_UF1000,1000_QL80_.jpg`,
          name: 'Politics',
          content: 'History Book'
        }
      ]
    }
  }
}
</script>
