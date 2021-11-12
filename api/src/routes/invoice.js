const express = require('express')

const router = express.Router()
const Invoice = require('../models/invoice')
const User = require('../models/user')

// Getting all
router.get('/', async (req, res) => {
  try {
    const invoice = await Invoice.find()
    res.json(invoice)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Getting One
router.get('/:id', getInvoice, (req, res) => {
  res.json(res.invoice)
})

// Creating one
router.post('/', async (req, res) => {
  /* console.log(req.body+"Luissssssssssssssss") */
  
    const invoice = new Invoice({
    userId: req.body.userId,
    product: req.body.product,
    quantity: req.body.quantity,
    price: req.body.price,
    tax: req.body.tax,
    total:req.body.total,
    obs:req.body.obs 
    
  })

  try {
    const newInvoice = await invoice.save()
    res.status(201).json(newInvoice)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating One
router.patch('/:id', getInvoice, async (req, res) => {
  console.log(req.body.product)


  if (req.body.product != null) {
    res.invoice.product = req.body.product
    console.log(req.body.product)
  } 
  if (req.body.quantity != null) {
    res.invoice.quantity = req.body.quantity
  }
  if (req.body.price != null) {
    res.invoice.price = req.body.price
  }
  if (req.body.tax != null) {
    res.invoice.tax = req.body.tax
  }
  if (req.body.total != null) {
    res.invoice.total = req.body.total
  }
  if (req.body.obs != null) {
    res.invoice.obs = req.body.obs
  }
  try {
    const updatedInvoice = await res.invoice.save()
    res.json(updatedInvoice)
    console.log("updated")
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting One
router.delete('/:id', getInvoice, async (req, res) => {
  try {
    await res.invoice.remove()
    res.json({ message: 'Deleted user' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//get user invoice

router.post("/userInvoice", async (req, res) => {
    let currentUser
    let userInvoice
    try {
      /* const currentUser = await User.findById(req.body.userId); */
      currentUser = await User.findOne({useId:req.body.userId})
      console.log(currentUser+"curent user")
      userInvoice = await Invoice.find({ userId: currentUser.userId });
               console.log(userInvoice+"invoices")
      res.json(userInvoice)
    } catch (err) {
      res.status(500).json(err);
    }
  });

async function getInvoice(req, res, next) {
  let invoice
  try {

    invoice = await Invoice.findById(req.params.id)
   
    if (invoice == null) {
      return res.status(404).json({ message: 'Cannot find Invoice' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.invoice = invoice

  next()

}



module.exports = router