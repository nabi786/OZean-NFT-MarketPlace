const models = require('../models/model')
const cloudinary = require('../config/cloudinary')
const path = require('path')




// create NFT post method (will change according to requirments)
const createNft = async (req, res) => {
    try {

        const filterNft = await models.nfts.findOne({ tokenAddress: { '$regex': '^' + req.body.tokenAddress + '$', '$options': 'i' }, tokenID: { '$regex': "^" + req.body.tokenID + '$', "$options": "i" } })

        if (filterNft) {
            res.status(500).json({success : false, msg : "nft already created"})
        } else {

            var nftImg = '';

            if(req.file){
                nftImg = await cloudinary.v2.uploader.upload(req.file.path)
                nftImg = nftImg.secure_url
            }

            const newNft = models.nfts({

                tokenAddress: req.body.tokenAddress,
                tokenID: req.body.tokenID,
                chainID: req.body.chainID,
                tokenUri: req.body.tokenUri,
                Price: req.body.Price,
                owner: req.params.ownerID,
                NFTImg: nftImg,
                NftTitle: req.body.NftTitle,
                description: req.body.description,
                category: req.body.category,
                isOnSell: req.body.isOnSell,

            })

            // getting Owner and adding Nft ID to his model
            var currentUser = await models.userModel.findOne({_id : req.params.ownerID})
            currentUser.Nfts.push(newNft._id)

            await newNft.save()
            currentUser.save()
            res.status(200).json({ success: true, message: 'nft created' })
        }
    } catch (error) {
        res.status(500).json({ success: false, msg: "server error", error: error })
    }
}





// getAll Nfts (with Pagination)
const getAllNfts = async (req,res)=>{

    try{

        if(!req.body.page || !req.body.size){
            res.status(200).json({success : false, msg : 'page and size are necessary'})
        }else{
            const pageNum = req.body.page
            const ItemPerPage = req.body.size

            // gettting all Nfts
            var allNfts = await models.nfts.find()
           
        //    console.log('items length', allNfts.length)
           var totalPages = Math.ceil(allNfts.length/ ItemPerPage)
            
           allNfts = await models.nfts.find().skip((ItemPerPage*pageNum) - ItemPerPage).limit(ItemPerPage)


            res.status(200).json({success : true, data : allNfts, totalPage : totalPages})
        }



    }catch(err){
        
        res.status(500).json({success : false, msg : "server error", err : err})
    }
}







// get Single NFTs
const getSingleNft = async(req,res)=>{
    try {

        if(!req.body.tokenAddress || !req.body.tokenID){
            res.status(200).json({msg : "inalid payload"})
        }else{
            
            var currentNft = await models.nfts.findOne({tokenAddress : {'$regex' : "^"+req.body.tokenAddress+'$', "$options" : 'i'}, tokenID : req.body.tokenID})
            
            if(!currentNft){
                res.status(404).json({msg : 'data not found'})
            }else{

                currentNft.Views = currentNft.Views+1
                currentNft.save()
                res.status(200).json({success : true, data : currentNft})
            }
        }

        
    } catch (error) {
        res.status(500).json({success : false, msg : "server error"})
    }
}










// creating OBject
const nftObj = {
    createNft: createNft,
    getAllNfts : getAllNfts,
    getSingleNft : getSingleNft
}

// exporting whole object using module the export
module.exports = nftObj