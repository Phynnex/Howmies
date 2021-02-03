<template>
  <v-card :ripple="false" flat :to="{name: 'property-detail', params: { propertyId: property.id }}">
    <v-img :src="property.src[0]" style="borderRadius: 10px" height="220px">
      <v-row>
        <v-col xs="12" class="pt-0">
          <span
            class="body-2 teal white--text pa-2 pl-3"
            v-text="property.status"
          ></span>
        </v-col>
      </v-row>
    </v-img>
    <v-card-text class="pl-0 py-1">
      <div>
        <p class="font-weight-bold my-0" :class="{'subtitle-1': $vuetify.breakpoint.mdAndUp}">{{property.location}}</p>
        <p class="my-0 font-weight-light" :class="{'subtitle-1': $vuetify.breakpoint.mdAndUp}">
          Bedroom(s):
          <span class="green--text">{{property.beds}}</span>
        </p>
        <p class="my-0 font-weight-light" :class="{'subtitle-1': $vuetify.breakpoint.mdAndUp}">
          Bathroom(s):
          <span class="green--text">{{property.baths}}</span>
        </p>
        <p dark class="my-0 font-weight-bold" :class="{'subtitle-1': $vuetify.breakpoint.mdAndUp}" v-html="property.price"></p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    property: {
      type: Object,
      required: true,
    },
  },
};
</script>
