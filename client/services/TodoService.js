"use strict";

app.factory('TodoService',['$http', function($http){
  // var todos;
  var _getTodoList = function(){
    return $http.get('/todos');
  };
  var _createTodo = function(todo){
    console.log(todo);
    return $http({
      method: 'POST',
      url: '/todo',
      data: todo
    });
  };
  var _deleteTodo = function(id){
    return $http.delete('/todo' + id);
  }
  return {
    todoList: _getTodoList,
    createTodo: _createTodo,
    deleteTodo: _deleteTodo
  };
}]);
