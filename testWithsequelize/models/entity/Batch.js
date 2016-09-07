/**
 * Created by User on 9/7/2016.
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Batch = connection.define('Batch',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'batch',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Batch;