const user=require("./userMode")
const article=require('./articleModel')

module.exports=(sequelize,DataTypes)=>{
    const Comment=sequelize.define('comment',{
        content:{
            type: DataTypes.TEXT
        },
        id_article:{
            type: DataTypes.INTEGER
        },
        id_user:{
            type: DataTypes.INTEGER
        },
    })

    return Comment
}