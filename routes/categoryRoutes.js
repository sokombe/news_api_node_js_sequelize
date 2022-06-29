const categoryController= require('../controllers/categoryController')


var router=require('express').Router()

router.post('/addCategory',categoryController.addCategory) // create

router.get('/getallcategory',categoryController.getAllCategory) // read


// we export the router
module.exports= router