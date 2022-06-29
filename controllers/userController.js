// we get all models
const db = require('../models')

// create the main Model
const User = db.user

// main work 

// 1. create Category
const addUser = async (req, res) => {

    let info = {
        firstname: req.body.firstname,
        secondname: req.body.secondname,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,

    }

    const user = await Category.create(info);
    res.status(200)
        .send(user)
    console.log(user)

}

// 2. get all Category

const getAllUser= async (req, res) => {

    let user = await User.findAll({

    })
    res.status(200).send(user)

}




module.exports = {
    addUser,
    getAllUser,
}