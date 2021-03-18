const User=require('./../models/userModel')


class editUserController{

    editPage(req, res) {
        let id = req.params.id;
        User.findById(id, function (err, user){
            res.json(user);
        });
      }


    updateUser (req, res) {
        User.findById(req.params.id, function(err, user) {
        if (!user)
          res.status(404).send("data is not found");
        else {
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
    
            user.save().then(user => {
              res.json('Update complete');
          })
          .catch(err => {
                res.status(400).send("unable to update the database");
          });
        }
      });
    }
}

module.exports=new editUserController();

