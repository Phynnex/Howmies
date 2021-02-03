<template>
  <div>
    <SideNav v-if="$vuetify.breakpoint.smAndDown"/>
    <router-view />
    <BottomNav />
  </div>
</template>

<script>

import BottomNav from '@/components/BottomNav.vue';

const SideNav = () => import('@/components/SideNav.vue');

export default {
  components: {
    BottomNav,
    SideNav,
  },
};
</script>
