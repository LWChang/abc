<template>
  <div class="titleHeader">
      <span @click="goFilm(title)" v-if="isBack">&lt;</span>
      {{title}}
  </div>
</template>

<script>
export default {
      props: {
          title: String,
          isBack: Boolean,        
      },
    methods:{
      goFilm(title){
        this.$router.push('/film');
        console.log(this.title)
      }
      
    },
};
</script>
<style lang="scss" scoped >
  .titleHeader{
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding:  15px;
    box-sizing: border-box;
    position: fixed;
    right: 0;
    top:0;
    left: 0;
    background: #e54847;
    color: white;
  }
  .titleHeader span{
    position: absolute;
    left: 0;
    font-size: 20px;
    font-weight: bold;
    margin-left: 15px; 
  }
</style>