<template>
  <div class="page-content">
    <div class="page-head">
      <img src="./image/左箭头.png" alt="" @touchend="goback" />
      <span>酒水分类</span>
    </div>
    <ul class="navbar">
      <li
        v-for="(item, index) in navList"
        :key="index"
        @touchend="changeColor(index)"
        :class="{
          'nav-item-active': index === selectedIndex,
          'nav-item': true,
        }"
      >
        {{ item }}
      </li>
    </ul>
    <div class="content">
      <div class="introduction">
        <span class="header">简介</span>
        <span class="context"
          >蒸馏酒主要是通过蒸馏的方式酿造纯度比较高的酒，比如我们说的烈性酒，中国人所说的洋酒，在国内一般是茅台、五粮液、汾酒或者二锅头等等，韩国的烧酒也属于蒸馏酒。蒸馏酒的度数高后劲足。中国白酒与白兰地(Brandy)、威士忌(Whisky)、伏特加(Vodka)、朗姆酒(Rum)
          和金酒(Gin)一起并称为世界六大蒸馏酒。</span
        >
      </div>
      <div class="wine">
        <span class="header">代表酒</span>
        <div class="context">
          <img src="./image/威士忌.jpeg" alt="" class="winePicture" />
          <div class="message">
            <div class="text">
              <span class="name">威士忌</span>
              <span class="detail">酒精浓度：</span>
              <span class="detail">规格：</span>
            </div>
            <img
              src="./image/爱心.png
          "
              alt=""
              class="like"
            />
          </div>
        </div>
        <div class="context">
          <img src="./image/威士忌.jpeg" alt="" class="winePicture" />
          <div class="message">
            <div class="text">
              <span class="name">威士忌</span>
              <span class="detail">酒精浓度：</span>
              <span class="detail">规格：</span>
            </div>
            <img
              src="./image/爱心.png
          "
              alt=""
              class="like"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="tab">
    <span>生产工艺</span>
    <span>原料品种</span>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "categoryBywine",
  setup() {
    const router = useRouter();
    const navList = reactive([
      "白酒",
      "葡萄酒",
      "洋酒",
      "啤酒",
      "黄酒",
      "保健酒",
      "酒具",
    ]);
    let selectedIndex = ref(0);
    const changeColor = (index) => {
      selectedIndex.value = index;
    };
    const goback = () => {
      router.push("/");
    };
    return {
      navList,
      selectedIndex,
      changeColor,
      goback,
    };
  },
};
</script>

<style scoped lang="less">
.page-content {
  position: relative;
  .page-head {
    display: flex;
    width: 100%;
    position: absolute;
    left: 17px;
    top: 17px;
    align-items: center;
    justify-content: left;
    border-bottom: 1px solid #000000;
    img {
      height: 40px;
    }
    span {
      font-size: 24px;
    }
  }
  .navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    padding: 40px 0;
    left: 0;
    top: 90px;
    width: 71.88px;
    height: 450px;
    background: rgba(18, 18, 18, 0.04);
    border-right: 1px solid rgba(0, 0, 0, 0.39);

    .nav-item {
      font-size: 18px;
      color: black;
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    .nav-item-active {
      background: rgba(18, 18, 18, 0.04);
      color: #ff0000;
    }
  }
  .content {
    position: absolute;
    right: 3%;
    top: 90px;
    width: 282px;
    .introduction {
      span {
        display: block;
      }
      .header {
        font-size: 20px;
        margin: 7px;
      }
      .context {
        font-size: 16px;
        margin: 10px 25px;
        width: 231.25px;
      }
    }
    .wine {
      margin: 20px 0;
      .header {
        font-size: 20px;
        margin: 7px;
      }
      .context {
        display: flex;
        justify-content: space-around;
        width: 276px;
        align-items: center;
        .winePicture {
          width: 80px;
        }
        .message {
          background: rgb(238, 238, 238);
          width: 181px;
          height: 103px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .text {
            span {
              display: block;
              margin: 11px;
              height: 19px;
            }
            .name {
              font-size: 13px;
              color: rgb(0, 0, 0);
              line-height: 19px;
            }
            .detail {
              color: rgba(0, 0, 0, 0.6);
              font-size: 13px;
              line-height: 19px;
            }
          }
          .like {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}

.tab {
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  margin: 0 auto;
  height: 68px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: inline-block;
    text-align: center;
    font-size: 18px;
    width: 87.5px;
    height: 30px;
    line-height: 30px;
    margin: 0 10px;
    &:hover {
      color: #ff0000;
      background: rgba(18, 18, 18, 0.04);
    }
  }
  active {
    background: rgba(18, 18, 18, 0.04);
    color: #ff0000;
  }
}
</style>