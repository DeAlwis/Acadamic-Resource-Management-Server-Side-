/**
 * Created by User on 9/7/2016.
 * Develop: Amila
 * Model: Faculty
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Faculty = connection.define('Faculty',{
    facultyName: Sequelize.STRING,
    status: Sequelize.BOOLEAN
},{
    tableName: 'faculty',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Faculty;