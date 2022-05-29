const express=require('express')
const {getOrdersByIdUser, addProductOrderUser, payOrder } = require('../controllers/orders')
const router =express.Router()



router.get('/getOrders/:userId',getOrdersByIdUser)
router.post('/addProductUser',addProductOrderUser)
router.post('/payOrder', payOrder)


module.exports=router