var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log('article服务',req.query.id);
  //兜库-->mysql|mongodb  用 req.query.id
  let row=[{
    "id":1,
    "title":"测试标不要投",
    "src":"/static/images/biao.png",
    "rate":"12.00%",
    "month":3,
    "money":20.10,
    "percent1":"50%"
  },{
    "id":2,
    "title":"测试标不要投",
    "src":"/static/images/biao2.png",
    "rate":"32.00%",
    "month":4,
    "money":10.10,
    "percent1":"60%"
  },{
    "id":3,
    "title":"测试标不要投",
    "src":"/static/images/biao3.png",
    "rate":"42.00%",
    "month":2,
    "money":"14.10",
    "percent1":"60%"
  },{
    "id":4,
    "title":"测试标不要投",
    "src":"/static/images/biao4.png",
    "rate":"52.00%",
    "month":6,
    "money":50.10,
    "percent1":"80%"
  },{
    "id":5,
    "title":"测试标不要投",
    "src":"/static/images/biao5.png",
    "rate":"62.00%",
    "month":8,
    "money":"44.10",
    "percent1":"30%"
  },{
    "id":6,
    "title":"测试标不要投",
    "src":"/static/images/biao6.png",
    "rate":"46.00%",
    "month":5,
    "money":"34.10",
    "percent1":"90%"
  },{
    "id":7,
    "title":"测试标不要投",
    "src":"/static/images/biao4.png",
    "rate":"45.00%",
    "month":4,
    "money":33.10,
    "percent1":"80%"
  },{
    "id":8,
    "title":"测试标不要投",
    "src":"/static/images/biao3.png",
    "rate":"42.00%",
    "month":5,
    "money":"54.10",
    "percent1":"40%"
  }];
  // req.session.nikename='bmw2';//req.query.username
  res.send(row);
});

module.exports = router;
