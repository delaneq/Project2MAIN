const express = require('express');
const nodemon = require('nodemon');
const { json } = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const mongooseStore = require('connect-mongo');


require('./server/config/db');


const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(json());

// Подключаем отдельно вписанные get-ы в файле роутер
app.use(require('./server/pages/router'));
//
app.use(require('./server/Categories/router'));
app.use(require('./server/auth/router'));
//
app.use(passport.initialize());
app.use(passport.session());




// Задаем порт сервера и функцию что бы запускался сервер
const PORT = 8003;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
