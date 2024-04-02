
const express = require('express');
const router = express.Router();
const { productController } = require('../controller')
const authenticateJWT = require('../middleware/authmiddleware');
//const aclmiddleware = require('../middleware/aclmiddleware');
const multer = require('multer');
const upload = multer({ dest: './uploads' })
const uploadmiddleware = upload.fields([{ name: 'images' }])

router.post('/', authenticateJWT, uploadmiddleware, productController.createProduct);
router.get('/vendor', authenticateJWT, productController.fetchProductsbyVendor);
router.get('/id', authenticateJWT, productController.fetchProductbyId);
router.put('/', authenticateJWT, productController.updateProduct)

module.exports = router;