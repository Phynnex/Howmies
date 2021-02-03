<template>
    <v-navigation-drawer app v-model="open" disable-resize-watcher>
      <template v-slot:prepend>
          <v-list-item link two-line v-if="isAuthenticated">
            <v-list-item-avatar color="primary" class="white--text" >
              {{profilePhoto}}
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">{{ user.username }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense class="mt-4">
        <v-list-item v-for="item in items" :key="item.title" :to="item.route" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-home' },
      { title: 'About', icon: 'mdi-help-box' },
      { title: 'List your property ', route: '/list-your-property', icon: 'mdi-help-box' },
    ],
  }),
  computed: {
    open: {
      get() {
        return this.$store.state.ui.drawer;
      },
      set(value) {
        this.$store.commit('setDrawer', value);
      },
    },
    ...mapState({
      isAuthenticated: state => state.user.isAuthenticated,
      user: state => state.user.user,
    }),
    ...mapGetters(['profilePhoto']),
  },
};
</script>
