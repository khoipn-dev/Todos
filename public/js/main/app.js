var app = angular.module('app.todos',['xeditable']);

app.controller('todoController', ['$scope', 'todo-service', function ($scope, TodoService) {
    $scope.appName = 'My Todos';
    $scope.formData = {};
    $scope.todos = [];
    $scope.loading = true;
    /**
     * Load data form api
     */
    TodoService.get().success(function (data) {
        $scope.todos = data;
        $scope.loading = false;
    });
    $scope.createTodo = function () {
        $scope.loading = true;
        var todo = {
            content: $scope.formData.content,
            isDone: false
        }
        TodoService.create(todo).success(function (data) {
            $scope.todos = data;
            $scope.formData = "";
            $scope.loading = false;
            toastr.success('Create successfully !!!');
        });
    };
    $scope.updateTodo = function (todo) {
        console.log(todo);
        $scope.loading = true;
        TodoService.update(todo).success(function (data) {
            $scope.todos = data;
            $scope.loading = false;
            toastr.success('Update successfully !!!');
        });
        
    };
    $scope.deleteTodo = function (todo) {
        console.log("Delete" + todo);
        $scope.loading = true;
        TodoService.delete(todo._id).success(function (data) {
            $scope.todos = data;
            $scope.loading = false;
            toastr.success('Delete successfully !!!');
        });
    }
}]);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
  });
