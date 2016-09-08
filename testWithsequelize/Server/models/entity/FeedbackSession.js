/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: FeedbackSession
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var FeedbackSession = connection.define('FeedbackSession',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'feedback_session',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = FeedbackSession;