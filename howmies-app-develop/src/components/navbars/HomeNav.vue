<template>
  <v-app-bar app flat color="transparent" dark absolute>
    <v-app-bar-nav-icon @click="openDrawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
    <v-toolbar-title class="pl-0 pt-2">
      <router-link to="/">
        <v-img :src="require('@/assets/logo.png')" height="90" max-width="100"></v-img>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <Link />
  </v-app-bar>
</template>

<script>
const Link = () => import('../Link.vue');

export default {
  name: 'Navbar',
  components: {
    Link,
  },
  methods: {
    openDrawer() {
      this.$store.commit('setDrawer', true);
    },
  },
};
</script>
