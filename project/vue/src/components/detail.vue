<template>
<div class="detail">
    <div class="top">
        <div class="box">
            <a href="javascript:;" class="return" onclick="window.history.go(-1)"><img  style="margin-left:10px" src="../assets/images/return.png"></a>
            详情   
        </div>
    </div>
            <div class="tozije_f">
            <div class="tozije_f_in">
                <ul>
                    <li>
                        <em>金额</em>
                        <p><font>￥</font>{{detail.money}}万</p>
                    </li>
                    <li>
                        <em>年利率</em>
                        <p><font></font>{{detail.rate}}</p>
                    </li>
                    <li>
                        <em>期限</em>
                        <p><font></font>{{detail.month}}个月</p>
                    </li>
                    <li class="mark4_f2">
                        <span>
                            <img  :style="{height:detail.percent1}" src="../assets/images/redbl.png"/>
                            <p>{{detail.percent1}}</p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="contain">{{detail.content}}</div>
</div>
</template>

<style>
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
    
.tozije_f{ width:100%;height:60px;overflow:hidden; background:#fff; margin-top: 40px;}
.tozije_f_in{width:94%;height:60px; margin:0 auto; overflow:hidden;}
.tozije_f_in ul{ width:100%; height:60px;overflow:hidden;}
.tozije_f_in ul li{ width:25%;height:60px;float:left;}
.tozije_f_in ul li em{display:block; width:100%; font-style:normal; font-size:13px; color:#333; text-align:center; height:30px;line-height:30px;}
.tozije_f_in ul li p{display:block;width:100%;height:30px; line-height:30px;text-align:center;font-size:14px;color:#3DB1FA;}
.tozije_f_in ul li font{font-size:12px;color:#999;}
.mark4_f2 span{display:block; width:48px;height:48px; background:#e1e1e1; margin:0 auto;position:relative; margin-top:4px; border-radius:50%;border:2px solid #3DB1FA;overflow:hidden;}
.mark4_f2 span img{display:block; width:48px; height:48px; position:absolute; left:0; bottom:0}
.mark4_f2 span p{ font-size:12px; text-align:center; position:absolute; top:50%; left:0%; height:20px; line-height:20px!important;display:block; width:48px; margin-top:-10px;color:#333;}
.contain{font-size:16px;width: 90%; height: 400px; margin: 30px auto;}
</style>
<script>
    
    export default{
        data(){
            return{
                detail:{},
            }
        },
        created(){
            setTimeout(()=>{
            let id = this.$route.params.id;
            this.$http({
                url:'http://localhost:3000/detail',
                method:'get'
            }).then(
                res=>{
                   this.detail=res.data[id-1]
                }
            )
             },1000)
        }
    }
</script>