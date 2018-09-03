var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    nikename:req.session.nikename
  });
});

module.exports = router;
