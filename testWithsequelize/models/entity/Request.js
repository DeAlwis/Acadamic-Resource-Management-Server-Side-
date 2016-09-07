/**
 * Created by User on 9/7/2016.
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Request = connection.define('Request',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'request',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Request;