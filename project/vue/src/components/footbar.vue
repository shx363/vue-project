<template>
    <div class="footerdhl_f">

        <router-link to="/home" active-class="movek_f">   
                <b><img src="../assets/images/zhuye.png"/></b>
                <p>首页</p>
        </router-link>  

        <router-link to="/invest" active-class="movek_f">   
                <b><img src="../assets/images/touzi.png"/></b>
                <p>投资</p>
        </router-link> 

         <router-link to="/user" active-class="movek_f">   
                <b><img src="../assets/images/grzx.png"/></b>
                <p>账户</p>
        </router-link> 

        <router-link to="/more" active-class="movek_f">   
                <b><img src="../assets/images/mores.png"/></b>
                <p>更多</p>
        </router-link>

</div>

</template>

<style>
.footerdhl_f{width:100%;height:52px;background:#fff;border-top:1px solid #3DB1FA;position:fixed;bottom:0;left:0;overflow:hidden}
.footerdhl_f a{display:block; width:25%;height:46px;float:left; margin-top:6px;}
.footerdhl_f a b{display:block; width:22px;height:22px;overflow:hidden; margin:0 auto;}
.footerdhl_f a b img{display:block; width:22px;height:44px;}
.footerdhl_f .movek_f img{ margin-top:-22px;}
.footerdhl_f a p{display:block; width:100%;height:24px; line-height:24px; font-size:14px; text-align:center;color:#868689;}
</style>
