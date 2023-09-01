const isAuth = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(401).send('Unauthorized or don\'t have access');
    }
}

module.exports = { isAuth };