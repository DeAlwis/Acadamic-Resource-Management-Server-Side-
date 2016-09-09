/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: Student
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Student = connection.define('Student',{

    studentFullName: Sequelize.STRING,
    studentDitNo : Sequelize.STRING,
    status: Sequelize.BOOLEAN
},{
    tableName: 'student',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Student;