module.exports={
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '',
    DB: 'News_Api_Db',
    dialect: 'mysql',

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

