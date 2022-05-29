const express=require('express')
const { registerUser, loginUser, updatePerfilUser } = require('../controllers/users')
const { validatorRegistreUser, validatorLogin, validatorPerfil } = require('../validators/user')

const router =express.Router()

router.post('/registerUser',validatorRegistreUser,registerUser)
router.post('/loginUser',validatorLogin,loginUser)
router.post('/upDatePerfilUser',validatorPerfil,updatePerfilUser)

module.exports=router