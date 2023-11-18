const {Sequelize}= require ('sequelize');
var dataBase = 'SaludBD';
var userName = 'postgres';
var password = 'Santiago$1234';

const connection = new Sequelize(dataBase,userName,password,{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;