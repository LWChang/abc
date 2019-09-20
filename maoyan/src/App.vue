<template>
  <div id="app">
    <keep-alive>
       <router-view></router-view>
    </keep-alive>

   <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/commons/tabbar.vue";
export default {
  components: {Tabbar}
}
</script>

<style lang="scss">
     #app>div:nth-of-type(1){
       margin-bottom: 51px;
     }
</style>
