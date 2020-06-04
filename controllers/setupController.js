const Todos = require('../models/todoModel');

module.exports = function(app) {
    app.get('/api/setupTodos', function(req, res) {
        const starterTodos = [
            {
                username: 'test',
                todo: 'Buy Milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Buy Dog',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todos.create(starterTodos, function(err, results) {
            res.send(results);
        });
    });
}