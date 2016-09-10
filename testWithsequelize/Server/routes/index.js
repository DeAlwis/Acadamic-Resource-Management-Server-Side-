/*
* handle the url for any get, put, post and delete request
* developer : Amila
 */
var express = require('express');
var router = express.Router();
var StudentRoute = require('./moduleRoutes/StudentRoute');
var UserTypeRoute = require('./moduleRoutes/UserTypeRoute');
var LecturerRoute = require('./moduleRoutes/LecturerRoute');

router.use('/student/', StudentRoute);
router.use('/userType/', UserTypeRoute);
router.use('/lecturer/', LecturerRoute);

module.exports = router;
