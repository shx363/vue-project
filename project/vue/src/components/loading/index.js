import loading from './loading.vue';

export default{
  install:function(Vue){
    Vue.component('loading',loading);//注册组件，到全局
  }
}