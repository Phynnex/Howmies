<template>
  <v-app>
    <router-view></router-view>
    <Notification />
  </v-app>
</template>

<script>

import Notification from '@/components/Notification.vue';

export default {
  name: 'App',
  components: {
    Notification,
  },
};
</script>

<style>
em {
  font-family: "Shadows Into Light", cursive;
  font-weight: normal;
  font-size: 1.3em;
  font-style: normal;
  color: #0f62f0;
}
.clickable {
  color: teal;
  cursor: pointer;
}
#loginNav {
  border-bottom: 1px solid rgb(224, 224, 224) !important;
}
</style>
