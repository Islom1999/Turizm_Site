const PagesUZ = require('../model/PagesModelUZ')
const PlaceUZ = require('../model/PlaceModelUZ')
const HotelUZ = require('../model/HotelModelUZ')
const ServicesUZ = require('../model/ServicesModelUZ')


const getHomePage = async(req,res) => {
    try{
        const PagesDB = await PagesUZ.find().lean()
        const PlaceDB = await PlaceUZ.find().lean()
        const HotelDB = await HotelUZ.find().lean()
        const ServicesDB = await ServicesUZ.find().lean()

        let AmountLeft = 0
        ServicesDB[0].cost.forEach(elem => {
            AmountLeft += parseFloat(elem.amount)
        })
        let AmountRight = 0
        ServicesDB[1].cost.forEach(elem => {
            AmountRight += parseFloat(elem.amount)
        })

        res.render('home', {
            url: process.env.URL + '/uz',
            Navbar: PagesDB[0].navbar,
            Footer: PagesDB[0].footer,
            HomeDB: PagesDB[0].homePage,

            PlaceDefaultDB: PlaceDB.slice(0, 4),
            PlaceLoadDB: PlaceDB.slice(4, PlaceDB.length),

            HotelDefaultDB: HotelDB.slice(0, 4),
            HotelLoadDB: HotelDB.slice(4, HotelDB.length),

            ServicesPage: PagesDB[0].servicesPage,

            ServicesLeftDB: ServicesDB[0],
            AmountLeft,
            ServicesRightDB: ServicesDB[1],
            AmountRight
        })
    }catch(err){
        console.log(err)
    }
}
const getAboutPage = async(req,res) => {
    try{
        const PagesDB = await PagesUZ.find().lean()
        res.render('about', {
            url: process.env.URL + '/uz',
            Navbar: PagesDB[0].navbar,
            Footer: PagesDB[0].footer
        })
    }catch(err){
        console.log(err)
    }
}
const getContactPage = async(req,res) => {
    try{
        const PagesDB = await PagesUZ.find().lean()
        res.render('contact', {
            url: process.env.URL + '/uz',
            Navbar: PagesDB[0].navbar,
            Footer: PagesDB[0].footer 
        })
    }catch(err){
        console.log(err)
    }
}
const getServicesPage = async(req,res) => {
    try{
        const PagesDB = await PagesUZ.find().lean()
        const ServicesDB = await ServicesUZ.find().lean()

        ServicesDB.forEach(elem => {
            let amount = 0
            elem.cost.forEach(cost => {
                amount += parseFloat(cost.amount)
            })
            elem.allAmount = amount
            elem.btn = PagesDB[0].homePage.btns.learn
            elem.content = {
                cost: PagesDB[0].servicesPage.cost,
                amount: PagesDB[0].servicesPage.amount,
            }
        })

        res.render('services', {
            url: process.env.URL + '/uz',
            Navbar: PagesDB[0].navbar,
            Footer: PagesDB[0].footer,
            ServicesPage: PagesDB[0].servicesPage,
            ServicesDB
        })
    }catch(err){
        console.log(err)
    }
}
const getOfferPage = async(req,res) => {
    try{
        const PagesDB = await PagesUZ.find().lean()
        res.render('offer', {
            url: process.env.URL + '/uz',
            Navbar: PagesDB[0].navbar,
            Footer: PagesDB[0].footer
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getHomePage,
    getAboutPage,
    getContactPage,
    getServicesPage,
    getOfferPage
}