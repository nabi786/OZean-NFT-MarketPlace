
const router = require('express').Router()
const UserObj = require('../controllers/profile')




// create profile
router.post('/profile', UserObj.createuser)



// update profile
router.patch('/profile', UserObj.updateProfile)


module.exports = router