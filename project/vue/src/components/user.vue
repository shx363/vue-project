<template>
    <div class="User">
        <div class="top">
                <div class="box">
                    <a href="javascript:;" class="return" onclick="window.history.go(-1)"><img src="../assets/images/return.png"></a>
                    我的账户    
                </div>
        </div>
<div class="user">
	<div class="box">
        <a href="info.html">
            <img src="../assets/images/tou.png">
                <div class="us_yong">
                    <span>欢迎您<em class="mingzi">{{user["data"]}}</em><img  style="width:20px;height:20px;float:left;padding:0;margin-top:5px; margin-right:0; margin-bottom:0;" src="../assets/images/vipdbj.png"/></span>
                    <span>账户总额：￥12133132</span>
					<span @click="logout" style="width:50px;height:30px;background:yellow">[注销]</span>
                    
                </div>
        </a>
    <div class="vipczjdu">
    	<!--top-->
            <div class="vipdu_t">
                <span>
                    <p></p>
                </span>￥
                <em>50000</em>
            </div>
        <!--bottom-->
        <div class="vipdu_b">
        	<span>代收金额：</span>
       		<i>￥</i>
        	<i class="nans">2000</i>
            <span>距离成为vip还差:</span>
            <i>￥22222</i>
            <b></b>
        </div>
    </div>
    <div class="us_ke">
        	<span style="border-right:1px solid #dcdcdc;">
            	<i>可用余额（元）</i>
                <em>134543</em>
            </span>
            <span>
            	<i>冻结总额（元）</i>
                <em>134543</em>
            </span>
        </div>
    </div>
</div>
<div class="us_rec">
    <span><a href="javascript:;">充值</a></span>
    <span><a href="javascript:;" style="background:#fff; border:1px solid #29a7e2; color:#29a7e2;">提现</a></span>
</div>
<!--微信部分-->
<div class="xinfuer_t">
	<a href="#">
    	<b><img src="../assets/images/jkjl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/hqlc_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/dqlc_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/sbtz_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/zqzr_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/zjtj_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/jyjl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/zdtb_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/yqjl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/hbgl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/jfgl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/cjjl_t.png"/></b>
    </a>
    <a href="liyijisuanqi.html">
    	<b><img src="../assets/images/syjsq_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/tgmx_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/jjjl_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/xycj_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/yqm_t.png"/></b>
    </a>
    <a href="#">
    	<b><img src="../assets/images/ewm_t.png"/></b>
    </a>
</div>
    </div>
</template>

<style scoped>
.box{
	width:94%;
	margin:0 auto;
	}
.xinfuer_t{width:100%;height:780px;background:#dcdcdc; margin-bottom:20px;}
.xinfuer_t a{display:block;width:125px;height:125px;overflow:hidden;float:left;margin-bottom:1px;background:#fff; box-sizing:border-box;border-right:1px solid #dcdcdc;overflow:hidden;position:relative;}
.xinfuer_t a b{display:block; width:70px;height:70px;position:absolute;top:50%;left:50%;margin-top:-35px;margin-left:-35px;overflow:hidden;}
.xinfuer_t a b img{display:block;width:70px;height:70px;}
.top{
	position:fixed;
	width:100%;
	height:44px;
	top:0;
	left:0;
	background:#29a7e2;
    z-index:100;
    text-align:center;
	color:#fff;
	line-height:44px;
	font-size:20x;
    }
    .return{
	float:left;
	margin-top:12px;
	}
	
.top .return img{
	width:17px;
	height:20px;
    margin-top:0;
    margin-left: 10px;
	}

.vipczjdu{width:100%;height:auto;float:left;overflow:hidden;}
.vipdu_t{width:100%;height:14px;overflow:hidden;line-height:14px;color:#333;}
.vipdu_t span{display:block;width:77%;height:10px;background:#cdcdcd; border-radius:5px;float:left; margin-top:2px; position:relative;overflow:hidden;}
.vipdu_t span p{display:block;position:absolute;top:0;left:0;background:red;height:10px;}
.vipdu_t em{font-style:normal;float:left;}
.vipdu_b{width:100%;height:auto;overflow:hidden;}
.vipdu_b span{display:block;float:left;height:30px;line-height:30px;font-size:14px;color:#333;}
.vipdu_b i{display:block;float:left;height:30px;line-height:30px;font-size:14px;color:#008100;font-style:normal;}
.vipdu_b em{display:block;float:left;height:30px;line-height:30px;font-size:14px;color:red;font-style:normal;}
.vipdu_b b{display:block;float:left;height:30px;line-height:30px;font-weight:100;color:red; font-size:14px;}


	
	.user{
	background:#fff;
	border-bottom:1px solid #ccc;
	overflow:hidden;
	}


.user img{
	float:left;
	width:70px;
	height:70px;
	margin: 16px 16px 22px 0;
	}
.us_yong{
	float:left;
	margin:20px 0;
	}

.us_yong span{
	display:block;
	font-size:16px;
	line-height:30px;
	color:#333;
	}
.us_yong span .mingzi{color:red;font-weight: bolder;margin-left: 10px;}

.us_ke{
	overflow:hidden;
	border-top:1px solid #dcdcdc;
	clear:both;
	}

.us_ke span{
	display:block;
	width:49.8%;
	float:left;
	margin:6px 0;
	}

.us_ke span i{
	display:block;
	font-size:13px;
	color:#888;
	font-style:normal;
	line-height:22px;
	text-align:center;
	}

.us_ke span em{
	display:block;
	font-size:20px;
	color:#ee5142;
	font-style:normal;
	line-height:30px;
	text-align:center;
	}
.us_rec{
	margin:16px;
	overflow:hidden;
	}

.us_rec span{
	display:block;
	width:50%;
	float:left;
	}
.us_rec span a{
	display:block;
	width:80%;
	background:#29a7e2;
	height:36px;
	line-height:36px;
	color:#fff;
	text-align:center;
	font-size:16px;
	margin:0 auto;
	border-radius:6px;
	}


.us_list{
	background:#fff;
	border:1px solid #ccc;
	border-left:none;
	border-right:none;
	margin-bottom:16px;
	}

.us_list li{
	height:44px;
	border-bottom:1px solid #ccc;
	line-height:44px;
	font-size:16px;
	color:#666;
	}

.us_left{
	width:20px;
	height:20px;
	float:left;
	margin:12px 12px 0 0;
	}

.us_rig{
	width:14px;
	height:14px;
	float:right;
	margin:15px 0;
	}

.us_list li a{
	display:block;
	}




/*债权转让*/

.nav .cl_nav{
	width:16.6%;
	}

.cl_list{
	margin-top:77px;
	display:none;
	}

.cl_l1{
	display:block;
	}

.list ul li .inactive span{
	width:25%;
	display:block;
	float:left;
	color:#666;
	font-size:13px;
	}

.list ul li .zhuan{
	display:block;
	float:right;
	font-size:15px;
	color:#29a7e2;
	line-height:26px;
	padding:0 14px;
	border:1px solid #29a7e2;
	border-radius:20px;
	height:26px;
	margin:20px 0 0 0;
	}

.cl_left{
	float:left;
	width:70%;
	margin:10px 0;
	}

.list ul li ul li .cl_left span{
	margin:0;
	color:#666;
	}

.window{
	position:fixed;
	width:100%;
	height:100%;
	background:rgba(0,0,0,0.3);
	top:0;
	left:0;
	z-index:200;
	display:none;
	}

.f_zhuan{
	width:240px;
	position:fixed;
	top:18%;
	left:50%;
	margin-left:-130px;
	background:#fff;
	border-radius:8px;
	z-index:300;
	padding:0 10px 18px;
	display:none;
	}

.f_zhuan input{
	width:146px;
	height:34px
	}
.f_zhuan span{
	height:34px;
	line-height:34px;
	width:80px;
	font-size:13px;
	color:#666;
	}

.f_zhuan .lo_1{
	height:34px;
	}

.confirm a{
	display:block;
	width:90px;
	height:36px;
	color:#fff;
	background:#29a7e2;
	text-align:center;
	line-height:36px;
	float:left;
	margin-left:20px;
	border-radius:6px;
	}

.confirm{
	margin-top:20px;
	}






/*资金统计*/

.list ul li ul li .fun{
	border-bottom:1px solid #ccc;
	line-height:34px;
	font-size:13px;
	margin-top:0px;
	margin-bottom:0px;
	color:#666;
	}

.list ul li ul li .fun i{
	font-style:normal;
	float:right;
	}





/*银行卡*/

.bank{
	background:#29a7e2;
	border-radius:6px;
	}		
	
.bank span{
	padding-bottom:12px;
	font-size:14px;
	color:#f4f4f4;
	line-height:22px;
	display:block;
	padding-left:22px;
	margin-bottom:12px;
	}	
	
.bank p{
	padding-top:6px;
	font-size:18px;
	color:#fff;
	font-weight:bold;
	line-height:44px;
	padding-left:22px;
	margin-top:6px;
	}		





/*充值*/
.po_rec{
	font-size:14px;
	float:right;
	line-height:44px;
	display:block;
	color:#f0f0f0;
	}

.balance{
	overflow:hidden;
	margin:0 auto;
	}	
	
.balance span{
	display:block;
	float:left;
	font-size:15px;
	color:#666;
	line-height:30px;
	}	
.balance span i{
	font-style:normal;
	color:#f75c2f;
	}

.zui{
	display:block;
	font-size:14px;
	color:#888;
	line-height:28px;
	margin:6px auto 0;
	}
.zui i{
	font-style:normal;
	color:#fe7002;
	}

.rec_record{
	margin-top:44px;
	}
	
.rec_record li{
	overflow:hidden;
	border-bottom:1px solid #cbcbcb;
	}	
	
.rec_left{
	float:left;
	}	
.rec_left span,.rec_right span{
	color:#555;
	font-size:16px;
	line-height:24px;
	display:block;
	margin-top:10px;
	}	
.rec_left em,.rec_right em{
	font-size:12px;
	color:#888;
	display:block;
	line-height:16px;
	font-style:normal;
	margin-bottom:12px;
	}	
	
.rec_right span{
	color:#f75c2f;
	text-align:right;
	}	
	
.rec_right{
	float:right;
	}
	
.rec_right em{
	text-align:right;
	}





/*自动投标*/

.auto .lo_1 span{
	width:91px;
	font-size:13px;
	color:#666;
	}

.auto .lo_1 input{
	width:64%;
	border:1px solid #ccc;
	border-radius:6px;
	height:34px;
	margin-top:4px;
	}

.auto .lo_1 i{
	display:block;
	font-style:normal;
	clear:both;
	line-height:30px;
	font-size:13px;
	color:#ccc;
	width:100%;
	text-align:center;
	}

.auto .lo_1 em{
	display:block;
	float:left;
	font-size:13px;
	line-height:44px;
	margin:0 8px;
	color:#666;
	font-style:normal;
	}
	
@media (max-width:640px) {
	

}		
	
	
@media (max-width:480px) {
	

}
@media (max-width:360px) {
	
#total{
	font-size:12px;
	}
.b_left span{
	font-size:12px;
	}
.b-right span{
	margin-left:18px;
	}
.b-right{
	width:120px;
	margin-right:12px;
	}
.b_left{
	width:180px;
	}
.money_de span i{
	font-size:16px;
	line-height:36px;
	}
	
.money_de span em{
	font-size:12px;
	}
.nav .cl_nav{
	font-size:14px;
	}	
.list ul li .inactive span{
	font-size:12px;
	}
	
}	
	
@media (max-width:320px) {
	
.tit_li{
	font-size:13px;
	}
#total{
	font-size:12px;
	}
.b_left span{
	font-size:11px;
	}
.b-right span{
	margin-left:12px;
	}
.b-right{
	width:110px;
	}
.b_left{
	width:160px;
	}
.container{
	width:79%;
	}
	
.nav .cl_nav{
	font-size:13px;
	}
.list ul li .inactive span{
	font-size:12px;
	}
.auto .lo_1 i{
	font-size:12px;}
}	
	
@media (max-width:300px) {
	
	

}		

</style>

<script>
 import store from '../store/index.js';
 import session from 'cookie-session';
  import {mapGetters} from 'vuex';
  export default {
    methods:{
      logout(){
        this.$store.dispatch('UPDATE_USER',{});
        this.$router.push('/home');
	  }
    },
    computed:mapGetters([
      'user'
    ]),
    beforeRouteEnter(to,from,next){
      // console.log(store.state);
      if(store.state.user.auth){//守卫
        //预载
        // to.query.user=store.state.user // 01
        // next(_this=>this.组件数据=store.state.user) //02
        // 直接在组件模板内部使用公共仓库(state) 03
        next();
      }else{
        next('/login')
      }
    }
  }
</script>