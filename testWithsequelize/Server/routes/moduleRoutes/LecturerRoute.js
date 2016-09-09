/**
 * Created by User on 9/9/2016.
 * Developer: Amila
 */
var express = require('express');
var router = express.Router();
var ControllerMap = require('../../Controller/ControllerMap');
var LecturerController = ControllerMap.LecturerController;

router.get('/', function(req, res, next) {
    LecturerController.get(res);
});

router.post('/', function(req, res, next) {
    LecturerController.create(req.body, res);
});

router.put('/', function(req, res, next) {
    LecturerController.update(req.body, res);
});
module.exports = router;