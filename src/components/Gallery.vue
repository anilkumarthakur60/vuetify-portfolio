<template>
  <v-row>
    <v-col sm="12" md="4" lg="4" v-for="img in imgs" :key="img">
      <v-responsive>
        <v-card class="mx-auto pa-4" rounded="xl">
          <v-img :src="img" @click="showMultiple" class="rounded-xl"></v-img>
        </v-card>
      </v-responsive>
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
        require("../assets/portfolio/meriaamai.jpg"),
        require("../assets/portfolio/videochat.jpg"),
        require("../assets/portfolio/ecoomerce.jpg"),
        require("../assets/portfolio/medmax.jpg"),
        require("../assets/portfolio/medmaxchain.jpg"),
        require("../assets/portfolio/blog.jpg"),
        require("../assets/portfolio/visitnepal.jpg"),
        require("../assets/portfolio/htmlportfolio.jpg"),
        require("../assets/portfolio/calculator.jpg"),
      ],
      visible: false,
      index: 0, // default
    };
  },
  methods: {
    showSingle() {
      this.imgs = {
        title: "this is a placeholder",
        src: "https://i.loli.net/2018/11/10/5be6852dec46e.jpeg",
      };
      this.show();
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
    document.title = "Er.Anil Kumar Thakur | My Gallery";
  },
};
</script>
