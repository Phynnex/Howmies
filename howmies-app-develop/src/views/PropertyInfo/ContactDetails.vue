<template>
  <div>
    <v-container mb-12 class="secondary--text text--lighten-2">
      <h3
        class="headline secondary--text text--lighten-1 font-weight-bold pb-1"
        :class="{'title': $vuetify.breakpoint.smAndDown}"
      >What are the contact details for this property?</h3>
      <p>We will contact you via the contact information you provide below, once this property is booked.</p>
      <v-form v-model="valid" ref="form" lazy-validation>
        <div class="d-flex flex-column form-width">
          <v-text-field
            label="Contact name"
            v-model="name"
            outlined
            :rules="nameRules"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            outlined
            v-model="email"
            :rules="emailRules"
            required
          />
          <div class="d-flex">
            <v-select
              label="Country"
              :items="country"
              item-text="value"
              style="max-width: 8em"
              item-value="value"
              outlined
              :rules="countryCodeRules"
              v-model="selected"
              required
            />
            <v-text-field
              label="Phone Number"
              type="number"
              outlined
              :rules="phoneRules"
              hint="We will contact you when this property is requested"
              v-model="phone"
              required
            />
          </div>
          <div class="d-flex">
            <v-select
              label="Country"
              :items="country"
              item-text="value"
              item-value="value"
              style="max-width: 8em"
              outlined
              v-model="altSelected"
              required
            />
            <v-text-field
              label="Alternative phone number(optional)"
              placeholder="0813-445-3453"
              type="number"
              outlined
              hint="Optional alternative phone number"
              v-model="altPhone"
              required
            />
          </div>
          <v-radio-group v-model="isCompany">
            <template v-slot:label>
              <div>Are you a property management company or industry professional?</div>
            </template>
            <v-radio color="teal" label="Yes, I'm a property management company" :value="true"></v-radio>
            <v-radio color="teal" label="No, I am not" :value="false"></v-radio>
          </v-radio-group>
          <v-text-field
            v-if="$store.state.post.list.isCompany!==false"
            label="Name of company or group"
            outlined
            v-model="companyName"
            required
          />
        </div>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import bus from '@/event-bus';

export default {
  created() {
    bus.$on('contactValidate', () => {
      if (this.$refs.form.validate()) {
        this.$router.push('/list-your-property/property-location');
      }
    });
  },
  data: () => ({
    valid: true,
    phoneRules: [v => !!v || 'Phone number is required'],
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length >= 3) || 'Name must not be less than 3 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    countryCode: '',
    countryCodeRules: [v => !!v || 'Country code is required'],
    altCountryCode: '',
    selected: {
      name: 'Nigeria',
      value: '+234',
    },
    altSelected: {
      name: 'Nigeria',
      value: '+234',
    },
    country: [{ name: 'Nigeria', value: '+234' }],
  }),
  computed: {
    name: {
      get() {
        return this.$store.state.post.list.name;
      },
      set(value) {
        this.$store.commit('updateName', value);
        sessionStorage.contactName = value;
      },
    },
    email: {
      get() {
        return this.$store.state.post.list.email;
      },
      set(value) {
        this.$store.commit('updateEmail', value);
        sessionStorage.contactEmail = value;
      },
    },
    phone: {
      get() {
        return this.$store.state.post.list.phone;
      },
      set(value) {
        this.$store.commit('updatePhone', value);
        sessionStorage.contactPhone = value;
      },
    },
    altPhone: {
      get() {
        return this.$store.state.post.list.altPhone;
      },
      set(value) {
        this.$store.commit('updateAltPhone', value);
        sessionStorage.ContactAltPhone = value;
      },
    },
    isCompany: {
      get() {
        return this.$store.state.post.list.isCompany;
      },
      set(value) {
        this.$store.commit('updateIsCompany', value);
        sessionStorage.isContactCompany = value;
      },
    },
    companyName: {
      get() {
        return this.$store.state.post.list.companyName;
      },
      set(value) {
        this.$store.commit('updateCompanyName', value);
        sessionStorage.contactCompany = value;
      },
    },
  },
};
</script>

<style scoped>
.form-width {
  max-width: 43em !important;
}
</style>
