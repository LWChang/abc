<template>
    <div class="nowplaying">
        <ul ref="scrollUl">
            <li class="box" v-for="item in movieList" :key="item.id">
                <div class="left">
                    <img :src="item.img.replace('w.h','128.180')" alt="">
                </div>
                <div class="right">
                    <div class="txt">
                        <p>{{item.nm}}</p>
                        <p v-if="item.globalReleased && item.sc">
                            观众评<span>{{item.sc}}</span>
                        </p>
                        <p v-else-if="item.globalReleased">暂无评分</p>
                        <p v-else><span>{{item.wish}}</span>人想看</p>
                        <p>主演: {{item.star}}</p> 
                        <p>{{item.showInfo}}</p>
                    </div>
                    <div class="btn" :style="{background: item.globalReleased? '#f03d37': '#3c9fe6'}">
                        {{item.globalReleased? '购票': '预售'}}</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "nowplaying",
    data(){
        return{
            movieList: [],
            canScroll: true,
        }
    },
    async created(){
       let res =  await this.$http("/ajax/movieOnInfoList?token=");
       this.movieList = res.data.movieList;

    //     let _this = this;
    //    window.onscroll = async function(){
    //        let winHeight = window.innerHeight;
    //        let ulHeight = document.documentElement.scrollTop;
    //        let ulScroll = _this.$refs.scrollUl.offsetHeight;

    //        if(winHeight+ulHeight>=ulScroll && _this.canScroll){
    //            _this.canScroll = false;
    //            console.log('到底了')
    //            let movieId = res.data.movieIds;
    //            let movieIdArr = movieId.splice(_this.movieList.length,10).join(",")
    //            let moreData =  await _this.$http("/ajax/moreComingList?token=&movieIds="+ movieIdArr);
    //            _this.movieList = moreData.data.coming;
    //              console.log(_this.movieList)
    //              _this.canScroll = !_this.canScroll;
    //        }
    //    }
    }
}
</script>
<style lang="scss" scoped>
    .nowplaying{
        margin-top: 105px;
    }
    .nowplaying .box {
            padding: 0 15px;
        }

    .box,.right {
            display: flex;
            justify-content: space-between;
            align-items: center;
           
    }
    .right{
        padding: 15px 0;
        border-bottom: 1px solid #ccc;
    }
    ul>li:last-child .right{
        border-bottom: none;
    }

    .left {
        width: 64px;
        height: 90px;
    }

    .left img {
        width: 100%;
        height: 100%;
    }

    .right {
        margin-left: 7px;
        flex: 1;
        align-items: center;
    }

    .txt {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .txt p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 13px;
        color: #666;
    }

    .txt p:nth-child(1) {
        max-width: 9em;
        font-size: 17px;
        font-weight: bold;
        color: #333;
    }

    .txt p:nth-child(2) span {
        font-size: 15px;
        color: #faaf00;
        font-weight: bold;
    }

    .txt p:nth-child(3) {
        max-width: 16em;
    }

    .btn {
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