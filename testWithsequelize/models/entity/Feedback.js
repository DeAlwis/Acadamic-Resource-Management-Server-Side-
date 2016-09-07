/**
 * Created by User on 9/6/2016.
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');
var FeedbackSession = require('./FeedbackSession');

var Feedback = connection.define('Feedback',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'feedback',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Feedback;