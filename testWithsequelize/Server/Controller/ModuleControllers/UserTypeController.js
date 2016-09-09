/**
 * Created by User on 9/9/2016.
 * Developer :- Amila
 */
var Module = require('../../models/Models');
var UserType = Module.UserType;

function UserTypeController() {
    /*
     * get all the user types without filtering
     */
    this.get = function(res) {
        UserType.findAll().then(function(data) {
            res.send(data);
        });
    };

    /*
     *insert new user type
     */
    this.create = function(UserTypeInstance, res) {
        UserType.create(UserTypeInstance).then(function(data) {
            res.send(data);
        })
    };
    /*
     * update the excisting intances
     */
    this.update = function(UserTypeInstance, res) {
        UserType.update({
            userTypeName: UserTypeInstance.userTypeName
        },{
            where: {
                userTypeName: UserTypeInstance.userTypeName
            }
        }).then(function(data) {
           res.send(data);
        });
    };
    /*
     * delete the excisting intance
     */
    this.delete = function(UserTypeInstance, res) {
        UserType.destroy({
            where: {
                userTypeName: UserTypeInstance.userTypeName
            }
        }).then(function(err,data) {
            if(err) {
                res.send(err)
            } else {
                res.send({status: 200, message:"Successfully deleted"});
            }
        });
    }
}

module.exports = new UserTypeController();