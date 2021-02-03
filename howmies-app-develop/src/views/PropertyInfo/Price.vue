<template>
  <v-container>
    <div style="max-width: 45em" class="secondary--text text--lighten-2">
      <h1
        class="headline secondary--text text--lighten-1 font-weight-bold"
        :class="{'title': $vuetify.breakpoint.smAndDown}"
      >Set your price</h1>
      <p
        class="py-2"
      >Setup a realistic price. Customers will see this price when they view your property.</p>
      <p class="pb-0 font-weight-medium">How much do you want to list this property?</p>
      <div class="d-flex my-4">
        <v-text-field
          type="number"
          outlined
          v-model="price"
          prefix="₦"
          label="Price"
          placeholder="0"
        />
        <v-select outlined :items="periods" v-model="period" label="Per period" />
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    periods: ['Per year', 'Per month', 'Per week', 'Pre night'],
  }),
  computed: {
    price: {
      get() {
        return this.$store.state.post.list.price;
      },
      set(value) {
        this.$store.commit('updatePrice', value);
        sessionStorage.price = value;
      },
    },
    period: {
      get() {
        return sessionStorage.period;
      },
      set(value) {
        this.$store.commit('updatePeriod', value);
        sessionStorage.period = value;
      },
    },
  },
};
</script>
