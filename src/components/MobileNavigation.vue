<template>
  <CurvedBottomNavigation :options="options" v-model="selected" />
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
        title: "Featured",
        path: { name: "#/feature" },
      },
      { id: 2, icon: "fas fa-wallet", title: "Wallet" },
      {
        id: 3,
        icon: "fas fa-home",
        title: "Home",
        path: { name: "/" },
      },
      { id: 4, icon: "fas fa-wallet", title: "Wallet" },
      { id: 5, icon: "fas fa-wallet", title: "Wallet" },
    ],
  }),
};
</script>