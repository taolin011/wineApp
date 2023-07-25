<template>
 <router-view v-slot={Component}>
        <keep-alive include="homePage">
            <component :is="Component" />
        </keep-alive>
    </router-view>
  </template>

<script>
export default {

}
</script>

<style lang="less">
html,body{
  height: 100%;
  margin:0;
  padding: 0;
    font-family: cursive;
    // background: linear-gradient(180.00deg, rgb(248, 232, 203) 29.771%,rgba(253, 245, 231, 0) 80%);
    background: linear-gradient(90.00deg, rgb(248, 232, 203) 29.771%,rgba(253, 245, 231, 0) 100%);
}
</style>