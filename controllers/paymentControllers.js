
const Order = require('../model/orderModel')

const createOrder = async (req, res) => {
    try {
        const orderData = await Order.find()
        const {firstName, lastName, date, email, phone, address, peopleCount, country, amount} = req.body
        let number = 1
        const oldNumber = orderData[orderData.length - 1]?.number

        console.log(req.body)

        if (Boolean(oldNumber)) {
            number = parseInt(oldNumber) + 1
        }
        const newOrder = {
            number,
            firstName,
            lastName,
            date,
            email,
            phone,
            address,
            peopleCount,
            country,
            amount,
            created_at: new Date()
        }

        const result = await Order.create(newOrder)
        const link = Buffer.from(`m=${process.env.MERCHANT_ID};ac.order_id=${result.number};a=${result.amount}`).toString("base64")
        const payme_link = `https://checkout.paycom.uz/${link}`
        res.redirect(payme_link)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    createOrder
}