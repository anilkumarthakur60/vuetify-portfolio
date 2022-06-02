<template>
  <CurvedBottomNavigation :options="options" v-model="selected">
    <template #icon="{ props }">
      <v-icon>{{ props.icon }}</v-icon>
    </template>
    <template #title="{ props }">
      <b>{{ props.title }}</b>
    </template>

    <!-- child -->
    <template #child-icon="{ props }">
      <v-icon>{{ props.icon }}</v-icon>
    </template>
    <template #child-title="{ props }">
      <b>{{ props.title }}</b>
    </template>
  </CurvedBottomNavigation>
</template>

<script>
import { CurvedBottomNavigation } from "bottom-navigation-vue";

export default ({
    name:"Mobilenavs",
    components:{
        CurvedBottomNavigation
    },
    setup() {
        
    },
     data: () => ({
    selected: 3,
    options: [
      {
        id: 1,
        icon: "fas fa-wallet",
        title: "Featured",
        path: { name: "#/feature" },
      },
      {
        id: 2,
        icon: "fas fa-wallet",
        title: "Portfolio",
        path: { name: "#/portfolio" },
      },
      {
        id: 3,
        icon: "fas fa-home",
        title: "Home",
        path: { name: "/" },
      },
      {
        id: 4,
        icon: "fas fa-wallet",
        title: "Gallery",
        path: { name: "/gallery" },
      },
      {
        id: 5,
        icon: "fas fa-wallet",
        title: "About Me",
        path: { name: "/about-me" },
      },
      {
        id: 6,
        icon: "fas fa-wallet",
        title: "Contact Me",
        path: { name: "/contact-me" },
      },
    ],
  }),
})
</script>
