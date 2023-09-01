const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/blogs')
    },
    filename: (req, file, cb) => {
        // poster.png -> ['poster', 'png']
        let ext = file.originalname.split('.').at(-1);  // 'png'
        let unique = Date.now()                         // 6546456346435    
        let newFileName = `${unique}.${ext}`
        cb (null, newFileName)
    }
});

const upload = multer({ storage: storage })

module.exports = { upload };