/**
 * Created by User on 9/6/2016.
 * Develop: Amila
 * Model: Feedback
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Feedback = connection.define('Feedback',{
    answerOneCount : Sequelize.INTEGER,
    answerTwoCount : Sequelize.INTEGER,
    answerThreeCount : Sequelize.INTEGER,
    answerFourCount : Sequelize.INTEGER,
    answerFiveCount : Sequelize.INTEGER,
    status: Sequelize.BOOLEAN
},{
    tableName: 'feedback',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Feedback;