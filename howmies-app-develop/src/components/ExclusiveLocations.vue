<template>
  <v-container pt-0 pb-4>
    <h2 class="headline font-weight-bold mb-7 mt-4">Excusive locations</h2>
    <swiper :options="swiperOptions" class="gallery-thumbs">
      <swiper-slide v-for="locations in exclusiveLocations" :key="locations.location">
        <v-card flat style="border-radius: 10px">
          <v-img :src="locations.src" alt :height="$vuetify.breakpoint.mdAndUp ? '260px' : '250px'">
            <v-container class="d-flex align-end cover" fill-height pa-0>
              <v-row>
                <v-col cols="12" class="text-center">
                  <h4 class="title white--text" v-text="locations.location"></h4>
                  <p class="subtitle-1 white--text mb-0" v-text="locations.property"></p>
                </v-col>
              </v-row>
            </v-container>
          </v-img>
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
    exclusiveLocations: [
      {
        location: 'Ikoyi',
        property: '300 properties',
        src:
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486035/listing-1_phsspj.jpg',
      },
      {
        location: 'Lekki',
        property: '150 properties',
        src:
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486014/listing-2_ts3043.jpg',
      },
      {
        location: 'Ikeja',
        property: '649 properties',
        src:
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486162/listing-3_hqyx4b.jpg',
      },
      {
        location: 'Alausa',
        property: '450 properties',
        src:
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486014/listing-2_ts3043.jpg',
      },
      {
        location: 'Banana Island',
        property: '200 properties',
        src:
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486035/listing-1_phsspj.jpg',
      },
      {
        location: 'Magodo',
        property: '120 properties',
        src:
          'https://res.cloudinary.com/daygucgkt/image/upload/v1578486162/listing-3_hqyx4b.jpg',
      },
    ],
    swiperOptions: {
      spaceBetween: 15,
      initialSlide: 0,
      freeMode: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  }),
};
</script>

<style scoped>
.gallery-thumbs .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 19%;
}
@media screen and (max-width: 960px) {
  .gallery-thumbs .swiper-slide {
    width: 45%;
  }
}
.swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'><path d='M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z' fill='#E78127'/></svg>") !important;
}
.swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'><path d='M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z' fill='#E78127'/></svg>") !important;
}
.cover {
  background: rgba(0, 0, 0, 0.5);
}
</style>
