<template>
  <div>
    <v-snackbar v-model="snackbar" :color="notification.color" bottom right :timeout="3000">
      {{notification.text}}
      <v-btn dark icon @click="snackbar = false">
        <v-icon>mdi-window-close</v-icon>
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'notification',
  computed: {
    notification() {
      return this.$store.state.ui.notification;
    },
    snackbar: {
      get() {
        return this.$store.state.ui.notification.display;
      },
      set(value) {
        this.$store.commit('setNotification', { display: value });
      },
    },
  },
};
</script>
