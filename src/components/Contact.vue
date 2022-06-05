<template>
  <div class="">
    <div class="text-justify my-5">
      <h6 class="text-sm-h6 text-center font-weight-bold text-lg-h5">
        CONTACT
      </h6>
    </div>
    <div class="text-justify my-4">
      <h6 class="text-sm-h5 text-center font-weight-bold text-lg-h4">
        Contact With Me
      </h6>
    </div>
    <v-row>
      <v-col sm="12" md="4" lg="4">
        <v-hover v-slot="{ hover }">
          <v-card
            class="pb-5 pa-4 rounded-xl"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
          >
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
        </v-hover>
      </v-col>
      <v-col sm="12" lg="8" md="8">
        <v-hover v-slot="{ hover }">
          <v-card
            class="pb-5 pa-4 rounded-xl"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
          >
            <forms></forms>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Forms from "@/components/Forms";
import axios from "axios";

export default {
  components: { Forms },
  name: "Contact",
  mounted() {
    document.title = "Er.Anil Kumar Thakur | Contact Me ";
  },

  methods: {
    alertDisplay() {
      this.$swal("Heading", "this is a Heading", "OK");
    },
    submitForm() {
      axios
        .post("http://127.0.0.1:8000/api/messages", this.form)
        .then((response) => {
          console.log(response);
          this.$swal("Heading", response.success, "OK");
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  data() {
    return {
      form: {
        name: null,
        email: null,
        phone: null,
        message: null,
      },
    };
  },
};
</script>