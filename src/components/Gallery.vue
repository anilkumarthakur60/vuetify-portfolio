<template>
  <v-row>
    <v-col
      sm="12"
      md="4"
      lg="3"
      v-for="(img, index) in imgs"
      :key="index"
      @click="() => showImg(index)"
      class="d-flex child-flex"
    >
      <v-hover v-slot="{ hover }">
        <v-card
          :elevation="hover ? 12 : 2"
          :class="{ 'on-hover': hover }"
          rounded="xl"
        >
          <v-responsive>
            <v-card class="mx-auto pa-4" rounded="xl">
              <v-img
                :src="img"
                @click="showMultiple"
                class="rounded-xl"
              ></v-img>
            </v-card>
          </v-responsive>
        </v-card>
      </v-hover>
    </v-col>

    <v-col>
      <v-col sm="12" md="4" lg="3">
        <vue-easy-lightbox
          :visible="visible"
          :imgs="imgs"
          :index="index"
          @hide="handleHide"
        >
        </vue-easy-lightbox>
      </v-col>
    </v-col>
  </v-row>
</template>
<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      transparent: "rgba(255, 255, 255, 0)",

      imgs: [
        {
          title:
            "Online Food Ordering (https://online.saffroncottages.com.au/)",
          src: require("../assets/portfolio/saffroncottages.png"),
        },
        {
          title: "Garjoo Classified (http://garjoonepal.com/)",
          src: require("../assets/portfolio/garjoonepal.png"),
        },

        {
          title: "Hospial Meriaamai Delivery System (https://meriaamai.org/)",
          src: require("../assets/portfolio/meriaamai.jpg"),
        },
        {
          title: "Telemedicine (https://telemedicine.akt.com.np/)",
          src: require("../assets/portfolio/videochat.jpg"),
        },
        {
          title: "Government Telemedicine (http://103.140.1.125/)",
          src: require("../assets/portfolio/telemed.png"),
        },
        {
          title:
            "Single Vendor Ecommerce (https://ecommerce.anilkumarthakur.com.np/)",
          src: require("../assets/portfolio/ecoomerce.jpg"),
        },
        {
          title: "Medmax Erp (https://erp.medmax.com.np/auth/login)",
          src: require("../assets/portfolio/medmaxerp.png"),
        },
        {
          title:
            "MedMax Innovation Pvt Ltd (https://www.medmaxinnovation.com/)",
          src: require("../assets/portfolio/medmax.jpg"),
        },
        {
          title: "Medmax Pharmacy (https://medmax.com.np/s)",
          src: require("../assets/portfolio/medmaxchain.jpg"),
        },
        {
          title: "Samana Media (https://www.samanamedia.com/)",
          src: require("../assets/portfolio/samananews.png"),
        },
        {
          title: "Blog CMS using laravel ,Bootstrap ",
          src: require("../assets/portfolio/blog.jpg"),
        },
        {
          title:
            "Visit Nepal HTMl CSS JS (https://anilkumarthakur60.github.io/Visit-Nepal-2020-front-end-/)",
          src: require("../assets/portfolio/visitnepal.jpg"),
        },
        {
          title: "Video Conferencing",
          src: require("../assets/portfolio/htmlportfolio.jpg"),
        },
        {
          title:
            "Calculator using HTML and Javascript (https://anilkumarthakur60.github.io/calculator/)",
          src: require("../assets/portfolio/calculator.jpg"),
        },
      ],
      visible: false,
      index: 0,
    };
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    showMultiple() {
      this.index = 0; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
  mounted() {
    document.title = "Er. Anil Kumar Thakur | My Gallery";
  },
};
</script>
