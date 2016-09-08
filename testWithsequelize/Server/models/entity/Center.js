/**
 * Created by User on 9/7/2016.
 * Develop: Amila
 * Model: Center
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Center = connection.define('Center',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'center',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Center;