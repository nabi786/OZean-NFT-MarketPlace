const router = require("express").Router()
const collectionOBj = require('../controllers/collections') 
const imgUpload = require('../middleware/imgUpload')



// create collection post method
router.post('/collection/:ownerID',imgUpload.array('img', 10), collectionOBj.createCollection)






module.exports = router