<template>
  <div class="city">
    <div class="title">当前城市</div>
    <div class="dingwei">
      <div>定位失败，点击重新定位</div>
    </div>
    <!-- <div :style="{display: latelyCity.leng? 'black' : 'none'}"> -->
    <div class="lataly">最近访问的城市</div>
    <div class="latalyCity" v-for="item in latelyCity" :key="item.title" :style="{display: latelyCity.leng? 'black' : 'none'}">
        {{item.name}}
    </div>
    <!-- </div> -->
    <div class="hot">热门城市</div>
    <div class="hotCity">
      <div @click="gohotCity(item)" v-for="item in hotCity" :key="item.title">{{item.name}}</div>
    </div>
    <ul>
      <li v-for="item in letterArr" :key="item.title">
        <p>{{item.title}}</p>
        <div @click="goBack(one)" v-for="one in item.content" :key="one.cityId" class="didian"><div>{{one.name}}</div></div>
      </li>
    </ul>
    <div class="citydw">
        <P>热门</P>
        <P>城市</P>
        <P>定位</P>
    </div>
    <div class="zimu"> 
        <span v-for="item in letterArr" :key="item.title">{{item.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cityList: [],
      letterArr: [],
      hotCity: [
          { title: "sh", name: "上海" },
          { title: "bj", name: "北京" },
          { title: "gz", name: "广州" },
          { title: "sz", name: "深圳" },
          { title: "wh", name: "武汉" },
          { title: "tj", name: "天津" },
          { title: "xa", name: "西安" },
          { title: "nj", name: "南京" },
          { title: "hz", name: "杭州" },
          { title: "cd", name: "成都" },
          { title: "cq", name: "重庆" }
    ],
    nowTitle: [],
    latelyCity:  [],
    };
  },
    methods:{
      
        cityDingWei(item){
        },
        goBack(one){
          this.$router.go(-1);
          this.$store.commit("changeDisplay",true);
          this.$store.commit("changeCity", one.name);
          this.latelyCity.push({ title: one.cityId, name: one.name })
          console.log(this.latelyCity)
          
        },
        gohotCity(item){
          this.$router.go(-1);
          this.$store.commit("changeDisplay",true);
          this.$store.commit("changeCity", item.name);
        }
    },
  async created() {
    let res = await this.$http(
      "https://www.fastmock.site/mock/4561f9921273f4f29a5f303301332fd5/city/city"
    );
    this.cityList = res.data.data.cities;
    // console.log(this.cityList)
    for (var i = 65; i < 91; i++) {
      let ziMu = String.fromCharCode(i);
      if (ziMu == "I" || ziMu == "O" || ziMu == "U" || ziMu == "V") {
        continue;
      } else {
        this.letterArr.push({ title: ziMu, content: [] });

      }
    }

    this.letterArr.forEach(item => {
      this.cityList.forEach(one => {
        if (one.pinyin.charAt(0).toUpperCase() == item.title) {
          item.content.push(one);
        }
      });
      
    });
  }
};
</script>
<style lang="scss" scoped>
.city {
  background: #eaeaea;
  font-size: 14px;
}
.city .title,
.hot ,ul>li>p,.lataly{
  height: 30px;
  padding-left: 15px;
  display: flex;
  align-items: center;
}
//定位、最近城市、热门城市的子元素样式
.city .dingwei,
.hotCity,ul li .didian,.latalyCity {
  width: 95%;
  border-radius: 3px;
  background: #f5f5f5;
}
//定位
.city .dingwei {
  height: 55px;
  display: flex;
  align-items: center;
}
.city .dingwei div {
  min-width: 45%;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 3px;
  margin-left: 15px;
}
//最近访问的城市
// .latalyCity{

// }
//热门城市
.city .hotCity {
  min-height: 200px;
}
.city .hotCity div {
  float: left;
  background: #fff;
  width: 26%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
//城市列表
.city ul>li>div>div{
    display: flex;
    align-items: center;
    height: 30px;
    margin: 0 20px 0 15px;
    border-bottom: 1px solid #c8c7cc;
    background: #f5f5f5;
}

.city .citydw{
    font-size: 12px;
    position:fixed;
    right: 0;
    top: 70px;
    left: 92%;
}
.city .citydw>p{
    margin-top: 5px;
}
.city .citydw,.zimu{
    color: #757575;
}
//字母定位
.city .zimu{
    display: flex;
    flex-direction: column;
    height: 96%;
    position:fixed;
    right: 0;
    top: 140px;
    left: 96%;
}
.city .zimu>span{
    margin-top: 5px;
    font-size: 12px;
}
</style>