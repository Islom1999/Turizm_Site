const {Router} = require('express')
const { 
    getHomePage,
    getAboutPage,
    getContactPage,
    getServicesPage,
    getOfferPage
} = require('../controllers/pagesControllers')

const router = Router()

router.get('/', getHomePage)
router.get('/about', getAboutPage)
router.get('/services', getServicesPage)
router.get('/contact', getContactPage)
router.get('/offer', getOfferPage)

module.exports = router