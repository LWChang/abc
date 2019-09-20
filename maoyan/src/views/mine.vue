<template>
  <div class="mine">
    <title-header :title="title" :isBack="isBack"></title-header>
    <div class="goin">
      <div @click="goMine(item)" v-for="item in list" :key="item.title" :class="{'active': item.title==nowItem}">{{item.title}}</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

import titleHeader from "@/components/commons/titleHeader.vue";

export default {
  name: 'mine',
 data(){
    return{
      title: "我的",
      isBack: true,
      list:[
        {title:'美团账号登录', name:'meituan'},
        {title:'手机账号登录', name:'shouji'},
      ],
      nowItem: "美团账号登录"
    }
  },
  methods:{
    goMine(item){
      this.$router.push({name: item.name});
      this.nowItem = item.title;
    }
  },
  components: {
    titleHeader
  }
}
</script>
<style lang="scss" scoped>
  .mine .goin{
    margin-top: 54px;
    width: 100%;
    height: 40px;
    border-bottom: 5px solid #ccc;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .mine .goin>div{
    padding: 4px 0 0 4px;
    margin: 0 15px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 5px solid #cccccc;
  }
  .mine .goin .active{
    border-bottom: 5px solid #f90;
  }
</style>