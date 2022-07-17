const mongoose = require('mongoose')

const PlaceModelUZ = new mongoose.Schema(
    {
        img: {type: "string", required: true},
        title: {type: "string", required: true},
        descr: {type: "string", required: true},
        
        updated_at: {
            type: Date,
            default: Date.now()
        },
        created_at: {
            type: Date,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model('PlaceUZ', PlaceModelUZ)