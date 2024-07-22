

import express from 'express'
import UserController from '../controllers/userController.js'
import checkuserAuth from '../middlewares/auth_middlewares.js'

const router = express.Router()

router.use('/changepassword', checkuserAuth)
router.use('/login',validator)
router.use('/logged', checkuserAuth)


// public 

router.post('/registration', UserController.userRegistration)
router.post('/login',UserController.userLogin)
router.post('/reset-pass-email',()=>{})
router.post('/reset-pass/:id/:token',()=>{})  

// private
router.post("/changepassword", UserController.changeUserPassword)   
router.get('/logged',userController,loggeduser)


export default router