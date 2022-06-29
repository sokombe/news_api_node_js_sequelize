const articleController= require('../controllers/articleController.js')


var router=require('express').Router()

router.post('/addArticle',articleController.addarticle) // create

router.get('/getallArticles',articleController.getAllArticle) // read
router.get('/:idCategory/getAllArticleByCategory',articleController.getAllArticleByCategory) // read
router.get('/:lng/getAllArticleByLanguage',articleController.getAllArticleByLanguage) // read





router.get('/:id/getOneArticle',articleController.getOnearticle)

router.put('/:id/updateArticle',articleController.updatearticle) // utdate

router.delete('/:id/deleteArticle',articleController.deletearticle) // delete  

// we export the router
module.exports= router