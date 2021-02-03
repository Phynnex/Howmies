<template>
  <v-container pt-0>
      <h2 class="headline font-weight-bold">Recommended for you</h2>
      <v-row row>
        <v-col xs12 :class="{'pt-3': $vuetify.breakpoint.smAndDown}">
          <v-row row>
            <v-col cols="6" sm="4" md="3"
              v-for="(recommendedProperty, i) in recommendedProperty"
              :key="i"
            >
              <Property :property="recommendedProperty" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div>
        <v-btn
          depressed
          dark
          outlined
          large
          class="text-none"
          color="teal"
          :block="$vuetify.breakpoint.xsOnly"
          @click="toggleBtn"
          v-text="showLess ? 'Show more' : 'Show less'"
        ></v-btn>
      </div>
  </v-container>
</template>

<script>
import Property from './Property.vue';

export default {
  components: { Property },
  computed: {
    showLess() {
      return this.$store.state.property.showLess;
    },
    recommendedProperty() {
      return this.$store.getters.getProperties;
    },
  },
  methods: {
    toggleBtn() {
      this.$store.commit('SHOW_MORE');
    },
  },
};
</script>

<style scoped>
.v-btn--outlined {
  border: 1.2px solid #009688 !important;
  border-radius: 7px;
}
</style>
