const commentController= require('../controllers/commentController')


var router=require('express').Router()

router.post('/addComment',commentController.addComment) // create

router.get('/:id_article/getallCommentById',commentController.getAllCommentByAricle_Id) // read

// we export the route
module.exports= router