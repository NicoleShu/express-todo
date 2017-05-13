"use strict";
// var app = angular.module('TodoApp', []);
app.controller('showCtrl', ['$scope', '$rootScope', 'TodoService', function($scope, $rootScope, TodoService){
  // var vm = this;
  // vm.todos = [];

  TodoService.todoList()
    .then(function (response){
      console.log(response);
      console.log($scope);
      // console.log($rootScope);
      // console.log(data);
      // vm.todos = response.data;
      $scope.todos = response.data;
      // console.log(data.data);
    }, function (err){
      console.log(err);
    });
}]);
