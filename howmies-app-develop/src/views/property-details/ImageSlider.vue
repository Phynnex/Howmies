<template>
  <v-col xs="12" sm="7" class="pt-0">
    <v-card>
      <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
        <swiper-slide v-for="(image, index) in property.src" :key="index" class="slide-img">
          <img :src="image" alt="Picture of property" />
        </swiper-slide>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
      </swiper>
      <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
        <swiper-slide v-for="(image, i) in property.src" :key="i" class="slide-img">
          <img id="thumb" :src="image" alt="Thumbnail picture of property" />
        </swiper-slide>
      </swiper>
    </v-card>
  </v-col>
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
  props: {
    property: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    swiperOptionTop: {
      initialSlide: 0,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    swiperOptionThumbs: {
      initialSlide: 0,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      grabCursor: true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShodows: true,
      },
    },
  }),
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style scoped>
.gallery-top {
  height: 64% !important;
  width: 100%;
}
.gallery-thumbs {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
}
.gallery-thumbs .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 100px;
  height: 100px;
}
img {
  width: 100%;
  height: 23em;
}
img#thumb {
  width: inherit;
  height: inherit;
}
.swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'><path d='M0,22L22,0l2.1,2.1L4.2,22l19.9,19.9L22,44L0,22L0,22L0,22z' fill='#E78127'/></svg>") !important;
}
.swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'><path d='M27,22L27,22L5,44l-2.1-2.1L22.8,22L2.9,2.1L5,0L27,22L27,22z' fill='#E78127'/></svg>") !important;
}
div.v-card.v-sheet.theme--light.fix {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.btn-round {
  border-radius: 8px;
}
</style>
