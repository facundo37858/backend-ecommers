const { matchedData } = require('express-validator')
const { encrypt, compare } = require('../utils/handlePassword')
const { handleErrorHttp } = require("../utils/handlersErrorsHttp")
const { Users } = require('../db')

const registerUser= async(req,res,next)=>{
    try {

        req=matchedData(req)

        const passwordHash=await encrypt(req.password)
        const body={...req,hashedPassword:passwordHash}
        const dataUser= await Users.create(body)

        res.send({user:dataUser})

    } catch (error) {
        console.log(error)
        handleErrorHttp(res,' Faild Registry User')
    }
}

const loginUser=async(req,res,next)=>{
    try {
        req=matchedData(req)//solo email y password
        //buscamos el usuario
        const user =await Users.findOne({ where: { email: req.email } })
        if(!user){
            handleErrorHttp(res,'USER_NOT_EXSISTS',404)
            return
        }
        
        //validamos el password
        const hashPassword= user.hashedPassword
        // console.log('haspassword',hashPassword)
        const check= await compare(req.password,hashPassword)
        if(!check){
            handleErrorHttp(res,'PASSWORD_INVALID',401)
            return
        }
        //no quiero que me responda con el password
        user.set('hashedPassword',undefined,{strict:false})
        const data={
            user
        }
        res.json(data)
        
    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'ERROR_LOGINCONTROL')
    }
}

const updatePerfilUser=async(req,res,next)=>{
    try {
        req=matchedData(req)

        let updateUser=await Users.update({   
            perfil_address: req.perfil_address,
            perfil_photo:req.perfil_photo,
            perfil:true  
            },
            {
            where: {
              id: req.id
            }}
        );

        res.send({update:true})
        
    } catch (error) {
        console.log(error)
        handleErrorHttp(res,'ERROR_UPDATE_PERFIL')
        
    }
}

module.exports={
    registerUser,
    loginUser,
    updatePerfilUser
}