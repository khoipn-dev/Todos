var Todos = require('../model/ToDo');
function getTodos (res) {
    Todos.find(function (err, data) {
        if (err) throw err;
        else res.json(data);
    });
};

module.exports = function (app) {
    /**
     * Get all todo
     */
    app.get('/api/todos', function (req, res) {
        getTodos(res);
    });
    /**
     * Get todo by ID
     */
    app.get('/api/todos/:id', function (req, res) {
        Todos.findById({_id: req.params.id}, function (err, data) {
            if (err) throw err;
            else res.json(data);
        });
    });
    /**
     * Create new todo
     */
    app.post('/api/todos', function (req, res) {
        var todo = {
            content: req.body.content,
            isDone: req.body.isDone
        }
        Todos.create(todo, function (err, data) {
            if (err) throw err;
            else getTodos(res);
        });
    });

    /**
     * Update a todo
     */
    app.put('/api/todos', function (req, res) {
        if(!req.body._id) return res.status(500).send('ID is required');
        else {
            var todo = {
                content: req.body.content,
                isDone: req.body.isDone
            };
            Todos.update({_id: req.body._id}, todo, function (err, data) {
                if (err) res.status(500).json(err);
                else getTodos(res);
            });
        }
    });

    /**
     * Delete a todo
     */
    app.delete('/api/todos/:id', function (req, res) {
        Todos.remove({_id: req.params.id}, function (err, data) {
            if (err) res.status(500).json(err);
            else getTodos(res);
        });
    });
}