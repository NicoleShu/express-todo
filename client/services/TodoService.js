"use strict";

app.factory('TodoService',['$http', function($http){
  var _getTodoList = function(){
    return $http.get('/todos');
  };
  return {
    todoList: _getTodoList
  }
}]);
