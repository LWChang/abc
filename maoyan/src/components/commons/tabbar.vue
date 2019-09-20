<template>
  <ul class="tabbar" v-if="isDisplay">
    <li
      @click="toPath(item)" v-for="item in list" :style="{color: item.title==nowItem? 'red': '#666'}" :key="item.title">
      <i :class="['iconfont', 'icon-' + item.icon]"></i>
      {{item.title}}
      </li>
  </ul>
</template>
<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            list: [
                {title: "电影", name: "film", icon: "dianying"},
                {title: "影院", name: "cinema", icon: "yingyuana"},
                {title: "我的", name: "mine", icon: "wode"},
            ],
            nowItem: window.sessionStorage.getItem("tabbarItem") || "电影"
        }
    },
    computed:{
      ...mapState(['isDisplay'])
    },
    methods: {
        toPath(item){
            this.$router.push({name: item.name});   //跳转到对应的路由
            this.nowItem = item.title;
            window.sessionStorage.setItem("tabbarItem",item.title)
        }
    },
}
</script>

<style lang="scss" scoped>
.tabbar {
  z-index: 100;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  border-top: 1px solid #ccc;
  background: white;
}

.tabbar li {
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.tabbar li i{
  font-size: 23px;
}
</style>