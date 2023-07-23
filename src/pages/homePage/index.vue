<template>
  <div>
    <span class="homepage">酒品首页</span>
  </div>
  <swiper
    class="swiper-container"
    :grabCursor="true"
    :moudles="modules"
    :effect="'creative'"
    :slides-per-view="1"
    :scrollbar="{ draggable: true }"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :modules="modules"
  >
    <swiper-slide class="swiper">
      <img src="./image/swiper.png" alt="" />
    </swiper-slide>
    <swiper-slide class="swiper">
      <img src="./image/swiper.png" alt="" />
    </swiper-slide>
    <swiper-slide class="swiper">
      <img src="./image/swiper.png" alt="" />
    </swiper-slide>
  </swiper>
  <div class="myIcon">
    <div class="category">
      <img src="./image/分类.png" alt="" />
      <span>白酒分类</span>
    </div>
    <div class="technology">
      <img src="./image/工艺路线.png" alt="" />
      <span>工艺路线</span>
    </div>
    <div class="wine" @touchstart="goWine">
      <img src="./image/酒.png" alt="" />
      <span>酒水分类</span>
    </div>
  </div>
  <div class="content">
    <div class="origin">
      <span>文化起源</span>
      <img src="./image/文化起源.jpg" alt="" />
    </div>
    <div class="culture">
      <span>酒文化</span>
      <img src="./image/中国酒文化.jpg" alt="" />
    </div>
  </div>
  <pageBottom></pageBottom>
</template>
  
  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRouter } from 'vue-router'
// Import Swiper styles
import "swiper/css/bundle";

// import required modules
import { Navigation, EffectCreative, Scrollbar } from "swiper/modules";
export default {
  name: "homePage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const router = useRouter();
    const goWine = () => {
      router.push('/categoryBywine')
    }

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [EffectCreative, Scrollbar],
      goWine
    };
  },
};
</script>
  
  <style scoped lang="less">
.homepage {
  position: relative;
  left: 17px;
  top: 17px;
  font-size: 24px;
  font-weight: 400;
  color: rgb(0, 0, 0);
}
.swiper-container {
  margin: 43px auto;
  width: 328px;
  height: 154px;
  .swiper {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    color: #060606;
    img {
      width: 328px;
      height: 154px;
      background-position: center;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
}
.myIcon {
  display: flex;
  justify-content: space-around;
  height: 80px;
  text-align: center;
  img {
    height: 40px;
    display: inline-block;
  }
  span {
    display: block;
    width: 64px;
    color: rgb(0, 0, 0);
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
}
.content {
  margin: 21px auto;
  width: 347px;
  height: 363px;
  background: rgba(196, 196, 196, 0.11);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  img {
    width: 210px;
    height: 144.13px;
    border-radius: 14px;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
  }
  span {
    display: block;
    writing-mode: lr-tb;
    width: 29px;
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }
  .origin {
    display: flex;
    margin: auto;
    width: 319px;
    height: 164px;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    background: linear-gradient(
      270deg,
      rgba(117, 65, 65, 0.2),
      rgba(229, 20, 20, 0) 100%
    );
  }
  .culture {
    display: flex;
    margin: auto;
    width: 319px;
    height: 164px;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    background: linear-gradient(
      270deg,
      rgba(117, 65, 65, 0.2),
      rgba(229, 20, 20, 0) 100%
    );
  }
}
</style>