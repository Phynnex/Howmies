<template>
  <v-app-bar
    app
    flat
    style="border-bottom: 1px solid rgb(224, 224, 224)"
    extended
    extension-height="56"
    hide-on-scroll
  >
    <v-toolbar-title>
      <router-link to="/" class="hidden-sm-and-down">
        <v-img :src="require('@/assets/logo1.png')" class="mr-5" height="50" max-width="90" />
      </router-link>
    </v-toolbar-title>
    <v-text-field
      label="Search location ..."
      outlined
      hide-details
      class="pt-4"
      prepend-inner-icon="mdi-chevron-left"
      append-icon="mdi-map-marker-outline"
      style="border-radius: 25px"
      background-color="grey lighten-5"
      clearable
    />
    <v-spacer class="hidden-sm-and-down" />
    <Link class="hidden-sm-and-down" />
    <template v-slot:extension>
      <v-tabs class="pt-1" background-color="transparent" hide-slider show-arrows optional>
        <v-tab class="px-0">
          <v-btn outlined rounded class="text-none">All</v-btn>
        </v-tab>
        <v-menu transition="slide-x-transition" offset-y bottom right>
          <template v-slot:activator="{ on }">
            <v-tab class="px-0" v-on="on">
              <v-btn outlined rounded class="text-none">Property type</v-btn>
            </v-tab>
          </template>
          <v-list>
            <v-list-item v-for="(property, i) in propertyType" :key="i" @click="callQuery">
              <v-list-item-title>{{ property }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu
          transition="slide-x-transition"
          max-width="280"
          :close-on-content-click="false" offset-y bottom right
        >
          <template v-slot:activator="{ on }">
            <v-tab class="px-0">
              <v-btn outlined rounded class="text-none" v-on="on">Price</v-btn>
            </v-tab>
          </template>
          <v-container>
          <v-subheader class="text-center">Filter Properties bases on your budget</v-subheader>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              step="1000"
              thumb-label
              hide-details
            />
            <v-row class="pt-3">
              <v-col cols="5" class="pt-0 pr-0">
                <v-text-field
                  v-model="range[0]"
                  label="Min price"
                  hide-details
                  prefix="₦"
                  type="number"
                  outlined
                />
              </v-col>
              <v-col cols="2" class="pt-4 px-0 font-weight-bold">
                <p class="text-center">-</p>
              </v-col>
              <v-col cols="5" class="pt-0 pl-0">
                <v-text-field
                  v-model="range[1]"
                  label="Max price"
                  hide-details
                  prefix="₦"
                  type="number"
                  outlined
                />
              </v-col>
            </v-row>
          </v-container>
        </v-menu>

        <v-menu
          transition="slide-x-transition"
          :close-on-content-click="false"
          max-width="230"
          offset-y
          bottom
          right
        >
          <template v-slot:activator="{ on }">
            <v-tab class="px-0">
              <v-btn outlined rounded class="text-none" v-on="on">Rooms</v-btn>
            </v-tab>
          </template>
          <v-container>
            <v-subheader class="text-center">
              Filter houses according to the amount of rooms
            </v-subheader>
            <p class="mb-2 mt-4">Bedrooms
              <v-btn
                fab x-small
                depressed outlined color="teal"
                class="ml-4 mr-2"
                @click="bedroom -= 1"
                :disabled="bedroom <= 0"
              > - </v-btn>
              {{bedroom}}+
              <v-btn
                fab x-small
                depressed outlined
                color="teal"
                class="ml-2"
                @click="bedroom += 1"
                :disabled="bedroom >= 15"
              >+</v-btn>
            </p>
            <p class="mb-2 mt-3">Bathrooms
              <v-btn
                fab
                x-small
                depressed
                outlined
                color="teal"
                class="ml-4 mr-2"
                @click="bathroom -= 1"
                :disabled="bathroom <= 0"
              > - </v-btn>
              {{bathroom}}+
              <v-btn
                fab x-small
                depressed
                outlined
                color="teal"
                class="ml-2"
                @click="bathroom += 1"
                :disabled="bathroom >= 15"
              >+</v-btn>
            </p>
          </v-container>
        </v-menu>

        <v-menu transition="slide-x-transition" offset-y bottom right>
          <template v-slot:activator="{ on }">
            <v-tab class="px-0">
              <v-btn outlined rounded class="text-none" v-on="on">Status</v-btn>
            </v-tab>
          </template>
          <v-list>
            <v-list-item v-for="(status, i) in statusType" :key="i" @click="callQuery">
              <v-list-item-title>{{ status }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
import Link from '@/components/Link.vue';

export default {
  components: {
    Link,
  },
  data: () => ({
    bedroom: 0,
    bathroom: 0,
    min: 40000,
    max: 3000000,
    range: [70000, 1000000],
    propertyType: ['House', 'Land', 'Hotels', 'Apartments'],
    statusType: ['For sell', 'For rent', 'For lease'],
  }),
  methods: {
    callQuery() {
      console.log('There are your properties');
    },
  },
};
</script>

<style scoped>
.v-btn--outlined {
  min-height: 44px;
}
</style>
