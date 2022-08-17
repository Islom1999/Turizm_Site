const {PaymeIntegrator, PaymeIntegratorType} = require('payme-merchant-integrator');
const {Router} = require('express')

const OrderModel = require('../../model/orderModel')

const router = Router()

const isAccountExist = async (account) => {
    const order = await OrderModel.findOne({number: +account.order_id});
    if (!order) return false;
    if (order.paid_at) return false;
    return true; 
}

const getPayingCost = async (account) => {
    const order = await OrderModel.findOne({number: +account.order_id});
    return order.amount;
}

const markAsPaid = async (account, amount) => {
    const order = await OrderModel.findOne({number: +account.order_id});
    // Order mark as paid here
    console.log(`Order Paid ${order.number} amount -> ${amount}`)
    await OrderModel.updateOne({_id: order._id}, {$set: {paid_at: new Date()}})
}

const paymeIntegrator = new PaymeIntegrator({
    db_str: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/turizmSite',
    collection: `payme_transactions`,
    type: PaymeIntegratorType.ONE_TIME,
    password: process.env.PAYME_PASSWORD || '3x8TEQ4qbRx6iGoG3hGEnihdH#h?O4pm055Y',
    isAccountExist,
    markAsPaid,
    getPayingCost,
    canCancel: async () => false,
    markAsCancel: () => {},
})

const authenticate = async (request, reply, next) => {
    await paymeIntegrator.authenticate(request, reply, next);
}

const handler = async (request, reply) => {
    return await paymeIntegrator.handler(request, reply);
}

router.post('/payme', authenticate, handler)

module.exports = router