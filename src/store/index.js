import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:["Restaurante do Zé", "Restaurante do João", "Restaurante do Bernabé", "Restaurante da Maria", "Restaurante do Fábio", "Restaurante da Rose"],
    title:"Hello World"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    bigTitle(state){
      return state.title
    } 
  }
})
