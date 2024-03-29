const mongoose = require('mongoose')

const Orders = new mongoose.Schema(
    {
        number: {
            type: "number",
            required: true,
            unique: true
        },
        firstName: {
            type: "string",
            required: true,
            trim: true
        },
        lastName: {
            type: "string",
            required: true,
            trim: true
        },
        date: {
            type: Date,
            required: true,
        },
        email: {
            type: "string",
            required: true,
            trim: true
        },
        phone: {
            type: 'number',
            required: true
        },
        address: {
            type: 'string',
            required: true,
            trim: true
        },
        peopleCount: {
            type: 'number',
            required: true,
            default: 1
        },
        country: {
            type: 'string',
            required: true,
            default: "Uzbekistan"
        },
        amount: {
            type: 'number',
            required: true,
        },
        paid_at: {
            type: Date,
            default: null
        },

        created_at: {
            type: Date,
        }
    }
)

module.exports = mongoose.model('Orders', Orders)
