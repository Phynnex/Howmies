<template>
  <v-col xs="12" md="3" class="pt-0">
    <h2 class="title font-weight-bold">Request More Information (Ask a question)</h2>
    <p class="grey--text text--darken-1 my-3">Contact us or give us a call to request more information about this property</p>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field outlined v-model="userRequest.name" :rules="nameRules" label="Name" />
      <v-text-field outlined v-model="userRequest.email" :rules="emailRules" label="Email Address" />
      <v-text-field outlined v-model="userRequest.subject" label="Subject" />
      <v-textarea outlined v-model="userRequest.message" :rules="messageRules" auto-grow label="Message" />
      <v-btn :disabled="!valid" color="primary" @click="sendRequest">Send Message</v-btn>
    </v-form>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    userRequest: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    nameRules: [
      value => !!value || 'Name is Required.',
      v => v.length >= 3 || 'Name must be atleast 3 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    messageRules: [
      value => !!value || 'Message is Required.',
    ],
  }),
  methods: {
    sendRequest() {
      if (this.$refs.form.validate()) {
        console.log(this.userRequest.message);
      }
    },
  },
};
</script>
