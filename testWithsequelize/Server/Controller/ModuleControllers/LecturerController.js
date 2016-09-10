/**
 * Created by User on 9/9/2016.
 * Developer : Amila
 */
var Modules = require('../../models/Models');
var Lecturer = Modules.Lecturer;

LecturerController = function() {

    this.get = function(res) {
        Lecturer.findAll().then(function(data) {
          res.send(data);
        });
    }

    this.create = function(LecturerInstance, res) {
        Lecturer.create(LecturerInstance).then(function(data) {
            res.send(data);
        });
    }

    this.update = function(LecturerInstance, res) {
        Lecturer.update({
            lecturerFullName: LecturerInstance.lecturerFullName
        },{
            where:{
                lecturerId: LecturerInstance.lecturerId
            }
        }).then(function(data) {
            res.send(data);
        });
    }

    this.delete = function(LectureInstance, res) {
        Lecturer.destroy({
            where: {
                lecturerId: LectureInstance.lecturerId
            }
        })
    }

    this.getEachLecturer = function(LecturerName, res) {
        Lecturer.find({
            where: {
               lecturerFullName :{
                   $like: LecturerName
               }
            }
        }).then(function(data) {
        res.send(data);
    })
    }
};

module.exports = new LecturerController();