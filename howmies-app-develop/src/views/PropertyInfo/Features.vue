<template>
  <v-container mb-12>
    <div style="max-width: 45em" class="secondary--text text--lighten-2">
      <h1 class="headline font-weight-bold secondary--text text--lighten-1" :class="{'title': $vuetify.breakpoint.smAndDown}">
        What features does this property offer?
      </h1>
      <p>Select features this property offers, but you can add even more features after publishing.</p>
      <p class="font-weight-medium mb-1">Choose features you offer in this property</p>
      <v-select
        v-model="features"
        outlined
        label="Pick features"
        :items="listOfFeatures"
        multiple
        chips
      ></v-select>
      <p>Additional features</p>
      <div class="d-flex">
        <v-text-field ref="input" v-model="feature" hint="Add one feature at a time." outlined placeholder="Type additional details" />
        <v-btn outlined x-large color="grey" class="text-none add-btn" @click="addFeature">Add</v-btn>
      </div>
      <v-list class="mb-9">
        <v-list-item class="pl-0" v-for="(features, index) in $store.state.post.list.features.additionalFeatures" :key="index">
          <v-list-item-content class="py-0">
            <v-list-item-title>
              <v-chip
                class="ma-2 px-5 white--text"
                color="teal lighten-1"
                close
              >
                {{features}}
              </v-chip>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    listOfFeatures: ['Air condition', 'Balcony', 'Flexible payment plan', 'Good road network', 'No development fee', 'Tiles'],
    feature: '',
  }),
  methods: {
    addFeature() {
      this.$store.commit('addFeature', this.feature);
      sessionStorage.setItem('featureToAdd', JSON.stringify(this.$store.state.post.list.features.additionalFeatures));
      this.$refs.input.reset();
    },
  },
  computed: {
    features: {
      get() {
        return this.$store.state.post.list.features.selectedFeatures;
      },
      set(value) {
        this.$store.commit('updateFeatures', value);
        sessionStorage.setItem('features', JSON.stringify(value));
      },
    },
  },
};
</script>

<style scoped>
.add-btn {
  height: 56px !important;
}
.v-list-item {
  min-height: 30px;
}
</style>
