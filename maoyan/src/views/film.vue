<template>
  <div class="film">
    <titleHeader :title="title" :isBack="isBack"></titleHeader>
      <div class="tabs">
        <span @click="toCity"> {{city}}<i class="iconfont icon-shang"></i></span>
        <ul>
          <li @click="changeTab(item)"  v-for="item in list" :key="item.title" :class="{'active': item.title==nowItem}">{{item.title}}</li>
        </ul>
        <span @click="goSousuo" class="iconfont icon-searchicon"></span>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

  </div>
</template>

<script>
// @ is an alias to /src
let markItem = "正在热映";
import titleHeader from "@/components/commons/titleHeader.vue"
import {mapState} from "vuex"
export default {
  name: 'film', 
  data(){
    return{
      title:"猫眼电影",
      isBack: false,
      list:[
        {title:"正在热映",name:"nowplaying"},
        {title:"即将上映",name:"comingsoon"}
      ],
      nowItem: markItem
    }
  },
  watch: {
    $route(val) {
        switch(val.name){
            case "nowplaying":
              this.nowItem = "正在热映"
              break;
            case "comingsoon":
              this.nowItem = "即将上映"
              break;
          }
    }
  },
  beforeRouteEnter (to, from, next) {
    next()
    switch(to.name){
      case "nowplaying":
        markItem = "正在热映"
        break;
      case "comingsoon":
        markItem = "即将上映"
        break;
      default:
        break; 
    }
  },
  computed:{
      ...mapState(['city'])
  },
  methods: {
    changeTab(item) {
      this.$router.push({name: item.name})
      this.nowItem = item.title
    },
    toCity(){
      this.$router.push('/city');
      this.$store.commit("changeDisplay",false)
    },
    goSousuo(){
      this.$router.push('/flim/sousuo');
      this.$store.commit("changeDisplay",false)
    }
  },
  components: {
    titleHeader
  }
}
</script>
<style lang="scss" scoped>
      .tabs{
        z-index: 1;
        display: flex;
        padding: 0 15px;
        justify-content: space-between;
        align-items: center;
        height: 44px;
        border-bottom: 1px solid #e6e6e6;
        position: fixed;
        top: 54px;
        left: 0;
        right: 0;
        background:white;
      }
      .tabs>ul{
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 15px;
        font-weight: bold;
        color: #666;
        margin: 0 20px;
      }
      .tabs ul li {
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 20px;
      }
      .tabs ul li.active{
        color: #e54847;
        border-bottom: 2px solid #e54847;
      }
      .tabs ul li,.tabs>span:nth-of-type(1){
        white-space: nowrap;
      }
      .tabs>span:nth-of-type(1){
        color: #666;
        font-size: 15px;
        display: flex;
        text-align: center;
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
      }
      .tabs>span:nth-of-type(1) i{
        color: #666;
        font-size: 12px;
      }
      .tabs>span:nth-of-type(2){
        color:#e54847;
        font-size: 25px;
      }
</style>
