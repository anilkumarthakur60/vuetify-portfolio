<template>
  <v-row class="mx-2">
    <v-col lg="6" md="12" sm="12">
      <v-layout
        row
        wrap
        align-center
        bg
        fill-height
        grid-list-md
        text-xs-center
      >
        <v-flex>
          <h3
            class="my-3 font-weight-regular text-subtitle-2 align-self-center"
            style="letter-spacing: 1px !important"
          >
            WELCOME TO MY WORLD
          </h3>

          <h3 class="font-weight-bold text-h4 mt-5">
            Hi, I'm Er. Anil Kumar Thakur
          </h3>
          <h3 class="font-weight-bold text-h4 mb-5">
            <text-type />
          </h3>

          <v-row class="mt-16">
            <social-media></social-media>
            <best-skill></best-skill>
          </v-row>
        </v-flex>
      </v-layout>
    </v-col>
    <v-col lg="6" md="12" sm="12" order-md="12" order-sm="12" class="mt-lg-8">
      <v-layout
        row
        wrap
        align-center
        bg
        fill-height
        grid-list-md
        text-xs-center
      >
        <v-flex>
          <v-img src="@/assets/portfolio/anil.png"> </v-img>
        </v-flex>
      </v-layout>
    </v-col>
  </v-row>
</template>

<script>
import BestSkill from "./BestSkill.vue";
import SocialMedia from "./SocialMedia.vue";
import TextType from "./TextType.vue";

export default {
  components: { TextType, BestSkill, SocialMedia },
  name: "Home",
  mounted() {
    document.title = "Er. Anil Kumar Thakur | Home";
  },
};
</script>
