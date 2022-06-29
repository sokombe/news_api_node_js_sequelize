const userController= require('../controllers/userController')


var router=require('express').Router()

router.post('/addUser',userController.addUser) // create

router.get('/getallUsers',userController.getAllUser) // read

// we export the router
module.exports= router