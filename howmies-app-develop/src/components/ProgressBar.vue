<template>
  <v-progress-linear
    color="teal"
    background-color="#eeeeee"
    height="10"
    :value="updateProgress"
  ></v-progress-linear>
</template>

<script>
export default {
  computed: {
    updateProgress() {
      if (this.$route.path === '/list-your-property') return this.$store.getters.updateProgress(1);
      if (this.$route.path === '/list-your-property/check-property') return this.$store.getters.updateProgress(2);
      if (this.$route.path === '/list-your-property/contact-details') return this.$store.getters.updateProgress(3);
      if (this.$route.path === '/list-your-property/property-location') return this.$store.getters.updateProgress(4);
      if (this.$route.path === '/list-your-property/property-details/house') return this.$store.getters.updateProgress(5);
      if (this.$route.path === '/list-your-property/property-details/land') return this.$store.getters.updateProgress(5);
      if (this.$route.path === '/list-your-property/features') return this.$store.getters.updateProgress(6);
      if (this.$route.path === '/list-your-property/add-photo') return this.$store.getters.updateProgress(7);
      return (this.$route.path === '/list-your-property/price') && this.$store.getters.updateProgress(8);
    },
  },
};
</script>
