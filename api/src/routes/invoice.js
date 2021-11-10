const express = require('express')
const router = express.Router()
const Invoice = require('../models/invoice')

router.get('/', async (req, res) => {
    try {
        const invoice = await Invoice.find()
        res.json(invoice)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


router.post('/', async (req, res) => {
    console.log(req.body)
    const invoice = new Invoice({
        invoiceNO: req.body.invoiceNO,
        products: req.body.products
    })

    try {
        const newInvoice = await invoice.save()
        res.status(201).json(newInvoice)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})


module.exports = router