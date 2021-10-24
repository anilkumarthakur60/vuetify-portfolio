<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
     
     
      <validation-provider
        v-slot="{ errors }"
        name="Name"
        rules="required" 
      >
        <v-text-field outlined auto-grow color="primary" class="my-10"
          v-model="name"
          
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
       
        :rules="{
          required: true,
          min:8,
          max:13,
          digits: 8,
                    regex: '/^(?:\+977|0977)?-?(?:(?:(?:98|97)-?\d{8})|(?:01-?\d{7})|(?:0\d{2}-?\d{6}))$/'

        }"
      >
        <v-text-field outlined auto-grow color="primary" class="my-10"
          v-model="phoneNumber"
          :counter="13"
          :error-messages="errors"
          label="Phone Number"
          name="phone number"

          required
        ></v-text-field>
      </validation-provider>
    
      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        rules="required|"
      >
        <v-text-field outlined auto-grow color="primary" class="my-10"
          v-model="phoneNumber"
          :error-messages="errors"
          label="phoneNumber"
          :rules="{
          required: true,
          min:8,
          max:13,
          digits: 13,
         
        }"
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field outlined auto-grow color="primary" class="my-10"
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="message"
        rules="required"
      >
        <v-textarea  outlined auto-grow color="primary"
          v-model="message"
          :error-messages="errors"
          label="Message"
          required
        ></v-textarea>
      </validation-provider>

      
      <div class=" my-10">
      <v-btn
        class="mr-4"
        type="submit" 
        :disabled="invalid"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
      </div>
    </form>
  </validation-observer>
</template>

<script>
  import { required, digits, email, max, regex,min } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

 



  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })
  extend('min', {
    ...min,
    message: '{_field_} may not be smaller than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
      name:"Forms",
    components: {
      ValidationProvider,
      ValidationObserver,
      
      
    },
    data: () => ({
      name: '',
      phoneNumber: '',
      email: '',
      select: null,
      message:'',
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: null,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.message = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },
      showtoast(){
        this.$toasted.show('hello billo')

      }
    },
  }
</script>