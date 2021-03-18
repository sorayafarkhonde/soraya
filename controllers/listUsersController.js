const User=require('./../models/userModel')

function listUserController(req, res) {
    
    User.find(function(err, users){
        if(err){
        console.log(err);
        }
        else {
        res.json(users);
        }
    })

}

module.exports =  listUserController 
