const mongoose = require('mongoose')

const invoiceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    invoiceNO: {
        type: Number,
        unique: true,
        required: false
    },
    products: [
        {
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
                required: false
            }
        }
    ],
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
        required: true
    },
    discount: {
        type: Number,
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

module.exports = mongoose.model('invoiceSchema', invoioceSchema)