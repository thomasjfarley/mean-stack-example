const router = require('express').Router();
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
const { uploadFile } = require('../s3')

router.post('/', upload.single('image'), async (req, res) => {
    const file = req.file
    const result = await uploadFile(file)
    console.log(result)
    res.send('tadaaa')
})

module.exports = router;
