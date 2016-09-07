/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: Hod
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');
var User = require('./User');

var Hod = connection.define('Hod',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'hod',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Hod;