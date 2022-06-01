<template>
  <v-col lg="1" md="1" sm="1">
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="px-1" icon dark :href="href" v-bind="attrs" v-on="on">
          <v-icon :color="colorname">{{ iconname }}</v-icon>
        </v-btn>
      </template>
      <span>
        <v-btn :href="href"> {{ tooltips }}</v-btn>
      </span>
    </v-tooltip>
  </v-col>
</template>
<script>
export default {
  name: "BestSkillList",

  props: {
    colorname: String,
    iconname: String,
    href: String,
    tooltips: String,
  },
};
</script>

<style >
.inertia-js {
  background-image: url("https://avatars.githubusercontent.com/u/47703742?s=30&v=4");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
}
</style>