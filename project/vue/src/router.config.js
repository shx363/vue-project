import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import home from './components/home.vue';
const invest = () => import(/* webpackChunkName: "Main" */ './components/invest.vue')
// import invest from './components/invest.vue';
const login = () => import(/* webpackChunkName: "Main" */ './components/login.vue')
// import login from './components/login.vue';
const register = () => import(/* webpackChunkName: "Main" */ './components/register.vue')
// import register from './components/register.vue';
const more = () => import(/* webpackChunkName: "Main" */ './components/more.vue')
// import more from './components/more.vue';
const user = () => import(/* webpackChunkName: "Main" */ './components/user.vue')
// import user from './components/user.vue';
const detail = () => import(/* webpackChunkName: "Main" */ './components/detail.vue')
// import detail from './components/detail.vue';
import error from './components/error.vue';


const routes=[
    {path:'/home',component:home},
    {path:'/invest',component:invest},
    {path:'/login',component:login},
    {path:'/register',component:register},
    {path:'/detail/:id',component:detail},
    {path:'/more',component:more},
    {path:'/user',component:user},
    {path:'/',redirect:'/home'},
    {path:'*',component:error},

];

export default new VueRouter({
    routes
})