/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: Subject
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Subject = connection.define('Subject',{

    subjectName : Sequelize.STRING,
    subjectCode : Sequelize.STRING,
    subjectCredit : Sequelize.INTEGER,
    status: Sequelize.BOOLEAN
},{
    tableName: 'subject',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Subject;