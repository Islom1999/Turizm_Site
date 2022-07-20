const { Router } = require('express')
const upload = require('../utils/fileUploads.js')

const {
    getAdminPage,
    getHomePage,
    getAboutPage,
    getServicesPage,
    getContactPage,
    getOfferPage
} = require('../controllers/admin/adminControllers')

const {
    addServices,
    removeServices
} = require('../controllers/admin/adminServices')

const router = Router()   

// "/" => "url + /admin"
router.get('/', getAdminPage)
router.get('/home', getHomePage)
router.get('/about', getAboutPage)
router.get('/services', getServicesPage)
router.post('/services/servis/add',  upload.single('image'), addServices)
router.post('/services/:id/remove', removeServices)

router.get('/services/:id', getOfferPage)
//admin/services/servis/add

router.get('/contact', getContactPage)

module.exports = router


