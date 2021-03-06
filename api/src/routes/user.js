const express = require('express')
const router = express.Router()
const User = require('../models/user')

// Getting all
router.get('/', async (req, res) => {
  try {
    const user = await User.find()
    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})

// Creating one
router.post('/', async (req, res) => {
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

// Updating One
router.patch('/:id', getUser, async (req, res) => {
  console.log(req.body)
  if (req.body.name != null) {
    res.user.name = req.body.name
    console.log(req.body.name)
  }
  if (req.body.email != null) {
    res.user.email = req.body.email
  }
  if (req.body.passe != null) {
    res.user.passe = req.body.passe
  }
  if (req.body.address != null) {
    res.user.address = req.body.address
  }
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
    console.log("updated")
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove()
    res.json({ message: 'Deleted user' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

async function getUser(req, res, next) {
  let user
  try {

    user = await User.findById(req.params.id)
   
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.user = user

  next()

}



module.exports = router