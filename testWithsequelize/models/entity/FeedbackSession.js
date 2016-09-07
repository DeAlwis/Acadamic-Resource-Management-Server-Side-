/**
 * Created by User on 9/6/2016.
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');
var Hod = require('./Hod');

var FeedbackSession = connection.define('FeedbackSession',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'feedback_session',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = FeedbackSession;