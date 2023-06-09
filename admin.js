const User = require('../models/user')

exports.allUser=(req,res)=>{
    User.findAll()
    .then(users=>{
        res.json(users)
    })
    .catch(err=>console.log(err))
}

exports.showForm=(req,res)=>{
    res.sendFile(__dirname+'/curdOperations.html')
}

exports.addUser =  (req,res)=>{
    const name = req.body.name;
    const mobile = req.body.mobile;
    const email = req.body.email;

    User.create({
        name: name,
        mobile: mobile,
        email: email
    })
    .then(() => {
        res.redirect('/user')
    })
    .catch(err => 
        console.log(err))
    
}

exports.editUser = (req, res) => {
    const id = req.params.id;
    const { name, mobile, email } = req.body;
    User.update({ name, mobile, email }, { where: { id } })
      .then(() => {
        res.redirect('/user')
      })
      .catch(error => {
        console.log(error);
        res.sendStatus(500);
      });
  }

  exports.deleteUser =  (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
      .then(user => {
        if (!user) {
          return res.status(404).send("User not found");
        }
        user.destroy()
          .then(() => {
            res.redirect('/user')
          })
          .catch(error => {
            console.log(error);
            res.status(500).send("Internal server error");
          });
      })
      .catch(error => {
        console.log(error);
        res.status(500).send("Internal server error");
      });
  }