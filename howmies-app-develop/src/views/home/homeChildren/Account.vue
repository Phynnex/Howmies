<template>
    <div>
      <Navbar />
        <v-container>
          <v-list two-line>
            <template v-for="(item, index) in items">
              <v-list-item :key="index" :to="item.route">
                <v-list-item-avatar><v-icon left>{{item.icon}}</v-icon></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title><span>{{item.title}}</span></v-list-item-title>
                  <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item @click="logout">
                <v-list-item-avatar><v-icon left>mdi-logout</v-icon></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title><span>Logout</span></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-list>
        </v-container>
    </div>
</template>

<script>
import Navbar from '@/components/navbars/LoginNav.vue';

export default {
  components: { Navbar },
  data: () => ({
    items: [
      {
        icon: 'mdi-account-outline', title: 'Profile', subtitle: 'See profile and update your personal data', route: '/userProfile',
      },
      {
        icon: 'mdi-heart-outline', title: 'Saved Properties', subtitle: 'See all your saved properties', route: '/myList',
      },
      {
        icon: 'mdi-clipboard-text', title: 'Rental Resume', subtitle: 'Give property owners more information about you', route: '/rentalResume',
      },
      {
        icon: 'mdi-home', title: 'My properties on Howmies', subtitle: 'Manage your listed properties on Howmies', route: '/myList',
      },
      {
        icon: 'mdi-credit-card-outline', title: 'Payments History', subtitle: 'See details about every payment you have made on Howmies', route: '/payment',
      },
      {
        icon: 'mdi-settings', title: 'Settings', route: '/settings',
      },
    ],
  }),
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT')
        .then(() => this.$router.push('/'));
    },
  },
};
</script>
