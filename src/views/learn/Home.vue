<template>
  <div class="home">
    <tab>
      <tab-item label="腾讯">111</tab-item>
      <tab-item label="阿里">222</tab-item>
      <tab-item label="百度">333</tab-item>
    </tab>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>11111111111111</swiper-slide>
      <swiper-slide>22222222222222</swiper-slide>
      <swiper-slide>33333333333333</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import Tab from "@/components/Tab";
import TabItem from "@/components/TabItem";

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
    Tab,
    TabItem,
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 1500,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
};
</script>

<style lang='less' scoped>
@w: 250px;
@h: 150px;
@active: red;

.swiper-container {
  width: @w;
  height: @h;
  .swiper-pagination {
    /deep/ .swiper-pagination-bullet-active {
      background: @active;
    }
  }
  &:hover {
    opacity: 0.5;
  }
}
</style>
