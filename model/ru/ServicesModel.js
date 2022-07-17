const mongoose = require('mongoose')

const ServicesModelRU = new mongoose.Schema(
    [
        {
            title: {type: "string", required: true},
            img: {type: "string", required: true},
            cost:[ 
                {
                    content: {type: "string", required: true},
                    amount: {type: "string", required: true}
                }
            ],
            isLeft: {type: "boolean"},
        }
    ]
)

module.exports = mongoose.model('ServicesRU', ServicesModelRU)