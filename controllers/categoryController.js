// we get all models
const db = require('../models')

// create the main Model
const Category = db.category

// main work 

// 1. create Category
const addCategory = async (req, res) => {

    let info = {
        title: req.body.title,
        cover: req.body.cover,

    }

    const category = await Category.create(info);
    res.status(200)
        .send(category)
    console.log(category)

}

// 2. get all Category

 const getAllCategory = async (req, res) => {

    let category = await Category.findAll({
    /*   attributes:[ // if we want all attributes, we remove attributes property
      'title',
      'price'
  ]  */

    })
    res.status(200).send(category)

} 


// 4. get single Category

 const updateCategory = async (req, res) => {

    let id = req.params.id

    const category = await Category.update(req.body, { where: { id: id } })
    res.status(200).send(category)

}
 

// 5. delete  Category by id

 const deleteCategory = async (req, res) => {

    let id = req.params.id

    await Category.destroy({ where: { id: id } })
    res.status(200).send("Category deleted successfully!")

} 



module.exports = {
    addCategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
}