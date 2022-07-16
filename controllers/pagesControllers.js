const PagesUZ = require('../model/PagesModelUZ')


const getHomePage = async(req,res) => {
    const HomeDB = await PagesUZ.find().lean()

    res.render('home', {
        url: process.env.URL + '/uz',
        HomeDB: HomeDB[0].homePage,
        Navbar: HomeDB[0].navbar,
        Footer: HomeDB[0].footer
    })
}
const getAboutPage = async(req,res) => {
    try{
        res.render('about', {
            url: process.env.URL + '/uz',
        })
    }catch(err){
        console.log(err)
    }
}
const getContactPage = async(req,res) => {
    try{
        res.render('contact', {
            url: process.env.URL + '/uz' 
        })
    }catch(err){
        console.log(err)
    }
}
const getServicesPage = async(req,res) => {
    try{
        res.render('services', {
            url: process.env.URL + '/uz',
        })
    }catch(err){
        console.log(err)
    }
}
const getOfferPage = async(req,res) => {
    try{
        res.render('offer', {
            url: process.env.URL + '/uz',
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