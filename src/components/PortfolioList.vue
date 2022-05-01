<template>
  <v-col lg="3" md="4" sm="6" class="d-flex child-flex">
    <v-hover v-slot="{ hover }">
      <v-card
        :elevation="hover ? 12 : 2"
        :class="{ 'on-hover': hover }"
        rounded="xl"
      >
        <v-img class="rounded-xl" :src="image"> </v-img>
        <v-card-title class="">
          <h1 class="red--text text-h5 text-left ml-4 my-5">{{ name }}</h1>
        </v-card-title>

        <v-card-actions class="card-actions">
          <v-btn text color="teal accent-4" @click="reveal = true">
            Explore
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            rounded="xl"
            style="height: 100%"
          >
            <v-card-text class="pb-0">
              <p class="text-justify text-subtitle-2 px-4 pb-5">{{ text }}</p>
            </v-card-text>
            <v-card-actions class="pt-0 card-actions">
              <v-btn text color="teal accent-4" @click="reveal = false">
                <v-icon>mdi-window-close</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
    </v-hover>
  </v-col>
</template>
<script>
export default {
  name: "PortfolioList",
  props: ["name", "image", "text"],
  data: () => ({
    reveal: false,
  }),
};
</script>
<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.card-actions {
  position: absolute;
  bottom: 0;
}
</style>