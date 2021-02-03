<template>
  <div class="signup">
    <Navbar v-if="$vuetify.breakpoint.mdAndUp" />
    <v-content>
      <v-container class="fill-height" :class="{'pt-0': $vuetify.breakpoint.smAndDown}" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" md="5">
            <v-card flat
              :loading="$vuetify.breakpoint.mdAndUp ? loading : 'false'"
              :outlined="$vuetify.breakpoint.mdAndUp"
            >
              <v-card-text>
                <v-row>
                  <v-col xs="12" class="py-0">
                    <p class="text-center mb-0" style="font-size: 16px">
                      Sign up with
                      <v-btn depressed class="text-none px-0" style="font-size: 16px" color="teal" text>
                        Facebook
                      </v-btn> or
                      <v-btn depressed class="text-none px-0" style="font-size: 16px" color="teal" text>
                        Google
                      </v-btn>
                    </p>
                  </v-col>
                  <v-col cols="12" class="pt-1 pb-5">
                    <v-row>
                      <v-col>
                        <v-divider></v-divider>
                      </v-col>
                      or
                      <v-col>
                        <v-divider></v-divider>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
                <v-alert v-if="getError" type="error" text>
                  {{getError}}
                </v-alert>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-container pa-0>
                    <div class="d-flex">
                      <v-text-field
                        v-model="register.firstName"
                        label="First name"
                        outlined
                        :rules="[Rules.required('First name'), Rules.minLength('First name', 3)]"
                        required
                      />
                      <v-text-field
                        v-model="register.lastName"
                        label="Last name"
                        outlined
                        :rules="[Rules.required('Last name'), Rules.minLength('Last name', 3)]"
                        required
                      />
                    </div>
                  </v-container>
                  <v-text-field
                    v-model="register.email"
                    :rules="[Rules.required('Email'), Rules.email]"
                    label="E-mail Address"
                    autocomplete="username"
                    outlined
                    required
                  />
                  <v-text-field
                    v-model="register.password"
                    :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPwd ? 'text' : 'password'"
                    @click:append="showPwd = !showPwd"
                    :counter="24"
                    outlined
                    autocomplete="new-password"
                    :rules="[Rules.required('Password'), Rules.minLength('Password', 8)]"
                    :hint="setPasswordHint"
                    label="Password"
                    required
                  />
                  <div class="d-flex">
                    <v-autocomplete
                      v-model="countryCode"
                      :items="countryCodes"
                      outlined
                      style="max-width: 140px"
                      color="blue-grey lighten-2"
                      label="Country code"
                      item-text="code"
                      item-value="code"
                    >
                      <template v-slot:selection="data">
                        {{data.item.shortName}} {{ data.item.code }}
                      </template>
                      <template v-slot:item="data">
                        <template v-if="typeof data.item !== 'object'">
                          <v-list-item-content v-text="data.item"></v-list-item-content>
                        </template>
                        <template v-else>
                          <v-list-item-content>
                            <v-list-item-title>{{data.item.name}} {{`(${data.item.code})`}}</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                    <v-text-field
                      label="Phone Number"
                      type="number"
                      outlined
                      @blur="formatPhone"
                      :rules="[Rules.required('Phone number')]"
                      hint="We will contact you via this number"
                      v-model="initialPhone"
                      required
                    />
                  </div>
                  <v-btn block
                    :disabled="!valid"
                    :loading="$vuetify.breakpoint.mdAndUp ? false : loading"
                    color="success"
                    large
                    class="mt-5"
                    @click="performSignup"
                  >Signup</v-btn>
                  <v-checkbox
                    v-model="checkbox"
                    label="I don’t want to receive marketing messages from Howmies."
                  />
                </v-form>
                <v-divider class="my-3 mx-2" />
                <p class="ml-2">
                  Already have an account with Howmies?
                  <router-link to="/login" replace>
                    <span class="subtitle-1 clickable">Log in</span>
                  </router-link>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '@/components/navbars/LoginNav.vue';
import { Rules } from '@/services/Mixins';

export default {
  components: {
    Navbar,
  },
  data: () => ({
    passwordHint: 'At least 8 characters',
    Rules,
    countryCode: '+234',
    countryCodes: [],
    loading: false,
    showPwd: false,
    valid: true,
    checkbox: false,
    initialPhone: '',
    register: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    },
  }),
  computed: {
    ...mapGetters(['getError']),
    setPasswordHint() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      if (this.register.password >= 8) return this.passwordHint = 'Password OK';
      return this.passwordHint;
    },
  },
  methods: {
    performSignup() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$store.dispatch('REGISTER', this.register)
          .then(() => {
            this.loading = false;
            this.$router.push('/');
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
    formatPhone() {
      const [first, ...rest] = [...this.initialPhone];
      this.register.phone = `${this.countryCode}${this.initialPhone}`;
      if (first === '0') {
        this.initialPhone = rest.join('');
        this.register.phone = `${this.countryCode}${rest.join('')}`;
      }
    },
    getCountries() {
      if (this.countryCodes.length > 0) return;
      this.isLoading = true;
      fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(res => res.forEach((countryCode) => {
          this.countryCodes.push({ name: countryCode.name, code: `+${countryCode.callingCodes[0]}`, shortName: countryCode.alpha2Code });
        }))
        .catch((err) => {
          console.log(err);
        })
      // eslint-disable-next-line no-return-assign
        .finally(() => (this.isLoading = false));
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>
