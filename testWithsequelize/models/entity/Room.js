/**
 * Created by User on 9/7/2016.
 * Develop: Amila
 * Model: Room
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Room = connection.define('Room',{
    status: Sequelize.BOOLEAN
},{
    tableName: 'room',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Room;