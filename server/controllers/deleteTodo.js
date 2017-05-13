var Todo = require('../models/db');
module.exports.deleteController = function(req, res, next) {
  Todo.remove({
    _id: req.params.id
  }, function(err, todo){
    if(err){
      res.send(err);
    }
    // Todo.find(function(err, todos){
    //   if(err){
    //     res.send(err);
    //   }
    //   res.json(todos);
    // });
    Todo.find()
      .sort('-update_at')
      .exec(function(err, todos){
        if(err){
          res.send(err);
        }
        res.json(todos);
      });
  });
};
