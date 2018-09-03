<template>
    <div class="home">
       <slider></slider>
       <list :list="list" :dataName="'home'"></list>
    </div> 
</template>

<script>
    import slider from './slider.vue';
    import list from './list.vue'
    import * as types from '../store/types.js'
    export default{
        data(){
            return{
                list:[]
            }
        },
        components:{
            slider,list
        },
        created(){
            // this.$store.dispatch(types.VIEW_LOADING,true)
                this.$http({
                // url:`/static/data/index.data`
                url:'http://localhost:3000/news',
                 method:'get'
            }).then(
                res=>{
                     console.log('访问后的接口news',res);
                    // this.$store.dispatch(types.VIEW_LOADING,false),
                    this.list=res.data
                }
            )
        }
    }
</script>
