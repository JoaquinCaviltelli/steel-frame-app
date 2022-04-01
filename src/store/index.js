import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modal'
import firebase from "./firebase";
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    modal,
    firebase
  }
})
