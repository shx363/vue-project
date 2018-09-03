var express = require('express');
var router = express.Router();

/* router.get('/', function(req, res){
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  // res.setHeader('Access-Control-Allow-Credentials', true);
  console.log('cookies服务',req.query);

  
  //兜库，看有无用户名,有才种,并取用户信息

  req.session.username=req.query.username;//种
  res.send({error:0,msg:'成功',data:{a:'用户信息'}});

}); */

let data=[{
  "username":"shihexiang",
  "password":"123"
},{
  "username":"alice",
  "password":"456"
}]

router.get('/', function(req, res){
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  // res.setHeader('Access-Control-Allow-Credentials', true);
  // console.log('获取cookies',req.session);
  // console.log('获取前端提交信息',req.query);
  //兜库，看有无用户名,有才种,并取用户信息
  // console.log(req.session);
  // req.session.username=req.query.username;//种  库里面用户的 ID
  // console.log(data);
  res.send(data);

});

module.exports = router;
