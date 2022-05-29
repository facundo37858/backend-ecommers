const { check }=require('express-validator')
const validateResult=require('../utils/handleValidators')

const validatorRegistreUser=[
    check('name').exists().notEmpty().isLength({min:3,max:99}),
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min:5,max:8}),
    (res,req,next)=>{return validateResult( res,req,next)}

]

const validatorLogin=[
    check('email').exists().notEmpty().isEmail(),
    check('password').exists().notEmpty().isLength({min:5,max:8}),
    (res,req,next)=>{return validateResult( res,req,next)}

]

const validatorPerfil=[
    check('perfil_address').exists().notEmpty().isString(),
    check('perfil_photo').exists().notEmpty().isString(),
    check('id').exists().notEmpty().isString(),
    (res,req,next)=>{return validateResult(res,req,next)}
]

module.exports={
    validatorRegistreUser,
    validatorLogin,
    validatorPerfil
}