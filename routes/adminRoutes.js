const { Router } = require('express')
// const upload = require('../utils/fileUploads.js')

const {
    getAdminPage,
    getHomePage,
    getAboutPage,
    getServicesPage,
    getContactPage,
    getOfferPage
} = require('../controllers/adminControllers')

const router = Router()   

// "/" => "url + /admin"
router.get('/', getAdminPage)
router.get('/home', getHomePage)
router.get('/about', getAboutPage)
router.get('/services', getServicesPage)
router.get('/contact', getContactPage)
router.get('/offer', getOfferPage)

module.exports = router


