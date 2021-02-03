<template>
  <div class="home">
    <Header />
    <ExploreHowmies class="mt-2" />
    <RecommendedProperties class="mt-4" :class="{'mt-10': $vuetify.breakpoint.mdAndUp}" />
    <ExclusiveLocations class="my-5" :class="{'my-12': $vuetify.breakpoint.mdAndUp}" />
    <TopProperties />
    <Footer />
  </div>
</template>

<script>

const Header = () => import('@/components/Header.vue');
const ExploreHowmies = () => import('@/components/home/ExploreHowmies.vue');
const RecommendedProperties = () => import('@/components/RecommendedProperties.vue');
const ExclusiveLocations = () => import('@/components/ExclusiveLocations.vue');
const TopProperties = () => import('@/components/TopProperties.vue');
const Footer = () => import('@/components/Footer.vue');

export default {
  name: 'home',
  components: {
    Header,
    ExploreHowmies,
    RecommendedProperties,
    ExclusiveLocations,
    TopProperties,
    Footer,
  },
};
</script>
