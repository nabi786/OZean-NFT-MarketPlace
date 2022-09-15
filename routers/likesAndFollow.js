const router = require('express').Router()
const likesAndFollow = require('../controllers/likesAndFollow')

// Likes Model
router.post('/addlikes', likesAndFollow.addLikes)





// add Followers
router.post('/addFollower', likesAndFollow.addFollow)




module.exports = router