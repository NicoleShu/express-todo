var express = require('express');
var router = express.Router();

/*  内部建立controller*/
// var homeController = function(req, res, next) {
//   res.render('index', { title: 'Express' });
// };
// GET home page.
// router.get('/', homeController);

/* 外部引入controller*/
var homeCtrl = require('../controllers/main');
// GET home page.
router.get('/', homeCtrl.homeController);



module.exports = router;
