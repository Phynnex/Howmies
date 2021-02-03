<template>
  <v-container>
    <h2 class="headline font-weight-bold pt-4 pb-4">Explore howmies</h2>
    <swiper :options="swiperOptionThumbs" class="exploreHowmies">
      <swiper-slide v-for="item in exploreHowmies" :key="item.title">
        <v-card
          outlined
          class="border-radius"
          :class="{'mt-3': $vuetify.breakpoint.smAndUp}"
          :height="$vuetify.breakpoint.smAndDown ? '138' : '90'"
          @click="item.sheet = true"
          style="box-shadow: -2px 1px 15px -7px"
        >
          <div class="d-flex" :class="{'flex-column': $vuetify.breakpoint.smAndDown}">
            <v-img :src="item.src" :style="styleObject"></v-img>
            <v-card-text
              class="subtitle-1 pl-1 pt-2 secondary--text text--lighten-1"
              :class="{'pl-4 pt-8': $vuetify.breakpoint.mdAndUp}"
            >{{item.title}}</v-card-text>
          </div>
        </v-card>
      </swiper-slide>
    </swiper>
  </v-container>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  components: {
    swiper,
    swiperSlide,
  },
  data: () => ({
    exploreHowmies: [
      {
        title: 'Student apartments',
        // eslint-disable-next-line global-require
        src: require('@/assets/explore/students.jpg'),
        sheet: false,
      },
      {
        title: 'Corper apartments',
        // eslint-disable-next-line global-require
        src: require('@/assets/explore/NYSC.jpg'),
        sheet: false,
      },
    ],
    swiperOptionThumbs: {
      spaceBetween: 15,
      initialSlide: 0,
      freeMode: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
    },
  }),
  computed: {
    styleObject() {
      if (this.$vuetify.breakpoint.mdAndUp) {
        return {
          borderRadius: '7px 0 0 7px',
          maxWidth: '120px',
          height: '90px',
        };
      }
      return {
        borderRadius: '10px 10px 0 0',
        height: '80px',
      };
    },
  },
};
</script>

<style scoped>
.exploreHowmies .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 30%;
}
@media screen and (max-width: 960px) {
  .exploreHowmies .swiper-slide {
    width: 40%;
  }
}
div.swiper-container.exploreHowmies {
  height: 120px;
}
@media screen and (max-width: 960px) {
  div.swiper-container.exploreHowmies {
    height: 155px;
  }
}
.border-radius {
  border-radius: 10px !important;
}
</style>
