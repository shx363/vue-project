<template>
  <div id="app">
  <loading v-show="bLoading"></loading>
  <navbar></navbar>
  <transition
    enter-active-class="animated fadeIn"
  >
  <router-view></router-view>
  </transition>
  <footbar v-if="bFoot"></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar'
import footbar from './components/footbar'

import {mapGetters,mapActions} from 'vuex'
import * as types from './store/types.js'
export default {
 components:{
   navbar,
   footbar,
 },
 computed:mapGetters([
    'bFoot','bLoading'
  ]),
  mounted(){
    // console.log(this.$route);
    this.checkState(this.$route.path);
  },
  watch:{
    $route(to){
      // console.log('路由监听',to);//to == 变化之后的 $route
      this.checkState(to.path);
    }
  },
  methods:{
    checkState(path){
      // console.log('path',path);
      if(/home|user|detail/.test(path)){
        // this.$store.dispatch(types.VIEW_NAV,true);
        this.$store.dispatch(types.VIEW_FOOT,true);
        // mapActions(['VIEW_NAV','VIEW_FOOT'])
      }  
      if(/invest|more|login|register/.test(path)){
        // this.$store.dispatch(types.VIEW_NAV,false);
        this.$store.dispatch(types.VIEW_FOOT,false);
      } 
    }
  }
}
</script>

