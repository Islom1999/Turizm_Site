// UZ DATA MODELS REQUIRE
const Pages = require('../model/uz/PagesModel')
const Place = require('../model/uz/PlaceModel')
const Hotel = require('../model/uz/HotelModel')
const Services = require('../model/uz/ServicesModel')


const getHomePage = async(req,res) => {
    try{
        const PagesDB = await Pages.find().lean()
        const PlaceDB = await Place.find().lean()
        const HotelDB = await Hotel.find().lean()
        const ServicesDB = await Services.find().lean()

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
            langUZ: 'uz',
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
        const PagesDB = await Pages.find().lean()
        res.render('about', {
            url: process.env.URL + '/uz',
            Navbar: PagesDB[0].navbar,
            Footer: PagesDB[0].footer,
            langUZ: 'uz',

            AboutDB: PagesDB[0].about,
            statisDB: PagesDB[0].homePage.section.statis,
            videoDB: PagesDB[0].homePage.section.video
        })
    }catch(err){
        console.log(err)
    }
}
const getContactPage = async(req,res) => {
    try{
        const PagesDB = await Pages.find().lean()

        res.render('contact', {
            url: process.env.URL + '/uz',
            Navbar: PagesDB[0].navbar,
            Footer: PagesDB[0].footer,
            langUZ: 'uz',
            PagesDB: PagesDB[0].contact,

        })
    }catch(err){
        console.log(err)
    }
}
const getServicesPage = async(req,res) => {
    try{
        const PagesDB = await Pages.find().lean()
        const ServicesDB = await Services.find().lean()

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
            langUZ: 'uz',
            ServicesPage: PagesDB[0].servicesPage,
            ServicesDB
        })
    }catch(err){
        console.log(err)
    } 
}
const getOfferPage = async(req,res) => {
    try{
        const PagesDB = await Pages.find().lean()
        const ServicesDB = await Services.find({id: req.params.id}).lean()

        let amount = 0
        ServicesDB[0].cost.forEach(elem => {
            amount += parseFloat(elem.amount)
        })

        ServicesDB[0].allAmount = amount

        ServicesDB[0].btn = PagesDB[0].homePage.btns.learn

        ServicesDB[0].content = {
            cost: PagesDB[0].servicesPage.cost,
            amount: PagesDB[0].servicesPage.amount
        }

        res.render('offer', {
            url: process.env.URL + '/uz',
            Navbar: PagesDB[0].navbar,
            Footer: PagesDB[0].footer,
            langUZ: 'uz',
            ServicesDB: ServicesDB[0],
            slider: PagesDB[0].offer.slider
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