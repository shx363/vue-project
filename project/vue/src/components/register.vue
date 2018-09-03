<template>
    <div class="register">
        <div class="top">
            <div class="box">
                <a href="javascript:;" class="return" onclick="window.history.go(-1)"><img style="margin-left:10px" src="../assets/images/return.png"></a>
                注册    
            </div>
        </div>


<div class="login_lo" style="margin-top:56px;">
	<div class="box2">
            <div class="lo_1 lo_2">
                <span>手机号</span>
                <input type="text" name="address" size="60" maxlength="60" style="color:#ccc" value="请输入手机号" onfocus="if(this.value=='请输入手机号'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='请输入手机号'){this.value='请输入手机号';this.style.color='#ccc';}">
            </div>
            <div class="lo_1 lo_2">
                <span>验证码</span>
                <input type="text" name="address" size="60" maxlength="60" style="color:#ccc" value="请输入验证码" onfocus="if(this.value=='请输入验证码'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='请输入验证码'){this.value='请输入验证码';this.style.color='#ccc';}">
                <div class="yan">
                        <input type="button" id="btn" class="btn_mfyzm" value="获取验证码" />

                </div>            
            </div>
            <div class="lo_1 lo_2">
                <span>邀请码</span>
                <input type="text" name="address" size="60" maxlength="60" style="color:#ccc" value="选填" onfocus="if(this.value=='选填'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='选填'){this.value='选填';this.style.color='#ccc';}">
            </div>
            <div class="lo_1 lo_2">
                <span>密码</span>
                <input type="text" name="address" size="60" maxlength="60" style="color:#ccc" value="请输入密码" onfocus="if(this.value=='请输入密码'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='请输入密码'){this.value='请输入密码';this.style.color='#ccc';}">
            </div>
            <div class="lo_1 lo_2">
                <span>确认密码</span>
                <input type="text" name="address" size="60" maxlength="60" style="color:#ccc" value="请再一次输入密码" onfocus="if(this.value=='请再一次输入密码'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='请再一次输入密码'){this.value='请再一次输入密码';this.style.color='#ccc';}">
            </div>
            <div class="lo_1 lo_2">
                <span>客服人员</span>
                <select style="margin-top:10px; width:100px;">
                    <option>请选择客服</option>
                    <option>客服人员一</option>
                    <option>客服人员二</option>
                    <option>客服人员三</option>
                </select>
            </div>
            <a href="#" class="lo_login">注册</a>
    </div>
</div>

</div>
</template>
<style scoped>
body{background: #fff}
.box2{margin-left: 20px}
.top{
	position:fixed;
	width:100%;
	height:44px;
	top:0;
	left:0;
	background:#29a7e2;
	z-index:100;
	}
	
.login{
	float:right;
	position:relative;
	cursor:pointer;
	}	
.register{
	float:right;
	margin-right:20px;
	}	
.return{
	float:left;
	margin-top:12px;
	}
	
.top .return img{
	width:17px;
	height:20px;
	margin-top:0;
	}

.top{
	text-align:center;
	color:#fff;
	line-height:44px;
	font-size:20x;
	}

.lo_logo{
    display: block;
	margin:80px auto 46px;
	width:200px;
	height:56px;
	}	
.login_lo{
	width:100%;
	}

.lo_1{
	height:44px;
	width:100%;
	border-bottom:1px solid #29a7e2;
	margin-top:12px;
	}

.lo_1 img{
	float:left;
	width:24px;
	height:24px;
	margin:10px;
	}

.lo_1 input{
	float:left;
	display:block;
	width:84%;
	height:44px;
	background: #ebebeb
	}

.lo_login{
	width:100%;
	height:40px;
	font-size:16px;
	text-align:center;
	line-height:40px;
	border-radius:6px;
	background:#29a7e2;
	margin-top:50px;
	display:block;
	color:#fff;
	}

.resi{
	display:block;
	font-size:14px;
	line-height:36px;
	text-align:center;
	}

.lo_1 span{
	width:60px;
	font-size:14px;
	text-align:right;
	line-height:44px;
	display:block;
	float:left;
	margin-right:14px;
	}

.lo_2 input{
	width:74%;
	}
	
.lo_2{
	position:relative;
	}

.yan{
	position:absolute;
	bottom:8px;
	right:0;
	}

.lo_2 .btn_mfyzm{
	border:none;
	color:#666;
	background: #fff;
	height:30px;
	width:100px;
	background:#ececec;
	border-radius:4px;
}
</style>

