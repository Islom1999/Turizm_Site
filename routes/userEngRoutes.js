const { Router } = require('express')

const {
    registerUser,
    loginUser,
    getUserPage,
    outUser
} = require('../controllers/users/userEngControllers')

const router = Router()

router.get('/dashboard', getUserPage)

router.post('/register', registerUser)
router.post('/login', loginUser)

router.post('/logout', outUser)

module.exports = router
