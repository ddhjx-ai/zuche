<template>
  <div class="cars-warp">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <carsList></carsList>
      </swiper-slide>
      <swiper-slide>
        <carsList></carsList>
      </swiper-slide>
      <swiper-slide>
        <carsList></carsList>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <span @click="$router.push({ name: 'User' })">汽车列表</span>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import carsList from '@c/carsList';
export default {
  name: "Cars",
  components: {
    Swiper,
    SwiperSlide,
    carsList
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted() {},
};
</script>
<style lang="scss">
.cars-warp {
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 94px;
}
</style>