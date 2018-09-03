import Vue from 'vue';
import Vuex from 'vuex';//引入插件
Vue.use(Vuex);//安装插件


import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import state from './state';

let store = new Vuex.Store({
  actions:actions,
  mutations:mutations,
  getters:getters,
  state:state
});

export default store;
