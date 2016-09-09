/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: Question
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Question = connection.define('Question',{
    question : Sequelize.STRING,
    status: Sequelize.BOOLEAN
},{
    tableName: 'question',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Question;