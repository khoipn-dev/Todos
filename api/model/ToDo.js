var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    content: String,
    isDone: Boolean
});
var ToDos = mongoose.model('ToDos', todoSchema);
module.exports = ToDos;