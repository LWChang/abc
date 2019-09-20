import Vue from 'vue'
import Vuex from 'vuex'
import ceartePersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins:[ceartePersistedState()],
  state: {
    city: "深圳",
    isDisplay: true,
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
  },
  mutations: {
    changeDisplay(state,canshu){
      state.isDisplay = canshu;
    },
    changeCity(state,canshu){
      state.city = canshu;
    },
  },
  actions: {

  }
})
