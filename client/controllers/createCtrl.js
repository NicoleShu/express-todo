"use strict";

app.controller('createCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService){
  // console.log($scope.newTodo);
  $scope.createTodo = function(){
    // console.log($scope.newTodo);
    // console.log(todo);
    // var todo = {'content':$scope.newTodo};
    // var todo = $scope.newTodo;
    // console.log(todo);
    TodoService.createTodo($scope.newTodo)
      .then(function(response){
        console.log(response);
        // $scope.newTodo
        // console.log($scope);
        // console.log($scope.$$nextSibling);
        $scope.$$nextSibling.todos = response.data;
        $scope.newTodo = {};
        // $scope.newTodo.content = '';
      }, function(err){
        // console.log(todo);
        console.log(err);
      });
  };

}]);
