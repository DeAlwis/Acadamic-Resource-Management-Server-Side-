/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: User
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var User = connection.define('User', {
    userFullName: Sequelize.STRING,
    userPassword: Sequelize.STRING,
    userDitNo: Sequelize.STRING,
    status: Sequelize.BOOLEAN
},{
    tableName: 'user',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = User;