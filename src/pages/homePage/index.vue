<template>
  <div>
    <span class="homepage">酒品首页</span>
  </div>
  <swiper
    class="swiper-container"
    :grabCursor="true"
    :moudles="modules"
    loop
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
    <swiper-slide class="swiper" v-for="(item,index) in myIcon.swiperList" :key="index">
      <img :src="item.img" alt="" />
    </swiper-slide>
  </swiper>
  <div class="myButton">
    <div
      class="category"
      v-for="(item, index) in myIcon.iconList"
      :key="index"
      @touchend="goWine(index)"
    >
      <div class="img-content">
        <img :src="item.img" alt="" />
      </div>
      <span>{{ item.text }}</span>
    </div>
  </div>
  <!-- <div class="content">
    <div class="origin">
      <span>文化起源</span>
      <img src="./image/文化起源.jpg" alt="" />
    </div>
    <div class="culture">
      <span>酒文化</span>
      <img src="./image/中国酒文化.jpg" alt="" />
    </div>
  </div> -->
  <pageBottom></pageBottom>
</template>
  
  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useRouter } from "vue-router";
// Import Swiper styles
import "swiper/css/bundle";

// import required modules
import { Navigation, EffectCreative, Scrollbar } from "swiper/modules";
import { onMounted, reactive } from "vue";
import { reqIcon } from "@/api/index";
export default {
  name: "homePage",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const router = useRouter();
    const goWine = (index) => {
      let path = "";
      switch (index) {
        case 0:
          path = "wineWater";
          break;
        case 1:
          path = "technology";
          break;
        case 2:
          path = "wine";
          break;
      }
      router.push({
        path: "/categoryBywine",
        query: {
          path,
        },
      });
    };
    const myIcon = reactive({
      iconList: [],
      swiperList: [],
    });
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    const getIcon = async () => {
      const result = await reqIcon();
      if (result.status === 200) {
        myIcon.iconList = result.data.data.icon;
        myIcon.swiperList = result.data.data.swiper;
        console.log(myIcon.list);
      }
    };
    onMounted(() => {
      getIcon();
    });
    return {
      onSwiper,
      onSlideChange,
      modules: [EffectCreative, Scrollbar],
      goWine,
      myIcon,
    };
  },
};
</script>
  
  <style scoped lang="less">
body {
  .homepage {
    font-weight: 700;
    position: relative;
    display: block;
    width: 120px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #ffffff;
    border-radius: 20px;
    left: 17px;
    top: 17px;
    font-size: 24px;
    color: rgb(0, 0, 0);
  }
  .swiper-container {
    margin: 43px auto;
    width: 328px;
    height: 154px;
    box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.35);
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
        border-radius: 10px;

      }
    }
  }
  .myButton {
    width: 325px;
    height: 325px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    .category {
      width: 133px;
      height: 133px;
      text-align: center;
      border-radius: 13px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      &:nth-child(1) {
        background: rgb(239, 185, 112);
      }
      &:nth-child(2) {
        background: rgb(138, 206, 171);
      }
      &:nth-child(3) {
        background: rgb(239, 112, 112);
      }
      &:nth-child(4) {
        background: rgb(151, 208, 238);
      }
      .img-content {
        width: 40px;
        height: 40px;
        margin: 21px;
        border-radius: 10px;
        background: rgb(255, 255, 255);
        img {
          height: 35px;
          margin:2.5px auto;
        }
      }
      span{
          font-size: 20px;
          color: rgb(255, 255, 255);
          margin:22px auto;
          font-weight: 700;
        }
    }
  }
  // .myIcon {
  //   display: flex;
  //   justify-content: space-around;
  //   height: 80px;
  //   text-align: center;
  //   img {
  //     height: 40px;
  //     display: inline-block;
  //   }
  //   span {
  //     display: block;
  //     width: 64px;
  //     color: rgb(0, 0, 0);
  //     font-size: 14px;
  //     font-weight: 400;
  //     line-height: 24px;
  //   }
  // }
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
}
</style>