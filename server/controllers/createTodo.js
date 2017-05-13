var Todo = require('../models/db');
module.exports.createController = function(req, res, next){
  // console.log(req.body.content);
  var TodoItem = new Todo({
    content: req.body.content,
    update_at: new Date()
  });
  // console.log(TodoItem);
  TodoItem.save(function(err, todos, count){
    // console.log(todo);
    if(err){
      err.send(err);
    }
    Todo.find()
      .sort('-update_at')
      .exec(function(err, todos){
        if(err){
          res.send(err);
        }
        console.log(todos);
        // console.log(count);
        res.json(todos);
      });
  });
};
