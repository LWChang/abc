import Vue from 'vue'
import Router from 'vue-router'
import Film from './views/film.vue'
import Cinema from './views/cinema.vue'
import Mine from './views/mine.vue'
import nowplaying from "@/components/film/nowplaying.vue"
import comingsoon from "@/components/film/comingsoon.vue"
import sousuo from "@/components/film/sousuo.vue"
import quancheng from "@/components/cinema/quancheng.vue"
import pinpai from "@/components/cinema/pinpai.vue"
import tese from "@/components/cinema/tese.vue"
import meituan from "@/components/mine/meituan.vue"
import shouji from "@/components/mine/shouji.vue"



//双击点击事件后报错这个 Uncaught (in promise) 就添加下面这段代码
const originaPush = Router.prototype.push
Router.prototype.push = function push(location){
  return originaPush.call(this,location).catch(err=>err)
}


Vue.use(Router)

export default new Router({
 
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/film'
    },
    {
      path: '/film',
      name: 'film',
      redirect: '/film/nowplaying',
      component: Film,
      children: [
        {path:'nowplaying', name: 'nowplaying', component: nowplaying},
        {path:'comingsoon', name: 'comingsoon', component: comingsoon},
        {path:'sousuo', name: 'sousuo', component: sousuo},
      ]
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema,
      children: [
        {path:'quancheng', name:'quancheng',component: quancheng},
        {path:'pinpai', name:'pinpai',component: pinpai},
        {path:'tese', name:'tese',component: tese}
      ]
    },
    {
      path: '/mine',
      name: 'mine',
      redirect:'/mine/meituan',
      component: Mine,
      children:[
        {path:'meituan', name:'meituan',component: meituan},
        {path:'shouji', name:'shouji',component: shouji}
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: ()=>import('@/views/city.vue')
    }
    
  ]
})
