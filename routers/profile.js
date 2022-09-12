
const router = require('express').Router()
const UserObj = require('../controllers/profile')
const imageUpload = require('../middleware/imgUpload')



// create profile
router.post('/profile', UserObj.createuser)



// update profile
router.patch('/profile', UserObj.updateProfile)


module.exports = router