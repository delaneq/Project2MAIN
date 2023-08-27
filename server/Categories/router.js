const express = require('express');
const router = express.Router();
const Categories = require('./Categories');
const { getAllCategories } = require('./controller')
const writeAllCategories = require('./seed');

writeAllCategories();

router.get('/api/categories', getAllCategories);

module.exports = router;
