/**
 * Created by User on 9/9/2016.
 * developer: -Amila
 * use as map for all the controllers allocating
 */
var Controllers = {};

Controllers.UserTypeController = require('./ModuleControllers/UserTypeController');
Controllers.StudentController = require('./ModuleControllers/StudentController');
Controllers.LecturerController = require('./ModuleControllers/LecturerController');
module.exports = Controllers;