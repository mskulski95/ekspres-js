const User = require('../models/User');

function userList(cb){
    User.find().lean().exec(function(err, users){
        if(err){
            cb(err)
        } else {
            cb(null, users)
        }
    });
}

module.exports = {
    list: userList
}