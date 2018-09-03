// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import './assets/css/common.css'
import './assets/js/jquery'
import './assets/css/animate.css'

import router from './router.config';
import axios from 'axios';
Vue.prototype.$http=axios;

import * as types from './store/types';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // 做点事
  store.dispatch(types.VIEW_LOADING,true)
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // 做点事
  store.dispatch(types.VIEW_LOADING,false)
  return response;
}, function (error) {
  return Promise.reject(error);
}); 

import loading from './components/loading';
Vue.use(loading);

import store from './store';

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,store
})
