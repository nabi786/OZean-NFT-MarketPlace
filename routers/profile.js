
const router = require('express').Router()
const UserObj = require('../controllers/profile')
const imgUpload = require('../middleware/imgUpload')

// create profile
router.post('/profile',imgUpload.array('userImgs', 2), UserObj.createuser)

// update profile
router.patch('/profile', UserObj.updateProfile)

// delete Profile
router.delete('/profile', UserObj.dltProfile)


// get single profile
router.get('/profile/:walletAddress', UserObj.getSingleUser)



module.exports = router