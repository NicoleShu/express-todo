"use strict";

app.controller('createCtrl', ['$scope', 'TodoService', function($scope, TodoService){
  // console.log($scope.newTodo);
  $scope.createTodo = function(){
    // console.log($scope.newTodo);
    // console.log(todo);
    var todo = {'content':$scope.newTodo};
    console.log(todo);
    TodoService.createTodo(todo)
      .then(function(response){
        console.log(response);
        // $scope.newTodo
        $scope.newTodo = '';
      }, function(err){
        console.log(todo);
        console.log(err);
      });
  };

}]);
