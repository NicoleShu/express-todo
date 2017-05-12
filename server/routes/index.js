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

var returnCtrl = require('../controllers/returnTodos');
router.get('/todos', returnCtrl.returnController);
// router.get('/todos', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // console.log(req);
  // Todo
  //   .find()
  //   .sort('-upadate_at')
  //   .exec(function(err, todos){
  //     if(err){
  //       res.send(err);
  //     }
  //     res.json(todos);
  //   });
// });


module.exports = router;
