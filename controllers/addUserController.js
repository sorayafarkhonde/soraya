const User=require('./../models/userModel')

function addUserController(req, res){
 
        let user = new User(req.body);
        user.save()
            .then(user => {
                res.status(200).json({'user': 'user in added successfully'});
            })
            .catch(err => {
                res.status(400).send("unable to save to database");
            })
}



module.exports = addUserController