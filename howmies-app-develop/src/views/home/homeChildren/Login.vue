<template>
  <div class="login">
    <Navbar v-if="$vuetify.breakpoint.mdAndUp" />
    <v-container>
      <v-row justify="center">
        <v-col xs="12" md="5">
          <v-card
            :outlined="$vuetify.breakpoint.mdAndUp"
            :flat="$vuetify.breakpoint.smAndDown"
            :loading="$vuetify.breakpoint.mdAndUp ? loading : 'false'"
          >
            <v-card-text>
              <v-row>
                <v-col cols="12" :class="{'pt-0': $vuetify.breakpoint.smAndDown}">
                  <v-btn block class="primary text-none">
                    <v-icon small left>mdi-facebook</v-icon>Log in with Facebook
                  </v-btn>
                </v-col>
                <v-col cols="12">
                  <v-btn block outlined class="text-none">
                    <v-icon small left>mdi-google</v-icon>Log in with Google
                  </v-btn>
                </v-col>
                <v-col>
                  <v-divider />
                </v-col>or
                <v-col>
                  <v-divider />
                </v-col>
              </v-row>
              <v-alert v-if="error" type="error" text>
                {{getError}}. Enter your login information again or request a <router-link class="error--text" to="#">password change</router-link>
              </v-alert>
              <v-form class="mt-8" ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="login.email"
                  :rules="[Rules.required('Email'), Rules.email]"
                  autocomplete="username"
                  label="E-mail"
                  outlined
                ></v-text-field>

                <v-text-field
                  v-model="login.password"
                  :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  :rules="[Rules.required('Password'), Rules.minLength('Password', 8)]"
                  name="Password"
                  label="Password"
                  autocomplete="current-password"
                  hint="At least 8 characters"
                  outlined
                  counter
                  @click:append="show = !show"
                />

                <!-- <v-checkbox v-model="checkbox" class="mt-0 mb-2" label="Keep me logged in" color="teal"></v-checkbox> -->
                <v-btn
                  :disabled="!valid"
                  :loading="$vuetify.breakpoint.mdAndUp ? false : loading"
                  color="success"
                  class="mt-4"
                  block
                  @click="performLogin"
                >Login</v-btn>
              </v-form>
              <p class="subtitle-1 text-center mt-4 mb-0 teal--text">Forgot password?</p>
            </v-card-text>
            <v-card-actions>
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-divider />
                </v-col>
                <v-col cols="12">
                  <p class="text-center">
                    Don't have an account?
                    <span
                      class="clickable"
                      @click="$router.replace('/signup')"
                    >Sign up</span>
                  </p>
                </v-col>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '@/components/navbars/LoginNav.vue';
import { Rules } from '@/services/Mixins';

export default {
  name: 'login',
  components: { Navbar },
  data: () => ({
    Rules,
    loading: false,
    show: false,
    error: false,
    login: {
      email: '',
      password: '',
    },
    checkbox: false,
    valid: true,
  }),
  computed: mapGetters(['getError']),
  methods: {
    performLogin() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.$store.dispatch('LOGIN', this.login)
          .then(() => {
            this.$router.push('/account');
            this.loading = false;
          })
          .catch(() => {
            this.error = true;
            this.loading = false;
          });
      }
    },
  },
};
</script>
