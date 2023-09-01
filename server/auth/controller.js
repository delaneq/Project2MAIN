const Users = require('./users');
const bcrypt = require('bcrypt')

const signUp = async(req, res) => {
    if (
        req.body.email.length <= 0 || 
        req.body.full_name.length <= 0 ||  
        req.body.password.length <= 0 || 
        req.body.re_password.length <= 0  
    ) {
        res.redirect('/api/signup?error=1')
    } else if (req.body.password != req.body.re_password) {
        res.redirect('/api/signup?error=2')
    }


    let isFind = await Users.findOne({email: req.body.email}).count();
    if (isFind) {
        res.redirect('/api/signup?error=3')
    } 

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            new Users ({
                email: req.body.email,
                full_name: req.body.full_name,
                password: hash
            }).save()

            res.redirect('/signin')
        })
    })

   
}

const signIn = (req, res) => {
    res.redirect('/profile');
}

// const signIn = (req, res) => {
//     if (req.user.isAdmin) {
//         res.redirect(`/admin/${req.user.id}`)
//         console.log('privet')
//     } else {
//         res.redirect(`/profile/${req.user.id}`);

//     }

// }

const signOut = (req, res) => {
    req.logout((err) => {
        if (err) { console.log('error') }
        res.redirect('/')
    })
}

module.exports = { signUp, signIn, signOut};