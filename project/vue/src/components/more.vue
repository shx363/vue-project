<template>
    <div class="more">
        <div class="projectd_f top ">
            <div class="projectd_f_in">
                <a href="javascript:;" class="return" onclick="window.history.go(-1)"><img src="../assets/images/jian.png"/></a>
                更多精彩
            </div>
        </div>

<!--其他内容-->
        <div class="anotherne_f">
                    <div class="anotherne_f_in">
                        <ul>
                            <li>幸运大抽奖<a href="Luck draw.html"></a></li>
                            <li>关于我们<a href="about.html"></a></li>
                            <li>帮助中心<a href="help.html"></a></li>
                            <li>网站公告<a href="notice.html"></a></li>
                        </ul>
                    </div>
        </div>
    </div>
</template>


<style scoped>
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

.project_name_f{width:100%;height:40px;overflow:hidden;background:#fff;}                                            	
.project_name_f_in{width:94%;height:40px;overflow:hidden;margin:0 auto; text-align:center; line-height:40px; font-size:16px;}	
.anotherne_f{width:100%;height:auto;overflow:hidden;background:#fff;}
.anotherne_f_in{width:94%;height:auto;overflow:hidden;margin:0 auto;}
.anotherne_f_in ul{width:100%;height:auto;overflow:hidden;}
.anotherne_f_in ul li{width:100%;height:40px;border-bottom:1px solid #DCDCDC;overflow:hidden; text-align:left; font-size:14px; line-height:40px;color:#3DB1FA;}
.anotherne_f_in ul li a{display:block;width:14px;height:14px;float:right; margin-top:13px; background:url(../assets/images/xia2.png) no-repeat center; background-size:cover;}
</style>
