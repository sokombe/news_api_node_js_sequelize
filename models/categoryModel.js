
module.exports=(sequelize,DataTypes)=>{
    const Category=sequelize.define('Category',{
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cover:{
            type: DataTypes.STRING
        },
        
       
    })

    return Category
}