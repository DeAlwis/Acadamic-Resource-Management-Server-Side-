/**
 * Created by User on 9/7/2016.
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Department = connection.define('Department',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'department',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Department;