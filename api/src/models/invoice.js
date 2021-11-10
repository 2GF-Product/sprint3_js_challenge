const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    invoiceNO: {
        type: Number,
        unique: true,
        required: true
    },
    products: {
        description: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        unitPrice: {
            type: Number,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    },
    subtotal: {
        type: Number,
        default: v => {
            let val;
            products.forEach(element => {
                val += quantity * unitPrice;
            });
            return val; 
        },
        required: false
    },
    tax: {
        type: Number,
        default: 1,
        required: false
    },
    discount: {
        type: Number,
        default: 0,
        required: false
    },
    total: {
        type: Number,
        default: v => (subotal - discount) * tax,
        required: false
    },
    notes: {
        tyoe: String,
        required: false
    }

})

module.exports = mongoose.model('invoiceSchema', invoiceSchema)