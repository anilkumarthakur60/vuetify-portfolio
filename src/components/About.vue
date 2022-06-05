<template>
  <v-row>
    <v-col lg="6" md="6" sm="12" class="justify-center align-self-center">
      <v-img src="@/assets/anil.jpg"> </v-img>
    </v-col>
    <v-col lg="6" md="6" sm="12">
      <h3
        class="
          font-weight-bold
          d-flex
          justify-center
          text-sm-h3 text-lg-h4 text-md-h3
          mx-auto
        "
      >
        About Me
      </h3>
      <h5
        class="
          font-weight-bold
          d-flex
          my-2
          justify-center
          text-sm-h6 text-lg-h6 text-md-h5
        "
      >
        Full Stack Web Developer
      </h5>

      <p class="text-justify font-weight-medium">
        I'm full Stack Web Developer, and very passionate and dedicated to my
        work. With 2 year plus years experience as a professional web developer,
        I have acquired the skills and knowledge necessary to make your project
        a success. I enjoy every step from design to developmet process with
        discussion and collaboration.
        <br />
        <br />
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern web app, web services and online stores. My
        passion is to design digital user experiences through the bold interface
        and meaningful interactions. Check out my Portfolio
      </p>

      <div class="d-flex">
        <v-icon color="success " class="mr-4">mdi-check-all</v-icon>
        <p>Helping with the design and development of web application</p>
      </div>
      <div class="d-flex">
        <v-icon color="success " class="mr-4">mdi-check-all</v-icon>
        <p>Testing and debugging software to keep it optimized</p>
      </div>
      <div class="d-flex">
        <v-icon color="success " class="mr-4">mdi-check-all</v-icon>
        <p>Ensuring cross-platform compatibility and optimization</p>
      </div>
      <div class="d-flex">
        <v-icon color="success " class="mr-4">mdi-check-all</v-icon>
        <p>Keeping up with technological advances to optimize their software</p>
      </div>
      <div class="d-flex">
        <v-icon color="success " class="mr-4">mdi-check-all</v-icon>
        <p>Writing clean code for the front and back end for reusability</p>
      </div>
      <div class="d-flex">
        <v-icon color="success " class="mr-4">mdi-check-all</v-icon>
        <p>Developing APIs and RESTful services</p>
      </div>

      <div class="d-flex mb-3">
        <v-icon color="success " class="mr-4">mdi-check-all</v-icon>
        <p>
          Considering security, maintenance, scalability, and more when
          developing
        </p>
      </div>

      <v-btn
        color="success"
        href="https://drive.google.com/drive/folders/18QPnAkmyNxLqsHVFgH1YTK_C4PqsuuZo?usp=sharing"
        target="_blank"
      >
        Download My Resume
      </v-btn>

      <v-btn depressed color="primary" class="ml-lg-2 my-2" to="/contact-me">
        Contact Me
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "About",
  components: {},
  mounted() {
    document.title = "Er.Anil Kumar Thakur| About Me";
  },
  methods: {
    alertDisplay() {},
  },
};
</script>


