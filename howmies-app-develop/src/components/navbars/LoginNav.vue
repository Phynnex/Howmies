<template>
  <v-app-bar id="navbar" flat light color="white">
    <router-link to="/">
      <v-img :src="require('@/assets/logo1.png')" height="50" max-width="100"></v-img>
    </router-link>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>
#navbar {
  border-bottom: 1px solid rgb(224, 224, 224) !important;
}
</style>
