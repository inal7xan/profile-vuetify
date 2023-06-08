<template>
  <v-card
    max-width="800"
    class="mx-auto"
  >
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="teal-darken-3"
            theme="dark"
          >
            <v-card-title class="text-h5">
              Unlimited music now
            </v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn variant="text">
                Listen Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            color="light-blue-darken-4"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Supermodel
                </v-card-title>

                <v-card-subtitle>Foster the People</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                    START RADIO
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" >
          <v-card
            color="blue-grey-darken-4"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Halcyon Days
                </v-card-title>

                <v-card-subtitle>Ellie Goulding</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="text"
                  >
                    <ion-icon name="play-outline"></ion-icon>
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                rounded="0"
              >
                <v-img src="https://i.ytimg.com/an/rBnh1w9LrZg/474529898290782092_mq.jpg?v=624abeeb"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

    <v-container>
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-title>Player</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-row align="center">
            <v-col cols="4">
              <v-btn icon @click="previousSong">
                <ion-icon name="play-back-outline"></ion-icon>
              </v-btn>
              <v-btn icon @click="togglePlayback">
                <ion-icon :name="isPlaying ? 'pause-outline' : 'play-outline'"></ion-icon>
              </v-btn>
              <v-btn icon @click="nextSong">
                <ion-icon name="play-forward-outline"></ion-icon>
              </v-btn>
            </v-col>
            <v-col cols="8">
              <v-slider v-model="volume" min="0" max="100"></v-slider>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      volume: 50
    };
  },
  methods: {
    togglePlayback() {
      this.isPlaying = !this.isPlaying;
      // Mahnını işə sal dayandır
    },
    previousSong() {
      // Əvvəlki Mahnı üçün Lazım olan kodlar
    },
    nextSong() {
      // Sonraki mahnı üçün lazımlı olan kodları yaz
    }
  }
};
</script>

<style>
/* İsteğe bağlı stil özelleştirmeleri buraya ekleyebilirsiniz */
</style>
