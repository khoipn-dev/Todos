var app = angular.module('app.todos')
app.factory('todo-service', ['$http', function ($http) {
    return {
        get: function () {
            return $http.get('/api/todos');
        },
        create: function (todo) {
            return $http.post('/api/todos', todo);
        },
        update: function(todo) {
            return $http.put('/api/todos', todo);
        },
        delete: function (id) {
            return $http.delete('/api/todos/' + id);
        }
    };
}]);
