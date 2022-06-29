const { Sequelize } = require('.')

const category = require('./categoryModel.js')

module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define('article', {
        title: {
            type: DataTypes.STRING,
        },

        author: {
            type: DataTypes.STRING
        },
        content: {
            type: DataTypes.TEXT

        },
        source: {
            type: DataTypes.STRING

        },
        link: {
            type: DataTypes.STRING
        },
        cover: {
            type: DataTypes.STRING
        },
        langue: {
            type: DataTypes.STRING
        },

        category_id:{
        type: DataTypes.INTEGER,
        
        }

    })

    // we create the foreign key in article from category
  //  Article.hasOne(category)

    return Article
}


