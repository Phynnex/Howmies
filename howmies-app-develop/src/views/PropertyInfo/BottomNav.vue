<template>
  <v-card elevation="2" width="100%" style="position: fixed; bottom: 0">
    <v-container>
      <v-row style="max-width: 45em;">
        <v-col cols="6" class="pl-0">
          <v-btn
            text
            @click="goBack"
            color="teal lighten-1"
            :disabled="$route.path==='/list-your-property'"
          >
            <v-icon>mdi-chevron-left</v-icon>Back
          </v-btn>
        </v-col>
        <v-col cols="6">
          <div class="text-right">
            <v-btn class="white--text" depressed color="teal lighten-1" @click="next">{{nextButton}}</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import bus from '@/event-bus';

export default {
  data: () => ({
  }),
  methods: {
    next() {
      const property = this.$store.state.post.list.propertyType;
      if (this.$route.path === '/list-your-property') {
        if (this.$store.state.post.list.statusType === '') {
          this.$emit('showErrorMsg', true);
          return;
        }
        this.$emit('showErrorMsg', false);
        this.$router.push('/list-your-property/check-property');
        return;
      }
      if (this.$route.path === '/list-your-property/check-property') {
        this.$router.push('/list-your-property/contact-details');
        return;
      }
      if (this.$route.path === '/list-your-property/contact-details') {
        bus.$emit('contactValidate');
        return;
      }
      if (this.$route.path === '/list-your-property/property-location') {
        if (property === 'House') {
          this.$router.push('/list-your-property/property-details/house');
          return;
        }
        if (property === 'Apartment') {
          this.$router.push('/list-your-property/property-details/house');
          return;
        }
        if (property === 'Land') {
          this.$router.push('/list-your-property/property-details/land');
          return;
        }
        return;
      }
      // eslint-disable-next-line no-constant-condition
      if (this.$route.path === '/list-your-property/property-details/land') {
        this.$router.push('/list-your-property/features');
        return;
      }
      if (this.$route.path === '/list-your-property/property-details/house') {
        this.$router.push('/list-your-property/features');
        return;
      }
      if (this.$route.path === '/list-your-property/features') {
        this.$router.push('/list-your-property/add-photo');
        return;
      }
      if (this.$route.path === '/list-your-property/add-photo') {
        this.$router.push('/list-your-property/price');
        return;
      }
      if (this.$route.path === '/list-your-property/price') {
        this.submit();
      }
    },
    goBack() {
      // eslint-disable-next-line no-unused-expressions
      this.$route.path !== '/list-your-property' && this.$router.go(-1);
    },
    submit() {
      const formData = new FormData();
      // Object.keys(this.$store.state.post.list).forEach((key) => {
      //   formData.append(key, this.$store.state.post.list[key]);
      // });
      formData.append('imageUrl', this.$store.state.post.imageUrl);
      this.axios.post('auth/properties', this.$store.state.post.list)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
  },
  computed: {
    nextButton() {
      if (this.$route.path !== '/list-your-property/price') return 'Next';
      return 'Finish';
    },
  },
};
</script>
