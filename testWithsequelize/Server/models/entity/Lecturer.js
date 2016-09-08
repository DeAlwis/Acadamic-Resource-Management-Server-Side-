/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: Lecturer
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Lecturer = connection.define('Lecturer',{
    lecturerFullName: Sequelize.STRING,
    lecturerId:Sequelize.STRING,
    status: Sequelize.BOOLEAN
},{
    tableName: 'lecturer',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Lecturer;