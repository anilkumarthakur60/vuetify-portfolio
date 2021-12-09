<template>
  <div class="">
    <div class="text-justify my-5">
      <h6 class="text-sm-h6 text-center font-weight-bold text-lg-h5">
        CONTACT
      </h6>
    </div>
    <div class="text-justify my-4">
      <h6 class="text-sm-h5 text-center font-weight-bold text-lg-h3">
        Contact With Me
      </h6>
    </div>
    <v-row>
      <v-col sm="12" md="4" lg="4">
        <v-card class="pb-5 pa-4 rounded-xl">
          <v-img src="../assets/anil.jpg" class="rounded-xl mb-5"> </v-img>
          <div class="text-h4 mt-5">Anil Kumar Thakur</div>
          <div class="text-h6 red--text">Full Stack Developer</div>
          <div class="text-subtitle-2 mt-5">
            I am available for freelance work. Connect with me via and call in
            to my account.
          </div>
          <div class="text-subtitle-2 mt-5">
            Phone: <span class="red--text">+977-9808711001</span>
          </div>
          <div class="text-subtitle-2 mt-5">
            Email:
            <v-btn
              :text="true"
              plain
              class="text-lowercase"
              href="mailto:anilkumarthakur60@gmail.com"
              >anilkumarthakur60@gmail.com</v-btn
            >
          </div>
        </v-card>
      </v-col>
      <v-col sm="12" lg="8" md="8">
        <v-card rounded="lg" class="pa-5">
          <forms></forms>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Forms from "@/components/Forms";
export default {
  components: { Forms },
  name: "Contact",
  mounted() {
    document.title = "Er.Anil Kumar Thakur | Contact Me ";
  },
};
</script>