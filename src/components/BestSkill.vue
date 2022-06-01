<template>
  <v-col lg="12" md="12" sm="12" class="mt-lg-5">
    <v-row class="justify-center">
      <h6 class="text-center">BEST SKILL ON</h6>
    </v-row>
    <v-row class="justify-center">
      <best-skill-list
        v-for="(icon, x) in icons"
        :key="x"
        :colorname="icon.colorname"
        :iconname="icon.iconname"
        :tooltips="icon.tooltips"
      ></best-skill-list>
    </v-row>
  </v-col>
</template>
<script>
import BestSkillList from "./BestSkillList.vue";
export default {
  components: { BestSkillList },
  name: "BestSkill",
  data() {
    return {
      icons: [
        { colorname: "red", iconname: "mdi-laravel", tooltips: "Laravel " },
        { colorname: "green", iconname: "mdi-vuejs", tooltips: "VueJs" },
        {
          colorname: "indigo",
          iconname: "mdi-bootstrap",
          tooltips: "Bootstrap",
        },
        { colorname: "primary", iconname: "mdi-jquery", tooltips: "jQuery" },
        {
          colorname: "amber",
          iconname: "mdi-language-javascript",
          tooltips: "JavaScript ",
        },

        {
          colorname: "indigo accent-4",
          iconname: "mdi-language-css3",
          tooltips: "Cascading Style Sheets",
        },
        {
          colorname: "indigo accent-4",
          iconname: "inertia-js",
          tooltips: "InertiaJs",
        },
      ],
    };
  },
};
</script>