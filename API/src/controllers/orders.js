const { Orders, Users, Products} = require('../db')
const { handleErrorHttp } = require("../utils/handlersErrorsHttp")

const getOrdersByIdUser=async(req,res,next)=>{

    const {userId}=req.params

    try {
        if(userId){

            let ordersUser= await Orders.findAll({where:{userId}})

            return res.send({ordersUser})
        }

        res.send({msg:'userId is required'})
        
    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'ERROR_GET_ORDERS_USER')
    }



}

const addProductOrderUser=async(req,res,next)=>{

    const {userId, idProduct}=req.body

    try {
        if(userId && idProduct){

            let order=await Orders.create({userId})
            order.addProduct(idProduct)
            let user= await Users.findByPk(userId)

            user.addProduct(idProduct)

            return res.send({order,user})
        }
        res.send({msg:'UserId and ProductId is requiered'})
        
    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'Fail add product for user')
    }
}

const payOrder=async(req,res,next)=>{

    const{orderId}=req.body

    try {
        if(orderId){
            let order= await Orders.findAll({
                where:{status:'Pending',id:orderId},
                include: {
                    model: Products
                    
                }
            })

            return res.send(order)
        }
        res.send('OrderId is required')
        
    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'Pay not processing')
    }

}

module.exports={
    getOrdersByIdUser,
    addProductOrderUser,
    payOrder

}