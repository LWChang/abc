<template>
  <div class="comingsoon">
    <p>近期最受期待</p>
    <ul class="header">
      <li class="box" v-for="item in movieList" :key="item.id">
        <div class="left">
          <img :src="item.img.replace('w.h','128.180')" alt />
          <p>
            <span>{{item.wish}}</span>人想看
          </p>
        </div>
        <div class="rigth">
          <p>{{item.nm}}</p>
          <p>{{item.comingTitle.substring(0,6)}}</p>
        </div>
      </li>
    </ul>

    <ul class="header1">
      <li v-for="item in list" :key="item.id">
        <p>{{item.comingTitle}}</p>
        <div class="box1">
          <div class="left1">
            <img :src="item.img.replace('w.h','128.180')" alt />
          </div>
          <div class="right1">
            <div class="txt1">
              <p>{{item.nm}}</p>
              <p>
                <span>{{item.wish}}</span>人想看
              </p>
              <p>主演: {{item.star}}</p>
              <p>{{item.rt}}上映</p>
            </div>
            <div class="btn1" :style="{background: item.showst==4? '#3c9fe6': '#faaf00'}">
              {{item.showst==4? '预售': '想看'}}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "comingsoon",
  data() {
    return {
      movieList: [],
      list: []
    };
  },
  async created() {
    let res = await this.$http(
      "/ajax/mostExpected?ci=10&limit=10&offset=0&token="
    );
    this.movieList = res.data.coming;
    let res1 = await this.$http("/ajax/comingList?ci=10&token=&limit=10");
    this.list = res1.data.coming;
    console.log(this.list);
  }
};
</script>
<style lang="scss" scoped>
.comingsoon {
  margin-top: 105px;
}
.comingsoon > p {
  margin: 15px 15px 0 15px;
  font-size: 14px;
}
.comingsoon .header {
  padding: 12px 0 0px 15px;
  border-bottom: 10px solid #f4f4f4;
  margin-right: 15px;
  background-color: #fff;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  overflow-x: scroll;
}
.box {
  margin: 0 14px 0 0;
  height: 165px;
}
.header .left {
  width: 85px;
  height: 115px;
  position: relative;
}
.header .left img {
  height: 100%;
  width: 100%;
}
.header .left p {
  font-size: 11px;
  color: #faaf00;
  font-weight: bold;
  position: absolute;
  top: 95px;
  left: 5px;
}
.header .rigth {
  font-size: 13px;
  max-width: 6em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.header .rigth p {
  margin: 5px 0 5px 0;
}
.header .rigth p:first-child {
  font-weight: bold;
  max-width: 9em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.header .rigth p:last-child {
  font-size: 12px;
  color: #999;
}
//第二个列表
.comingsoon .header1 li .box1,
.right1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.comingsoon .header1 {
  padding: 15px 15px 0 15px;
}
.box1 {
  padding: 12px 14px 12px 0;
}
.left1 {
  width: 64px;
  height: 90px;
}
.left1 img {
  width: 100%;
  height: 100%;
}
.right1 {
  margin-left: 7px;
  flex: 1;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgb(221, 221, 221);
}
.txt1 {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.txt1 p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  color: #666;
}
.txt1 p:nth-of-type(1) {
  max-width: 9em;
  font-size: 17px;
  font-weight: bold;
  color: #333;
}
.txt1 p:nth-of-type(2) span {
  font-size: 15px;
  color: #faaf00;
  font-weight: bold;
}
.txt1 p:nth-of-type(3) {
  max-width: 16em;
}
.btn1 {
  width: 47px;
  height: 27px;
  border-radius: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  margin-right: 8px;
}
</style>