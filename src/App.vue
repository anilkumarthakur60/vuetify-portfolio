<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app relative left temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 text-center">
            Er. Anil Kumar Thakur
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            Full Stack Developer
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        persistent-hint
        class="mt-5"
      ></v-switch>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
        <template>
          <v-row
            class="grey lighten-2"
            v-touch="{
              left: () => swipe('Left'),
              right: () => swipe('Right'),
              up: () => swipe('Up'),
              down: () => swipe('Down'),
            }"
            align="center"
            justify="center"
          >
          </v-row>
        </template>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      swipeDirection: "None",

      drawer: null,
      items: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "About Me", icon: "mdi-information-variant", to: "/about-me" },
        {
          title: "Contact Me",
          icon: "mdi-card-account-phone",
          to: "/contact-me",
        },
        { title: "Feature", icon: "mdi-star-circle", to: "/feature" },
        { title: "Gallery", icon: "mdi-view-gallery-outline", to: "/gallery" },
        { title: "Portfolio", icon: "mdi-face-man-profile", to: "/portfolio" },
      ],
      right: null,
    };
  },
  methods: {
    swipe(direction) {
      this.swipeDirection = direction;
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
body {
  font-family: "Poppins", sans-serif;
}
</style>