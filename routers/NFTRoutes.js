const router = require('express').Router()
const nftObj = require('../controllers/NFT')
const imgUpload = require('../middleware/imgUpload')


// create nft post method
router.post('/nft/:ownerID', imgUpload.single('NFTImg') ,nftObj.createNft)




// get All Nfts 
router.post('/nft', nftObj.getAllNfts)


// exporting module
module.exports = router