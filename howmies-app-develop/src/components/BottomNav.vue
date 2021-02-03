<template>
  <v-bottom-navigation
    app
    class="hidden-md-and-up"
    min-height="62"
    :input-value="showBottomNav"
    hide-on-scroll
    :value="activeBtn"
    color="teal"
    style="border-top: 1px solid lightgrey !important"
  >
    <v-btn to="/">
      <span class="caption">Home</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn to="/search">
      <span class="caption">Search</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn to="/saved">
      <span class="caption">Saved</span>
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>

    <v-btn :to="auth ? '/account' : '/login'">
      <span class="caption">{{auth ? 'Account' : 'Login'}}</span>
      <v-icon>mdi-account-circle-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>

export default {
  data: () => ({
    activeBtn: null,
    showBottomNav: true,
  }),
  computed: {
    auth() {
      return this.$store.state.user.isAuthenticated;
    },
  },
  created() {
    if (this.$route.path === '/search') this.activeBtn = 1;
    if (this.$route.path === '/saved') this.activeBtn = 2;
    if (this.$route.path === '/account') this.activeBtn = 3;
    if (this.$route.path === '/login') this.activeBtn = 3;
    if (this.$route.path === '/signup') this.activeBtn = 3;
  },
};
</script>
