const { Products, Orders} = require('../db')
const { handleErrorHttp } = require("../utils/handlersErrorsHttp")
const { matchedData } = require('express-validator')


const getAllProducts= async(req, res, next)=>{

    try{

        let products= Products.findAll()

        res.send({products})

    }catch(error){
        
        handleErrorHttp(res, 'Fail Get All Products')
    }


}

const addProduct= async(req,res,next)=>{

    try {

        let body=matchedData(req)

        const [productCreated, created] = await Products.findOrCreate({
            defaults: body,
            where: { ISBN: body.ISBN },
        });
       
        if(created){
            return res.send({product:productCreated})
        }

        res.send({msg:`product excist with ISBN:${body.ISBN}`})
     
    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'Faild Add Product')
    }
}

const updateProduct=async(req,res,next)=>{
    const {ISBN, newStock} = req.body

    try {
        if(ISBN && newStock){

            let updateProduct=await Products.update({   
                stock: newStock,
                },
                {
                where: {
                  ISBN
                }}
            );

            return res.send({update:true})

        }

        res.send({msg:`Is required ISBN and stock`})
        
    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'ERROR_UPDATE_PRODUCT')
        
    }
}

module.exports={
    getAllProducts,
    addProduct,
    updateProduct
}