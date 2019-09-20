<template>
  <div class="cinema">
    <title-header :title="title" :isBack="isBack"></title-header>
    <div class="title">
      <span @click="toCity">{{city}}<i class="iconfont icon-shang"></i></span>
      <input type="text" class="iconfont icon-shang" placeholder="搜影院" value=""/>
    </div>
    <div class="title2">
        <span @click="changeIcom(item)" v-for="item in list2" :key="item.title">{{item.title}}<i :class="['iconfont', 'icon-' + item.icon]"></i></span>
      </div>
      <ul>
        <li v-for="item in list1" :key="item.id">
          <div class="left">
            <p>{{item.nm}}</p>
            <p>{{item.addr}}</p>
            <div class="moveSpan">
              <span :style="{display: item.tag.allowRefund? 'black' : 'none'}">退</span>
              <span :style="{display: item.tag.endorse? 'black': 'none'}">改签</span>
              <span :style="{display: item.tag.snack? 'black': 'none'}">小吃</span>
              <span :style="{display: item.tag.vipTag? 'black': 'none'}">{{item.tag.vipTag}}</span>            
              <span :style="{display: item.tag.hallTypeVOList.lenght!==0? 'black': 'none'}" v-for="one in item.tag.hallTypeVOList" :key="one.name">{{one.name}}</span>
            </div>
            <div :style="{display: item.promotion.cardPromotionTag? 'black': 'none'}">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
              {{item.promotion.cardPromotionTag}}
              </div>
          </div>
          <div class="right">
            <p><span>{{item.sellPrice}}</span>元起</p>
            <span>{{item.distance}}</span>
          </div>
        </li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

import titleHeader from "@/components/commons/titleHeader.vue";
import {mapState} from 'vuex'
let nowIcon = "shang1";
let temp = true
export default {
  name: 'cinema',
  data(){
    return{
      title: "影院",
      isBack: false,
      nowIcon: nowIcon,
      temp: temp,
      list1: [],
      list2:[
        {title:"全城",name:"quancheng",icon:"shang"},
        {title:"品牌",name:"pinpai",icon:"shang"},
        {title:"特色",name:"tese",icon:"shang"}
      ],
     
    }

  },
   computed:{
      ...mapState(['city'])
  },
  methods:{
      toCity(){
      this.$router.push('/city');
      this.$store.commit("changeDisplay",false)
    },
    changeIcom(item){
      temp = !temp
      console.log(temp)
      if(item.icon !== nowIcon ){
        this.$router.push({name: item.name});
        item.icon = nowIcon;
      }else{
        item.icon ="shang"
        this.$router.go(-1);
      } 
      }
    },
  
  async created() {
    let res = await this.$http("/ajax/cinemaList?day=2019-09-18&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1568802665473&cityId=30");
    // console.log(res.data.cinemas)
    this.list1 = res.data.cinemas
    },
  components: {
    titleHeader
  }
}
</script>
<style lang="scss" scoped>
      .cinema{
        height: 100vh;
        position: relative;
        background: #F9F9F9;
      }
      //地理位置和搜索框
      .cinema .title{
        z-index: 1;
        width: 90%;
        padding: 10px 5%;
        height: 20px;
        background: #F9F9F9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 54px;
        left: 0;
        right: 0;
      }
      .title span{
        display: flex;
        width: 20%;
      }
      .title span,i,.title2{
        font-size: 13px;
        color: 	Grey;
      }
      .title input{
        width: 70%;
        height: 20px;
        font-size: 12px;
        border: 1px solid #cccccc;
        border-radius: 3px
      }
      //全城，品牌，特色
      .cinema .title2{
        z-index: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid #ccc;
        border-right: none;
        border-left: none;
        padding: 10px;
        background: #fff;
        position: fixed;
        top: 93px;
        left: 0;
        right: 0;
      }
      .cinema>.title2>span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        font-size: 13px;
      }
      .cinema>.title2>span:nth-of-type(1),span:nth-of-type(2){
        border-right: 1px solid #ccc;
      }
      //影院列表
      .cinema>ul{
        width: 100%;
        position: absolute;
        top: 130px;
        left: 0;
      }
      .cinema>ul>li{
        font-size: 12px;
        margin: 0 15px;
        padding: 10px 0;
        min-height: 65px;
        border-bottom: 1px solid #eee; 
        display: flex;
        justify-content: space-between;
      }
      .cinema>ul>li:last-child{
        margin-bottom: 52px !important;
      }
      .cinema ul li .left{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .cinema ul li .left .moveSpan,.left div:last-child{
        margin: 5px 0 0 0;
      }
      .left div:last-child{
        display: flex;
        flex-direction: row;
      }
      .left div:last-child img{
        display: block;
        margin-top: 2px;
        height: 13px;
        width: 13px
      }
      .cinema ul li .left p:nth-of-type(1){
        font-size: 16px;
        font-weight: bold;
        color: black;
      }
      .cinema ul li .left p:nth-of-type(1), .left p:nth-of-type(2){
        max-width: 13em;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .cinema ul li .left p:nth-of-type(2){
        margin: 5px 0 0 0;
        font-size: 13px;
        color: #777;
        max-width: 16em;
      }
      .moveSpan{
        display: flex;
        flex-wrap: wrap;
      }
      .left .moveSpan span{
        padding: 2px 3px;
        margin: 0 5px 0 0;
        border-radius: 3px;
        color: #589daf ;
        border: 1px solid #589daf ;
       
      }
      .left .moveSpan span:nth-of-type(3),.moveSpan span:nth-of-type(4){
        color: #f90 !important;
        border: 1px solid #f90 !important;
      }
      .cinema .right{
        width: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .cinema .right>p{
        color: #f90;
      }
      .cinema .right>p>span{
        font-size:18px; 
      }

</style>