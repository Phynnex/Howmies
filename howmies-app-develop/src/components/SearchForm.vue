<template>
  <v-form>
    <v-row>
      <v-col cols="12">
        <v-combobox
          :items="boxSearch.location"
          append-icon="mdi-map-marker-outline"
          v-model="search.location"
          hide-details
          label="Search Location..."
          :solo="$vuetify.breakpoint.smAndDown"
          :outlined="$vuetify.breakpoint.mdAndUp"
          :menu-props="{offsetY: true, transition: 'fade-transition'}"
        />
      </v-col>
      <v-col cols="6"
        :class="{
          'pt-0 my-0 pr-1 d-flex': $vuetify.breakpoint.smAndDown,
          'pr-0': $vuetify.breakpoint.mdAndUp
        }">
        <v-select
          :items="boxSearch.property"
          v-model="search.property"
          background-color="white"
          hide-details
          label="Property type"
          :solo="$vuetify.breakpoint.smAndDown"
          :outlined="$vuetify.breakpoint.mdAndUp"
          multiple
        >
          <template v-slot:prepend-item>
            <v-list-item ripple @click="toggle">
              <v-list-item-action>
                <v-icon :color="search.property.length > 0 ? 'indigo darken-4' : ''">{{icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>All types</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <template v-slot:selection="{item, index}">
            <span v-if="index === 0">
              <span>{{item}}</span>
            </span>
            <span v-if="index === 1" class="grey--text caption">
              (+{{search.property.length - 1}} others)
            </span>
          </template>
        </v-select>
      </v-col>
      <v-col cols="6"
        :class="{
          'pt-0 my-0 pl-1 d-flex': $vuetify.breakpoint.smAndDown,
          'pl-0': $vuetify.breakpoint.mdAndUp
        }">
        <v-select
          :items="boxSearch.status"
          v-model="search.status"
          background-color="white"
          hide-details
          label="status"
          :solo="$vuetify.breakpoint.smAndDown"
          :outlined="$vuetify.breakpoint.mdAndUp"
        />
      </v-col>
      <v-col cols="6"
        :class="{
          'pt-0 pr-1 d-flex': $vuetify.breakpoint.smAndDown,
          'pr-0': $vuetify.breakpoint.mdAndUp
        }">
        <v-select
          :items="boxSearch.minPrice"
          :solo="$vuetify.breakpoint.smAndDown"
          :outlined="$vuetify.breakpoint.mdAndUp"
          v-model="search.minPrice"
          background-color="white"
          hide-details
          label="Min Price"
        />
      </v-col>
      <v-col cols="6" xs6
        :class="{
          'pt-0 pl-1 d-flex': $vuetify.breakpoint.smAndDown,
          'pl-0': $vuetify.breakpoint.mdAndUp
        }"
      >
        <v-select
          :items="boxSearch.maxPrice"
          v-model="search.maxPrice"
          hide-details
          label="Max Price"
          :solo="$vuetify.breakpoint.smAndDown"
          :outlined="$vuetify.breakpoint.mdAndUp"
          background-color="white"
        />
      </v-col>
      <v-col class="py-0" offset-md="6">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
              depressed
              :block="$vuetify.breakpoint.smAndDown"
              class="mt-2 text-none"
              width="190"
              dark
              v-on="on"
              @click="performSearch"
              color="teal"
            >Find property</v-btn>
          </template>
          <span>Search for available properties</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    boxSearch: {
      properties: [
        { label: 'All types', value: 'all' },
        { label: 'House', value: 'house' },
        { label: 'Hostel', value: 'hostel' },
        { label: 'Land', value: 'land' },
        { label: 'Event Centre', value: 'eventCentre' },
      ],
      property: ['House', 'Hostel', 'Land', 'Event Centers'],
      status: ['All', 'Buy', 'Rent', 'Short let'],
      location: ['Bayelsa', 'Lagos', 'Port Harcourt', 'Delta', 'Amassoma', 'Ending pele, Amasoma', 'Tantua, Amasoma'],
      rooms: ['Any', 'Single room', 'Self contain', '1 bedroom', '2 bedroom', '3 bedroom', '4 bedroom', '5 bedroom', '6+ bedroom'],
      minPrice: ['No Min', '₦40,000', '₦50,000', '₦100,000', '₦150,000', '₦200,000', '₦250,000', '₦300,000', '₦350,000', '₦400,000', '₦500,000', '₦600,000', '₦700,000', '₦800,000', '₦900,000', '₦1,000,000', '₦1,500,000'],
      maxPrice: ['No Max', '₦50,000', '₦100,000', '₦150,000', '₦200,000', '₦250,000', '₦300,000', '₦350,000', '₦400,000', '₦500,000', '₦600,000', '₦700,000', '₦800,000', '₦900,000', '₦1,000,000', '₦1,500,000', '₦2,000,000', '₦3,000,000', '4,000,000'],
    },
    search: {
      location: '',
      property: [],
      status: '',
      rooms: '',
      minPrice: '',
      maxPrice: '',
    },
  }),
  computed: {
    selectAllProperty() {
      return this.search.property.length === this.boxSearch.property.length;
    },
    selectSomeProperty() {
      return this.search.property.length > 0 && !this.selectAllProperty;
    },
    icon() {
      if (this.selectAllProperty) return 'mdi-close-box';
      if (this.selectSomeProperty) return 'mdi-minus-box';
      return 'mdi-checkbox-blank-outline';
    },
  },
  methods: {
    performSearch() {
      console.log(this.search);
    },
    toggle() {
      this.$nextTick(() => {
        if (this.selectAllProperty) {
          this.search.property = [];
        } else {
          this.search.property = this.boxSearch.property;
        }
      });
    },
  },
};
</script>
