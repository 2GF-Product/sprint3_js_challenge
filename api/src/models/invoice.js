const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({

  userId: {
    type: String,
    required: true
  },
  product: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  tax: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  },
  obs: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('invoiceSchema', invoiceSchema)