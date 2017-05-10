// module.exports.homeController表示这个模块可以被别的文件引用
// homeController是这个函数的名字也是这个模块的名字。
module.exports.homeController = function(req, res) {
  //调用views文件夹里的html网页
  res.render('index', { title: 'Express' });
};
