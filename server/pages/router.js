const express = require('express');
const Categories = require('../Categories/Categories');
const users = require('../auth/users')
const Blogs = require('../Blogs/Blogs')

const router = express.Router();


// router.get('?', (req,res) => {res.render('?')}) - вместо ? пишешь то что нужно, что бы страницы отображались
router.get('/', async (req, res) => {
    const categories = await Categories.find();
    const blogs = await Blogs.find().populate('category').populate('author');

    console.log(blogs)

    const data = {
        categories: categories,
        user: req.user ? req.user : {}
    }

    res.render('index', data);
}); 
router.get('/signin', (req, res) => {
    const data = {
        user: req.user ? req.user : {}
    }

    res.render('signin', data)
})
router.get('/signup', (req, res) => {
    const data = {
        user: req.user ? req.user : {}
    }

    res.render('signup', data)
})
router.get('/newblog', (req, res) => {
    res.render('newblog')
})

router.get('/profile/:id', async (req, res) => {
    try{
        const user = await users.findById(req.params.id);

        const data = {
            user: user,
            loginUser: req.user ? req.user : {}
        }
    
        

        res.render('profile', data)

    } catch(e) {
        res.redirect('/not-found');
    }
})
router.get('/profileedit', (req, res) => {
    res.render('profileedit')
})


module.exports = router;