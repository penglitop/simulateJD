var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '专业网上购物平台品质保障！-京东商城'});
});

module.exports = router;
