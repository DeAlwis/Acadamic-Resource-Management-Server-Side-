/*
* handle the url for any get, put, post and delete request
* developer : Amila
 */
var express = require('express');
var router = express.Router();

var StudentRoute = require('./moduleRoutes/StudentRoute');
var UserTypeRoute = require('./moduleRoutes/UserTypeRoute');

router.use('/student/', StudentRoute);
router.use('/userType/', UserTypeRoute);

module.exports = router;
