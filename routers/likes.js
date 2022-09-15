const router = require('express').Router()
const likes = require('../controllers/likes')

// Likes Model
router.post('/addlikes', likes.addLikes)




module.exports = router