// module.exports.homeController表示这个模块可以被别的文件引用
// homeController是这个函数的名字也是这个模块的名字。
module.exports.homeController = function(req, res, next) {
  //渲染views文件夹里的网页
  // res.render('index', { title: 'Express' });

  //渲染html文件的方法
  // var path = require('path');  //当前文件所在路径
  // res.sendFile(path.join(__dirname, '../views', 'test.html'));   //exist errors

  //For todos
  var path = require('path');  //当前文件所在路径
  res.sendFile(path.join(__dirname, '../views', 'layout.html'));   //exist errors
};
