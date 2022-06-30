
module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('user',{
        firstname:{
            type: DataTypes.STRING,
        },
        secondname:{
            type: DataTypes.STRING
        },
        email:{
            type: DataTypes.STRING
        },
        password:{
            type: DataTypes.STRING
        },
        phone:{
            type: DataTypes.STRING
        },
    })

    return User
}