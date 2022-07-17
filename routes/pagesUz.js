const {Router} = require('express')
const { 
    getHomePage,
    getAboutPage,
    getContactPage,
    getServicesPage,
    getOfferPage
} = require('../controllers/pagesUzControllers')

const router = Router()

router.get('/', getHomePage)
router.get('/about', getAboutPage)

router.get('/services', getServicesPage)
router.get('/services/:id', getOfferPage)

router.get('/contact', getContactPage)

//{{../url}}/services/{{_id}}

module.exports = router