"use strict";
// var app = angular.module('TodoApp', []);
app.controller('showCtrl', ['$scope', 'TodoService', function($scope, TodoService){
  // var vm = this;
  // vm.todos = [];

  TodoService.todoList()
    .then(function (response){
      console.log(response);
      // console.log(data);
      // vm.todos = response.data;
      $scope.todos = response.data;
      // console.log(data.data);
    }, function (err){
      console.log(err);
    });
}]);
