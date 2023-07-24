<template>
  <div class="bottom">
    <div class="home">
      <img src="./image/家.png" alt="" />
      <span>酒品首页</span>
    </div>
    <div class="icon">
      <img src="./image/爱心.png" alt="" />
      <img src="./image/用户.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
    name: "pageBottom",
};
</script>

<style scoped lang="less">
.bottom {
  position:sticky;
  bottom: 0;
  height: 67px;
  width:100%;
  background: linear-gradient(0.00deg, rgb(232, 190, 131),rgba(255, 255, 255, 0) 100%);
  display: flex;
  justify-content: space-around;
  align-items: center;

  .home {
    width: 132px;
    height: 40px;
    background: rgb(243, 243, 243);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      display: inline-block;
      width: 25px;
      height: 25px;
    }
  }
  .icon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    img {
      display: inline-block;
      width: 30px;
      height: 30px;
    }
  }
}
</style>