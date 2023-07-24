<template>
  <div class="page-content">
    <div class="page-head">
      <img src="./image/左箭头.png" alt="" @touchend="goback" />
      <span>酒水分类</span>
    </div>
    <ul class="navbar" ref="navbar">
      <li
        v-for="(item, index) in navList.list"
        :key="index"
        @touchend="changeNavList(index)"
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
        <span class="context" v-html="content.message.introduction"
          ></span
        >
      </div>
      <div class="origin">
        <span class="header">原料</span>
        <span class="context">{{ content.message.raw_materials}}</span>
      </div>
      <div class="wine">
        <span class="header">代表酒</span>
        <div class="context"  v-for="(item,index) in content.message.common_types" :key="index">
          <img :src="item.img" alt="" class="winePicture" />
          <div class="message">
            <div class="text">
              <span class="name">{{ item.name}}</span>
              <span class="detail">酒精浓度：{{ item.degree }}</span>
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
    <span v-for="(item,index) in nav.list" :key="index" @touchend="changeNav(index)" :class="{'active':navNumber===index}">{{ item }}</span>
  </div>
</template>

<script>
import { ref, reactive,onMounted } from "vue";
import { useRouter,useRoute } from "vue-router";
import {reqWineWater,reqTechnology,reqWine} from '@/api/index'
export default {
  name: "categoryBywine",
  setup() {
    const router = useRouter();
    const route=useRoute()
    const path=route.query.path
    let pageData=reactive({
      data:{},
    })
    let navList=reactive({
      list:[]
    });
    let nav=reactive({
      list:[]

    });
    let content=reactive({
      message:{}
    })
    let selectedIndex = ref(0);
    let navNumber=ref(0)
    let navbar=ref(null)
    const changeNavList = (index) => {
      selectedIndex.value = index;
      content.message=pageData.data.banner[navNumber.value].navList[index]
    };
    const changeNav=(index)=>{
      navNumber.value=index
      navList.list=pageData.data.banner[index].listName
      changeNavList(0)
      navbar.value.height=navList.list.length*50+40+'px'
    }
    const goback = () => {
      router.push("/");
    };
    const getTechnologyData=async()=>{
      const result=await reqTechnology()
      if(result.status===200){
        pageData.data=result.data
        nav.list=pageData.data.nav
      }
    }
    const getWineWaterData=async()=>{
      const result=await reqWineWater()
      if(result.status===200){
        pageData.data=result.data
        nav.list=pageData.data.nav
      }
    }
    const getWineData=async()=>{
      const result=await reqWine()
      if(result.status===200){
        pageData.data=result.data
        nav.list=pageData.data.nav
      }
    }

    onMounted(() => {
      switch(path){
        case 'wineWater':
          getWineWaterData().then(()=>{
            changeNav(0)
            console.log('1',nav.list)
          })
          break;
        case 'technology':
          getTechnologyData().then(()=>{
            changeNav(0)
            console.log('2',nav.list)
          })
          
          break;
        case 'wine':
          getWineData().then(()=>{
            changeNav(0)
            console.log('3',nav.list)
          })
          break;
      }
    });
    return {
      navList,
      nav,
      selectedIndex,
      changeNavList,
      goback,
      navNumber,
      changeNav,
      content,
      navbar
    };
  },
};
</script>

<style scoped lang="less">
.page-content {
  position: relative;
  .page-head {
    display: flex;
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
    top: 140px;
    width: 71.88px;
    background: rgba(18, 18, 18, 0.04);
    border-right: 1px solid rgba(0, 0, 0, 0.39);

    .nav-item {
      font-size: 16px;
      color: black;
      width: 100%;
      height: 80px;
      text-align: center;
      line-height: 80px;
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
    .origin{
      margin: 20px 0;
      .header {
        font-size: 20px;
        margin: 7px;
      }
      .context {
        display: block;
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
        display:flex;
        // width: 276px;
        margin-bottom: 20px;
        justify-content: space-between;
        align-items: center;
        .winePicture {
          max-height: 100px;
          max-width: 80px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 12px;
        }
        .message {
          background: rgb(255, 255, 255);
          border-radius: 10px;
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
  position: absolute;
  top:24px;
  right:0;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: inline-block;
    text-align: center;
    font-size: 16px;
    width: 87.5px;
    height: 30px;
    line-height: 30px;
    margin-right: 10px;
  }
  .active {
    background: lightblue;
    border-radius: 10px;
    color: #ff0000;
  }
}
</style>