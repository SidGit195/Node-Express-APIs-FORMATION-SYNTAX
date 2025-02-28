const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const { validateProduct } = require('../middlewares/validators');

router.get('/products/:id', ProductController.getProduct);
router.post('/products', validateProduct, ProductController.addProduct);
router.put('/products/:id', validateProduct, ProductController.updateProduct);

module.exports = router;