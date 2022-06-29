// we get all models
const db = require('../models')

// create the main Model
const Article = db.article

// main work 

// 1. create article
const addarticle = async (req, res) => {

    let info = {
        title: req.body.title,
        author: req.body.author,
        content: req.body.content,
        source: req.body.source,
        link: req.body.link,
        cover: req.body.cover,  
        langue: req.body.langue,
        category_id: req.body.category_id

    }

    const article = await Article.create(info);
    res.status(200)
        .send(article)
    console.log(article)

}

// 2. get all Article

 const getAllArticle = async (req, res) => {

    let article = await Article.findAll({
    /*   attributes:[ // if we want all attributes, we remove attributes property
      'title',
      'price'
  ]  */

    })
    res.status(200).send(article)

} 
// get all by language
const getAllArticleByCategory = async (req, res) => {

    let idCategory= req.params.idCategory

    let article = await Article.findAll({
        where:{
            category_id: idCategory
        }
    })
    res.status(200).send(article)

} 

const getAllArticleByLanguage = async (req, res) => {

    let lng= req.params.lng

    let article = await Article.findAll({
        where:{
            langue: lng
        }
    })
    res.status(200).send(article)

} 


// 3. get single article

const getOnearticle = async (req, res) => {

    let id = req.params.id
    let article = await Article.findOne({
        where: {
            id: id
        }
    })
    res.status(200).send(article)

} 

// 4. get single article

 const updatearticle = async (req, res) => {

    let id = req.params.id

    const article = await Article.update(req.body, { where: { id: id } })
    res.status(200).send(article)

}
 

// 5. delete  article by id

 const deletearticle = async (req, res) => {

    let id = req.params.id

    await Article.destroy({ where: { id: id } })
    res.status(200).send("article deleted successfully!")

} 


// 6. delete  article by id

/* const getpublishedarticle = async (req, res) => {

    const Article = await Article.findAll({ where: { published: true } })
    res.status(200).send(Article)

} */


module.exports = {
    addarticle,
    getAllArticle,
    getOnearticle,
    updatearticle,
    deletearticle,
    getAllArticleByCategory,
    getAllArticleByLanguage
}