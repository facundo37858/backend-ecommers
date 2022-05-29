const { check }=require('express-validator')
const validateResult=require('../utils/handleValidators')


const validatorCreateItem=[
    check('ISBN').exists().notEmpty(),//que excisita una propiead name, no sea vacia y q tenga una determina longitud
    check('typeProduct').exists().notEmpty(),
    check('code').exists().notEmpty(),
    check('name').exists().notEmpty().isLength({min:5,max:90}),
    check('price').exists().notEmpty().isNumeric(),
    check('author').exists().notEmpty(),
    check('editorial').exists().notEmpty(),
    check('stock', 'stock must be a number between 1 and 100').exists().notEmpty().isFloat({ min: 1, max: 100 }),
    (req,res,next)=>{return validateResult(req,res,next)}
]

module.exports={
    validatorCreateItem
}