<template>
  <v-row>
    <v-col sm="12">
      <v-subheader class="justify-center"
        >VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</v-subheader
      >
      <div class="text-h5 text-center font-weight-bold">My Portfolio</div>
    </v-col>
    <v-col></v-col>
    <div class="">
      <div
        class="justify-center font-weight-bold text-lg-h5 text-md-h5 text-sm-h5"
      ></div>
      <v-row>
        <what-i-do
          v-for="whatisodolist in whatidolists"
          :name="whatisodolist.name"
          :image="whatisodolist.image"
          :text="whatisodolist.text"
          :key="whatisodolist.name"
        ></what-i-do>
      </v-row>
    </div>
  </v-row>
</template>
<script>
import WhatIDo from "./WhatIDo.vue";
export default {
  components: { WhatIDo },
  name: "Feature",
  data() {
    return {
      whatidolists: [
        {
          name: "Front End",
          image: require("../assets/frontend.svg"),
          text: "Frontend Developer  with 2  years experience building and maintaining responsive websites . Proficient in  modern web technology and frameworks like Vue js, Inertia JS ,Bootstrap ,Vuetify.",
        },
        {
          name: "Backend",
          image: require("../assets/backend.webp"),
          text: "Backend Developer with 1.5 year experience in  industry. Analyze data, processes, and codes to troubleshoot problems and identify areas for improvement also taking lead on projects as needed.",
        },
        {
          name: "Project Management",
          image: require("../assets/projectmanagement.jpg"),
          text: "Managed project plan and Worked closely with management on assigned projects from inception through implementation to ensure adequate internal communication between end user and developerd.",
        },
        {
          name: "Database Design",
          image: require("../assets/database.png"),
          text: "Relational Database design for small to large scale project. Maintaining and enhancing the performance of existing database. Optimize database systems for performance and reliability. ",
        },
      ],
    };
  },
  mounted() {
    document.title = "Er.Anil Kumar Thakur | Feature";
  },
};
</script>