<template>
<div class="login">
    <div class="top">
        <div class="box">
            <a href="javascript:;" class="return" onclick="window.history.go(-1)"><img  style="margin-left:10px" src="../assets/images/return.png"></a>
            登录    
        </div>
    </div>
    <img src="../assets/images/pic_home_slider_3.jpg" class="lo_logo">

    <div class="login_lo">
        <div class="box">
            <div class="lo_1">
                <img src="../assets/images/yong.png">
                <input v-model="username" type="text" name="address" size="60" maxlength="60" style="color:#ccc" value="" onfocus="if(this.value=='请输入用户名'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='请输入用户名'){this.value='请输入用户名';this.style.color='#ccc';}">
            </div>
            <div class="lo_1">
                <img src="../assets/images/mi.png">
                <input v-model="password" type="text" name="address" size="60" maxlength="60" style="color:#ccc" value="" onfocus="if(this.value=='请输入密码'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='请输入密码'){this.value='请输入密码';this.style.color='#ccc';}">
            </div>
            <a href="#" class="lo_login" @click="login">登录</a>
			<router-link to="/register"><a href="javascript:;" class="resi">免费注册</a></router-link>
        </div>
    </div>
</div>
</template>
<style scoped>
.login{width:80%;margin: 0 auto;}
.top{
	position:fixed;
	width:100%;
	height:44px;
	top:0;
	left:0;
	background:#29a7e2;
	z-index:100;
	}
	
/* .login{
	float:right;
	position:relative;
	cursor:pointer;
	}	 */
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
	background:#ebebeb;
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

<script>
	export default {
	data(){
      return{
        username:'',
        password:''
      }
	},
    methods:{
		
		login(){
			this.$http({
			url:'http://localhost:3000/login',
			params:{
				username:this.username,
				password:this.password,
			},
			}).then(
			res=>{			  
				//   console.log(res.data[0])
				for(var i = 0;i<res.data.length;i++){
					if(this.username == res.data[i].username && this.password==res.data[i].password){
						
						document.cookie = "username" + "=" + this.username;
						document.cookie = "password" + "=" + this.password;
						var str = document.cookie						
						var arr = str.split(";")
						for(var i =0;i<arr.length;i++){
							// console.log(arr[i].split("=")[1])
							if(arr[i].split("=")[1] == this.username){	
														
								let obj ={
									auth:true,
									data:this.username 									
								}								
								this.$store.dispatch('UPDATE_USER',obj);//->action.js
								this.$router.push('/user');
							}
						}
						
					}            
				}
			}
			)
		}
	}
	
  }
</script>
