/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: Subject
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');
var FeedbackSession = require('./FeedbackSession');

var Subject = connection.define('Subject',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'subject',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Subject;