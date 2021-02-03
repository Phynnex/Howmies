<template>
  <v-container>
    <div style="max-width: 45em">
      <v-alert type="error" border="left" outlined v-show="errorMsg">Choose a type of property and tell us how you want us to list the property</v-alert>
      <section>
        <h2
          class="mt-3 pb-3 secondary--text text--lighten-1"
          :class="{'title font-weight-bold': $vuetify.breakpoint.smAndDown}"
        >To get started, Choose the type of property you want to list on Howmies.com</h2>
        <v-btn
          class="text-none mr-1 mt-1 font-weight-black"
          @click="handlePropertySelect(property, index)"
          v-for="(property, index) in $store.state.post.properties"
          :key="index"
          color="secondary"
          :outlined="property.outlined"
        >{{property.title}}</v-btn>
      </section>
      <section v-if="$store.state.post.show" style="margin-top: 3em">
        <p
          class="mb-3 secondary--text text--lighten-2 font-weight-bold"
        >Now tell us how you want us to list your {{$store.state.post.list.propertyType}}</p>
        <v-btn
          class="text-none mr-1 mt-1"
          color="secondary lighten-2"
          :outlined="$store.state.post.rentOutlined"
          @click="handleStatus('rent')"
        >For rent</v-btn>
        <v-btn
          class="text-none mr-1 mt-1"
          color="secondary lighten-2"
          v-show="$store.state.post.list.propertyType==='Hotel' ? false : true"
          :outlined="$store.state.post.saleOutlined"
          @click="handleStatus('sale')"
        >For sale</v-btn>
        <v-btn
          class="text-none mr-1 mt-1"
          color="secondary lighten-2"
          v-show="$store.state.post.list.propertyType==='Hotel' ? false : true"
          :outlined="$store.state.post.leaseOutlined"
          @click="handleStatus('lease')"
        >For lease</v-btn>
      </section>
    </div>
  </v-container>
</template>

<script>
export default {
  props: ['errorMsg'],
  methods: {
    handlePropertySelect(property) {
      sessionStorage.setItem('propertyType', property.title);
      // eslint-disable-next-line
      property.outlined && this.$store.state.post.properties.forEach(property => property.outlined = true);
      this.$store.commit('getPropertyType', property);
    },
    handleStatus(status) {
      sessionStorage.setItem('statusType', status);
      this.$store.commit('getStatusType');
    },
  },
};
</script>
