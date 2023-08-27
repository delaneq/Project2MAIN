const express = require('express');
const Categories = require('../Categories/Categories');

const router = express.Router();


// router.get('?', (req,res) => {res.render('?')}) - вместо ? пишешь то что нужно, что бы страницы отображались
router.get('/', async (req, res) => {
    const categories = await Categories.find();

    const data = {
        categories: categories,
        user: req.user ? req.user : {}
    }

    res.render('index');
}); 
router.get('/signin', (req, res) => {
    res.render('signin')
})
router.get('/signup', (req, res) => {
    res.render('signup')
})
router.get('/newblog', (req, res) => {
    res.render('newblog')
})
router.get('/profile', (req, res) => {
    res.render('profile')
})


module.exports = router;