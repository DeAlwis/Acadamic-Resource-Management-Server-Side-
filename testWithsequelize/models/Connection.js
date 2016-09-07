/**
 * Created by User on 9/6/2016.
 */
var Sequelize = require('sequelize');
var sequelize = require('sequelize')
    , sequelize = new Sequelize('acadamic', 'root', '', {
      dialect: "mysql",
      port:    3306,
    });

module.exports = sequelize;

