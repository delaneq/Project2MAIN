const express = require('express');
const nodemon = require('nodemon');
const app = express();
const { json } = require('body-parser');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(json());

// app.get('?', (req,res) => {res.render('?')}) - вместо ? пишешь то что нужно, что бы страницы отображались
app.get('/', (req, res) => {
    res.render('index');
}); 
app.get('/signin', (req, res) => {
    res.render('signin')
})
app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/newblog', (req, res) => {
    res.render('newblog')
})

// Задаем порт сервера и функцию что бы запускался сервер
const PORT = 8003;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`);
});
