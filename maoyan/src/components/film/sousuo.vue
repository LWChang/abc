<template>
    <div>
        <title-header :title="title" :isBack="isBack"></title-header>
        搜索
        <router-view></router-view>
    </div>
</template>
<script>
import titleHeader from "@/components/commons/titleHeader.vue"
export default {
    data(){
    return{
      title:"猫眼电影",
      isBack: true,
    }
  },
  components:{titleHeader}
}
</script>
<style lang="scss" scoped>

</style>