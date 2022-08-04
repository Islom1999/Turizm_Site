
const Order = require('../model/orderModel')

const createOrder = async(req,res) => {
    try{
        const orderData = await Order.find()
        const { firstName, lastName, date, email, phone, address, peopleCount, country, amount } = req.body

        let number = 1    

        const oldNumber = orderData[orderData.length - 1].number

        if(Boolean(oldNumber)){
            number = parseInt(oldNumber) + 1
        }
        console.log(number)
    
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
            amount
        }

        console.log(newOrder)
        await Order.create(newOrder)

    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createOrder
}