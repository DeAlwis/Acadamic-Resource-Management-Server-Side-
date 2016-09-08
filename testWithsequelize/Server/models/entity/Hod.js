/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: Hod
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Hod = connection.define('Hod',{
    hodId : Sequelize.STRING,
    hodFullName: Sequelize.STRING,
    status: Sequelize.BOOLEAN
},{
    tableName: 'hod',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Hod;