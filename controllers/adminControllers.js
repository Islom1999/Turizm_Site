
const getAdminPage = async(req,res) => {
    try{
        res.render('admin/dash', {
            admin: 'admin',
            url: process.env.URL,
            pageDash: 'dash'
        })
    }
    catch(err){
        console.log(err)
    }
}

const getHomePage = async(req,res) => {
    try{
        res.render('admin/adminHome', {
            admin: 'admin',
            url: process.env.URL,
            pageHome: 'home'
        })
    }
    catch(err){
        console.log(err)
    }
}

const getAboutPage = async(req,res) => {
    try{
        res.render('admin/adminAbout', {
            admin: 'admin',
            url: process.env.URL,
            pageAbout: 'about'
        })
    }
    catch(err){
        console.log(err)
    }
}

const getServicesPage = async(req,res) => {
    try{
        res.render('admin/adminServices', {
            admin: 'admin',
            url: process.env.URL,
            pageServices: 'about'
        })
    }
    catch(err){
        console.log(err)
    }
}

const getContactPage = async(req,res) => {
    try{
        res.render('admin/adminServices', {
            admin: 'admin',
            url: process.env.URL,
            pageContact: 'contact'
        })
    }
    catch(err){
        console.log(err)
    }
}

const getOfferPage = async(req,res) => {
    try{
        res.render('admin/adminOffer', {
            admin: 'admin',
            url: process.env.URL,
            pageContact: 'offer'
        })
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    getAdminPage,
    getHomePage,
    getAboutPage,
    getServicesPage,
    getContactPage,
    getOfferPage
}