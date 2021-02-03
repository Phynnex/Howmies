<template>
  <div>
    <v-container secondary--text text--lighten-2>
      <h2
        class="headline secondary--text text--lighten-1 font-weight-bold"
      >Where is this property located?</h2>
      <p
        class="secondary--text text--lighten-1 pt-2 mb-0"
      >Make sure you enter full address of your property, including building name and number.</p>
      <v-row class="mb-12">
        <v-col md="7" offset-3>
          <p class="font-weight-medium mb-1">Select your country</p>
          <v-combobox label="Country" :items="countries" item-text="name" :loading="countryLoading" outlined v-model="country" required/>
          <p class="font-weight-medium mb-1">State</p>
          <v-select label="State" :items="states" :loading="stateLoading" @focus="getStates" outlined v-model="state" required />
          <p class="font-weight-medium mb-1">City (Local Government Area)</p>
          <v-select label="City" :items="currentCities" :loading="cityLoading" outlined v-model="city" @focus="getCities" required />
          <p class="font-weight-medium mb-1">Street Address</p>
          <v-text-field label="Address" outlined v-model="address" required />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    countries: [],
    states: [],
    currentCities: [],
    countryLoading: false,
    stateLoading: false,
    cityLoading: false,
    countryCode: '',
  }),
  computed: {
    address: {
      get() {
        return this.$store.state.post.list.address;
      },
      set(value) {
        this.$store.commit('updateAddress', value);
        sessionStorage.propertyAddress = value;
      },
    },
    country: {
      get() {
        return this.$store.state.post.list.country;
      },
      set(value) {
        this.countryCode = value.code.toLowerCase();
        sessionStorage.propertyCountry = value.name;
        this.$store.commit('updateCountry', value.name);
        this.getStates();
      },
    },
    state: {
      get() {
        return this.$store.state.post.list.state;
      },
      set(value) {
        sessionStorage.propertyState = value;
        this.$store.commit('updateState', value);
        this.getCities(value);
      },
    },
    city: {
      get() {
        return this.$store.state.post.list.city;
      },
      set(value) {
        this.$store.commit('updateCity', value);
        sessionStorage.propertyCity = value;
      },
    },
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    getCountries() {
      if (this.countries.length > 0) return;
      this.countryLoading = true;
      fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(res => res.forEach(country => this.countries.push({ name: country.name, code: country.alpha2Code })))
        .catch((err) => {
          console.log(err);
        })
      // eslint-disable-next-line no-return-assign
        .finally(() => (this.countryLoading = false));
    },
    getStates() {
      this.stateLoading = true;
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = `http://battuta.medunes.net/api/region/${this.countryCode}/all/?key=28ccb9efc359e8f3afa7bf7bde593318`;
      fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res => res.forEach(state => this.states.push(state.region)))
        .catch(err => console.log(err))
      // eslint-disable-next-line no-return-assign
        .finally(() => this.stateLoading = false);
    },
    getCities(region) {
      this.cityLoading = true;
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = `http://geo-battuta.net/api/city/${this.countryCode}/search/?region=${region}&key=28ccb9efc359e8f3afa7bf7bde593318`;
      fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res => res.forEach(city => this.currentCities.push(city.city)))
        .catch(err => console.log(err))
      // eslint-disable-next-line no-return-assign
        .finally(() => this.cityLoading = false);
    },
  },
};
</script>
