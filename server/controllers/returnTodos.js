var Todo = require('../models/db');
module.exports.returnController = function(req, res, next) {
  Todo
    .find()
    .sort('-upadate_at')
    .exec(function(err, todos){
      if(err){
        res.send(err);
      }
      res.json(todos);
    });
};
