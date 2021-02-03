<template>
  <div class="mb-12">
    <h3
      class="subtitle-1 secondary--text text--lighten-2 font-weight-medium"
    >What is the size of land you are listing?</h3>
    <v-row>
      <v-col md="7">
        <div class="d-flex">
          <v-text-field type="number" v-model="plot" outlined label="Land size" />
          <v-select v-model="measurement" :items="scales" outlined label="measurement" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    measurement: 'plot',
    scales: ['plot', 'hecter'],
  }),
  computed: {
    plot: {
      get() {
        return this.$store.state.post.list.plot;
      },
      set(value) {
        this.$store.commit('updatePlot', value);
      },
    },
  },
};
</script>
