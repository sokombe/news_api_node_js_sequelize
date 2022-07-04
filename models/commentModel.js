const user=require("./userMode")
const article=require('./articleModel')

module.exports=(sequelize,DataTypes)=>{
    const Comment=sequelize.define('comment',{
        content:{
            type: DataTypes.TEXT
        },
        id_article:{
            type: DataTypes.STRING
        },
        id_user:{
            type: DataTypes.STRING
        },
    })

    return Comment
}