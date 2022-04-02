const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();
//importing routes
const playerRoutes = require('./routes/player');
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'juan',
    password: '12345',
    port: 3306,
    database: 'liverpool'
}, 'single'));
app.use(express.urlencoded({extended: false}));
//routes
app.use('/', playerRoutes);
//static files
app.use(express.static(path.join(__dirname, './public')));
//starting to server
app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'));
});
