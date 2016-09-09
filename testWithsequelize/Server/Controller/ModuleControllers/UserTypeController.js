/**
 * Created by User on 9/9/2016.
 * Developer :- Amila
 */
var Module = require('../../models/Models');
var UserType = Module.UserType;

function UserTypeController() {
    /*
     * get all the user types without filtering
     * @params
     * res = response of middleware express
     */
    this.get = function(res) {
        UserType.findAll().then(function(data) {
            res.send(data);
        });
    };

    /*
     *insert new user type
     * @params
     * UserTypeInstance = Instance provided by the client
     * res = response of middleware express
     */
    this.create = function(UserTypeInstance, res) {
        UserType.create(UserTypeInstance).then(function(data) {
            res.send(data);
        })
    };

    /*
     * update the excisting intances
     * @params
     * res = response of middleware express
     * UserTypeInstance = Instance provided by the client
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
     * @params
     * res = response of middleware express
     * UserTypeInstance = Instance provided by the client
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