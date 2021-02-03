<template>
  <div>
    <Navbar />
    <ProgressBar />
    <router-view :errorMsg= errorMsg />
    <ListPropertyBottomNav @showErrorMsg="updateErrorMsg($event)" />
  </div>
</template>

<script>
import Navbar from '@/components/navbars/LoginNav.vue';

const ListPropertyBottomNav = () => import('@/views/PropertyInfo/BottomNav.vue');
const ProgressBar = () => import('@/components/ProgressBar');

export default {
  components: {
    ListPropertyBottomNav,
    Navbar,
    ProgressBar,
  },
  data: () => ({
    errorMsg: false,
  }),
  methods: {
    updateErrorMsg(updatedErrorMsg) {
      this.errorMsg = updatedErrorMsg;
    },
  },
  mounted() {
    this.$store.commit('getPropertyType');
    this.$store.commit('getStatusType');
    this.$store.commit('updateName', sessionStorage.contactName);
    this.$store.commit('updateEmail', sessionStorage.contactEmail);
    this.$store.commit('updatePhone', sessionStorage.contactPhone);
    this.$store.commit('updateAltPhone', sessionStorage.contactAltPhone);
    this.$store.commit('updateIsCompany', JSON.parse(sessionStorage.isContactCompany));
    this.$store.commit('updateCompanyName', sessionStorage.contactCompany);
    this.$store.commit('updateAddress', sessionStorage.propertyAddress);
    this.$store.commit('updateCountry', sessionStorage.propertyCountry);
    this.$store.commit('updateState', sessionStorage.propertyState);
    this.$store.commit('updateCity', sessionStorage.propertyCity);
    this.$store.commit('updateRoom', sessionStorage.room);
    this.$store.commit('updateBathroom', sessionStorage.bathroom);
    this.$store.commit('updateAverageRoomSize', sessionStorage.averageRoomSize);
    this.$store.commit('updateFeatures');
    if (sessionStorage.featureToAdd) this.$store.commit('updateAdditionalfeatures');
    this.$store.commit('updatePrice', sessionStorage.price);
  },

};
</script>
