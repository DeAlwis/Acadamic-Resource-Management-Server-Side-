/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: User Type
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var UserType = connection.define('userType', {
    userTypeName: Sequelize.STRING,
    status: Sequelize.BOOLEAN
},{
    tableName: 'user_type', // this will define the table's name
    updatedAt: 'updatedAt',
    createdAt: 'deletedAt',
    paranoid: true
});

module.exports = UserType;