/**
 * Created by User on 9/7/2016.
 */
var Models = require('./Models');
var connection = require('./Connection');
var Relationship = function() {
    Models.UserType.hasMany(Models.User)
    Models.User.belongsTo(Models.UserType)

    Models.User.hasMany(Models.Hod)
    Models.Hod.belongsTo(Models.User)

    Models.Hod.hasMany(Models.FeedBackSession)
    Models.FeedBackSession.belongsTo(Models.Hod)

    Models.FeedBackSession.hasMany(Models.Feedback)
    Models.Feedback.belongsTo(Models.FeedBackSession)

    Models.User.hasMany(Models.Lecturer)
    Models.Lecturer.belongsTo(Models.User)

    Models.User.hasMany(Models.Student)
    Models.Student.belongsTo(Models.User)

    Models.Subject.hasMany(Models.FeedBackSession)
    Models.FeedBackSession.belongsTo(Models.Subject)

    Models.Feedback.hasMany(Models.Question)
    Models.Question.belongsTo(Models.Feedback)

    Models.Center.belongsTo(Models.Subject)
    Models.Subject.hasMany(Models.Center)

    Models.Faculty.belongsToMany(Models.Center,{through: 'FacultyCenter'})
    Models.Center.belongsToMany(Models.Faculty,{through: 'FacultyCenter'})

    Models.Department.belongsToMany(Models.Faculty,{through: 'DepartmentFaculty'})
    Models.Faculty.belongsToMany(Models.Department,{through: 'DepartmentFaculty'})

    Models.Department.hasMany(Models.Batch)
    Models.Batch.belongsTo(Models.Department)

    Models.Batch.hasMany(Models.Student)
    Models.Student.belongsTo(Models.Batch)

    Models.Lecturer.belongsToMany(Models.Batch,{through: 'LecturerBatch'})
    Models.Batch.belongsToMany(Models.Lecturer, {through: 'LecturerBatch'})

    connection
        .sync()
        .then(function(err) {
            console.log("Database created");
        }, function (err) {
            console.log('An error occurred while creating the table:', err);
        });
}

module.exports = new Relationship();