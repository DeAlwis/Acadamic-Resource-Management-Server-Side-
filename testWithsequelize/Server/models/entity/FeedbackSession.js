/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: FeedbackSession
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var FeedbackSession = connection.define('FeedbackSession',{

    feedbackSessionDate : Sequelize.DATEONLY,
    feedbackSessionStartTime : Sequelize.TIME,
    feedbackSessionEndTime : Sequelize.TIME,
    status: Sequelize.BOOLEAN
},{
    tableName: 'feedbackSession',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = FeedbackSession;