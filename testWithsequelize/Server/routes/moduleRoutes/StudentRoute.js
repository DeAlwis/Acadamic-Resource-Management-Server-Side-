/**
 * Created by User on 9/9/2016.
 * Developer: Amila
 */
var express = require('express');
var router = express.Router();
var ControllerMap = require('../../Controller/ControllerMap');
var StudentController = ControllerMap.StudentController;

router.get('/', function(req, res, next) {
    StudentController.get(res);
});

router.post('/', function(req, res, next) {
    StudentController.create(req.body, res);
});

router.put('/', function(req, res, next) {
    StudentController.update(req.body, res);
});

router.delete('/', function(req, res, next) {
    StudentController.delete(req.body, res);
});

router.get('/:studentNo', function(req, res, next) {
    StudentController.getStudent(req.params.studentNo, res);
});
module.exports = router;