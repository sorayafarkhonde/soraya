const User=require('./../models/userModel')

function deleteUserController(req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    })

}

module.exports =  deleteUserController 