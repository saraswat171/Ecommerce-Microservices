const express = require('express');
const router = express.Router();

const multer = require('multer');

const upload = multer({ dest: './uploads' })


  
router.put('/profile/:id', upload.single('image'));
module.exports = router;