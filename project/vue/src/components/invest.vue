<template>
    <div class="invest">
        <div class="top">
            <div class="box1">
                <a href="javascript:;" class="return" onclick="window.history.go(-1)"><img  style="margin-left:10px" src="../assets/images/return.png"></a>
                投资    
            </div>
        </div>
        <div class="fourcp_1" v-for="item of list" :key="item.id" >
        	<!--一条开始-->
            <div class="novice_zs_f_in" >
                <!--left-->
                            <div class="novice_zs_f_in_l">
                                            <div class="novice_zs_f_in_l_top">
                                                <img :src="item.src"/>
                                                <span>{{item.title}}</span>
                                            </div>
                                            <!--bottom-->
                                            <div class="novice_zs_f_in_l_bottom">
                                                <ul>
                                                    <li class="mark1_f">
                                                        <em>{{item.rate}}</em>
                                                        <p>年利率</p>
                                                    </li>
                                                    <li class="mark2_f">
                                                        <em><font>{{item.month}}<font>个月</font></font></em>
                                                        <p>期限</p>
                                                    </li>
                                                    <li class="mark3_f">
                                                        <em><font>￥</font>{{item.money}}<font>万</font></em>
                                                        <p>投资金额</p>
                                                    </li>
                                                    <li class="mark4_f">
                                                        <span>
                                                            <img :style="{height:item.percent1}" src="../assets/images/redbl.png"/>
                                                            <p>{{item.percent1}}</p>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                            </div>

                            <a href="#">
                                <div class="novice_zs_f_in_r">
                                <span><img src="../assets/images/lijitoubiao.png"></span>
                                </div>
                            </a>
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
    
.data_f{width:100%;height:42px;overflow:hidden;background:#fff;margin-top:12px; padding-bottom:6px;}
.data_f ul{ width:94%;height:42px;margin:0 auto;overflow:hidden;}
.data_f ul li{ width:33%;height:42px;float:left;}
.data_f ul li em{ width:100%;display:block;height:26px; text-align:center; line-height:26px; color:#3DB1FA;font-size:13px;font-style:normal;font-weight:bold}
.data_f ul li span{width:100%;display:block;height:16px;text-align:center; line-height:16px;color:#b2b2b2;font-size:12px;}
/*视频*/
.video_f{ width:100%;height:auto;overflow:hidden; margin-top:12px;}
.video_f_in{ width:94%;height:36px; margin:0 auto;display:block;background:#3db1fa;line-height:36px; border-radius:6px; text-align:center; font-size:16px;color:#fff;}
/*新手专区标题*/
.novice_f{width:100%;height:20px;overflow:hidden;margin-top:12px;}
.novice_f_in{width:94%;height:20px;margin:0 auto;overflow:hidden;}
.novice_f_in img{display:block;width:22px;height:20px;float:left; margin-right:6px;}
.novice_f_in h2{ font-size:14px; font-weight:100;line-height:19px;height:20px;color:#333;float:left;}
/*新手专享*/
.novice_zs_f{ width:100%;height:140px;overflow:hidden;margin-top:12px;}
.novice_zs_f_in{ width:94%;height:120px;margin:0 auto;overflow:hidden;background:#fff;border-radius:6px; margin-top: 20px;}
.novice_zs_f_in_l{ width:88%;height:120px;float:left;background:#fff;}
.novice_zs_f_in_r{ width:12%;height:120px;float:left;}
.novice_zs_f_in_l_top{ width:100%;height:20px;overflow:hidden; margin-top:10px;}
.novice_zs_f_in_l_top img{display:block; width:20px;height:20px;float:left; margin-left:12px}
.novice_zs_f_in_l_top span{display:block; min-width:232px;float:left;height:20px;line-height:20px;font-size:16px; text-indent:6px;}
/*新手专享的bottom*/
.novice_zs_f_in_l_bottom ul{ width:100%;height:80px;overflow:hidden;}
.novice_zs_f_in_l_bottom ul li{ width:25%;height:80px;float:left;}
.mark1_f em{display:block;width:100%;height:35px; font-size:16px; text-align:center; font-style:normal; line-height:42px;color:#3DB1FA;}
.mark1_f p,.mark2_f p,.mark3_f p{display:block;width:100%;height:45px;font-size:12px; text-align:center; line-height:45px;color:#959595;}
.mark2_f em{display:block;width:100%;height:35px; font-size:16px; text-align:center; font-style:normal; line-height:42px;color:#2f2f2f;}
.mark2_f em font{ font-size:16px; color:#959595;}
.mark3_f em{display:block;width:100%;height:35px; font-size:16px; text-align:center; font-style:normal; line-height:42px;color:#2f2f2f;}
.mark3_f em font{ font-size:12px; color:#959595;}
.mark4_f span{display:block; width:48px;height:48px; background:#e1e1e1; margin:0 auto;position:relative; margin-top:15px; border-radius:50%;border:2px solid #3DB1FA;overflow:hidden;}
.mark4_f span img{display:block; width:48px; height:48px; position:absolute; left:0; bottom:0}
.mark4_f span p{ font-size:12px; text-align:center; position:absolute; top:50%; left:0%; height:20px; line-height:20px;display:block; width:48px; margin-top:-10px;color:#333;}
.novice_zs_f_in_r{background:#3DB1FA;overflow:hidden;}
.novice_zs_f_in_r span{ display:block;width:20px;height:120px; margin:0 auto;}


.sizdzh_f{width:100%;height:44px;overflow:hidden;background:#fff; margin-top:20px}
.sizdzh_f ul{ width:100%;height:44px;}
.sizdzh_f ul li{ width:25%;height:44px;float:left; text-align:center; line-height:44px; font-size:16px;}
.sizdzh_f ul li.addys_f{color:#3DB1FA;}

.display_f{width:100%;height:auto;overflow:hidden; margin-top:12px; margin-bottom:52px;}
.display_f_in{width:100%;height:auto;overflow:hidden;}
.fourcp_1{ width:100%;height:140px;margin-bottom:25px; }
</style>

<script>
import * as types from '../store/types.js'
    export default{
        data(){
            return{
                list:{}
            }
        },
        created(){
            // this.$store.dispatch(types.VIEW_LOADING,true),
            this.$http({
                url:'http://localhost:3000/article',
                method:'get'
            }).then(
               res=>{
                    // this.$store.dispatch(types.VIEW_LOADING,false),
                    console.log('访问后的接口news',res);
                    this.list=res.data
                }
            )
        }
    }
</script>

