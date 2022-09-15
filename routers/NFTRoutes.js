const router = require('express').Router()
const nftObj = require('../controllers/NFT')
const imgUpload = require('../middleware/imgUpload')


// create nft post method
router.post('/createNft/:ownerID', imgUpload.single('NFTImg') ,nftObj.createNft)

// get All Nfts 
router.post('/allNft', nftObj.getAllNfts)

// getSingle nft
router.post('/singleNft', nftObj.getSingleNft)



// exporting module
module.exports = router