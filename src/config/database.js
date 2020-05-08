module.exports= {
/* 
    host: '127.0.0.1',
    username:'postgres',
    password:'docker',
    database: 'nodeauth', 
*/
    host: process.env.DB_HOST,
    username: process.env.DB_USER ,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    dialect: process.env.DB_DIALECT || 'postgres',
    storage: './__tests__/database.sqlite',
    operatorsAliases: false,
    logging: false,
    define:{
        timestramps: true,  // marca a data de atualizaçao
        underscored: true,
        underscoredAll: true
    },
}
