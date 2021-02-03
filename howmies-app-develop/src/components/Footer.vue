<template>
  <div id="footer">
    <v-footer dark class="black" height="auto">
      <v-container grid-list-xl>
        <v-layout row wrap>
          <!-- News letter -->
          <v-flex xs12 sm4 md3>
            <h2 class="headline grey--text text--lighten-3">Newsletter</h2>
            <p
              class="my-4 caption grey--text"
            >Keep up on our best offers. Enter your e-mail and subscribe to our newsletter.</p>
            <v-text-field label="Email Address" outlined append-icon="mdi-chevron-double-right"></v-text-field>
          </v-flex>
          <!-- Latest tweets -->
          <v-flex xs12 sm4 md3>
            <h2 class="headline grey--text text--lighten-3">Latest Tweets</h2>
            <p class="my-4 caption grey--text">Please wait...</p>
          </v-flex>
          <!-- Contact Us -->
          <v-flex xs12 sm4 md3>
            <h2 class="headline grey--text text--lighten-3">Contact Us</h2>
            <div class="my-4 caption grey--text">
              <p>
                <v-icon left>mdi-map-marker</v-icon>
                <span class="mr-2 font-weight-bold">Address:</span>8 Nvuigwe road, Woji, Port Harcourt.
              </p>
              <p>
                <v-icon left>mdi-phone</v-icon>
                <span class="mr-2 font-weight-bold">Phone:</span>+243 807 076 7681
              </p>
              <p>
                <v-icon left>mdi-email</v-icon>
                <span class="font-weight-bold">Email:</span>
                <span class="white--text ml-2">info@howmies.com</span>
              </p>
            </div>
          </v-flex>
          <!-- Follow Us -->
          <v-flex xs12 sm4 md3>
            <h2 class="headline grey--text text--lighten-3">Support</h2>
            <div class="mt-3">
              <p><a href="#" class="mb-0 white--text">FeedBack</a></p>
              <p><a href="#" class="white--text">Help Center</a></p>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap class="black">
          <v-flex shrink pa-0>
            <v-img
              :src="require('../assets/footer-logo.png')"
              height="70px"
              width="100"
              class="pa-2"
            ></v-img>
          </v-flex>
          <v-flex grow>
            <p class="grey--text py-4 px-0 ml-0">&copy; copyright 2019. All Rights Reserved.</p>
          </v-flex>
          <v-flex shrink class="mt-3 pl-0">
            <v-btn text class="text-none pa-2 font-weight-light">FAQ's</v-btn><v-divider color="white" vertical />
            <v-btn text class="text-none pa-2 font-weight-light" to="/about">About</v-btn><v-divider color="white" vertical />
            <v-btn text class="text-none pa-2 font-weight-light" to="/contact">Contact</v-btn>
          </v-flex>
          <v-flex shrink class="mt-3 px-0">
            <v-btn icon>
                <v-icon class="mx-3">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon class="mx-3">mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon class="mx-3">mdi-instagram</v-icon>
              </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    contacts: [
      { title: 'Address', icon: 'mdi-map-marker', content: '8 Nvuigwe road, Woji, Port Harcourt.' },
      { title: 'Phone', icon: 'mdi-phone', content: '+243 807 076 7681' },
      { title: 'Email', icon: 'mdi-email', content: 'info@howmies.com' },
    ],
  }),
};
</script>

<style scoped>
.v-divider--vertical {
  min-height: 30%;
  max-height: 30%;
}
@media screen and (max-width: 960px){
  .v-divider--vertical {
    min-height: 40%;
    max-height: 40%;
  }
}
</style>
