<template>
  <CurvedBottomNavigation
    :options="options"
    v-model="selected"
    :replaceRoute="true"
  />
</template>

<script>
import { CurvedBottomNavigation } from "bottom-navigation-vue";

export default {
  components: { CurvedBottomNavigation },
  data: () => ({
    selected: 3,
    options: [
      {
        id: 1,
        icon: "fas fa-wallet",
        title: "Feature",
        path: { name: "Feature" },
      },
      {
        id: 2,
        icon: "fas fa-wallet",
        title: "Portfolio",
        path: { name: "Portfolio" },
      },
      {
        id: 3,
        icon: "fas fa-home",
        title: "Home",
        path: { name: "Home" },
      },
      {
        id: 4,
        icon: "fas fa-wallet",
        title: "Gallery",
        path: { name: "Gallery" },
      },
      {
        id: 5,
        icon: "fas fa-wallet",
        title: "About Me",
        path: { name: "About" },
      },
      {
        id: 6,
        icon: "fas fa-wallet",
        title: "Contact Me",
        path: { name: "Contact" },
      },
    ],
  }),
};
</script>