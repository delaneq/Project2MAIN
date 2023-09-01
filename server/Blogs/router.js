const express = require('express');
const router = express.Router();
const { createBlog } = require('./controller')
const { upload } = require('./multer')
const { isAuth } = require('../auth/middleware') 

router.post('/api/createblog', isAuth ,upload.single('poster'), createBlog)
router.post('/api/films/new', isAuth ,upload.single('poster'), createFilm)


module.exports = router; 