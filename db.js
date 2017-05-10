var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Todo = new Schema({
    id : String,
    content : String,
    update_at : Date
});
mongoose.model('Todo', Todo);
mongoose.connect('mongodb://localhost:27017/express-todo');    //此处的express-todo是mongodb数据库的名字，所以你需要先创建这个数据库
/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to express-todo');
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});
