var Todos = require('../model/ToDo');

module.exports = function (app) {
    app.get('/api/setup', function (req, res) {
        // Setup seed data
        var seedTodos = [
            {
                content: 'Học NodeJS',
                isDone: false
            },
            {
                content: 'Học AngularJS',
                isDone: false
            }
        ];
        Todos.create(seedTodos, function (err, result) {
            res.json(result);
        })
    });
};