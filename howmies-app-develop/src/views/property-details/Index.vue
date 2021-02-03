<template>
  <div>
    <Navbar style="borderBottom: 1px solid rgb(224, 224, 224) !important" />
    <v-content class="mb-12">
      <v-container :pt-0="$vuetify.breakpoint.smAndDown">
        <v-row>
          <v-col xs="12" md="9" class="pt-0">
            <v-row>
              <ImageSlider :property="propertyParam" />
              <DataTable />
            </v-row>
            <Description />
            <v-divider />
            <Features />
          </v-col>
          <RequestDetialsForm />
        </v-row>
      </v-container>
    </v-content>
    <BottomNav />
  </div>
</template>

<script>
const Navbar = () => import('@/components/navbars/DetailsNav.vue');
const ImageSlider = () => import('./ImageSlider.vue');
const DataTable = () => import('./DataTable.vue');
const Description = () => import('./Description.vue');
const Features = () => import('./Features.vue');
const RequestDetialsForm = () => import('./RequestDetailsForm.vue');
const BottomNav = () => import('./BookPropertyNav.vue');

export default {
  components: {
    Navbar,
    ImageSlider,
    DataTable,
    Description,
    Features,
    RequestDetialsForm,
    BottomNav,
  },
  computed: {
    propertyParam() {
      return this.$store.state.property.properties.find(property => property.id === +this.$route.params.propertyId);
    },
  },
};
</script>

<style scoped>
.bottom-nav {
  position: fixed !important;
  bottom: 0;
  z-index: 10;
  border-top: 1px rgb(245, 242, 242) solid;
}
</style>
