const express=require('express')
const router =express.Router()
const { getAllProducts, addProduct, updateProduct } = require('../controllers/products')
const { validatorCreateItem } = require('../validators/product')


router.get('/getProducts', getAllProducts)
router.post('/addProduct',validatorCreateItem,addProduct)
router.post('/updateProduct',updateProduct)

module.exports=router