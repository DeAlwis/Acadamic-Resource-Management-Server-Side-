/**
 * Created by User on 9/9/2016.
 * Developer: Amila
 */
var ControllerMap = require('../../Controller/ControllerMap');
var UserTypeController = ControllerMap.UserTypeController;
var express = require('express');
var router = express.Router();

/*
 * indexpage path for user type to get all the types
 * @req -> client request
 * @res -> client response
 * @next -> call back method
 */
router.get('/', function(req,res,next) {
    UserTypeController.get(res);
});
/*
 * url for insert user type by using post request
 * @req -> client request
 * @res -> client response
 * @next -> call back method
 */
router.post('/', function(req, res, next) {
    UserTypeController.create(req.body, res);
});
/*
 * url for update  user type by using put request
 * @req -> client request
 * @res -> client response
 * @next -> call back method
 */
router.put('/', function(req, res, next) {
    UserTypeController.update(req.body, res);
});
/*
 * url for delete  user type by using delete put request
 * @req -> client request
 * @res -> client response
 * @next -> call back method
 */
router.delete('/', function(req, res,next) {
    UserTypeController.delete(req.body, res);
});

module.exports = router;