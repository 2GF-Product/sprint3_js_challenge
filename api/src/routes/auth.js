const express = require('express')
const router = express.Router()
const User = require('../models/user')



//REGISTER
router.post("/register", async (req, res) => {
    console.log(req.body)
    let getUser
    getUser = await User.findOne({email:req.body.email})
  
    if(getUser!=null)
    {
     return res.status(400).json({ message:"email duplicated email"} )
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      passe: req.body.passe
    })
  
    try {
      const newUser = await user.save()
      res.status(201).json(newUser)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    /* const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")
 */ 
console.log(user.passe)
console.log(req.body.passe)
   if( user.passe==req.body.passe){
    res.status(200).json(user)
   }else{
    res.status(400).json("wrong password")
   }
  
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
