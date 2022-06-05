<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <validation-provider v-slot="{ errors }" name="Name" rules="required">
        <v-text-field
          outlined
          auto-grow
          color="primary"
          class="my-lg-6 my-md-4 my-sm-2"
          v-model="form.name"
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="phone"
        :rules="{
          required: true,
          min: 8,
          max: 17,
        }"
      >
        <v-text-field
          outlined
          auto-grow
          color="primary"
          class="my-lg-6 my-md-4 my-sm-2"
          v-model="form.phone"
          :counter="14"
          :error-messages="errors"
          label="Phone Number"
          name="phone"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          outlined
          auto-grow
          color="primary"
          class="my-lg-6 my-md-4 my-sm-2"
          v-model="form.email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider v-slot="{ errors }" name="message" rules="required">
        <v-textarea
          outlined
          auto-grow
          counter
          color="primary"
          v-model="form.message"
          :error-messages="errors"
          label="Message"
          required
        ></v-textarea>
      </validation-provider>

      <div class="my-lg-6 my-md-4 my-sm-2">
        <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </div>
    </form>
  </validation-observer>
</template>

<script>
import axios from "axios";

import {
  required,
  digits,
  email,
  max,
  regex,
  min,
} from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});
extend("min", {
  ...min,
  message: "{_field_} may not be smaller than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

extend("email", {
  ...email,
  message: "Email must be valid",
});

export default {
  name: "Forms",
  components: {
    ValidationProvider,
    ValidationObserver,
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

  methods: {
    submit() {
      this.$refs.observer.validate();
      axios
        .post("https://matrixaccount.herokuapp.com/api/messages", this.form)
        .then((response) => {
          this.$swal(
            "Thank you for contacting me!",
            response.data.success,
            "success"
          );
          this.clear();
        })
        .catch((error) => {
          console.log("error", error);
          this.$swal("Error Occured", error, "error");
        })
        .finally(() => (this.loading = false));
    },
    clear() {
      this.form.name = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.message = "";
      this.$refs.observer.reset();
    },
  },
};
</script>