/**
 * Created by User on 9/7/2016.
 * develop: Amila
 * model: Appointment
 */
var Sequelize = require('sequelize');
var connection  = require('./../Connection');

var Appointment = connection.define('Appointment',{
    appointmentDate : Sequelize.DATEONLY,
    appointmentStartTime : Sequelize.TIME,
    appointmentEndTime : Sequelize.TIME,
    appointmentSmallBref : Sequelize.STRING,
    status: Sequelize.BOOLEAN,
    status: Sequelize.BOOLEAN
},{
    tableName: 'appointment',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt',
    paranoid: true
});

module.exports = Appointment;