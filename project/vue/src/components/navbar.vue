<template>
    <div class="top_f">
	<div class="top_f_in">
        <router-link to="/login"><a href="javascript:;" class="login_f">登录</a></router-link>
        <router-link to="/register"><a href="javascript:;" class="register_f">注册</a></router-link>
        <img src="../assets/images/logo3.png"/>
    </div>
</div>
</template>
<style>
.top_f{width:100%;height:44px;background:#3db1fa;overflow:hidden;}
.top_f_in{width:94%;height:28px;margin:8px auto;overflow:hidden;}
.login_f{font-size:16px;float:left;line-height:28px;color:#fff;height:28px;display:block}
.register_f{font-size:16px;float:right;line-height:28px;color:#fff;height:28px;display:block}
.top_f_in img{display:block;width:93px;height:28px; margin:0 auto}
</style>
