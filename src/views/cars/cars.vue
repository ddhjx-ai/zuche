<template>
  <div class="cars-warp">
    <div class="cars-swiper-warp">
      <swiper class="swiper" ref="mySwiper" :options="swiperOption">
        <swiper-slide>
          <carsList height="800px"></carsList>
        </swiper-slide>
        <swiper-slide>
          <carsList></carsList>
        </swiper-slide>
        <swiper-slide>
          <carsList></carsList>
        </swiper-slide>
        <swiper-slide>
          <carsList></carsList>
        </swiper-slide>
      </swiper>
        <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
        <div class="swiper-button-next" slot="button-next" @click="next"></div>
    </div>

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
  methods:{
    prev () {
      this.$refs.mySwiper.$swiper.slidePrev()
    },
    next () {
      this.$refs.mySwiper.$swiper.slideNext()
    }

  },
  mounted() {
    
  },
};
</script>
<style lang="scss">
.cars-warp {
  .swiper{
    overflow: inherit;
  }
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 94px;
  .swiper-button-prev,
  .swiper-button-next{
    top: 50%;
    margin-top: -50px;
    width: 60px;
    height: 100px;
    border-radius: 100px;
    background-color: #fff;
    @include webkit(box-shadow, 0 0 18px 0 rgba(0,0,0,0.2));
    @include webkit(transition, all 0.3s ease);
    &.swiper-button-disable {
      opacity: 1;
    }
  }
  .cars-swiper-warp{
    padding: 0 160px;
    position: relative;
  }
  .swiper-button-prev{
    left: 40px;
    &::after{
      content: "";
      width: 14px;
      height: 14px;
      border-left: 3px solid #000;
      border-top: 3px solid #000;
      margin-left: 5px;
      @include webkit(transform,rotate(-45deg));
    }
    &:hover{
      background-color: $color_main;
      &::after{
        border-left: 3px solid $color_blur;
        border-top: 3px solid $color_blur;
      }
    }
  }
  .swiper-button-next{
    right: 40px;
    &::after{
      content: "";
      width: 14px;
      height: 14px;
      border-right: 3px solid #000;
      border-top: 3px solid #000;
      margin-right: 5px;
      @include webkit(transform,rotate(45deg));
    }
    &:hover{
      background-color: $color_main;
      &::after{
        border-right: 3px solid $color_blur;
        border-top: 3px solid $color_blur;
      }
    }
  }
}
</style>