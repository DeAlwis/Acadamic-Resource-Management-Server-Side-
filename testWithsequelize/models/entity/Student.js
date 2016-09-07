/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: Student
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');
var User = require('./User');

var Student = connection.define('Student',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'student',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Student;