<template>
  <div>
    <v-img
      v-if="$vuetify.breakpoint.mdAndUp"
      src="https://res.cloudinary.com/daygucgkt/image/upload/v1577502684/parallax_xtgte4.jpg"
      lazy-src="https://res.cloudinary.com/daygucgkt/image/upload/v1588586911/parallax2_dce4sl.jpg"
      height="100vh"
    >
      <v-container fluid class="fill-height" style="background: rgba(0,0,0,0.5);">
        <Navbar />
        <v-container class="fill-height">
          <v-row align="center" justify="center">
            <v-col xs="12" md="5">
              <SearchBox />
            </v-col>
            <v-col md="7">
              <v-container>
                <v-row justify="center">
                  <h1 class="display-1 white--text text-center mb-3">
                    Fastest way to find available homes
                  </h1>
                  <v-card to="/search" min-width="230">
                    <v-card-title>
                      <v-icon left>mdi-magnify</v-icon>
                      <h4 class="text-uppercase subtitle-1">Explore homes</h4>
                    </v-card-title>
                  </v-card>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-img>

    <v-img
      v-else
      src="https://res.cloudinary.com/daygucgkt/image/upload/v1577502662/backgroundSm_uplha3.jpg"
      lazy-src="https://res.cloudinary.com/daygucgkt/image/upload/v1588586911/parallax2_dce4sl.jpg"
      height = "70vh"
    >
      <v-container fluid class="fill-height" style="background: rgba(0,0,0,0.5);">
        <Navbar />
        <v-container class="fill-height">
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8">
              <h2 class="grey--text text--lighten-5">
                Let's help you find a
                <em>home</em> that meets your standards
              </h2>
            </v-col>
            <v-card flat style="background: rgba(0,0,0,0.5)">
              <v-container>
                <SearchForm />
              </v-container>
            </v-card>
          </v-row>
        </v-container>
      </v-container>
    </v-img>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';
import SearchForm from '@/components/SearchForm.vue';

const Navbar = () => import('@/components/navbars/HomeNav.vue');

export default {
  components: {
    Navbar,
    SearchBox,
    SearchForm,
  },
};
</script>
