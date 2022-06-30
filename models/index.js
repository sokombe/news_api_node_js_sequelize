const dbconfig = require("../config/dbConfig");

const { Sequelize, DataTypes } = require('sequelize')

// we initalise the sequelize
const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,
    {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        opereratorsAliases: false,

        pool:{
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        }

    }
)

// we authentificate
sequelize.authenticate()
.then( ()=>{
    console.log("Connected")
} )
.catch(err=>{
    console.log("error: "+err)
})

// we create the main db 
const mydb={ }

mydb.Sequelize=Sequelize
mydb.sequelize=sequelize

// assiations
//mydb.article.hasOne(mydb.category)

mydb.category=require('./categoryModel')(sequelize,DataTypes)
mydb.user=require('./userMode')(sequelize,DataTypes)
mydb.article=require('./articleModel')(sequelize,DataTypes)
mydb.comment=require('./commentModel')(sequelize,DataTypes)



mydb.sequelize.sync({force:false})
.then(()=>{
    console.log('yes re-sync  done')
})

// we create the db and return that
 module.exports= mydb