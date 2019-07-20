var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var setupController = require('./api/controller/SetupController');
var todoController = require('./api/controller/TodoController');
// Khởi tạo app
var app = express();
var port = process.env.PORT || 3000;
// Cấu hình static resource
app.use('/assets', express.static(__dirname + '/public'));
// Dùng middleware để nhận dữ liệu
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
// Cấu hình view engine
app.set('view engine', 'ejs');
// Connect Database
mongoose.connect(config.getDBConnectionString());
setupController(app);
todoController(app);

app.get('/', function (req, res) {
    res.render('index');
 });

app.listen(port, function () {
    console.log(`Application running on port: ${port}`);
})