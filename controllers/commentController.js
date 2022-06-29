// we get all models
const db = require('../models')

// create the main Model
const Comment = db.comment

// main work 

// 1. create Category
const addComment = async (req, res) => {

    let info = {
        content: req.body.content,
        id_article: req.body.id_article,
        id_user: req.body.id_user,
    }

    const comment = await Comment.create(info);
    res.status(200)
        .send(comment)
    console.log(comment)

}

// 2. get all Category

const getAllCommentByAricle_Id = async (req, res) => {

    let id_article = req.params.id_article


    let comment = await Comment.findAll({
        /* attributes:[ 
       'title',
       'price'
   ] */
  where: { id_article: id_article }

    })
    res.status(200).send(comment)

}




module.exports = {
    addComment,
    getAllCommentByAricle_Id,
}