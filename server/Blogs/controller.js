const Blogs = require('./Blogs')



const createBlog = async (req, res) => {
    if (req.file && req.body.title.length > 0 && 
        req.body.description.length > 0 &&
        req.body.year.length > 0 &&
        req.body.view.length > 0 &&
        req.body.comments.length > 0 &&
        req.body.category.length > 0) {

            await new Blogs({
                title: req.body.title,
                description: req.body.description,
                year: req.body.year,
                view: req.body.view,
                comments: req.body.comments,
                category: req.body.category,
                author: req.user._id,
                poster: `/img/blogs/${req.file.filename}`
            }).save();

            res.redirect(`/profile/${req.user._id}`)
        } else { 
            res.redirect('/new?error=1')
        }
        

};



module.exports = { createBlog };