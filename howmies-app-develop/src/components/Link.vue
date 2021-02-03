<template>
  <div>
    <v-btn class="hidden-sm-and-down text-none mr-1" to="/list-your-property" text>
      List your properties
    </v-btn>
    <v-btn v-if="auth" class="hidden-sm-and-down text-none mr-1" to="/saved" text>Saved</v-btn>
    <v-btn class="hidden-sm-and-down text-none mr-1" to="/help" text>Help</v-btn>
    <template v-if="!auth">
      <v-btn
        class="hidden-sm-and-down text-none mr-1"
        text
        @click.stop="openSignupDialog"
      >Signup</v-btn>
      <v-btn
        class="hidden-sm-and-down text-none mr-1"
        text
        to="/login"
      >Login</v-btn>
    </template>
    <v-menu transition="slide-y-transition" v-else
      v-model="accountMenu" min-width="250" offset-y open-on-hover
    >
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon><v-avatar color="primary">MT</v-avatar></v-btn>
      </template>
      <v-list>
        <v-list-item :to="item.route" v-for="item in account" :key="item.title">
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          <v-divider class="mt-1"></v-divider>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="performLogout">
          <v-list-item-title>Log out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-dialog
      v-model="dialog"
      max-width="530"
    >
      <v-card :flat="$vuetify.breakpoint.smAndDown">
        <v-toolbar color="white" class="py-3" flat>
          <v-toolbar-title>
            Sign up
          </v-toolbar-title>
          <v-spacer />
          <div class="mb-2" v-if="$vuetify.breakpoint.smAndDown">
          <v-btn class="mx-2" fab small color="white" @click="$router.go(-1)">
            <v-icon color="teal">close</v-icon>
          </v-btn>
        </div>
        </v-toolbar>
        <v-card-text>
          <v-row row class="my-3">
            <v-col cols="12">
              <v-btn block large class="primary">
                <v-icon small left>fab fa-facebook-f</v-icon>Continue with Facebook
              </v-btn>
            </v-col>
            <v-col cols="12">
              <v-btn block large class="white">
                <v-icon small left>fab fa-google</v-icon>Continue with Google
              </v-btn>
            </v-col>
            <v-col>
              <v-divider></v-divider>
            </v-col>
            or
            <v-col>
              <v-divider></v-divider>
            </v-col>
          </v-row>
            <v-btn block large class="success" @click="$router.push('/signup')">
              Sign up with Email
            </v-btn>
            <v-divider class="my-3 mx-2" />
            <p class="ml-2">
              Already have an account with Howmies?
              <span class="teal--text" @click="$router.push('/login')">Log in</span>
            </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  name: 'Link',
  components: {},
  data: () => ({
    accountMenu: false,
    dialog: false,
    account: [
      { title: 'My profile', route: '/userProfile' },
      { title: 'Messages', route: '/messages' },
      { title: 'My list', route: '/myList' },
    ],
  }),
  methods: {
    openSignupDialog() {
      this.dialog = true;
    },
    ...mapActions(['performLogout']),
  },
  computed: {
    auth() {
      return this.$store.state.user.isAuthenticated;
    },
  },
};
</script>
